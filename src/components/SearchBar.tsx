import React from 'react';
import Image from 'next/image';

function SearchBar() {
  return (
    <div className="flex max-w-[400px] mx-auto pb-[10px]">
      <div className="bg-white min-h-[50px] max-h-[45px] flex items-center rounded-full w-full">
        <input className="w-full outline-none px-3 py-[6px] rounded-full" />
        <div className="flex items-center rounded-full min-h-[41px] min-w-[42px] justify-center bg-accent mr-1">
          <Image
            className="max-w-[17.5px]"
            src="/images/search.png"
            width={150}
            height={150}
            alt="Itineract Logo"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
