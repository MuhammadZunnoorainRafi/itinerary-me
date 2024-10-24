import { ActionItinerary, StateItinerary } from '@itineract/types/Itinerary';
import {
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useContext,
  useReducer
} from 'react';

import { philipineItineraryReducer } from './philipineItineraryReducer';

type InitialStateType = {
  state: StateItinerary;
  dispatch: Dispatch<ActionItinerary>;
};

const PhilipineItinararyContext = createContext<InitialStateType | undefined>(
  undefined
);

export const PhilipineItinararyContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const initialState = {
    itineraries: []
  };
  const [state, dispatch] = useReducer(philipineItineraryReducer, initialState);
  return (
    <PhilipineItinararyContext.Provider value={{ state, dispatch }}>
      {children}
    </PhilipineItinararyContext.Provider>
  );
};

export const usePhilipineItineraryContext = () => {
  const context = useContext(PhilipineItinararyContext);
  if (context === null) {
    throw new Error('Please use context inside context provider');
  }
  return context as InitialStateType;
};
