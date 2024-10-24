'use client';
import { formatDateRange } from '@itineract/utility/formatDate';
// Import Swiper React components and styles
import { usePhilipineItineraryContext } from '@itineract/context/philipine-itinerary-context/PhilipineItineraryContext';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';

const PhilipinesItinerariesSlider = () => {
  const {
    state: { itineraries }
  } = usePhilipineItineraryContext();

  return (
    <div>
      <div className="pl-3">
        <div className="flex items-center justify-between">
          <h1 className="text-dark-blue font-semibold py-3">
            Your Itineraries
          </h1>
          <Link href="/pages/create-itinerary" className="pr-3 text-primary">
            Create itinerary
          </Link>
        </div>
        {/* <Swiper
          ref={swiperRef} // Attach ref to Swiper
          slidesPerView={'auto'}
          loop={true}
          breakpoints={{
            1: {
              spaceBetween: 10
            },
            1100: {
              spaceBetween: 20
            }
          }}
        > */}
        <div className="flex items-center justify-start gap-5 overflow-x-scroll w-full overflow-y-hidden py-3">
          {itineraries.map((itinerary, index) => (
            <div key={itinerary.id} className="w-[400px] flex-shrink-0">
              {/* replace this div with swiper if needed  */}
              <div className="flex items-left flex-col justify-center text-left border-[2px] max-h-[85px] min-h-[85px] px-4 sm:px-6 border-light-gray rounded-[6px] cursor-pointer relative">
                <Link
                  key={itinerary.id}
                  href={`/philipines/pages/itinerary-record/${itinerary.id}`}
                  className="flex flex-col justify-center max-h-[110px] min-h-[110px] px-4 sm:px-6 rounded-[6px] cursor-pointer"
                >
                  <h5 className="text-dark-blue font-semibold pb-0.5">
                    {itinerary.title}
                  </h5>
                  {formatDateRange(itinerary.startDate, itinerary.endDate)}
                </Link>
              </div>
            </div>
          ))}
          <div className="w-[400px] flex-shrink-0 flex items-left flex-col justify-center text-left border-[2px] max-h-[85px] min-h-[85px] px-4 sm:px-6 border-light-gray rounded-[6px] cursor-pointer relative">
            <Link
              href="pages/create-itinerary"
              className="inset-0 absolute flex items-center justify-center"
            >
              <div className="flex items-center justify-center">
                <button className="text-center font-medium text-grayish text-[17px]">
                  + Add itinerary
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* </Swiper> */}
      </div>
      <div className="bg-light-purple py-1 mt-4"></div>
    </div>
  );
};

export default PhilipinesItinerariesSlider;
