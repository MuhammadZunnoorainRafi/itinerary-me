'use client';
import React from 'react';
import { ItinararyContextProvider } from './itinerary-context/ItineraryContext';

function Providers({ children }: { children: React.ReactNode }) {
  return <ItinararyContextProvider>{children}</ItinararyContextProvider>;
}

export default Providers;
