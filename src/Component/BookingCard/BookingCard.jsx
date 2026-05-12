
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
            <Card className=' rounded-md  '>
                <div>
                    <p className='text-neutral-500'>Starting from</p>
                    <h3 className='text-xl text-cyan-500'>${price}</h3>
                    <p className='text-neutral-500'>per person</p>
                </div>
                <DateField onChange={setDepartureDate} className=" rounded-md" name="date">
                    <Label>Departure Date</Label>
                    <DateField.Group>
                        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                        <DateField.Suffix>
                            <Calendar className="size-4 text-muted" />
                        </DateField.Suffix>
                    </DateField.Group>
                </DateField>
                <Button onClick={handleBook} className={' rounded-md bg-cyan-500 text-white w-full'} variant='outline'>Book Now <FaArrowRightLong /></Button>
                <ul className=' list-disc text-[13px] text-neutral-500'>
                    <li>Free cancellation up to 7 days</li>
                    <li>Travel insurance included</li>
                    <li>24/7 customer support</li>
                </ul>
            </Card>
        </div>
    );
};

export default BookingCard;