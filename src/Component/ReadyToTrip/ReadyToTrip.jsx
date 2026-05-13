import { ArrowRight } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ReadyToTrip = () => {
    return (
        <div className=' relative'>
            

            <Image className='w-full  object-cover relative overflow-hidden' src={'/assets/CTA.png'} width={1200} height={150} alt=''></Image>
            <div className=' absolute top-1/2 left-1/2  -translate-1/2 text-center text-white space-y-1'>
                <h1 className='text-5xl font-bold leading-tight'>Ready to Start Your Journey?</h1>
                <p className='text-lg'>Join thousands of travelers who have discovered the world with us</p>
                <Button className={'rounded-md bg-white '} variant='outline'>BOOK YOUR TRIP TODAY <ArrowRight></ArrowRight></Button>
            </div>
        </div>
    );
};

export default ReadyToTrip;