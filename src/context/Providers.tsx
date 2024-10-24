'use client';
import React from 'react';
import { ItinararyContextProvider } from './itinerary-context/ItineraryContext';
import { PhilipineItinararyContextProvider } from './philipine-itinerary-context/PhilipineItineraryContext';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ItinararyContextProvider>
      <PhilipineItinararyContextProvider>
        {children}
      </PhilipineItinararyContextProvider>
    </ItinararyContextProvider>
  );
}

export default Providers;
