'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';

// Import Swiper React components and styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { homeImageSliderData } from '@itineract/utility/homeImageSlider';

// Import Swiper core and required modules
const HomeImageSliderPh = () => {
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
          {homeImageSliderData.map((imageDetails) => (
            <SwiperSlide
              key={imageDetails.id}
              className="min-w-[80%] max-w-[80%]"
            >
              {/* <Link href={`pages/tour-details#${imageDetails.id}`}> */}
              <Image
                className="rounded-[15px]"
                src={imageDetails.url}
                alt={imageDetails.title}
                width={500}
                height={250}
              />
              {/* </Link> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-light-purple py-1 mt-4"></div>
    </div>
  );
};

export default HomeImageSliderPh;
