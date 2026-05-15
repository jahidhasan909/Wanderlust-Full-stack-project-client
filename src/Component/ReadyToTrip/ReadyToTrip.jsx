import { ArrowRight } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const ReadyToTrip = () => {
    return (
        <div className=' relative'>
            

            <Image className='w-full  object-cover relative h-[450px] overflow-hidden' src={'https://i.ibb.co.com/Q7FvKz64/Emirates-airlines-Picsart-Ai-Image-Enhancer-3.jpg'} width={1200} height={450} alt=''></Image>
           <div className=' absolute  inset-0 bg-[#151f2de7]'></div>
            <div className=' absolute top-1/2 left-1/2  -translate-1/2 text-center text-white space-y-1'>
                <h1 className='text-5xl font-bold leading-tight'>Ready to Start Your Journey?</h1>
                <p className='text-xl text-neutral-400'>Join thousands of travelers who have discovered the world with us</p>
                <Button className={'uppercase rounded-none text-[#b9876e] border-[#b9876e] mt-7 '} variant='outline'>BOOK YOUR TRIP TODAY <ArrowRight></ArrowRight></Button>
            </div>
        </div>
    );
};

export default ReadyToTrip;