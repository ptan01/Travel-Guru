import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingForm from '../bookingForm/BookingForm';

const Destination = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className=' h-[93vh] lg:flex justify-between items-center'>
            <div className='w-1/2'>
            <h1 className='text-8xl text-white'>{data.placeName}</h1>
            <p className='text-white'>{data.description}</p>
            </div>
            <BookingForm></BookingForm>
        </div>
    );
};

export default Destination;