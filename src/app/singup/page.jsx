"use client";
import { FcGoogle } from "react-icons/fc";
import { Button, Card, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";


const SingupPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries())

        const { data,error } = await authClient.signUp.email({

            email: user.email,
            name: user.name,
            password: user.password,
            image: user.image,
            // callbackURL:''

        })

        if (data) {
            toast.success('SingUp Successful !')
            redirect('/login')
        }

        if (error) {
            toast.warning(error.message)
        }

    }

   const handleGoogleSingup = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }



    return (
        <div className="max-w-2xl mx-auto mt-35 mb-20 ">
            <h1 className="text-center text-3xl font-semibold">Create Account</h1>
            <p className="text-center text-neutral-500">Start your adventure with Wanderlust</p>
            <Card className=" rounded-md my-3">

                <Form className="max-w-2xl flex flex-col gap-4 p-2" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                    >
                        <Label>Name</Label>
                        <Input className={'rounded-md'} placeholder="Enter your name" />
                        <FieldError />
                    </TextField>
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                    >
                        <Label>Image Url</Label>
                        <Input className={'rounded-md'} placeholder="https//:.." />
                        <FieldError />
                    </TextField>



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
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
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
                        <Label>Password</Label>
                        <Input className={'rounded-md'} placeholder="Enter your password" />
                        
                        <FieldError />
                    </TextField>

                    <Button type="submit" variant="outline" className={'bg-linear-to-r from-[#cfa36d] to-[#be8d1f] rounded-md w-full text-white'}>
                        Create Account
                    </Button>

                </Form>
                <div className="flex justify-center items-center gap-3 mx-2">
                    <Separator />
                    <div className=" whitespace-nowrap text-neutral-500">
                        Or sign up with
                    </div>
                    <Separator />
                </div>
                <Button onClick={handleGoogleSingup} variant="outline" className={'w-full rounded-md'}>
                    <FcGoogle />
                    Sign Up With Google
                </Button>

                <span className="text-center text-neutral-500">Already have an account? <Link href={'/login'}><span className="text-[#d09c22] font-semibold">Log In</span></Link></span>
            </Card>
        </div>
    );
};

export default SingupPage;