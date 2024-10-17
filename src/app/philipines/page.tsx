import { trendingImageSliderData } from '@itineract/utility/trendingImageSlider';
import Imageslider from '@itineract/components/Imageslider';
import HomeImageSlider from '@itineract/components/HomeImageSlider';
import ItinerariesSlider from '@itineract/components/ItinerariesSlider';
import { itinerary } from '@itineract/utility/itinerary';
import HeritageTour from '@itineract/components/philipines/HeritageTour';

export default function Page() {
  return (
    <div className="container-mobile">
      <HomeImageSlider />
      <HeritageTour heading="Heritage Tour" duration="3 days" />
      {/* <ItinerariesSlider ItinerarisData={itinerary} /> */}
      <Imageslider sliderData={trendingImageSliderData} heading="Trending" />
      <Imageslider
        sliderData={trendingImageSliderData}
        heading="We Recommended"
      />
    </div>
  );
}
