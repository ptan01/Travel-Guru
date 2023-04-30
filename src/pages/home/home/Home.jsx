import React from 'react';
import './Home.css'
import Carousel from '../carousel/Carousel';



const Home = () => {


    const handleName = () =>{
        console.log("hello")
    }


    return (
        <div className='bg-img h-[93vh] flex justify-center items-center'>

        <div>
            <h1 className='text-4xl'>Cox's bazar</h1>
            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
            <button className='btn btn-sm'>Booking</button>
        </div>

           <Carousel handleName={handleName}></Carousel>
        </div>
    );
};

export default Home;