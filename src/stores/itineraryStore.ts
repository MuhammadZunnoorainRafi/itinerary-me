// @ts-ignore
import { BookedActivity, type Activity } from '@itineract/types/Activity';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ItineraryState = {
  bookedActivities: Array<
    Activity & {
      date: string;
      startTime: string;
      endTime: string;
    }
  >;
  unbookedActivities: Array<Activity>;
};

type ItineraryActions = {
  setActivityAsBooked: (
    activity: Activity,
    date: string,
    startTime: string,
    endTime: string
  ) => void;
  setActivityAsUnbooked: (activity: Activity) => void;
};

export type ItineraryStore = ItineraryState & ItineraryActions;

const defaultInitState: ItineraryState = {
  bookedActivities: [],
  unbookedActivities: []
};

/**
 * Create a booking appointment store to handle booked and unbooked activities
 * @returns {ItineraryStore}
 */
export const createItineraryStore = (initProps?: Partial<ItineraryState>) =>
  create(
    persist(
      (set) => ({
        ...defaultInitState,
        ...initProps,
        setActivityAsBooked: (
          activity: Activity,
          date: string,
          startTime: string,
          endTime: string
        ) =>
          set((state: ItineraryState) => ({
            bookedActivities: [
              ...state.bookedActivities,
              { ...activity, date, startTime, endTime } as BookedActivity
            ],
            unbookedActivities: state.unbookedActivities.filter(
              (a) => a.id !== activity.id
            )
          })),
        setActivityAsUnbooked: (activity: Activity) =>
          set((state: ItineraryState) => ({
            bookedActivities: state.bookedActivities.filter(
              (a) => a.id !== activity.id
            ),
            unbookedActivities: [...state.unbookedActivities, activity]
          }))
      }),
      { name: 'booking-appointment-store' }
    )
  );
