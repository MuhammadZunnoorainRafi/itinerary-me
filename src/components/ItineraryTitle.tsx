'use client';
import React, { useState } from 'react';
import { Itinerary } from '@itineract/types/Itinerary';
import dayjs from 'dayjs';
import { BiPencil } from 'react-icons/bi';
import AddNewItinerary from '@itineract/components/AddNewItinerary';
import ModalBox from '@itineract/components/ModalBox';

type ItineraryTitleProps = {
  itinerary: Itinerary;
};

const ItineraryTitle: React.FC<ItineraryTitleProps> = ({ itinerary }) => {
  const startDate = dayjs(itinerary.startDate);
  const endDate = dayjs(itinerary.endDate);
  const startDateDisplay =
    startDate.year === endDate.year
      ? startDate.format('MMM D')
      : startDate.format('MMM D, YYYY');
  const endDateDisplay =
    startDate.month() === endDate.month()
      ? endDate.format('D, YYYY')
      : endDate.format('MMM D, YYYY');

  const [isModalOpenOrClose, setModalOpenOrClose] = useState(false); // State for modal

  const handleModal = () => {
    setModalOpenOrClose(!isModalOpenOrClose);
  };

  return (
    <div className="flex flex-row max-w-screen-md px-4 py-2 pr-4 items-center justify-between ">
      <div className="grow">
        <h1 className="font-poppins font-bold text-lg leading-6 text-dark-blue">
          {itinerary.title}
        </h1>
        <h2 className="font-sans font-normal text-base leading-[14px]">
          {startDateDisplay} - {endDateDisplay}
        </h2>
      </div>
      <BiPencil
        onClick={handleModal}
        className="text-[18px] text-dark-blue cursor-pointer relative"
        width={48}
        height={48}
      />
      <ModalBox
        mode="edit"
        isOpen={isModalOpenOrClose}
        onRequestCloseOrOpen={handleModal}
        content={
          <AddNewItinerary
            onSubmitCloseModal={handleModal}
            mode="edit"
            itinerary={itinerary}
          />
        }
      />
    </div>
  );
};

export default ItineraryTitle;
