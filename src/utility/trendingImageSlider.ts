import * as z from 'zod';
import { TrendingImageSliderDataSchema } from '../types/trendingImageSlider';

// Correct the type to match the updated schema
export const trendingImageSliderData: z.infer<
  typeof TrendingImageSliderDataSchema
>[] = [
  {
    category: 'ATTRACTION',
    title: 'Boracay\nPuka Beach',
    id: '1',
    rating: 4.6,
    description:
      'Puka Beach is 800 meters long and fronted by a big cliff with a forest alongside it. At dusk you can see flying foxes (very big bats) flying across the top of the cliff.The sand is coarser than that of White Beach due to the small bits of coral mixed in with it. In the past the beach also used to be lined with puka shells, which is where it got its name from.',
    reviews: 2500,
    price: 150.0,
    image: {
      url: '/images/puka-beach.png',
      title: 'Boracay Puka Beach'
    }
  },
  {
    category: 'LEISURE',
    title: 'Paraw Sailing\nBoracay',
    id: '2',
    rating: 4.6,
    description:
      'Puka Beach is 800 meters long and fronted by a big cliff with a forest alongside it. At dusk you can see flying foxes (very big bats) flying across the top of the cliff.The sand is coarser than that of White Beach due to the small bits of coral mixed in with it. In the past the beach also used to be lined with puka shells, which is where it got its name from.',
    reviews: 2550,
    price: 60.0,
    image: {
      url: '/images/parasail.png',
      title: 'Paraw Sailing Boracay'
    }
  },
  {
    category: 'FOOD HOPPING',
    title: "Lunch\nD'Talipapa",
    id: '3',
    rating: 4.6,
    description:
      'Puka Beach is 800 meters long and fronted by a big cliff with a forest alongside it. At dusk you can see flying foxes (very big bats) flying across the top of the cliff.The sand is coarser than that of White Beach due to the small bits of coral mixed in with it. In the past the beach also used to be lined with puka shells, which is where it got its name from.',
    reviews: 2500,
    price: 120.0,
    image: {
      url: '/images/puka-beach.png',
      title: "Lunch at D'Talipapa"
    }
  },
  {
    category: 'LEISURE',
    title: 'Kawa Hot Bath\nin Tibiao',
    id: '4',
    rating: 4.6,
    description:
      'Puka Beach is 800 meters long and fronted by a big cliff with a forest alongside it. At dusk you can see flying foxes (very big bats) flying across the top of the cliff.The sand is coarser than that of White Beach due to the small bits of coral mixed in with it. In the past the beach also used to be lined with puka shells, which is where it got its name from.',
    reviews: 2500,
    price: 80.0,
    image: {
      url: '/images/parasail.png',
      title: 'Kawa Hot Bath in Tibiao'
    }
  }
];

export const heritageTourData = {
  name: 'Heritage Tour',
  duration: '3 days',
  tourItineraries: [
    {
      id: 'boracay-2024',
      title: 'Boracay Summer 2024',
      startDate: '2024-06-12',
      endDate: '2024-06-18',
      image: '/images/nature-one.png',
      category: 'Nature',
      activities: {
        unbooked: {
          'activity-1': {
            id: 'activity-1',
            name: 'Puka Beach Island',
            description: '1 day, 3 pax',
            photo: { url: '/images/puka-beach.png', title: 'Puka Beach' },
            duration: 60,
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
            createdAt: '2024-06-01T08:00:00',
            date: '2024-10-12',
            startTime: '12:00',
            endTime: '13:00'
          }
        }
      }
    }
  ]
};
