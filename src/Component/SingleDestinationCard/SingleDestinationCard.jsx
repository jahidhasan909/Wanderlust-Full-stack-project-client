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
        <div className='my-10'>
            <div className='flex justify-between items-center p-1 my-4'>
                <Link href={'/destination'} className='flex items-center gap-1 underline text-neutral-600'>
                    <ArrowUpLeft></ArrowUpLeft>
                    Back to Destinations
                </Link>
                <div className='flex items-center gap-2'>
                    <AlertDelete data={data}></AlertDelete>
                    <EditModal data={data}></EditModal>
                </div>
            </div>
            <Card variant="" className={'rounded-md'}>
                <Image src={imageUrl} className='w-full rounded-md h-[500px] object-cover' height={500} width={1000} alt={destinationName}></Image>
                <span className='flex items-center gap-1 text-neutral-500 mt-3'><SlLocationPin /> {country}</span>
                <Card.Header className='grid grid-cols-12 gap-4  justify-between'>
                    <div className=' space-y-2 col-span-10 mt-4'>
                        <Card.Title className='text-2xl font-semibold'>{destinationName}</Card.Title>
                        <Card.Description>{duration}</Card.Description>

                        <h2 className='text-2xl font-semibold'>Overview</h2>
                        <p className='text-neutral-500'>{description}</p>
                    </div>
                    
                    <BookingCard className={''} destination={data}></BookingCard>
                </Card.Header>
            </Card>
        </div>
    );
};

export default SingleDestinationCard;