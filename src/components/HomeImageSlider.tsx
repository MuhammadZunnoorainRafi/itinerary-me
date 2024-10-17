'use client';
import { homeImageSliderData } from '../utility/homeImageSlider';
import Image from 'next/image';
import { useRef } from 'react';

// Import Swiper React components and styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper core and required modules
const HomeImageSlider = () => {
  const swiperRef = useRef(null); // Create a ref for Swiper

  return (
    <div>
      <div className="pl-3">
        <h1 className="text-dark-blue font-semibold py-3">
          Featured Attractions
        </h1>
        <Swiper
          ref={swiperRef} // Attach ref to Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          loop={true}
          breakpoints={{
            1: {
              spaceBetween: 10
            },
            1100: {
              spaceBetween: 20
            }
          }}
        >
          {homeImageSliderData.map((ImageDetails) => (
            <SwiperSlide
              key={ImageDetails.id}
              className="min-w-[80%] max-w-[80%]"
            >
              <Image
                className="rounded-[15px]"
                src={ImageDetails.url}
                alt={ImageDetails.title}
                width={500}
                height={250}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-light-purple py-1 mt-4"></div>
    </div>
  );
};

export default HomeImageSlider;
