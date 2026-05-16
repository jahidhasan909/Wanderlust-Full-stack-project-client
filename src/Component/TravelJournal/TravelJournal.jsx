import { ArrowRight, Person, PersonFill } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { LuDot } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";

const TravelJournal = () => {
    return (
        <div className='hidden md:block  md:max-w-3xl lg:max-w-5xl mx-auto my-35'>
            <div className='flex justify-between items-center'>
                <div className='mb-5 space-y-1'>
                    <p className='text-[#b9876e] uppercase text-[14px]'>Travel Journal</p>
                    <h1 className='text-white text-3xl mt-2'>Latest from our blog</h1>
                    <p className='text-neutral-300 mt-2 text-[1.10rem]'>insights,guides,and inspiration for the discerning traveler</p>
                </div>
                <Button variant='outline' className={' uppercase mt-5 rounded-none text-[#b9876e] border-[#b9876e]'}>view all articles <ArrowRight></ArrowRight></Button>
            </div>
            <section className='grid grid-cols-2 gap-4'>
                <Card className='bg-[#272738af] rounded-none border-white/20 border'>
                    <div>
                        <div className=' space-y-1'>
                            <Image src={'https://images.unsplash.com/photo-1648912024151-7bdb206b0547'} width={700} height={400} alt='' className='w-full'></Image>
                            <h1 className='text-white mt-4 text-xl'>The Ultimate Guide to Luxury Travel in 2026</h1>
                            <p className='text-gray-400 text-[15px]'>Discover the emerging trends in luxury travel and the most exclusive destination that discerning travelers are seeking this year</p>
                            <span className='text-gray-400 text-xs flex justify-between items-center mt-3'>
                                <span className=' flex gap-4 '>
                                    <span className='flex items-center gap-1'><Person /> <span className='pt-1'>Victoria Sterling</span></span>
                                    <span className='flex items-center gap-1'><FaRegCalendarAlt size={15} /> <span className='pt-1'>Jan 3,2026</span></span>
                                </span>
                                <span>8 min read</span>
                            </span>
                        </div>
                    </div>
                </Card>
                <div className=' space-y-4'>
                    <Card className='bg-[#272738af] rounded-none border-white/20 border'>

                        <div className='flex gap-4'>
                            <Image src={'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f'} width={140} height={150} alt='' className=''></Image>
                            <div className='space-y-1'>
                                <p className='text-[#b9876e] uppercase text-xs font-semibold'>Destinations</p>
                                <h1 className='text-white'>Hidden Gems: Private Islands You Can Actually Book</h1>
                                <span className='text-gray-400 flex gap-2 items-center text-xs'>
                                    <span>Jan 1,2026</span>
                                    <LuDot size={20} />
                                    <span>6 min read</span>
                                </span>
                            </div>
                        </div>
                    </Card>

                    <Card className='bg-[#272738af] rounded-none border-white/20 border'>

                        <div className='flex gap-4'>
                            <Image src={'https://i.ibb.co.com/673F9QFy/SL-IMG-1747-RETOUCHED.png'} width={140} height={150} alt='' className=''></Image>
                            <div className=' space-y-1'>
                                <p className='text-[#b9876e] uppercase text-xs font-semibold'>flights</p>
                                <h1 className=' text-white'>First Class Bs Private Jet: Which Is Right for You?</h1>
                                <span className='text-gray-400 text-xs flex gap-2 items-center'>
                                    <span>Dec 1,2025</span>
                                    <LuDot size={20} />
                                    <span>5 min read</span>
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default TravelJournal;