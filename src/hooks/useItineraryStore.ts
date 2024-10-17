import { ItineraryStoreContext } from '@itineract/providers/ItineraryStoreProvider';
import { type ItineraryStore } from '@itineract/stores/itineraryStore';
import { useContext } from 'react';
import { useStore } from 'zustand';

export const useItineraryStore = (selector: (state: unknown) => void) => {
  const itineraryStoreContext = useContext(ItineraryStoreContext);

  if (!itineraryStoreContext) {
    throw new Error(
      'useItineraryStore must be used within a ItineraryStoreProvider'
    );
  }

  return useStore(itineraryStoreContext, selector);
};
