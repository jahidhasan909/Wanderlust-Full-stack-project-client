'use client'
import { Separator } from "@heroui/react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
    return (
        <div className=" text-white  flex justify-between flex-col items-center  gap-5 relative overflow-hidden">
            <Image src={'https://images.unsplash.com/photo-1502602898657-3e91760cbb34'} height={900} width={1200} className="w-full h-[900px]  object-cover relative overflow-hidden" alt="banner"></Image>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/75"></div>
            <div className=" absolute top-1/2 left-1/5 -translate-1/2">
                <div className="p-10  flex justify-center flex-col items-center gap-3.5 flex-1">
                    <div>
                        <h1 className="text-7xl">
                            Discover Your <br /> Next Adventure
                        </h1>


                        <TypeAnimation
                            sequence={[

                                'Explore breathtaking destinations',
                                1000,
                                'and create unforgettable memories',
                                1000,
                                'with our curated travel experiences.',
                                1000,
                            ]}
                            wrapper="p"
                            speed={50}
                            className=" text-2xl"
                            repeat={Infinity}
                        />
                    </div>
                    <div className="flex gap-5 w-full">
                        <button className="uppercase bg-linear-to-r from-[#cfa36d] to-[#be8d1f] px-5 py-3 cursor-pointer">
                            Explore Now
                        </button>

                        <button className="uppercase px-5 py-3 bg-white/50 cursor-pointer">
                            View Destination
                        </button>
                    </div>
                </div>

            </div>
            <div className=" bg-white/30 flex justify-between gap-5 w-full items-center absolute bottom-0">
                <div className="px-3">
                    <h3 className="text-sm">Location</h3>
                    <p className="text-xs">Address, City or Zip</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm">Date/Duration</h3>
                    <p className="text-xs">Anytime/3 Days</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm">Budget</h3>
                    <p className="text-xs">$0-$3000</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm">People</h3>
                    <p className="text-xs">5-10</p>
                </div>



                <div className="bg-linear-to-r from-[#cfa36d] to-[#be8d1f] py-2 px-4">
                    <h3>Search</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;