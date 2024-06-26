export const perks = [
  {
    id: '0001',
    title: 'Vegas Hotel',
    description: 'Breakfast included',
    categories: ['New & Local', 'new', 'local'],
    rating: 5,
    price: 125,
    duration: 'daily',
    image: require('../../assets/perks/vegas_hotel.jpg'),
  },

  {
    id: '0002',
    title: 'Salon & Spa',
    description: 'Massage included',
    categories: [
      'New & Local',
      'Health & Fitness',
      'Salon & Spa',
      'health',
      'salon',
      'spa',
    ],
    rating: 4,
    price: 35,
    duration: 'hour',
    image: require('../../assets/perks/spa.jpg'),
  },

  {
    id: '0003',
    title: 'Manifest Gym',
    description: 'Shower, towels',
    categories: [
      'New & Local',
      'Things to Do',
      'Health & Fitness',
      'things',
      'health',
      'fitness',
      'gym',
    ],
    rating: 5,
    price: 65,
    duration: 'hour',
    image: require('../../assets/perks/gym.jpg'),
  },

  {
    id: '0004',
    title: 'Gift Card',
    description: 'All stores included',
    categories: ['Shopping', 'shopping'],
    rating: 3,
    price: 90,
    duration: 'once',
    image: require('../../assets/perks/shopping.jpg'),
  },
];
