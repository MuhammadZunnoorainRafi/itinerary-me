import TourDetailsCard from '@itineract/components/TourDetailsCard';
import { trendingImageSliderData } from '@itineract/utility/trendingImageSlider';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  return (
    <div className="container-mobile">
      <div className="py-4">
        <Link href="/">
          <Image
            className="max-w-[25px] max-h-[25px] ml-3"
            src="/images/arrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <TourDetailsCard shareData={trendingImageSliderData} />
    </div>
  );
}

export default Page;
