'use client';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle
} from '@mui/material';
import React from 'react';
// @ts-ignore
import Link from 'next/link';
import Button from '../Button';
type Props = {
  //   activityData: any;
};
const PhAddItineraryModel = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
        className="relative max-w-md mx-auto z-10"
      >
        <DialogTitle align="center" className="font-bold text-blue">
          Where to add ?
        </DialogTitle>
        <DialogContent>
          <h1>Select an existing itinerary or create a new one?</h1>
          <div className="container-mobile">
            <div className="grid grid-cols-2 gap-3 text-left mt-8 px-3 ">
              hello world
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
          </div>
        </DialogContent>

        <DialogActions>
          <div className="flex gap-3 mt-[20px] items-center justify-center mx-auto w-full mb-4 px-3">
            <Button
              name="Close"
              className="w-full !text-blue font-semibold bg-transparent border border-blue"
              onClick={() => setOpen(false)}
            />
            <Button name="Add" className="w-full bg-blue text-white" />
          </div>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PhAddItineraryModel;
