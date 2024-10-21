'use client';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import React, { useState } from 'react';
import { useItineraryContext } from '@itineract/context/itinerary-context/ItineraryContext';
// @ts-ignore
import { Activity } from '@itineract/types/Activity';
import { useParams } from 'next/navigation';
import Button from '../Button';
import ModalBox from '../ModalBox';
import AddNewItinerary from '../AddNewItinerary';
import { formatDateRange } from '@itineract/utility/formatDate';
import Link from 'next/link';
import { Itinerary } from '@itineract/types/Itinerary';
type Props = {
  activityData: any;
};
const WhereToAddModal = ({ activityData }: Props) => {
  //   const [isModalOpenOrClose, setModalOpenOrClose] = useState(false); // State for modal
  const [selectedItineraryId, setSelectedItineraryId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {
    state: { itineraries },
    dispatch
  } = useItineraryContext();
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

  const handleAdd = () => {
    const selectedItinerary = itineraries.find(
      (itinerary) => itinerary.id === selectedItineraryId
    );

    if (!selectedItinerary) {
      setErrorMessage('Please select Itinerary');
      return;
    }

    const formattedActivityData = {
      id: activityData.id,
      name: activityData.title,
      description: activityData.description.slice(0, 14) + ' ...',
      photo: activityData.image,
      duration: 60,
      takeSpace: 1,
      createdAt: new Date().toISOString().slice(0, 19)
    };

    // if (selectedItinerary.activities.unbooked[formattedActivityData.id]) {
    //   console.log('already eixists');
    // }

    const payload = {
      ...selectedItinerary,
      activities: {
        unbooked: {
          ...selectedItinerary!.activities.unbooked,
          [formattedActivityData.id]: formattedActivityData
        },
        booked: selectedItinerary!.activities.booked
      }
    } as Itinerary;

    dispatch({ type: 'UPDATE_ITINERARY', payload });
    handleClose();
  };

  //   const bookedActivities = itinerary
  //     ? Object.values(itinerary.activities.booked)
  //     : [];
  //   const unBookedActivities = itinerary
  //     ? Object.values(itinerary.activities.unbooked)
  //     : [];

  return (
    <>
      <div
        onClick={handleClickOpen}
        aria-label="select"
        style={{ float: 'right' }}
      >
        <Button name="+Add" className="px-9" />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        className="relative max-w-md mx-auto z-10 -top-60"
      >
        <DialogTitle align="center" className="font-bold text-blue">
          Where to add ?
        </DialogTitle>
        <DialogContent>
          <h1>Select an existing itinerary or create a new one?</h1>
          <div className="container-mobile">
            <div className="grid grid-cols-2 gap-3 text-left mt-8 px-3 ">
              {itineraries.map((itinerary) => (
                <div
                  key={itinerary.id}
                  onClick={() => {
                    setSelectedItineraryId(itinerary.id);
                    setErrorMessage('');
                  }}
                  className={`${selectedItineraryId === itinerary.id ? 'border-blue border-2' : 'border-[2px]'} flex flex-col justify-center   max-h-[110px] min-h-[110px] px-4 sm:px-6  rounded-[6px] cursor-pointer"`}
                >
                  <h5 className="text-dark-blue font-semibold pb-0.5">
                    {itinerary.title}
                  </h5>
                  {formatDateRange(itinerary.startDate, itinerary.endDate)}
                </div>
              ))}

              <div
                // onClick={handleModal}
                className="  flex flex-col justify-center border-[2px] max-h-[110px] min-h-[110px] px-4 sm:px-6 border-light-gray rounded-[6px] cursor-pointer"
              >
                <div className="flex items-center justify-center">
                  <Link
                    href="/pages/create-itinerary"
                    className="text-center font-medium text-grayish text-[17px]"
                  >
                    + Create new
                  </Link>
                </div>
              </div>
            </div>
            {errorMessage && (
              <p className="text-center text-red-500 pt-2">{errorMessage}</p>
            )}
            {/* Pass AddNewItinerary as content */}
            {/* <ModalBox
              mode="create"
              isOpen={isModalOpenOrClose}
              onRequestCloseOrOpen={handleModal}
              content={
                <AddNewItinerary
                  onSubmitCloseModal={handleModal}
                  mode="create"
                />
              }
            /> */}
          </div>
        </DialogContent>

        <DialogActions>
          <div className="flex gap-3 mt-[20px] items-center justify-center mx-auto w-full mb-4 px-3">
            <Button
              name="Close"
              className="w-full !text-blue font-semibold bg-transparent border border-blue"
              onClick={() => setOpen(false)}
            />
            <Button
              onClick={handleAdd}
              name="Add"
              className="w-full bg-blue text-white"
            />
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default WhereToAddModal;
