import UserBookingDataCard from '@/Component/BookingCard/UserBookingDataCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {

  const session = await auth.api.getSession({
    headers: await headers()
  })

  const user = session?.user

  const { token } = await auth.api.getToken({
    headers: await headers()
  })

  const res = await fetch(`http://localhost:5001/booking/${user?.id}`,{
    headers:{
      authorization:`Bearar ${token}`
    }
  })
  const userBookingData = await res.json()




  return (
    <div className='container mx-auto mt-35 mb-20 '>
      <div className='px-3'>
        <h1 className='font-bold text-3xl text-white'>My Bookings</h1>
        <p className='text-neutral-400'>Manage and view your upcoming travel plans</p>

      </div>
      <div className=' space-y-4 mt-8'>
        {
          userBookingData.map(bookingData => <UserBookingDataCard key={bookingData._id} bookingData={bookingData}></UserBookingDataCard>)
        }
      </div>
    </div>
  );
};

export default MyBookingPage;