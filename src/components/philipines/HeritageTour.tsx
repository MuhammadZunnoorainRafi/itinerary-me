'use client';
import { trendingImageSliderData } from '@itineract/utility/trendingImageSlider';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import TravelCard from '../TravelCard';

type Props = {
  heading: string;
  duration: string;
};

function HeritageTour({ heading, duration }: Props) {
  const swiperRef = useRef(null);
  return (
    <div>
      <div>
        <div className="pl-3">
          <div className="flex items-center justify-between">
            <div className="py-3">
              <h1 className="text-dark-blue font-semibold ">{heading}</h1>
              <p className="text-slate-800 text-[12px]">Duration: {duration}</p>
            </div>
            <span className="pr-3 text-primary">View all</span>
          </div>
          <Swiper
            ref={swiperRef} // Attach ref to Swiper
            slidesPerView={'auto'}
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
            {trendingImageSliderData.map((cardDetails) => (
              <SwiperSlide
                key={cardDetails.id}
                className={`min-w-[44%] max-w-[44%]`}
              >
                <TravelCard cardDetails={cardDetails} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="bg-light-purple py-1 mt-4"></div>
      </div>
    </div>
  );
}

export default HeritageTour;
