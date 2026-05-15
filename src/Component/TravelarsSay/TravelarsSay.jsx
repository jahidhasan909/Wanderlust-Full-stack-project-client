"use client"
import { Card } from "@heroui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TravelarsSay = () => {
    return (
        <div className="my-30 relative overflow-hidden">
            <Image src={'https://images.unsplash.com/photo-1573843981267-be1999ff37cd'} width={1300} height={600} className="w-full h-[600px] relative overflow-hidden object-cover" alt=""></Image>
            <div className=' absolute  inset-0 bg-[#151f2ded]'></div>
            <div className=" absolute top-1/2 -translate-1/2 left-1/2  container">
            <h1 className="text-center text-2xl font-bold text-white">What Travelers Say</h1>
            <p className="text-center text-neutral-300 mb-3">Real experiences from our happy travelers</p>
                <Marquee speed={100} pauseOnHover={true} className="">
                    <section className="flex gap-3">
                        <Card className="flex flex-row w-[500px] h-[250px] rounded-md bg-[#272738af] border border-white/10">
                            <div>
                                <h2 className="text-[17px] text-white">
                                    {'" The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable. "'}
                                </h2>
                                <div className="mt-10">
                                    <p className="text-[#b9876e]"> — Michael Chen</p>
                                    <p className="pl-5 text-neutral-400">Singapore</p>
                                </div>
                            </div>
                            <Image className="w-full  rounded-md h-full" src={'https://i.ibb.co.com/p6q31vhP/Rectangle-29.png'} width={150} height={150} alt="" />
                        </Card>



                        <Card className="flex flex-row w-[500px] h-[250px] rounded-md bg-[#272738af] border border-white/10">
                            <div>
                                <h2 className="text-[17px] text-white">
                                    {'" Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend! "'}
                                </h2>
                                <div className="mt-10">
                                    <p className="text-[#b9876e]"> — Sarah Johnson</p>
                                    <p className="pl-5 text-neutral-400">New York, USA</p>
                                </div>
                            </div>
                            <Image className="w-full  rounded-md h-full" src={'https://i.ibb.co.com/nMCysWNM/Rectangle-29-1.png'} width={150} height={150} alt="" />
                        </Card>
                        <Card className="flex flex-row w-[500px] h-[250px] rounded-md bg-[#272738af] border border-white/10">
                            <div>
                                <h2 className="text-[17px] text-white">
                                    {'" The Italy trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable. "'}
                                </h2>
                                <div className="mt-15">
                                    <p className="text-[#b9876e]"> — Jhon Doe</p>
                                    <p className="pl-5 text-neutral-400">Paris</p>
                                </div>
                            </div>
                            <Image className="w-full  rounded-md h-full" src={'https://images.unsplash.com/photo-1630952323180-98ad9a192e46'} width={160} height={150} alt="" />
                        </Card>
                        <Card className="flex flex-row w-[500px] h-[250px] rounded-md mr-2 bg-[#272738af] border border-white/10">
                            <div>
                                <h2 className="text-[17px] text-white">
                                    {'" Swiss Alps adventure exceeded all expectations. The beach views were breathtaking and our guide was incredibly knowledgeable. Highly recommend! "'}
                                </h2>
                                <div className="mt-10">
                                    <p className="text-[#b9876e]"> — Adv Aderson</p>
                                    <p className="pl-5 text-neutral-400">Finland</p>
                                </div>
                            </div>
                            <Image className="w-full  rounded-md h-full" src={'https://images.unsplash.com/photo-1602308492047-46f75f640e26'} width={150} height={150} alt="" />
                        </Card>
                    </section>
                </Marquee>
            </div >
        </div>


    );
};

export default TravelarsSay;