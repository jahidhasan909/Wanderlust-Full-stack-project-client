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
            <Card variant="" className={'rounded-md bg-white/40 border-white/70  border'}>
                <Image src={imageUrl} className='w-full object-cover rounded-md h-[230px]' height={230} width={250} alt={destinationName}></Image>
                <span className='flex items-center gap-1 text-neutral-500'><SlLocationPin /> {country}</span>
                <Card.Header className='flex flex-row items-center  justify-between'>
                    <div className=' space-y-2'>
                        <Card.Title className='text-[1.25rem]'>{destinationName}</Card.Title>
                        <Card.Description>{duration}</Card.Description>
                        <Link href={`/destination/${_id}`} className='flex items-center gap-1 underline text-cyan-500'>
                            Book Now
                            <ArrowUpRight />
                        </Link>
                    </div>
                    <h3 className='text-[1.10rem]'>${price}/Person</h3>
                </Card.Header>
            </Card>
        </div>
    );
};

export default DestinationCard;