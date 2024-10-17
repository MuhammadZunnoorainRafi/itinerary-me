// /src/schemas/unbookedActivitiesSchema.ts
import { z } from 'zod';

// Define the photo type
const PhotoSchema = z.object({
  url: z.string(),
  title: z.string(),
});

// Define the activity type
const UnbookedActivitySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  photo: PhotoSchema,
  duration: z.number().min(0), // Ensure duration is a positive number
  createdAt: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }), // Validate date format
});

// Define the unbooked activities type
const UnbookedActivitiesSchema = z.record(UnbookedActivitySchema);

export { UnbookedActivitiesSchema, UnbookedActivitySchema };
