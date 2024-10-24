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

export const threeDayTourSliderData: z.infer<
  typeof TrendingImageSliderDataSchema
>[] = [
  {
    category: 'HOTEL',
    title: 'Vitallis Villas',
    id: 'vitallis-villas',
    rating: 4.6,
    description:
      'Puka Beach is 800 meters long and fronted by a big cliff with a forest alongside it. At dusk you can see flying foxes (very big bats) flying across the top of the cliff.The sand is coarser than that of White Beach due to the small bits of coral mixed in with it. In the past the beach also used to be lined with puka shells, which is where it got its name from.',
    reviews: 2500,
    price: 150.0,
    image: {
      url: '/images/nature-one.jpg',
      title: 'Vitallis Villas'
    }
  },
  {
    category: 'ZOO',
    title: 'Baluarty Zoo',
    id: 'baluarty-zoo',
    rating: 4.6,
    description:
      'Puka Beach is 800 meters long and fronted by a big cliff with a forest alongside it. At dusk you can see flying foxes (very big bats) flying across the top of the cliff.The sand is coarser than that of White Beach due to the small bits of coral mixed in with it. In the past the beach also used to be lined with puka shells, which is where it got its name from.',
    reviews: 2550,
    price: 60.0,
    image: {
      url: '/images/nature-two.jpg',
      title: 'Baluarty Zoo'
    }
  },
  {
    category: 'NATURE',
    title: 'Boracay Summer',
    id: 'boracay-2024',
    rating: 4.6,
    description:
      'Puka Beach is 800 meters long and fronted by a big cliff with a forest alongside it. At dusk you can see flying foxes (very big bats) flying across the top of the cliff.The sand is coarser than that of White Beach due to the small bits of coral mixed in with it. In the past the beach also used to be lined with puka shells, which is where it got its name from.',
    reviews: 2500,
    price: 120.0,
    image: {
      url: '/images/nature-three.jpg',
      title: 'Boracay Summer 2024'
    }
  }
];
