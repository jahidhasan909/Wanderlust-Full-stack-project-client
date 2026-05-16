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
import { AlertDelete } from '../AlertDiloag/AlertDiloag';
import BookingCard from '../BookingCard/BookingCard';

const SingleDestinationCard = ({ data }) => {
    const { destinationName, country, price, duration, departureDate, imageUrl, description } = data
    return (
        <div className='mt-35 mb-20'>
            <div className='flex-col md:flex-row justify-between items-center p-1 my-4'>
                <Link href={'/destination'} className='flex items-center gap-1 underline text-neutral-400'>
                   <span className='text-[#b38b6d]'> <ArrowUpLeft></ArrowUpLeft> </span>
                    Back to Destinations
                </Link>
                <div className='flex items-center gap-2 pt-2 md:pt-0'>
                    <AlertDelete data={data}></AlertDelete>
                    <EditModal data={data}></EditModal>
                </div>
            </div>
            <Card variant="" className={'rounded-md bg-linear-to-r bg-[#272738ee] border-white/20 border'}>
                <Image src={imageUrl} className='w-full rounded-md h-[500px] object-cover' height={500} width={1000} alt={destinationName}></Image>
                <span className='flex items-center gap-1 text-neutral-400 mt-3'><span className='text-[#b38b6d]'><SlLocationPin /> </span> {country}</span>
                <Card.Header className='grid md:grid-cols-12 gap-4  justify-between'>
                    <div className=' space-y-2 col-span-10 mt-4'>
                        <Card.Title className='text-2xl font-semibold text-white'>{destinationName}</Card.Title>
                        <Card.Description className='text-gray-400'>{duration}</Card.Description>

                        <h2 className='text-2xl font-semibold text-white'>Overview</h2>
                        <p className='text-neutral-400'>{description}</p>
                    </div>
                    
                    <BookingCard className={''} destination={data}></BookingCard>
                </Card.Header>
            </Card>
        </div>
    );
};

export default SingleDestinationCard;