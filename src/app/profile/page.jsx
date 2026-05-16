"use client"

import { authClient } from '@/lib/auth-client';
import { Plane } from '@gravity-ui/icons';
import { Avatar, Button, Card } from '@heroui/react';
import React, { useEffect, useState } from 'react';






const ProfilePage = () => {
    const { data } = authClient.useSession()

    const user = data?.user

    const [bookingLength, setBookingLenght] = useState([])

    useEffect(() => {
        if (user?.id) {
            fetch(`http://localhost:5001/booking/${user?.id}`)
                .then(res => res.json())
                .then(data => setBookingLenght(data))


        }

    }, [user])


    return (
        <div className='container mx-auto mt-35 mb-20'>
            <h1 className='font-bold text-3xl text-center text-white'>My Profile</h1>
            <p className='text-neutral-400 text-center mt-2 '>Manage your account settings and travel preferences</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 py-2 px-3 my-6 max-w-6xl gap-3 mx-auto'>
                <Card className=' rounded-md flex  items-center bg-[#272738af] border border-white/20'>
                    <div className='flex flex-col  items-center py-10'>
                        <Avatar className='h-30 w-30 rounded-full' size=''>
                            <Avatar.Image sizes='' className='' referrerPolicy="no-referrer" alt={user?.name} src={user?.image} />
                            <Avatar.Fallback>{user?.name.charAt(0, 2)}</Avatar.Fallback>
                        </Avatar>

                        <h1 className='font-bold mt-2 text-[#b38b6d]'>{user?.name}</h1>
                        <p className='text-neutral-400 text-xs'>{user?.email}</p>
                        <Button className={' rounded-md bg-linear-to-r from-[#b38b6d] to-[#af8068] text-white my-2'} variant='outline'>Update Profile</Button>
                    </div>

                </Card>

                <Card className=' rounded-md border bg-[#272738af] border-white/20'>
                    <h1 className='font-bold text-xl text-white'>Travel statistics</h1>
                    <Card className='flex flex-row justify-between items-center rounded-md border bg-[#272738af] border-white/20'> 
                        <div>
                            <h2 className='text-neutral-400'>Total Bookings</h2>
                            <p className='text-white'>{bookingLength?.length}</p>
                        </div>
                        <span className='bg-[#b38b6d] text-white p-2 rounded-md'><Plane></Plane></span>
                    </Card>
                </Card>

            </div>
        </div>
    );
};

export default ProfilePage;