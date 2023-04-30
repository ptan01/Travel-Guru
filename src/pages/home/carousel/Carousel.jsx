import React from 'react';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

const Carousel = ({handleName}) => {
    return (
        <div className='w-1/2'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
            <SwiperSlide >
                <div onClick={handleName} className="cursor-pointer  card bg-base-100 shadow-xl">
                    <figure><img className='rounded-xl' src="https://thesimpletravel.com/wp-content/uploads/2022/01/Sajek_valley.jpg" alt="Shoes" /></figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cursor-pointer card bg-base-100 shadow-xl">
                    <figure><img className='rounded-xl' src="https://thesimpletravel.com/wp-content/uploads/2022/01/Sajek_valley.jpg" alt="Shoes" /></figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cursor-pointer card bg-base-100 shadow-xl">
                    <figure><img className='rounded-xl' src="https://thesimpletravel.com/wp-content/uploads/2022/01/Sajek_valley.jpg" alt="Shoes" /></figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cursor-pointer card bg-base-100 shadow-xl">
                    <figure><img className='rounded-xl' src="https://thesimpletravel.com/wp-content/uploads/2022/01/Sajek_valley.jpg" alt="Shoes" /></figure>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cursor-pointer card bg-base-100 shadow-xl">
                    <figure><img className='rounded-xl' src="https://thesimpletravel.com/wp-content/uploads/2022/01/Sajek_valley.jpg" alt="Shoes" /></figure>
                </div>
            </SwiperSlide>

        </Swiper>
    </div>
    );
};

export default Carousel;