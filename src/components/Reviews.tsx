import React from 'react';
import Image from 'next/image';
import { TrendingImageSliderData } from '../types/trendingImageSlider';

// Define the interface for the reviews prop
interface ReviewsProps {
  placeReviews: Pick<TrendingImageSliderData, 'rating' | 'reviews'>;
}

function Reviews({ placeReviews }: ReviewsProps) {
  return (
    <div className="flex items-center gap-1">
      <Image
        className="max-w-[20px] max-h-[20px]"
        src="/images/star.png"
        alt="rating star"
        width={30}
        height={30}
      />
      <span className="text-accent font-thin text-[16px]">
        {placeReviews.rating}
      </span>
      <span className="text-grayish !font-thin text-[15px] mt-0.5">
        ({placeReviews.reviews} reviews)
      </span>
    </div>
  );
}

export default Reviews;
