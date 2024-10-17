import React from 'react'
import Image from 'next/image';

function CreateItineraryHeader() {
  return (
    <div>
      <div className="text-sm breadcrumbs mx-4 my-2">
        <ul className="font-bold flex items-center gap-1.5">
          {/* Added flex to align items */}
          <span className="text-base-300 font-sans leading-3">Itinerary</span>
          <Image
            className="max-w-[7px] max-h-[8px] mt-[1.5px]"
            src="/images/s-arrow.png"
            alt="arrow"
            width={100} // Adjusted to match the class max-width
            height={100} // Adjusted to match the class max-height
          />
        </ul>
        <h5 className="text-[16.5px] font-semibold text-dark-blue mt-3">
          Your itinerary
        </h5>
        <p className="text-blue font-medium text-[12.5px] mt-1">
          Have the flexibility to manage your itinerary.
        </p>
      </div>
      <div className="bg-light-gray w-full h-[2px] mt-2"></div>
    </div>
  )
}

export default CreateItineraryHeader