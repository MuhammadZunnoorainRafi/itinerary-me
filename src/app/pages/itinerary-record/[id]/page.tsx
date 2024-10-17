'use client';
import Breadcrumb from '@itineract/components/Breadcrumb';
import ItineraryBooking from '@itineract/components/ItineraryBooking';
import React from 'react';
import { useItineraryContext } from '@itineract/context/itinerary-context/ItineraryContext';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

function Page() {
  const { state } = useItineraryContext();
  const params = useParams();
  const itinerary = state.itineraries.find((val) => val.id === params!.id);
  if (!itinerary) {
    return <p>Itinerary not found</p>;
  }

  console.log({ itinerary });
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
      <Breadcrumb />
      <ItineraryBooking itinerary={itinerary} />
    </div>
  );
}

export default Page;
