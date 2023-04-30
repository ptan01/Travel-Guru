import React, { useEffect, useState } from 'react';
import './Home.css'
import Carousel from '../carousel/Carousel';
import { Link, useLoaderData } from 'react-router-dom';



const Home = () => {

    const names = useLoaderData()

    const [singleData , setSingleData] = useState({})


    const handleName = (id) => {
        fetch(`http://localhost:5000/names/${id}`)
            .then(res => res.json())
            .then(data => setSingleData(data))

    }

    useEffect(()=>{
        fetch(`http://localhost:5000/names/travel01`)
            .then(res => res.json())
            .then(data => setSingleData(data)) 
    },[])


    return (
        <div className=' h-[93vh] lg:flex justify-center items-center'>

            <div>
                <h1 className='text-4xl'>{singleData.placeName}</h1>
                <p>{singleData.description}</p>
               <Link to={`/destination/${singleData.id}`}>Booking</Link>
            </div>

            <Carousel names={names} handleName={handleName}></Carousel>
        </div>
    );
};

export default Home;