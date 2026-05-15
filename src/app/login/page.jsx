"use client";
import { FcGoogle } from "react-icons/fc";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


const LogInPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())

        const { data, error } = await authClient.signIn.email({

            email: user.email,
            password: user.password,
            // callbackURL:''

        })

        if (data) {
            toast.success('Login successful')
            redirect('/')
        }
        if (error) {
            toast.warning(error.message)
        }

    }

    const handleGoogleLogin = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }




    return (
        <div className="max-w-2xl mx-auto mt-35 mb-20 ">
            <h1 className="text-center text-3xl font-bold text-white">Welcome Back</h1>
            <p className="text-center text-neutral-400">Resume your adventure with Wanderlust</p>
            <Card className=" rounded-md my-3 bg-[#272738af] border-white/20 border">

                <Form className="max-w-2xl flex flex-col gap-4 p-2 " onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-white">Email</Label>
                        <Input className={'rounded-md bg-[#272738ee] border-white/20 border'} placeholder="john@example.com" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            return null;
                        }}
                    >
                        <Label className="text-white">Password</Label>
                        <Input className={'rounded-md  bg-[#272738ee] border-white/20 border'} placeholder="Enter your password" />
                        <FieldError />
                    </TextField>

                    <Button type="submit" variant="outline" className={'bg-linear-to-r from-[#b38b6d] to-[#af8068] rounded-md w-full text-white'}>
                        Log In
                    </Button>

                </Form>
                <div className="flex justify-center items-center gap-3 mx-2">
                    <Separator className="bg-white/20"/>
                    <div className=" whitespace-nowrap text-neutral-400">
                        Or continue with
                    </div>
                    <Separator className="bg-white/20"/>
                </div>
                <Button onClick={handleGoogleLogin} variant="outline" className={'w-full rounded-md text-white bg-[#272738af]  border-white/20'}>
                    <FcGoogle />
                    Log In With Google
                </Button>

                <span className="text-center text-neutral-400"><span>{"Don't have an account?"}</span> <Link href={'/singup'}><span className="text-[#b38b6d] font-semibold">Sign Up</span></Link></span>
            </Card>
        </div>
    );
};

export default LogInPage;