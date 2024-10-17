'use client';
import { Delete as DeleteIcon } from '@mui/icons-material';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton
} from '@mui/material';
import React from 'react';
import { useItineraryContext } from '@itineract/context/itinerary-context/ItineraryContext';
// @ts-ignore
import { Activity } from '@itineract/types/Activity';
import { useParams } from 'next/navigation';
import Button from '../Button';
type Props = {
  activity: Activity;
};
const DeleteActivityDialogue = ({ activity }: Props) => {
  const { state, dispatch } = useItineraryContext();
  const params = useParams();
  const itinerary = state.itineraries.find((val) => val.id === params!.id);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
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

  const handleDelete = () => {
    const payload = {
      ...itinerary,
      activities: {
        booked: {
          ...Object.fromEntries(
            Object.entries(itinerary.activities.booked).filter(
              ([key]) => key !== isBookedActivity?.id // Filter out the activity to delete
            )
          )
        },
        unbooked: {
          ...Object.fromEntries(
            Object.entries(itinerary.activities.unbooked).filter(
              ([key]) => key !== isUnBookedActivity?.id // Filter out the activity to delete
            )
          )
        }
      }
    };
    dispatch({ type: 'UPDATE_ITINERARY', payload });
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleClickOpen}
        aria-label="delete"
        style={{ float: 'right' }}
      >
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        className="relative z-50 max-w-md mx-auto"
      >
        <DialogTitle align="center" className="font-bold text-blue">
          Delete Activity
        </DialogTitle>
        <DialogContent>
          <h1>You are deleting this activity from your itinerary.Proceed?</h1>
        </DialogContent>

        <DialogActions>
          <div className="flex gap-3 mt-[20px] items-center justify-center mx-auto w-full mb-4 px-3">
            <Button
              name="Close"
              className="w-full !text-blue font-semibold bg-transparent border border-blue"
              onClick={() => setOpen(false)}
            />
            <Button
              name="Delete"
              className="w-full bg-red-500 text-white"
              onClick={handleDelete}
            />
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteActivityDialogue;
