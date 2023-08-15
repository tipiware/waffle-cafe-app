import type { Product } from '@lib/types/product';

export const favorites: Readonly<Product[]> = [
  {
    name: 'Original waffle',
    price: 4.00,
    description:
      'This is a classic waffle prepared with the traditional and timeless flavors that have made waffles a beloved culinary staple. Imagine a waffle that embodies the perfect balance of a crispy exterior and a soft, fluffy interior, achieved through a tried-and-true waffle batter recipe.',
    image: '/assets/offer/original.jpg'
  },
  {
    name: 'Fruit waffle',
    price: 6.00,
    description:
      'This is a delicious and delightful dish that combines the beloved crispy texture of waffles with the freshness and sweetness of various fruits. Picture a golden-brown waffle as a canvas, generously adorned with an array of fresh fruits such as strawberries, blueberries, bananas, kiwi, and more',
    image: '/assets/offer/strawberry.jpg'
  },
  {
    name: 'Seafood waffle',
    price: 8.00,
    description:
      'These waffles combines the concept of waffles with seafood toppings or fillings. Imagine a savory waffle batter infused with flavors like herbs and spices, cooked until crispy and golden. This waffle could then be topped or filled with a variety of seafood options such as shrimp, crab, lobster, or even fish.',
    image: '/assets/offer/seafood.jpg'
  }
];
