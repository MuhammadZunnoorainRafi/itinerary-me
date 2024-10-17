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
import { useParams, useRouter } from 'next/navigation';
import Button from '../Button';

type Params = {
  id: string;
};
const DeleteItineraryModal = () => {
  const router = useRouter();
  const { dispatch } = useItineraryContext();
  const params = useParams() as Params;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    setTimeout(() => {
      dispatch({ type: 'DELETE_ITINERARY', payload: { id: params.id } });
    }, 200);
    setOpen(false);
    router.push('/pages/create-itinerary');
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
          Delete Itinerary
        </DialogTitle>
        <DialogContent>
          <h1>You are deleting this itinerary.Proceed?</h1>
        </DialogContent>

        <DialogActions>
          <div className="flex gap-3  items-center justify-center mx-auto w-full mb-4 px-3">
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

export default DeleteItineraryModal;
