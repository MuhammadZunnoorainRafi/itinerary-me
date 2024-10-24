import TourDetailsCard from '@itineract/components/TourDetailsCard';
import {
  threeDayTourSliderData,
  trendingImageSliderData
} from '@itineract/utility/trendingImageSlider';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@itineract/components/Button';
import Reviews from '@itineract/components/Reviews';
import PhAddItineraryModel from '@itineract/components/philipines/PhAddItineraryModel';

type Props = {
  params: {
    id: string;
  };
};

function Page({ params }: Props) {
  const currentItinerary = threeDayTourSliderData.find(
    (val) => val.id === params.id
  );
  if (!currentItinerary) return <p>Itinerary not found</p>;
  return (
    <div className="container-mobile pb-4">
      <div
        className={`${params.id ? ' flex items-center justify-between' : ''} py-4 px-3`}
      >
        <Link href="/philipines">
          <Image
            className="max-w-[25px] max-h-[25px]"
            src="/images/arrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
        </Link>
        {/* <Button className="bg-[#343261]" name="Add to itinerary" /> */}
        <PhAddItineraryModel />
      </div>
      <div>
        <div className="bg-[#eeeeee] px-3 py-2">
          <h1 className="font-bold text-blue text-xl">Heritage Tour</h1>
          <p className="text-blue">Duration: 3 days</p>
        </div>
      </div>
      <div className="mb-3 space-y-3">
        <div className="px-3">
          <h5 className="max-w-[120px] text-[16px] font-semibold text-dark-blue mt-1">
            {currentItinerary.title}
          </h5>
          <div className="flex items-center justify-start gap-x-4">
            <h5 className="bg-lavenderMist py-1 px-2 rounded-[5px] inline-block text-[14px] text-blueGray font-semibold">
              {currentItinerary.category}
            </h5>
            <Reviews placeReviews={currentItinerary} />
          </div>
        </div>
        <Image
          className=" w-full min-w-full max-h-[60vh] rounded-2xl object-cover"
          src={currentItinerary.image.url}
          alt="itinerary image not found"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default Page;
