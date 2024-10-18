import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrendingImageSliderData } from '@itineract/types/trendingImageSlider';
import Reviews from '../Reviews';
import Button from '../Button';
import AddToWishList from '../AddToWishList';

interface TravelCardProps {
  cardDetails: TrendingImageSliderData; // Define props type
}

const TravelCardPh: React.FC<TravelCardProps> = ({ cardDetails }) => {
  return (
    <div>
      <Image
        className="rounded-tl-[15px] rounded-tr-[15px]"
        src={cardDetails.image.url}
        alt={cardDetails.image.title}
        width={500}
        height={250}
      />
      <div className="p-2 text-left border-l-2 border-r-2 border-b-2 border-light-gray rounded-bl-[15px] rounded-br-[15px]">
        <h5 className="bg-lavenderMist py-1 px-2 rounded-[5px] inline-block text-[16px] text-blueGray font-semibold mt-1">
          {cardDetails.category}
        </h5>
        <h5 className="max-w-[120px] text-[16px] font-semibold text-dark-blue mt-1">
          {cardDetails.title}
        </h5>
        <Reviews placeReviews={cardDetails} />
        <p className="dark-blue mt-0.5">${cardDetails.price}.00</p>
        {/* <Link href={`pages/tour-details#${cardDetails.id}`}> */}
        <Button name="View Details" />
        {/* </Link> */}
        <AddToWishList />
      </div>
    </div>
  );
};

export default TravelCardPh;
