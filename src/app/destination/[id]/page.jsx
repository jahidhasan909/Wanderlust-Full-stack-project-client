import SingleDestinationCard from '@/Component/SingleDestinationCard/SingleDestinationCard';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:5001/destination/${id}`)
    const data = await res.json()


    return (
        <div className=' container mx-auto'>
            <SingleDestinationCard data={data}></SingleDestinationCard>
        </div>
    );
};

export default DetailsPage;