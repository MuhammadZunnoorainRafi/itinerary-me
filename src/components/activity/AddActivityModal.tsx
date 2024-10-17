'use client';
import { useItineraryContext } from '@itineract/context/itinerary-context/ItineraryContext';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import React, { useState } from 'react';
// @ts-ignore
import { trendingImageSliderData } from '@itineract/utility/trendingImageSlider';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button';
import Reviews from '../Reviews';
import { Itinerary } from '@itineract/types/Itinerary';
import { useParams } from 'next/navigation';

const AddActivityModal = () => {
  const params = useParams();
  const {
    state: { itineraries },
    dispatch
  } = useItineraryContext();
  const currentItinerary = itineraries.find((val) => val.id === params!.id);
  // const { state, dispatch } = useItineraryContext();
  //   const handleModal = () => {
  //     setModalOpenOrClose(!isModalOpenOrClose);
  //   };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (
    id: string,
    title: string,
    image: string,
    description: string
  ) => {
    const formattedActivityData = {
      id: id,
      name: title,
      description: description.slice(0, 14) + ' ...',
      photo: image,
      duration: 60,
      createdAt: new Date().toISOString().slice(0, 19)
    };

    // if (currentItinerary.activities.unbooked[formattedActivityData.id]) {
    //   console.log('already eixists');
    // }

    const payload = {
      ...currentItinerary,
      activities: {
        unbooked: {
          ...currentItinerary!.activities.unbooked,
          [formattedActivityData.id]: formattedActivityData
        },
        booked: currentItinerary!.activities.booked
      }
    } as Itinerary;

    dispatch({ type: 'UPDATE_ITINERARY', payload });
    handleClose();
    console.log('CLIECKED');
  };

  return (
    <>
      <div
        onClick={handleClickOpen}
        aria-label="select"
        style={{ float: 'right' }}
        className="ml-2 min-h-[50px] flex  items-center justify-center flex-row flex-nowrap bg-[#EDEDED]  min-w-60 p-1 rounded-lg content-center"
      >
        + Add Your Activity
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        className="relative max-w-xl mx-auto z-10 -top-60"
      >
        <DialogTitle align="center" className="font-bold text-blue">
          Add Activity
        </DialogTitle>
        <DialogContent>
          <h1>Select an existing itinerary or create a new one?</h1>
          <div className="container-mobile">
            <div className="grid grid-cols-2 gap-3 text-left mt-8 px-3 ">
              {trendingImageSliderData.map((cardDetails: any) => (
                <div key={cardDetails.id}>
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
                      <p className="dark-blue mt-0.5">
                        ${cardDetails.price}.00
                      </p>
                      <Link href={`pages/tour-details#${cardDetails.id}`}>
                        <Button
                          name="View Details"
                          className="w-full !text-blue font-semibold bg-transparent border border-blue"
                        />
                      </Link>
                      <Button
                        onClick={() =>
                          handleAdd(
                            cardDetails.id,
                            cardDetails.title,
                            cardDetails.image,
                            cardDetails.description
                          )
                        }
                        name="Add"
                        className="w-full bg-blue text-white"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>

        <DialogActions>
          <div className="flex gap-3 mt-[20px] items-center justify-center mx-auto w-full mb-4 px-3">
            <Button
              name="Close"
              className="w-full !text-blue font-semibold bg-transparent border border-blue"
              onClick={() => setOpen(false)}
            />
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddActivityModal;
