"use client"
import { useState } from "react";
import { Link, Button, Avatar } from "@heroui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";


export function Nabvar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()

    const { data, isPending } = authClient.useSession()

    const user = data?.user

    if (isPending) {
        return <div>Loading...</div>
    }



    return (
        <div className="sticky top-0 z-40 w-full border-b border-separator bg-white/60 backdrop-blur-lg">
            <nav className=" container mx-auto ">
                <header className="flex h-16 items-center justify-between px-6">
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
                            <ul className="hidden md:flex gap-3 items-center">
                                <li><Link className={pathname === '/' ? 'underline text-cyan-500 font-bold' : 'no-underline'} href="/">Home</Link></li>
                                <li><Link className={pathname === '/destination' ? 'underline text-cyan-500 font-bold' : 'no-underline'} href="/destination">Destinations</Link></li>
                                <li><Link className={pathname === '/mybooking' ? 'underline text-cyan-500 font-bold' : 'no-underline'} href="/mybooking">My Bookings</Link></li>
                                <li><Link className={pathname === '/add-destination' ? 'underline text-cyan-500 font-bold' : 'no-underline'} href="/add-destination">Add Destinations</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <Image src={'/assets/Wanderlast.png'} height={150} width={150} alt="logo"></Image>
                    </div>


                    <ul className=" items-center gap-3 flex">
                        <li>
                            <Link className={'no-underline'} href="/profile">Profile</Link>
                        </li>

                        {
                            user ? <ul className="flex items-center gap-2">
                               <Link href="/profile">
                                <Avatar>
                                    <Avatar.Image referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                                    <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
                                </Avatar>
                               </Link>
                                <li><Button variant="outline" className={'rounded-md'} onClick={() => authClient.signOut()}>Sing Out</Button> </li>
                            </ul> :
                                <ul className="flex gap-2">
                                    <li>
                                        <Link className={'no-underline'} href="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link className={'no-underline'} href="/singup">Sing Up</Link>
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