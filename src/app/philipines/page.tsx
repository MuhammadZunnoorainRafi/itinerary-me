import ItinerariesSlider from '@itineract/components/ItinerariesSlider';
import HomeImageSliderPh from '@itineract/components/philipines/FeaturedAttractionPh';
import HeritageTour from '@itineract/components/philipines/HeritageTour';
import ImagesliderPh from '@itineract/components/philipines/ImageSliderPh';
import PhilipinesItinerariesSlider from '@itineract/components/philipines/PhilipineItinerariesSlider';
import { trendingImageSliderData } from '@itineract/utility/trendingImageSlider';

export default function Page() {
  return (
    <div className="container-mobile">
      <HomeImageSliderPh />
      <HeritageTour heading="Heritage Tour" duration="3 days" />
      <PhilipinesItinerariesSlider />
      <ImagesliderPh sliderData={trendingImageSliderData} heading="Trending" />
      <ImagesliderPh
        sliderData={trendingImageSliderData}
        heading="We Recommended"
      />
    </div>
  );
}
