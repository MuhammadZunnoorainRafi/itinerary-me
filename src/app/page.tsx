import { trendingImageSliderData } from '@itineract/utility/trendingImageSlider';
import Imageslider from '@itineract/components/Imageslider';
import HomeImageSlider from '@itineract/components/HomeImageSlider';
import ItinerariesSlider from '@itineract/components/ItinerariesSlider';
import { itinerary } from '@itineract/utility/itinerary';

export default function Page() {
  return (
    <div className="container-mobile">
      <HomeImageSlider />
      <ItinerariesSlider ItinerarisData={itinerary} />
      <Imageslider sliderData={trendingImageSliderData} heading="Trending" />
      <Imageslider
        sliderData={trendingImageSliderData}
        heading="Tour Packages"
      />
    </div>
  );
}
