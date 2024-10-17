import Link from 'next/link';
import React from 'react';

function CreateItinerary() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-dark-blue font-semibold py-3">Your Itineraries</h1>
      <Link href="/pages/create-itinerary" className="pr-3 text-primary">
        Create itinerary
      </Link>
    </div>
  );
}

export default CreateItinerary;
