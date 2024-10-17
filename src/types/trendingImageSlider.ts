import * as z from 'zod';

// Schema for individual images
const ImageSchema = z.object({
  url: z.string().url(),
  title: z.string(),
});

// Schema for the main data structure
export const TrendingImageSliderDataSchema = z.object({
  category: z.string(),
  title: z.string(),
  description: z.string(),
  id: z.string(),
  rating: z.number(),
  reviews: z.number(),
  price: z.number(),
  image: ImageSchema, // Reference the ImageSchema for the image object
});

// Type inferred from the schema
export type TrendingImageSliderData = z.infer<typeof TrendingImageSliderDataSchema>;

// Example usage with an array of this schema
const TrendingImageSliderArraySchema = z.array(TrendingImageSliderDataSchema);

// Type inferred from the array schema
export type TrendingImageSliderDataArray = z.infer<typeof TrendingImageSliderArraySchema>;
