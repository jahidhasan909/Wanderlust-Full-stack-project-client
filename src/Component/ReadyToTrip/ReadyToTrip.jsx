import { ArrowRight } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ReadyToTrip = () => {
    return (
        <div>
            <Image className='w-full object-cover relative overflow-hidden' src={'/assets/CTA.png'} width={1200} height={150} alt=''></Image>
            <div className=''>
                <h1>Ready to Start Your Journey?</h1>
                <p>Join thousands of travelers who have discovered the world with us</p>
                <Button>BOOK YOUR TRIP TODAY <ArrowRight></ArrowRight></Button>
            </div>
        </div>
    );
};

export default ReadyToTrip;