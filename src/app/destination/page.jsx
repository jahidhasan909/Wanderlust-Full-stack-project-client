import DestinationCard from '@/Component/DestinationCard/DestinationCard';
import DropDown from '@/Component/DropDown/DropDown';
import React from 'react';

const DestinationPage = async () => {

    const res = await fetch('http://localhost:5001/destination')
    const data = await res.json()


    return (
        <div className=' mt-16  container mx-auto'>
            <h1 className=' font-bold text-3xl'>Explore All Destination</h1>
            <p className='text-neutral-500'>Find your perfect travel experience from our curated collection</p>
            <div>
                <DropDown></DropDown>
            </div>
            <div className=' container mx-auto grid grid-cols-4 my-10 gap-4'>
                {
                    data.map(destination => <DestinationCard key={destination._id} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    );
};

export default DestinationPage;