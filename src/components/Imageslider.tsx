'use client';
import { useRef } from 'react';
import { TrendingImageSliderDataArray } from '../types/trendingImageSlider'; // Import the type
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import TravelCard from './TravelCard';

// Define the props for the Imageslider component
interface ImagesliderProps {
  sliderData: TrendingImageSliderDataArray; // Use the inferred type
  heading: string;
  className?: string;
}
// Import Swiper core and required modules
const Imageslider: React.FC<ImagesliderProps> = ({
  sliderData,
  heading,
  className
}) => {
  const swiperRef = useRef(null);
  return (
    <div>
      <div className="pl-3">
        <div className="flex items-center justify-between">
          <h1 className="text-dark-blue font-semibold py-3">{heading}</h1>
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
          {sliderData.map((cardDetails) => (
            <SwiperSlide
              key={cardDetails.id}
              className={`min-w-[44%] max-w-[44%] ${className}`}
            >
              {heading === 'Trending' && (
                <TravelCard cardDetails={cardDetails} />
              )}
              {(heading === 'Tour Packages' ||
                heading === 'We Recommended') && (
                <TravelCard cardDetails={cardDetails} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-light-purple py-1 mt-4"></div>
    </div>
  );
};

export default Imageslider;
