"use client"
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";


export function Nabvar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
     <div>
           <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
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
                        <ul className="hidden md:flex gap-2 items-center">
                            <li><Link className={'no-underline'} href="/">Home</Link></li>
                            <li><Link className={'no-underline'} href="/destinations">Destinations</Link></li>
                            <li><Link className={'no-underline'} href="/mybookings">My Bookings</Link></li>
                            <li><Link className={'no-underline'} href="#">Admin</Link></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <Image src={'/assets/Wanderlast.png'} height={150} width={150} alt="logo"></Image>
                </div>


                <ul className=" items-center gap-4 flex">
                    <li>
                        <Link className={'no-underline'} href="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link className={'no-underline'} href="/login">Login</Link>
                    </li>
                    <li>
                        <Link className={'no-underline'} href="/singup">Sing Up</Link>
                    </li>
                </ul>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col gap-2 p-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/destinations">Destinations</Link></li>
                        <li><Link href="/mybookings">My Bookings</Link></li>
                        <li><Link href="#">Admin</Link></li>
                    </ul>
                </div>
            )}
        </nav>
     </div>
    );
}