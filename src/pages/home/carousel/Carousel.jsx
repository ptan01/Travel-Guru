import React from 'react';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";

const Carousel = ({ handleName, names }) => {
    console.log(names)
    return (
        <div className='lg:w-1/2'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    names.map(name => <SwiperSlide key={name.id} >
                        <div onClick={()=>handleName(name.id)} className="cursor-pointer  card bg-base-100 shadow-xl">
                            <figure><img className='rounded-xl' src={name.img}alt="Shoes" /></figure>
                        </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Carousel;