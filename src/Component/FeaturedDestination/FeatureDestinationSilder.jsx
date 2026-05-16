"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, BackwardStep, ChevronRight } from "@gravity-ui/icons";
import { SlLocationPin } from "react-icons/sl";











function AppendDots() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [featuredData,setFeaturedData]=useState([])
    useEffect(() => {
        fetch(`http://localhost:5001/featured`)
            .then(res => res.json())
            .then(data => setFeaturedData(data))
    }, [])




    const settings = {
        dots: true,
        infinite: false,
        speed: 500,

        slidesToShow: 2.5,

        centerMode: false,
        arrows: true,

        appendDots: (dots) => (
            <div style={{ marginTop: '20px' }}>
                <ul className="flex items-center justify-center gap-3 m-0 p-0">
                    {dots}
                </ul>
            </div>
        ),

beforeChange: (prev, next) => setCurrentSlide(next),

        customPaging: (i) => (
        <div
            className={`w-8 p-1.5 border rounded-sm transition-all duration-300 ${
                i === currentSlide 
                ? "bg-[#b38b6d] border-[#b38b6d] text-white" // Active styles
                : "border-neutral-500 text-neutral-500"    // Inactive styles
            }`}
        >
            {i + 1}
        </div>
    ),
    };

    return (
        <div className="my-25 max-w-11/13 mx-auto">
            <div className="flex justify-between">
                <div>
                    <h1 className="font-bold text-2xl text-white">Featured Destinations</h1>
                    <p className="text-neutral-400">Handpicked travel experiences for the adventure seekers</p>
                </div>
                <Link href={'/destination'}>
                    <Button variant="outline" className={'rounded-none text-[#b38b6d] border-[#b38b6d]'}>ALL DESTINATIONS <ArrowRight></ArrowRight></Button></Link>
            </div >
            <Slider {...settings} className="">
                {
                    featuredData.map(destination => <div key={destination._id} className="max-w-xl pr-4 mb-7 mt-4">
                        <Card variant="" className={'rounded-md bg-[#272738af] border border-white/20'}>
                            <Image src={destination.imageUrl} className='w-full object-cover rounded-md h-[260px]' height={260} width={220} alt={destination.destinationName}></Image>
                            <span className='flex items-center gap-1 text-neutral-400'><span className="text-[#b38b6d]"><SlLocationPin /></span> {destination.country}</span>
                            <Card.Header className='flex flex-row items-center  justify-between'>
                                <div className=' space-y-2'>
                                    <Card.Title className='text-[1.25rem] text-white'>{destination.destinationName}</Card.Title>
                                    <Card.Description className="text-gray-400">{destination.duration}</Card.Description>
                                    <Link href={`/destination/${destination._id}`} className='flex items-center gap-1 underline text-[#b38b6d]'>
                                        Book Now
                                        <ArrowUpRight />
                                    </Link>
                                </div>
                                <h3 className='text-[1.10rem] text-[#b38b6d]'>${destination.price}/Person</h3>
                            </Card.Header>
                        </Card>
                    </div>)
                }
            </Slider>
        </div>
    );
}

export default AppendDots;