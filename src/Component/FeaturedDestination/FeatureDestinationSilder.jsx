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

    const [sliceDestination, setSilceDestination] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5001/destination`)
            .then(res => res.json())
            .then(data => setSilceDestination(data.slice(0, 5)))
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
                ? "bg-cyan-500 border-cyan-500 text-white" // Active styles
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
                    <h1 className="font-bold text-2xl">Featured Destinations</h1>
                    <p className="text-neutral-500">Handpicked travel experiences for the adventure seekers</p>
                </div>
                <Link href={'/destination'}>
                    <Button variant="outline" className={'rounded-none text-cyan-500 border-cyan-500'}>ALL DESTINATIONS <ArrowRight></ArrowRight></Button></Link>
            </div >
            <Slider {...settings} className="">
                {
                    sliceDestination.map(destination => <div key={destination._id} className="max-w-xl pr-4 mb-7 mt-4">
                        <Card variant="" className={'rounded-md bg-white/40 border-white/70  border'}>
                            <Image src={destination.imageUrl} className='w-full object-cover rounded-md h-[260px]' height={260} width={220} alt={destination.destinationName}></Image>
                            <span className='flex items-center gap-1 text-neutral-500'><SlLocationPin /> {destination.country}</span>
                            <Card.Header className='flex flex-row items-center  justify-between'>
                                <div className=' space-y-2'>
                                    <Card.Title className='text-[1.25rem]'>{destination.destinationName}</Card.Title>
                                    <Card.Description>{destination.duration}</Card.Description>
                                    <Link href={`/destination/${destination._id}`} className='flex items-center gap-1 underline text-cyan-500'>
                                        Book Now
                                        <ArrowUpRight />
                                    </Link>
                                </div>
                                <h3 className='text-[1.10rem]'>${destination.price}/Person</h3>
                            </Card.Header>
                        </Card>
                    </div>)
                }
            </Slider>
        </div>
    );
}

export default AppendDots;