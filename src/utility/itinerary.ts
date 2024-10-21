// /src/data/itineraryData.ts
import { Itinerary } from '../types/Itinerary';

// Example data for the itinerary
export const itinerary: Itinerary = {
  id: 'boracay-2024',
  title: 'Boracay Summer 2024',
  startDate: '2024-06-12',
  endDate: '2024-06-18',
  activities: {
    unbooked: {
      // 'activity-1': {
      //   id: 'activity-1',
      //   name: 'Puka Beach Island',
      //   description: '1 day, 3 pax',
      //   photo: { url: '/images/puka-beach.png', title: 'Puka Beach' },
      //   duration: 60,
      //   createdAt: '2024-06-01T08:00:00'
      // },
      // 'activity-2': {
      //   id: 'activity-2',
      //   name: 'Kawa Hot Bath in Tibiao',
      //   description: '1 day, 3 pax',
      //   photo: { url: '/images/hot-bath.png', title: 'Kawa Hot Bath' },
      //   duration: 60,
      //   createdAt: '2024-06-01T08:00:00'
      // },
      'activity-3': {
        id: 'activity-3',
        name: "Lunch D'Talipapa",
        description: '1 day, 3 pax',
        photo: { url: '/images/lunch.png', title: "Lunch at D'Talipapa" },
        duration: 60,
        takeSpace: 1,
        createdAt: '2024-06-01T08:00:00'
        // date: '2024-06-12',
        // startTime: '01:00',
        // endTime: '02:00'
      }
    },
    booked: {
      'activity-4': {
        id: 'activity-4',
        name: 'Boracay Para Sailing',
        description: '1 day, 3 pax',
        photo: { url: '/images/parasail.png', title: 'Boracay Para Sailing' },
        duration: 120,
        takeSpace: 1,
        createdAt: '2024-06-01T08:00:00',
        date: '2024-06-12',
        startTime: '09:00',
        endTime: '10:00'
      }
      // 'activity-5': {
      //   id: 'activity-5',
      //   name: 'Some test activity',
      //   description: '1 day, 3 pax',
      //   photo: { url: '/images/parasail.png', title: 'Test Activity' },
      //   duration: 60,
      //   createdAt: '2024-06-01T08:00:00',
      //   date: '2024-06-13',
      //   startTime: '11:00',
      //   endTime: '12:00'
      // }
    }
  }
};
