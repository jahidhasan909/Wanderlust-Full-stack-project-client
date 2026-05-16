import { Card } from '@heroui/react';
import React from 'react';
import { AiOutlineSafety } from "react-icons/ai";
import { IoMapOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";


const WhyChoose = () => {
    return (
        <div className='bg-linear-to-r from-[#0f1118] to-[#14182b] my-10'>

            <div className=' container mx-auto text-center py-28'>
                <h1 className='text-xl md:text-3xl font-bold text-white'>Why Choose Wanderlust</h1>
                <p className='text-neutral-400 mb-9 mt-2 text-[0.90rem] md:text-[1.10rem]'>Your trusted partner for exceptional travel experiences</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto'>
                    <Card className=' rounded-md bg-[#272738af] border border-white/10'>
                        <div className='p-3 '>
                            <span className='flex justify-center text-[#b9876e]'><AiOutlineSafety size={'30'} /></span>
                        <h2 className='text-xl mt-3 text-white'>Safe & Secure</h2>
                        <p className='text-[13px] text-neutral-400 mt-1 max-w-[300px] mx-auto'>Your safety is our priority with comprehensive travel insurance and 24/7 support.</p>
                        </div>
                    </Card>
                    <Card className=' rounded-md bg-[#272738af] border border-white/10'>
                    <div className='p-3 '>

                        <span className='flex justify-center text-[#b9876e]'><IoMapOutline size={'30'}/></span>
                         
                        <h2 className='text-xl mt-3 text-white'>Expert Guides</h2>
                        <p className='text-[13px] text-neutral-400 mt-1 max-w-[300px] mx-auto'>Local experts who bring destinations to life with authentic cultural insights.</p>
                    </div>
                    </Card>
                    <Card className=' rounded-md bg-[#272738af] border border-white/10'>
                    <div className='p-3 '>

                        <span className='flex justify-center text-[#b9876e]'><BiSupport  size={'30'}/></span>
                        <h2 className='text-xl mt-3 text-white'>24/7 Support</h2>
                        <p className='text-[13px] text-neutral-400 mt-1 max-w-[300px] mx-auto'>Round-the-clock customer service to assist you wherever your journey takes you.</p>
                    </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;