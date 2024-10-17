import { ActionItinerary, StateItinerary } from '@itineract/types/Itinerary';
import {
  createContext,
  Dispatch,
  ReactNode,
  Reducer,
  useContext,
  useReducer
} from 'react';
import { itineraryReducer } from './ItineraryReducer';

type InitialStateType = {
  state: StateItinerary;
  dispatch: Dispatch<ActionItinerary>;
};

const ItinararyContext = createContext<InitialStateType | undefined>(undefined);

export const ItinararyContextProvider = ({
  children
}: {
  children: ReactNode;
}) => {
  const initialState = {
    itineraries: []
  };
  const [state, dispatch] = useReducer(itineraryReducer, initialState);
  return (
    <ItinararyContext.Provider value={{ state, dispatch }}>
      {children}
    </ItinararyContext.Provider>
  );
};

export const useItineraryContext = () => {
  const context = useContext(ItinararyContext);
  if (context === null) {
    throw new Error('Please use context inside context provider');
  }
  return context as InitialStateType;
};
