'use client';
import React from 'react';
import Reviews from './Reviews';
import Button from './Button';
import AddToWishList from './AddToWishList';
import Image from 'next/image';
import { TrendingImageSliderDataArray } from '../types/trendingImageSlider'; // Import the type for a single tour place data
import WhereToAddModal from './activity/WhereToAddModal';
import DeleteActivityDialogue from './activity/DeleteActivityDialog';
import { threeDayTourSliderData } from '@itineract/utility/trendingImageSlider';

// Define the props for the TourDetailsCard component using React.FC
interface TourDetailsCardProps {
  shareData: TrendingImageSliderDataArray; // Array type for shareData
  id?: string;
}

const TourDetailsCard: React.FC<TourDetailsCardProps> = ({ shareData, id }) => {
  const currentItinerary = threeDayTourSliderData.find((val) => val.id === id);
  return (
    <div>
      {id && currentItinerary && (
        <div className="mb-3 space-y-3">
          <Image
            className=" w-full min-w-full max-h-[60vh] rounded-2xl object-cover"
            src={currentItinerary.image.url}
            alt="itinerary image not found"
            width={500}
            height={500}
          />
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold">{currentItinerary.title}</h1>
            <h5 className="bg-lavenderMist py-1 px-2 rounded-[5px] inline-block text-[16px] text-blueGray font-semibold">
              {currentItinerary.category}
            </h5>
          </div>
        </div>
      )}
      <div className="border border-slate-400 my-7" />
      <div className="pb-5">
        {shareData.map((tourPlaceData, index) => (
          <div key={tourPlaceData.id} id={tourPlaceData.id}>
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
            {!id && (
              <div className="flex max-w-[310px] mx-auto items-center justify-between mt-3 px-3">
                <WhereToAddModal activityData={tourPlaceData} />
                <AddToWishList />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourDetailsCard;
