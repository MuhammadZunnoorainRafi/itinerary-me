'use client';
import { useItineraryContext } from '@itineract/context/itinerary-context/ItineraryContext';
import useDateStore from '@itineract/stores/useDateRangerStore';
import { Itinerary } from '@itineract/types/Itinerary';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidV4 } from 'uuid';
import Button from './Button';
import DateRangePicker from './DatesRangesPicker';
import AddActivityModal from './activity/AddActivityModal';

interface AddNewItineraryProps {
  onSubmitCloseModal: () => void; // Prop to handle modal closing
  mode: 'edit' | 'create';
  itinerary?: Itinerary;
}

const AddNewItinerary: React.FC<AddNewItineraryProps> = ({
  onSubmitCloseModal,
  mode,
  itinerary
}) => {
  const { dispatch } = useItineraryContext();

  const [itineraryName, setItineraryName] = useState<string>(
    itinerary?.title || ''
  );
  const [createdItineraryId, setCreatedItitnerayId] = useState('');
  const [InputCheck, setInputCheck] = useState<boolean>(false);
  const [DateRangeChecker, setDateRangeChecker] = useState<boolean>(false);

  const { startDate, endDate, setDateRange } = useDateStore();

  // Set initial date values based on itinerary or fallback to the current store value
  const initialStartDate = itinerary ? itinerary.startDate : startDate;
  const initialEndDate = itinerary ? itinerary.endDate : endDate;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItineraryName(e.target.value);
  };
  const handleSubmitNewItinerary = () => {
    // Check if the itinerary name is valid (at least 4 characters)
    if (!initialStartDate || !initialEndDate) {
      setDateRangeChecker(true);
    } else {
      setDateRangeChecker(false);
    }
    if (itineraryName.length >= 4) {
      setInputCheck(false);
    } else {
      setInputCheck(true);
    }

    // Check if both startDate and endDate are selected
    if (itineraryName.length >= 4 && initialStartDate && initialEndDate) {
      const payload: Itinerary = {
        id: itinerary ? itinerary.id : uuidV4(),
        title: itineraryName,
        startDate: startDate || initialStartDate,
        endDate: endDate || initialEndDate,
        country: 'singapore',
        duration: 1,
        activities: itinerary
          ? itinerary.activities
          : { booked: {}, unbooked: {} }
      };
      itinerary
        ? dispatch({ type: 'UPDATE_ITINERARY', payload })
        : dispatch({ type: 'CREATE_ITINERARY', payload });
      itinerary
        ? toast.success('Itinerary updated')
        : toast.success('New itinerary added');
      setCreatedItitnerayId(payload.id);
      setItineraryName('');
      setDateRange({ startDate: '', endDate: '' });
      // onSubmitCloseModal(); // Close the modal
    } else {
      console.log('Form cannot be submitted now.');
    }
  };

  const handleActivityModalClose = () => {
    setCreatedItitnerayId(''); // Reset the ID when the modal is closed
    onSubmitCloseModal(); // Now close the parent modal
  };

  return (
    <div>
      {mode === 'create' ? (
        <div>
          <h5 className="text-dark-blue text-[19px] font-bold mb-6">
            New Itinerary
          </h5>
        </div>
      ) : (
        <div>
          <div>
            <h5 className="text-dark-blue text-[19px] font-bold mb-6">
              Edit Itinerary
            </h5>
          </div>
        </div>
      )}
      {createdItineraryId && (
        <>
          <AddActivityModal
            id={createdItineraryId}
            onClose={handleActivityModalClose}
          />
        </>
      )}
      {InputCheck && (
        <span className="text-[14.5px] text-red-500">
          Please enter at least 4 characters in the itinerary name.
        </span>
      )}
      <input
        className="outline-none text-dark-blue border border-blue w-full h-[55px] px-2 mb-4 mt-1 rounded-[7px]"
        value={itineraryName}
        onChange={handleInputChange}
        placeholder="Enter itinerary name"
      />
      {DateRangeChecker && (
        <span className="text-[14.5px] text-red-500">
          Date range cannot be left empty.
        </span>
      )}
      <DateRangePicker
        initialStartDate={itinerary?.startDate}
        initialEndDate={itinerary?.endDate}
      />
      {mode === 'create' ? (
        <Button
          name="Create Itinerary"
          className="w-full mt-[20px]"
          onClick={handleSubmitNewItinerary}
        />
      ) : (
        <div className="flex gap-3 mt-[20px]">
          <Button
            name="Close"
            className="w-full !text-blue font-semibold bg-transparent border border-blue"
            onClick={() => onSubmitCloseModal()}
          />
          <Button
            name="Save"
            className="w-full"
            onClick={handleSubmitNewItinerary}
          />
        </div>
      )}
    </div>
  );
};

export default AddNewItinerary;
