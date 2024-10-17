import * as z from 'zod';

// Define the image schema
const ImageSchema = z.object({
  id: z.string(),
  url: z.string().url(),
  title: z.string()
});

// Update the schema to allow an array of images directly
export const ImageSliderDataSchema = z.array(ImageSchema);

// Update the type inference
export type ImageSliderData = z.infer<typeof ImageSliderDataSchema>;
