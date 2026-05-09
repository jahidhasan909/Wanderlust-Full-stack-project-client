"use client"
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { SlLocationPin } from 'react-icons/sl';
import { MdEditLocationAlt } from "react-icons/md";
import Link from 'next/link';
import { ArrowShapeTurnUpLeft, ArrowUpLeft, ArrowUpRightFromSquare } from '@gravity-ui/icons';
import EditModal from '../EditModal/EditModal';

const SingleDestinationCard = ({ data }) => {
    const { destinationName, country, price, duration, departureDate, imageUrl, description } = data
    return (
        <div className='my-10'>
            <div className='flex justify-between items-center p-1 my-4'>
                <Link href={'/destination'} className='flex items-center gap-1 underline text-neutral-600'>
                    <ArrowUpLeft></ArrowUpLeft>
                    Back to Destinations
                </Link>
                <div>
                 <EditModal data={data}></EditModal>
                </div>
            </div>
            <Card variant="" className={'rounded-md'}>
                <Image src={imageUrl} className='w-full rounded-md h-[500px] object-cover' height={200} width={200} alt={destinationName}></Image>
                <span className='flex items-center gap-1 text-neutral-500 mt-3'><SlLocationPin /> {country}</span>
                <Card.Header className='grid grid-cols-12 gap-4  justify-between'>
                    <div className=' space-y-2 col-span-10 mt-4'>
                        <Card.Title className='text-2xl font-semibold'>{destinationName}</Card.Title>
                        <Card.Description>{duration}</Card.Description>

                        <h2 className='text-2xl font-semibold'>Overview</h2>
                        <p className='text-neutral-500'>{description}</p>
                    </div>
                    <Card className=' rounded-md  col-span-2'>
                        <div>
                            <p className='text-neutral-500'>Starting from</p>
                            <h3 className='text-xl text-cyan-500'>${price}</h3>
                            <p className='text-neutral-500'>per person</p>
                        </div>
                        <span className='border border-gray-300 text-center p-0.5 bg-gray-300 rounded-md mt-3'>{departureDate}</span>
                        <Button className={' rounded-md bg-cyan-500 text-white w-full'} variant='outline'>Book Now <FaArrowRightLong /></Button>
                        <ul className=' list-disc text-[13px] text-neutral-500'>
                            <li>Free cancellation up to 7 days</li>
                            <li>Travel insurance included</li>
                            <li>24/7 customer support</li>
                        </ul>
                    </Card>
                </Card.Header>
            </Card>
        </div>
    );
};

export default SingleDestinationCard;