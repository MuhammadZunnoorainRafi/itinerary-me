import HomeImageSliderPh from '@itineract/components/philipines/FeaturedAttractionPh';
import HeritageTour from '@itineract/components/philipines/HeritageTour';
import ImagesliderPh from '@itineract/components/philipines/ImageSliderPh';
import { trendingImageSliderData } from '@itineract/utility/trendingImageSlider';

export default function Page() {
  return (
    <div className="container-mobile">
      <HomeImageSliderPh />
      <HeritageTour heading="Heritage Tour" duration="3 days" />
      {/* <ItinerariesSlider ItinerarisData={itinerary} /> */}
      <ImagesliderPh sliderData={trendingImageSliderData} heading="Trending" />
      <ImagesliderPh
        sliderData={trendingImageSliderData}
        heading="We Recommended"
      />
    </div>
  );
}
