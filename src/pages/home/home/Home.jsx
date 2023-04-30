import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.css'
import 'swiper/css';
import { Navigation } from "swiper";
import "swiper/css/navigation";


const Home = () => {
    return (
        <div className='bg-img h-screen'>
            <h1>this is home and img</h1>
           <div className='w-1/2'>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
           </div>
        </div>
    );
};

export default Home;