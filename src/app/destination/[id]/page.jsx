import SingleDestinationCard from '@/Component/SingleDestinationCard/SingleDestinationCard';
import { auth } from '@/lib/auth';
import { error } from 'better-auth/api';
import { headers } from 'next/headers';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params
    const token = await auth.api.getToken({
        headers: await headers()

    })


    const res = await fetch(`http://localhost:5001/destination/${id}`, {
        headers: {
            authorization: `Barear ${token?.token}`
        }
    })
    const data = await res.json()
    
    return (
        <div className=' container mx-auto'>
            <SingleDestinationCard data={data}></SingleDestinationCard>
        </div>
    );
};

export default DetailsPage;