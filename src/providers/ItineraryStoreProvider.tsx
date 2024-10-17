'use client';

import React, { createContext, useRef } from 'react';

import {
  ItineraryState,
  createItineraryStore
} from '@itineract/stores/itineraryStore';

export type ItineraryStoreApi = ReturnType<typeof createItineraryStore>;

export const ItineraryStoreContext = createContext<ItineraryStoreApi | null>(
  null
);

type ItineraryStoreProviderProps = React.PropsWithChildren<
  Partial<ItineraryState>
>;

export const ItineraryStoreProvider = ({
  children,
  ...props
}: ItineraryStoreProviderProps) => {
  const storeRef = useRef<ItineraryStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createItineraryStore(props);
  }

  return (
    <ItineraryStoreContext.Provider value={storeRef.current}>
      {children}
    </ItineraryStoreContext.Provider>
  );
};
