import {
  ActionPhilipineItinerary,
  StatePhilipineItinerary
} from '@itineract/types/Itinerary';
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer
} from 'react';

import { philipineItineraryReducer } from './philipineItineraryReducer';

type InitialStateType = {
  state: StatePhilipineItinerary;
  dispatch: Dispatch<ActionPhilipineItinerary>;
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
  console.log({ t: state.itineraries });
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
