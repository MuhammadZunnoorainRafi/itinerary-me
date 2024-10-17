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
    case 'DELETE_ITINERARY': {
      return {
        itineraries: state.itineraries.filter(
          (val) => val.id !== action.payload.id
        )
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
