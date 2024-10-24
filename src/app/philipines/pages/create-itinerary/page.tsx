'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import CreateItineraryHeader from '@itineract/components/CreateItineraryHeader';
import { formatDateRange } from '@itineract/utility/formatDate';
import ModalBox from '@itineract/components/ModalBox';
import AddNewItinerary from '@itineract/components/AddNewItinerary';
// Import styles
import { useItineraryContext } from '@itineract/context/itinerary-context/ItineraryContext';
import { toast } from 'react-toastify';
import Image from 'next/image';
import { usePhilipineItineraryContext } from '@itineract/context/philipine-itinerary-context/PhilipineItineraryContext';

function Page() {
  const [isModalOpenOrClose, setModalOpenOrClose] = useState(false); // State for modal
  const {
    state: { itineraries }
  } = usePhilipineItineraryContext();
  // const { state, dispatch } = useItineraryContext();
  const handleModal = () => {
    setModalOpenOrClose(!isModalOpenOrClose);
  };

  // const ItinerarySubmittedToast = () => {
  //   toast.warn(
  //     'Please ensure that if you create a new itinerary, the old one will be deleted.'
  //   );
  // };
  // useEffect(() => {
  //   ItinerarySubmittedToast();
  // }, []);

  return (
    <div className="container-mobile">
      <div className="py-4">
        <Link href="/philipines">
          <Image
            className="max-w-[25px] max-h-[25px] ml-3"
            src="/images/arrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <CreateItineraryHeader />
      <div className="grid grid-cols-2 gap-3 text-left mt-8 px-3 ">
        {itineraries.map((itinerary) => (
          <Link
            key={itinerary.id}
            href={`/philipines/pages/itinerary-record/${itinerary.id}`}
            className=' flex flex-col justify-center  border-[2px] max-h-[110px] min-h-[110px] px-4 sm:px-6 border-blue rounded-[6px] cursor-pointer"'
          >
            <h5 className="text-dark-blue font-semibold pb-0.5">
              {itinerary.title}
            </h5>
            {formatDateRange(itinerary.startDate, itinerary.endDate)}
          </Link>
        ))}

        <div
          onClick={handleModal}
          className="  flex flex-col justify-center border-[2px] max-h-[110px] min-h-[110px] px-4 sm:px-6 border-light-gray rounded-[6px] cursor-pointer"
        >
          <div className="flex items-center justify-center">
            <button className="text-center font-medium text-grayish text-[17px]">
              + Create new
            </button>
          </div>
        </div>
      </div>
      {/* Pass AddNewItinerary as content */}
      <ModalBox
        mode="create"
        isOpen={isModalOpenOrClose}
        onRequestCloseOrOpen={handleModal}
        content={
          <AddNewItinerary onSubmitCloseModal={handleModal} mode="create" />
        }
      />
    </div>
  );
}

export default Page;
