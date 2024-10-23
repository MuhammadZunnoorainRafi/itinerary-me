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
  activeDay: string;
};
const EditActivityForm = ({ open, setOpen, activity, activeDay }: Props) => {
  const { state, dispatch } = useItineraryContext();
  const params = useParams();
  const [conflictOnDateChange, setConflictOnDateChange] = useState(false);
  const itinerary = state.itineraries.find((val) => val.id === params!.id);
  const [isError, setIsError] = useState<
    'idle' | 'booked' | 'invalidDate' | ''
  >('');
  const [invalidDateError, setInvalidDateError] = useState(false);

  const [selectedDate, setSelectedDate] = useState(
    activity.startTime ? dayjs(activity.date) : null
  );

  const existsInCurrentDate = selectedDate?.format('YYYY-MM-DD') === activeDay;
  const parseTimeString = (timeString: string) => {
    if (timeString) {
      const [hour, minute] = timeString.split(':');
      return dayjs()
        .set('hour', parseInt(hour))
        .set('minute', parseInt(minute));
    }
    return null;
  };
  const [selectedStartTime, setSelectedStartTime] = useState(
    activity.startTime ? parseTimeString(activity.startTime) : null
  );
  const [selectedEndTime, setSelectedEndTime] = useState(
    activity.endTime ? parseTimeString(activity.endTime) : null
  );

  const startTimeInNumber = +selectedStartTime!.format('H');
  const endTimeInNumber = +selectedEndTime!.format('H');

  const handleDateChange = (newValue: any) => {
    const existsInCurrentDateOnChange =
      newValue?.format('YYYY-MM-DD') === activeDay;
    setIsError(
      existsInCurrentDateOnChange && conflictOnDateChange ? 'booked' : 'idle'
    );
    setSelectedDate(newValue);
  };

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

  const handleStartTimeChange = (newValue: any) => {
    if (endTimeInNumber <= +newValue.format('H')) {
      setInvalidDateError(true);
    } else {
      setInvalidDateError(false);
    }
    // const isBookedAlreadyBooked = bookedActivities
    //   .filter((val) => val.startTime !== isBookedActivity?.startTime)
    //   .map((val) => val.startTime)
    //   .includes(newValue?.format('HH:mm'));
    // const isBookedAlreadyBooked = bookedActivities
    //   .filter((val) => val.startTime !== isBookedActivity?.startTime)
    //   .some(
    //     (val) =>
    //       newValue.format('HH:mm') >= val.startTime! &&
    //       newValue.format('HH:mm') <= val.endTime!
    //   );
    const isConflict = Object.values(bookedActivities).some(
      (bookedActivity) => {
        // Skip comparing with the same activity
        if (bookedActivity.id === isBookedActivity?.id) return false;

        const bookedStartTime = bookedActivity.startTime as string;
        const bookedEndTime = bookedActivity.endTime as string;
        const newStartTime = newValue.format('HH:mm');
        const newEndTime = selectedEndTime?.format('HH:mm') as any;
        // Check if the new activity overlaps with any existing activity's time range
        return (
          (newStartTime >= bookedStartTime && newStartTime < bookedEndTime) || // Overlaps with the start of an existing activity
          (newEndTime > bookedStartTime && newEndTime < bookedEndTime) || // Overlaps with the end of an existing activity
          (newStartTime <= bookedStartTime && newEndTime >= bookedEndTime) // Completely contains an existing activity
        );
      }
    );
    setSelectedStartTime(newValue);
    setConflictOnDateChange(isConflict);
    setIsError(existsInCurrentDate && isConflict ? 'booked' : 'idle');
  };
  const handleEndTimeChange = (newValue: any) => {
    if (+newValue.format('H') <= startTimeInNumber) {
      setInvalidDateError(true);
    } else {
      setInvalidDateError(false);
    }
    // const isBookedAlreadyBooked = bookedActivities
    //   .filter((val) => val.startTime !== isBookedActivity?.startTime)
    //   .map((val) => val.startTime)
    //   .includes(newValue?.format('HH:mm'));
    // const isBookedAlreadyBooked = bookedActivities
    //   .filter((val) => val.startTime !== isBookedActivity?.startTime)
    //   .some(
    //     (val) =>
    //       newValue.format('HH:mm') >= val.startTime! &&
    //       newValue.format('HH:mm') <= val.endTime!
    //   );
    const isConflict = Object.values(bookedActivities).some(
      (bookedActivity) => {
        // Skip comparing with the same activity
        if (bookedActivity.id === isBookedActivity?.id) return false;
        const bookedStartTime = bookedActivity.startTime as string;
        const bookedEndTime = bookedActivity.endTime as string;
        const newEndTime = newValue.format('HH:mm');
        const newStartTime = selectedStartTime?.format('HH:mm') as any;

        // Check if the new activity overlaps with any existing activity's time range
        return (
          (newStartTime >= bookedStartTime && newStartTime < bookedEndTime) || // Overlaps with the start of an existing activity
          (newEndTime > bookedStartTime && newEndTime < bookedEndTime) || // Overlaps with the end of an existing activity
          (newStartTime <= bookedStartTime && newEndTime >= bookedEndTime) // Completely contains an existing activity
        );
      }
    );
    setSelectedEndTime(newValue);
    setConflictOnDateChange(isConflict);
    setIsError(existsInCurrentDate && isConflict ? 'booked' : 'idle');
  };
  const handleClose = () => {
    setOpen(false);
  };

  if (!itinerary) {
    return;
  }
  const handleSave = () => {
    if (endTimeInNumber <= startTimeInNumber) {
      setInvalidDateError(true);
    } else {
      setInvalidDateError(false);
    }

    let takeSpace;
    if (selectedStartTime && selectedEndTime) {
      takeSpace =
        +selectedEndTime?.format('H') - +selectedStartTime?.format('H');
    } else {
      takeSpace = 1;
    }
    const payload = {
      ...itinerary,
      activities: {
        booked:
          isBookedActivity && isError === 'idle'
            ? {
                ...itinerary.activities.booked,
                [isBookedActivity.id]: {
                  ...isBookedActivity,
                  date:
                    selectedDate?.format('YYYY-MM-DD') || isBookedActivity.date, // Ensure date isn't overwritten to undefined
                  startTime:
                    selectedStartTime?.format('HH:mm') ||
                    isBookedActivity.startTime,
                  endTime:
                    selectedEndTime?.format('HH:mm') ||
                    isBookedActivity.endTime,
                  takeSpace: takeSpace
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
                  selectedStartTime?.format('HH:mm') ||
                  isUnBookedActivity.startTime,
                endTime:
                  selectedEndTime?.format('HH:mm') ||
                  isUnBookedActivity.endTime,
                takeSpace: 1
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
        {isError === 'booked' && (
          <p className="text-red-500 px-3 text-center pb-3">
            This time slot is already booked!
          </p>
        )}
        {invalidDateError && (
          <p className="text-red-500 px-3 text-center pb-3">
            End time must be greater than start time!
          </p>
        )}
        <div className="px-3 space-y-5">
          <DatePicker
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full"
          />
          <div className=" flex items-center justify-center gap-2">
            <TimePicker
              label="Start Time"
              value={selectedStartTime}
              onChange={handleStartTimeChange}
            />
            <TimePicker
              label="End Time"
              value={selectedEndTime}
              onChange={handleEndTimeChange}
            />
          </div>
        </div>

        <DialogActions>
          <div className="flex gap-3 mt-[20px] items-center justify-center w-full px-3 mb-3">
            <Button
              name="Close"
              className="w-full !text-blue font-semibold bg-transparent border border-blue"
              onClick={() => setOpen(false)}
            />
            <Button
              disabled={isError === 'booked' || isError === 'invalidDate'}
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
