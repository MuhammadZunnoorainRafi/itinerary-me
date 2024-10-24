import {
  ActionPhilipineItinerary,
  StatePhilipineItinerary
} from '@itineract/types/Itinerary';

export const philipineItineraryReducer = (
  state: StatePhilipineItinerary,
  action: ActionPhilipineItinerary
) => {
  switch (action.type) {
    case 'CREATE_PHILIPINE_ITINERARY': {
      return {
        itineraries: [action.payload, ...state.itineraries]
      };
    }
    case 'UPDATE_PHILIPINE_ITINERARY': {
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
    case 'DELETE_PHILIPINE_ITINERARY': {
      return {
        itineraries: state.itineraries.filter(
          (val) => val.id !== action.payload.id
        )
      };
    }

    default:
      return state;
  }
};
