import * as z from 'zod';

// Define the schema for the photo object
const PhotoSchema = z.object({
  url: z.string(),
  title: z.string()
});

// Define the schema for each activity
const ActivitySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  photo: PhotoSchema,
  duration: z.number(),
  takeSpace: z.number().default(1),
  createdAt: z.string(),
  // Optional fields for booked activities
  date: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional()
});

// Define the schema for the activities object
const ActivitiesSchema = z.object({
  unbooked: z.record(ActivitySchema),
  booked: z.record(ActivitySchema)
});

// Define the schema for the itinerary
export const ItinerarySchema = z.object({
  id: z.string(),
  title: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  activities: ActivitiesSchema
});

type UnBookedActivity = z.infer<typeof ActivitySchema>;
type UnBookedWithId = {
  itineraryId: string;
  unbookedActivity: UnBookedActivity;
};

export type Itinerary = z.infer<typeof ItinerarySchema>;
export type ActivityType = z.infer<typeof ActivitySchema>;

export type StateItinerary = {
  itineraries: Itinerary[];
};

export type ActivityEditType = {
  id: string;
  date: string;
  startTime: string;
};

export type ActivityB_UType = Record<string, ActivityType>;

export type ActionItinerary =
  | { payload: Itinerary; type: 'CREATE_ITINERARY' }
  | { payload: Itinerary; type: 'UPDATE_ITINERARY' }
  | { payload: Itinerary; type: 'UPDATE_ITINERARY_ACTIVITIES' }
  | { payload: { id: string }; type: 'DELETE_ITINERARY' };
