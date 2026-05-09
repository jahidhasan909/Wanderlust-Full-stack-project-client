import DestinationCard from '@/Component/DestinationCard/DestinationCard';
import React from 'react';

const DestinationPage = async () => {

    const res = await fetch('http://localhost:5001/destination')
    const data = await res.json()


    return (
        <div className=' container mx-auto grid grid-cols-4 my-20 gap-4'>
           {
            data.map(destination=><DestinationCard key={destination._id} destination={destination}></DestinationCard>)
           }
        </div>
    );
};

export default DestinationPage;