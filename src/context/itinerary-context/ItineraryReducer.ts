import { ActionItinerary, StateItinerary } from '@itineract/types/Itinerary';

export const itineraryReducer = (
  state: StateItinerary,
  action: ActionItinerary
) => {
  switch (action.type) {
    case 'CREATE_ITINERARY': {
      return {
        itineraries: [action.payload, ...state.itineraries]
      };
    }
    case 'UPDATE_ITINERARY': {
      const updatedItineraryArray = state.itineraries.map((val) =>
        val.id === action.payload.id ? action.payload : val
      );
      if (state.itineraries === updatedItineraryArray) {
        return state;
      }
      return {
        itineraries: updatedItineraryArray
      };
    }
    case 'UPDATE_ITINERARY_ACTIVITIES': {
      const updatedItineraryArray = state.itineraries.map((val) =>
        val.id === action.payload.id ? action.payload : val
      );
      if (state.itineraries === updatedItineraryArray) {
        return state;
      }
      return {
        itineraries: updatedItineraryArray
      };
    }

    default:
      return state;
  }
};
