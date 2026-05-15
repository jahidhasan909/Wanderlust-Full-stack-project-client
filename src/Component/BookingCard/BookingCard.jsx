
'use client'
import { authClient } from '@/lib/auth-client';
import { Calendar } from '@gravity-ui/icons';
import { Button, Card, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { toast } from 'react-toastify';

const BookingCard = ({ destination }) => {
    const { price, destinationName, _id, imageUrl, country } = destination

    const { data } = authClient.useSession()

    const user = data?.user

    const [departureDate, setDepartureDate] = useState(null)


    const handleBook = async() => {
        const bookingData = {
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            destinationId: _id,
            destinationName,
            imageUrl,
            country,
            price,
            departureDate: new Date(departureDate)
        }

        const res=await fetch(`http://localhost:5001/booking`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookingData)
        })
        const data=res.json()
       
        if (data) {
           toast.success(`Mr/MST ${user?.name} your booking successful !`) 
        }
        
        
    }




    return (
        <div className='col-span-2'>
            <Card className=' rounded-md  bg-[#272738ee] border-white/20 border'>
                <div>
                    <p className='text-neutral-400'>Starting from</p>
                    <h3 className='text-xl text-[#b38b6d]'>${price}</h3>
                    <p className='text-neutral-400'>per person</p>
                </div>
                <DateField onChange={setDepartureDate} className="" name="date">
                    <Label className='text-white'>Departure Date</Label>
                    <DateField.Group className={'border bg-[#272738af] border-white/20  rounded-none'}>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        <DateField.Suffix>
                            <Calendar className="size-4 text-muted" />
                        </DateField.Suffix>
                    </DateField.Group>
                </DateField>
                <Button onClick={handleBook} className={' rounded-md bg-linear-to-r from-[#b38b6d] to-[#af8068] text-white w-full'} variant='outline'>Book Now <FaArrowRightLong /></Button>
                <ul className=' list-disc text-[13px] text-neutral-400'>
                    <li>Free cancellation up to 7 days</li>
                    <li>Travel insurance included</li>
                    <li>24/7 customer support</li>
                </ul>
            </Card>
        </div>
    );
};

export default BookingCard;