import DestinationCard from '@/Component/DestinationCard/DestinationCard';
import DropDown from '@/Component/DropDown/DropDown';
import React from 'react';

import DestinationMotion from '@/Component/DestinationCard/DestinationMotion';

const DestinationPage = async () => {



    const res = await fetch('http://localhost:5001/destination')
    const data = await res.json()


    return (
        <div className=' mt-35 mb-20 container mx-auto '>
            <div className='px-3'>
                <h1 className=' font-bold text-3xl text-white'>Explore All Destination</h1>
                <p className='text-neutral-400'>Find your perfect travel experience from our curated collection</p>
            </div>
            <div>
                <DropDown></DropDown>
            </div>
            <div className=' container mx-auto grid grid-cols-4 my-10 gap-4'>

                <DestinationMotion data={data}></DestinationMotion>
            </div>
        </div>
    );
};

export default DestinationPage;