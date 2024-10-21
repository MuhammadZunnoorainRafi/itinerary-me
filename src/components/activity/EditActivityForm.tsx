import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
// @ts-ignore
import { Activity } from '@itineract/types/Activity';
import Button from '../Button';
import dayjs from 'dayjs';
import { useParams } from 'next/navigation';
import { useItineraryContext } from '@itineract/context/itinerary-context/ItineraryContext';
import DeleteActivityDialogue from './DeleteActivityDialog';
type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  activity: Activity;
};
const EditActivityForm = ({ open, setOpen, activity }: Props) => {
  const { state, dispatch } = useItineraryContext();
  const params = useParams();
  const itinerary = state.itineraries.find((val) => val.id === params!.id);
  const [isAlreadyBooked, setIsAlreadyBooked] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    activity.startTime ? dayjs(activity.date) : null
  );

  const parseTimeString = (timeString: string) => {
    if (timeString) {
      const [hour, minute] = timeString.split(':');
      return dayjs()
        .set('hour', parseInt(hour))
        .set('minute', parseInt(minute));
    }
    return null;
  };

  const [selectedTime, setSelectedTime] = useState(
    activity.startTime ? parseTimeString(activity.startTime) : null
  );
  const handleDateChange = (newValue: any) => {
    setSelectedDate(newValue);
  };

  const handleTimeChange = (newValue: any) => {
    const isBookedAlreadyBooked = bookedActivities
      .filter((val) => val.startTime !== isBookedActivity?.startTime)
      .map((val) => val.startTime)
      .includes(newValue?.format('HH:mm'));
    setSelectedTime(newValue);
    setIsAlreadyBooked(isBookedAlreadyBooked);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!itinerary) {
    return;
  }

  const bookedActivities = itinerary
    ? Object.values(itinerary.activities.booked)
    : [];
  const unBookedActivities = itinerary
    ? Object.values(itinerary.activities.unbooked)
    : [];
  const isBookedActivity = bookedActivities.find(
    (val) => val.id === activity.id
  );
  const isUnBookedActivity = unBookedActivities.find(
    (val) => val.id === activity.id
  );

  const handleSave = () => {
    const payload = {
      ...itinerary,
      activities: {
        booked:
          isBookedActivity && !isAlreadyBooked
            ? {
                ...itinerary.activities.booked,
                [isBookedActivity.id]: {
                  ...isBookedActivity,
                  date:
                    selectedDate?.format('YYYY-MM-DD') || isBookedActivity.date, // Ensure date isn't overwritten to undefined
                  startTime:
                    selectedTime?.format('HH:mm') || isBookedActivity.startTime,
                  endTime: selectedTime?.add(2, 'hour').format('HH:mm')
                  // endTime:
                  //   selectedTime?.add(1, 'hour').format('HH:mm') ||
                  //   isBookedActivity.endTime
                }
              }
            : itinerary.activities.booked,
        unbooked: isUnBookedActivity
          ? {
              ...itinerary.activities.unbooked,
              [isUnBookedActivity.id]: {
                ...isUnBookedActivity,
                date:
                  selectedDate?.format('YYYY-MM-DD') || isUnBookedActivity.date,
                startTime:
                  selectedTime?.format('HH:mm') || isUnBookedActivity.startTime,
                endTime:
                  selectedTime?.add(1, 'hour').format('HH:mm') ||
                  isUnBookedActivity.endTime
              }
            }
          : itinerary?.activities.unbooked
      }
    };

    dispatch({ type: 'UPDATE_ITINERARY', payload });
    setOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog
        open={open}
        onClose={handleClose}
        className="relative z-50 max-w-md mx-auto"
      >
        <h1 className="flex items-center justify-between px-3 pt-2 pb-4 text-xl text-blue">
          {activity.name}
          <DeleteActivityDialogue activity={activity} />
        </h1>
        {isAlreadyBooked && (
          <p className="text-red-500 px-3 text-center pb-3">
            This time slot is already booked!
          </p>
        )}
        <div className="px-3 flex items-center justify-center gap-2">
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
          />
          <TimePicker
            label="Select Time"
            value={selectedTime}
            onChange={handleTimeChange}
          />
        </div>

        <DialogActions>
          <div className="flex gap-3 mt-[20px] items-center justify-center w-full px-3 mb-3">
            <Button
              name="Close"
              className="w-full !text-blue font-semibold bg-transparent border border-blue"
              onClick={() => setOpen(false)}
            />
            <Button
              disabled={isAlreadyBooked}
              name="Save"
              className="w-full"
              onClick={handleSave}
            />
          </div>
        </DialogActions>
      </Dialog>
    </LocalizationProvider>
  );
};

export default EditActivityForm;
