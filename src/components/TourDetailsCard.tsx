'use client';
import React from 'react';
import Reviews from './Reviews';
import Button from './Button';
import AddToWishList from './AddToWishList';
import Image from 'next/image';
import { TrendingImageSliderDataArray } from '../types/trendingImageSlider'; // Import the type for a single tour place data
import WhereToAddModal from './activity/WhereToAddModal';
import DeleteActivityDialogue from './activity/DeleteActivityDialog';

// Define the props for the TourDetailsCard component using React.FC
interface TourDetailsCardProps {
  shareData: TrendingImageSliderDataArray; // Array type for shareData
}

const TourDetailsCard: React.FC<TourDetailsCardProps> = ({ shareData }) => {
  return (
    <div className="pb-5">
      {shareData.map((tourPlaceData, index) => (
        <div key={tourPlaceData.id}>
          <h5
            className={`text-[16px] font-semibold text-dark-blue px-3 ${index === 0 ? 'mt-0' : 'mt-8'}`}
          >
            {tourPlaceData.title}
          </h5>
          <div className="flex items-center gap-3 px-3">
            <h5 className="bg-lavenderMist py-1 px-2 rounded-[5px] inline-block text-[16px] text-blueGray font-semibold mt-1">
              ATTRACTION
            </h5>
            <Reviews placeReviews={tourPlaceData} />
            <span className="text-dark-blue text-[16px]">Share</span>
          </div>
          <Image
            className="py-3 w-full min-w-full max-h-[60vh]"
            src={tourPlaceData.image.url}
            alt={tourPlaceData.image.title}
            width={500}
            height={500}
          />
          <p className="px-3 text-gunmetal font-medium">
            {tourPlaceData.description}
          </p>
          <div className="flex max-w-[310px] mx-auto items-center justify-between mt-3 px-3">
            <WhereToAddModal activityData={tourPlaceData} />
            <AddToWishList />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourDetailsCard;
