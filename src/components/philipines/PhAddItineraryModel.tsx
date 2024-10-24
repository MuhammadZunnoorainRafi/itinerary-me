'use client';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import React, { useState } from 'react';
// @ts-ignore
import useDateStore from '@itineract/stores/useDateRangerStore';
import Link from 'next/link';
import Button from '../Button';
import DatesRangesPicker from '../DatesRangesPicker';
import { Itinerary } from '@itineract/types/Itinerary';
import { usePhilipineItineraryContext } from '@itineract/context/philipine-itinerary-context/PhilipineItineraryContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
type Props = {
  currentItinerary: Itinerary;
};
const PhAddItineraryModel = ({ currentItinerary }: Props) => {
  const { dispatch } = usePhilipineItineraryContext();
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [DateRangeChecker, setDateRangeChecker] = useState<boolean>(false);
  const { startDate, endDate } = useDateStore();

  const initialStartDate = startDate;
  const initialEndDate = endDate;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Set initial date values based on itinerary or fallback to the current store value

  const handleSubmitNewItinerary = () => {
    // Check if the itinerary name is valid (at least 4 characters)
    if (!initialStartDate || !initialEndDate) {
      setDateRangeChecker(true);
    } else {
      setDateRangeChecker(false);
    }
    if (initialStartDate && initialEndDate) {
      const payload: Itinerary = {
        id: currentItinerary.id,
        title: currentItinerary.title,
        startDate: startDate,
        endDate: endDate,
        country: currentItinerary.country,
        duration: currentItinerary.duration,
        activities: currentItinerary.activities
      };

      dispatch({ type: 'CREATE_PHILIPINE_ITINERARY', payload });
      toast.success('New itinerary added');
      router.push('/philipines/pages/create-itinerary');
    } else {
      console.log('Form cannot be submitted now.');
    }
  };
  return (
    <>
      <div
        onClick={handleClickOpen}
        aria-label="select"
        style={{ float: 'right' }}
      >
        <Button name="Add to itinerary" className="px-9 bg-[#343261]" />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        className="absolute max-w-md mx-auto z-10 inset-0"
      >
        <DialogTitle align="center" className="font-bold text-blue">
          Vigan Heritage Tour is 3 days
        </DialogTitle>
        <DialogContent>
          <h1 className="mb-5 text-center">Select start and end date</h1>
          <div className="container-mobile text-center">
            <div>
              <DatesRangesPicker
                initialStartDate={initialStartDate}
                initialEndDate={initialEndDate}
              />
            </div>
            {DateRangeChecker && (
              <span className="text-[14.5px] text-red-500">
                Date range cannot be left empty.
              </span>
            )}
          </div>
        </DialogContent>

        <DialogActions>
          <div className="flex gap-3 items-center justify-center mx-auto w-full mb-4 px-3">
            <Button
              onClick={handleSubmitNewItinerary}
              name="Add Itinerary"
              className="w-full bg-blue text-white"
            />
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PhAddItineraryModel;
