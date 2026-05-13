"use client"
import { Card } from "@heroui/react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const TravelarsSay = () => {
    return (
        <div className="my-10">
            <h1 className="text-center text-2xl font-bold">What Travelers Say</h1>
            <p className="text-center text-neutral-500 mb-3">Real experiences from our happy travelers</p>
            <div>
                <Marquee speed={100} pauseOnHover={true} className="">
                    <section className="flex gap-3">
                        <Card className="flex flex-row w-[500px] h-[250px] rounded-md">
                            <div>
                                <h2 className="text-[17px]">
                                    {'" The Bali trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable. "'}
                                </h2>
                                <div className="mt-10">
                                    <p className="text-cyan-500"> — Michael Chen</p>
                                    <p className="pl-5 text-neutral-500">Singapore</p>
                                </div>
                            </div>
                            <Image className="w-full  rounded-md h-full" src={'https://i.ibb.co.com/p6q31vhP/Rectangle-29.png'} width={150} height={150} alt="" />
                        </Card>



                        <Card className="flex flex-row w-[500px] h-[250px] rounded-md">
                            <div>
                                <h2 className="text-[17px]">
                                    {'" Swiss Alps adventure exceeded all expectations. The mountain views were breathtaking and our guide was incredibly knowledgeable. Highly recommend! "'}
                                </h2>
                                <div className="mt-10">
                                    <p className="text-cyan-500"> — Sarah Johnson</p>
                                    <p className="pl-5 text-neutral-500">New York, USA</p>
                                </div>
                            </div>
                            <Image className="w-full  rounded-md h-full" src={'https://i.ibb.co.com/nMCysWNM/Rectangle-29-1.png'} width={150} height={150} alt="" />
                        </Card>
                        <Card className="flex flex-row w-[500px] h-[250px] rounded-md">
                            <div>
                                <h2 className="text-[17px]">
                                    {'" The Italy trip was absolutely magical! Every detail was perfectly planned. The resorts were luxurious and the cultural experiences were unforgettable. "'}
                                </h2>
                                <div className="mt-15">
                                    <p className="text-cyan-500"> — Jhon Doe</p>
                                    <p className="pl-5 text-neutral-500">Paris</p>
                                </div>
                            </div>
                            <Image className="w-full  rounded-md h-full" src={'https://images.unsplash.com/photo-1630952323180-98ad9a192e46'} width={160} height={150} alt="" />
                        </Card>
                        <Card className="flex flex-row w-[500px] h-[250px] rounded-md mr-2">
                            <div>
                                <h2 className="text-[17px]">
                                    {'" Swiss Alps adventure exceeded all expectations. The beach views were breathtaking and our guide was incredibly knowledgeable. Highly recommend! "'}
                                </h2>
                                <div className="mt-10">
                                    <p className="text-cyan-500"> — Adv Aderson</p>
                                    <p className="pl-5 text-neutral-500">Finland</p>
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