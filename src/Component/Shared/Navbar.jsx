"use client"
import { useState } from "react";
import { Link, Button, Avatar, Spinner } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";



export function Nabvar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    const { data, isPending } = authClient.useSession()

    const user = data?.user

    if (isPending) {
        return <div className="flex justify-center items-center bg-[#272738]"><Spinner color="warning" size="lg"/></div>
    }



    return (
        <div className=" fixed absolute top-0 z-50 w-full py-5">
            <nav className=" container mx-auto ">
                <header className="flex h-16 items-center justify-between ">
                    <div className="flex items-center gap-4">
                        <button
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="sr-only">Menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>

                        <div>
                            <Image src={'https://i.ibb.co.com/fVw728gG/wanderlust-b9876e-removebg-preview-Picsart-Ai-Image-Enhancer.png'} className="h-[35px] w-full" height={150} width={240} alt="logo"></Image>
                        </div>

                    </div>




                    <div className="bg-[#272738af] gap-7 hidden md:flex px-17 uppercase rounded-full py-1 border border-white/30">


                        <div className="">
                            <Link className={pathname === '/' ? 'py-2  text-[#b9876e] font-bold text-[12px]' : 'py-2 no-underline text-neutral-400 font-semibold text-[12px]'} href={'/'}>Home</Link>

                        </div>
                        <div className="">
                            <Link className={pathname === '/profile' ? 'py-2 text-[#b9876e] font-bold text-[12px]' : 'py-2 no-underline text-neutral-400  font-semibold text-[12px]'} href={'/profile'}>Profile</Link>

                        </div>
                        <div className="">

                            <Link className={pathname === '/destination' ? 'py-2  text-[#b9876e] font-bold text-[12px]' : 'py-2 no-underline text-neutral-400 text-[12px] font-semibold'} href={'/destination'}>Destinations</Link>

                        </div>
                        <div className="">
                            <Link className={pathname === '/mybooking' ? 'py-2  text-[#b9876e] font-bold text-[12px]' : 'py-2 no-underline text-neutral-400 font-semibold text-[12px]'} href={'/mybooking'}>My Bookings</Link>

                        </div>
                        <div className="">
                            <Link className={pathname === '/add-destination' ? 'py-2 text-[12px]  text-[#b9876e] font-bold' : 'py-2 no-underline text-neutral-400 font-semibold text-[12px]'} href={'/add-destination'}>Add Destinations</Link>

                        </div>
                    </div>






                    <ul className=" items-center gap-3 flex">


                        {
                            user ? <ul className="flex items-center gap-2">
                                <Link href="/profile">
                                    <Avatar>
                                        <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                                        <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
                                    </Avatar>
                                </Link>
                                <li > <Button className={'rounded-md text-[#b9876e] border-[#b9876e]'} variant="outline" onClick={() => authClient.signOut()}>SingOut</Button> </li>
                            </ul> :
                                <ul className="flex gap-2">
                                    <li>
                                        <Link className={'no-underline'} href="/login"><Button className={'rounded-md text-[#b9876e] border-[#b9876e]'} variant="outline">Login</Button></Link>
                                    </li>
                                    <li>
                                        <Link className={'no-underline'} href="/singup"><Button className={'rounded-md text-[#b9876e] border-[#b9876e]'} variant="outline">Sing Up</Button></Link>
                                    </li>
                                </ul>
                        }
                    </ul>
                </header>
                {isMenuOpen && (
                    <div className="border-t border-separator md:hidden">
                        <ul className="flex flex-col gap-2 p-4">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/destination">Destinations</Link></li>
                            <li><Link href="/mybookings">My Bookings</Link></li>
                            <li><Link className={'no-underline'} href="/add-destination">Add Destinations</Link></li>
                        </ul>
                    </div>
                )}
            </nav>
        </div>
    );
}