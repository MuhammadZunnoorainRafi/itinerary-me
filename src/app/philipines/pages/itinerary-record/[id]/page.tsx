'use client';
import Breadcrumb from '@itineract/components/Breadcrumb';
import ItineraryBooking from '@itineract/components/ItineraryBooking';
import PhilipinesItineraryBooking from '@itineract/components/philipines/PhilipinesItineararyBooking';
import { usePhilipineItineraryContext } from '@itineract/context/philipine-itinerary-context/PhilipineItineraryContext';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

function Page() {
  const { state } = usePhilipineItineraryContext();
  const params = useParams();
  const itinerary = state.itineraries.find((val) => val.id === params!.id);
  if (!itinerary) {
    return <p>Itinerary not found</p>;
  }

  return (
    <div className="container-mobile">
      <div className="py-4">
        <Link href="/philipines">
          <Image
            className="max-w-[25px] max-h-[25px] ml-3"
            src="/images/arrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
        </Link>
      </div>
      <Breadcrumb />
      <PhilipinesItineraryBooking itinerary={itinerary} />
    </div>
  );
}

export default Page;
