"use client"
import { useState } from "react";
import { Link, Button, Avatar, Tabs } from "@heroui/react";
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
        <div className=" fixed absolute top-0 z-50 w-full py-5">
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
                            <Image src={'https://i.ibb.co.com/0jqqw095/Screenshot-2026-05-14-at-8-05-31-PM-removebg-preview.png'} height={150} width={150} alt="logo"></Image>
                        </div>

                    </div>

                    <div className="w-full max-w-[730px] px-2">

                        <Tabs 
                        variant="secondary"
                         selectedKey={pathname} className="">
                            <Tabs.ListContainer>
                                <Tabs.List aria-label="Tabs with disabled" className="bg-white/50 uppercase  rounded-full py-2 border border-white/80">
                                    <Tabs.Tab id="/" className="">
                                        <Link className={pathname==='/'?'py-2 no-underline text-[#ffb300] font-bold text-[12px]':'py-2 no-underline text-neutral-700 font-bold text-[12px]'}  href={'/'}>Home</Link>
                                        <Tabs.Indicator className="bg-[#ffb300]"/>
                                    </Tabs.Tab>
                                    <Tabs.Tab id="/profile" className="px-0">
                                        <Link className={pathname==='/profile'?'py-2 no-underline text-[#ffb300] font-bold text-[12px]':'py-2 no-underline text-neutral-700  font-bold text-[12px]'} href={'/profile'}>Profile</Link>
                                         <Tabs.Indicator className="bg-[#ffb300]"/>
                                    </Tabs.Tab>
                                    <Tabs.Tab id="/destination" className="px-0">
                                        <Link className={pathname==='/destination'?'py-2 no-underline text-[#ffb300] font-bold text-[12px]':'py-2 no-underline text-neutral-700 text-[12px] font-bold'} href={'/destination'}>Destinations</Link>
                                         <Tabs.Indicator className="bg-[#ffb300]"/>
                                    </Tabs.Tab>
                                    <Tabs.Tab id="/mybooking" className="px-0">
                                        <Link className={pathname==='/mybooking'?'py-2 no-underline text-[#ffb300] font-bold text-[12px]':'py-2 no-underline text-neutral-700 font-bold text-[12px]'} href={'/mybooking'}>My Bookings</Link>
                                         <Tabs.Indicator className="bg-[#ffb300]"/>
                                    </Tabs.Tab>
                                    <Tabs.Tab id="/add-destination" className="px-0 pr-10">
                                        <Link className={pathname==='/add-destination'?'py-2 text-[12px] no-underline text-[#ffb300] font-bold':'py-2 no-underline text-neutral-700 font-bold text-[12px]'} href={'/add-destination'}>Add Destinations</Link>
                                         <Tabs.Indicator className="bg-[#ffb300]"/>
                                    </Tabs.Tab>
                                </Tabs.List>
                            </Tabs.ListContainer>
                        </Tabs>
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
                                <li > <Button className={'rounded-md text-white'} variant="outline" onClick={() => authClient.signOut()}>SingOut</Button> </li>
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