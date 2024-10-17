import { create } from 'zustand';
import { itinerary } from '@itineract/utility/itinerary';
import { Itinerary } from '@itineract/types/Itinerary';

export type ItineraryStore = {
  itineraryData: Itinerary; // Change to a single Itinerary object
  setItineraryData: (data: Itinerary) => void; // Change to accept a single Itinerary
};

const useItineraryStore = create<ItineraryStore>((set) => ({
  itineraryData: itinerary, // Initialize with the single itinerary object
  setItineraryData: (data) => set({ itineraryData: data }), // Update function accepts a single Itinerary
}));

export default useItineraryStore;
