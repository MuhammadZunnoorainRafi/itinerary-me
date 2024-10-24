import { Itinerary } from '@itineract/types/Itinerary';

export const philipinesItineraryData: Itinerary[] = [
  {
    id: 'vitallis-villas',
    title: 'Vitallis Villas',
    startDate: '2024-06-12',
    endDate: '2024-06-18',
    image: '/images/nature-one.png',
    duration: 3,
    country: 'philipine',
    category: 'HOTEL',
    activities: {
      unbooked: {
        'activity-1': {
          id: 'activity-1',
          name: 'Puka Beach Island',
          description: '1 day, 3 pax',
          photo: { url: '/images/puka-beach.png', title: 'Puka Beach' },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00'
        }
      },
      booked: {
        'activity-4': {
          id: 'activity-4',
          name: 'Boracay Para Sailing',
          description: '1 day, 3 pax',
          photo: {
            url: '/images/parasail.png',
            title: 'Boracay Para Sailing'
          },
          duration: 120,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '06:00',
          endTime: '07:00'
        },
        'activity-2': {
          id: 'activity-2',
          name: 'Kawa Hot Bath in Tibiao',
          description: '1 day, 3 pax',
          photo: { url: '/images/hot-bath.png', title: 'Kawa Hot Bath' },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '09:00',
          endTime: '10:00'
        },
        'activity-3': {
          id: 'activity-3',
          name: "Lunch D'Talipapa",
          description: '1 day, 3 pax',
          photo: { url: '/images/lunch.png', title: "Lunch at D'Talipapa" },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '12:00',
          endTime: '13:00'
        }
      }
    }
  },
  {
    id: 'baluarty-zoo',
    title: 'Baluarty Zoo',
    startDate: '2024-06-12',
    endDate: '2024-06-18',
    image: '/images/nature-two.png',
    duration: 3,
    country: 'philipine',
    category: 'ZOO',
    activities: {
      unbooked: {
        'activity-1': {
          id: 'activity-1',
          name: 'Puka Beach Island',
          description: '1 day, 3 pax',
          photo: { url: '/images/puka-beach.png', title: 'Puka Beach' },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00'
        }
      },
      booked: {
        'activity-4': {
          id: 'activity-4',
          name: 'Boracay Para Sailing',
          description: '1 day, 3 pax',
          photo: {
            url: '/images/parasail.png',
            title: 'Boracay Para Sailing'
          },
          duration: 120,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '06:00',
          endTime: '07:00'
        },
        'activity-2': {
          id: 'activity-2',
          name: 'Kawa Hot Bath in Tibiao',
          description: '1 day, 3 pax',
          photo: { url: '/images/hot-bath.png', title: 'Kawa Hot Bath' },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '09:00',
          endTime: '10:00'
        },
        'activity-3': {
          id: 'activity-3',
          name: "Lunch D'Talipapa",
          description: '1 day, 3 pax',
          photo: { url: '/images/lunch.png', title: "Lunch at D'Talipapa" },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '12:00',
          endTime: '13:00'
        }
      }
    }
  },
  {
    id: 'boracay-2024',
    title: 'Boracay Summer',
    startDate: '2024-06-12',
    endDate: '2024-06-18',
    image: '/images/nature-three.png',
    duration: 3,
    country: 'philipine',
    category: 'Nature',
    activities: {
      unbooked: {
        'activity-1': {
          id: 'activity-1',
          name: 'Puka Beach Island',
          description: '1 day, 3 pax',
          photo: { url: '/images/puka-beach.png', title: 'Puka Beach' },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00'
        }
      },
      booked: {
        'activity-4': {
          id: 'activity-4',
          name: 'Boracay Para Sailing',
          description: '1 day, 3 pax',
          photo: {
            url: '/images/parasail.png',
            title: 'Boracay Para Sailing'
          },
          duration: 120,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '06:00',
          endTime: '07:00'
        },
        'activity-2': {
          id: 'activity-2',
          name: 'Kawa Hot Bath in Tibiao',
          description: '1 day, 3 pax',
          photo: { url: '/images/hot-bath.png', title: 'Kawa Hot Bath' },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '09:00',
          endTime: '10:00'
        },
        'activity-3': {
          id: 'activity-3',
          name: "Lunch D'Talipapa",
          description: '1 day, 3 pax',
          photo: { url: '/images/lunch.png', title: "Lunch at D'Talipapa" },
          duration: 60,
          takeSpace: 1,
          createdAt: '2024-06-01T08:00:00',
          date: '2024-10-12',
          startTime: '12:00',
          endTime: '13:00'
        }
      }
    }
  }
];
