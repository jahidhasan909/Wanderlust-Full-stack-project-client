import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowUpRight } from '@gravity-ui/icons';
import { SlLocationPin } from "react-icons/sl";

const DestinationCard = ({ destination }) => {






    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination



    return (
        <div>
            <Card variant="" className={'rounded-md  bg-[#272738ee] border-white/20 border'}>
                <Image src={imageUrl} className='w-full object-cover rounded-md h-[230px]' height={230} width={250} alt={destinationName}></Image>
                <span className='flex items-center gap-1 text-neutral-400'><span className='text-[#b38b6d]'><SlLocationPin /> </span> {country}</span>
                <Card.Header className='flex flex-row items-center  justify-between'>
                    <div className=' space-y-2'>
                        <Card.Title className='text-[1.25rem] text-white'>{destinationName}</Card.Title>
                        <Card.Description className='text-gray-400'>{duration}</Card.Description>
                        <Link href={`/destination/${_id}`} className='flex items-center gap-1 underline text-[#b38b6d]'>
                            Book Now
                            <ArrowUpRight />
                        </Link>
                    </div>
                    <h3 className='text-[1.10rem] text-[#b38b6d]'>${price}/Person</h3>
                </Card.Header>
            </Card>
        </div>
    );
};

export default DestinationCard;