import type { Menu } from '@lib/types/menu';
import type { Product } from '@lib/types/product';

type Category = { category: Menu; products: Product[] };

export const allMenus: Readonly<Category[]> = [
  {
    category: 'Original',
    products: [
      {
        name: 'Butter Waffle',
        price: 25_000,
        description:
          'Bubur dengan daging ayam pilihan ditambah cakwe, dibalur dengan minyak wijen impor yang spesial dibuat di Malaysia menghasilkan bubur yang bukan hanya mengenyangkan, tetapi juga bermakna di hati',
        image: '/assets/menu/original/original1.jpg'
      },
      {
        name: 'Original Waffle',
        price: 25_000,
        description:
          'Bubur dengan daging ayam pilihan ditambah cakwe, dibalur dengan minyak wijen impor yang spesial dibuat di Malaysia menghasilkan bubur yang bukan hanya mengenyangkan, tetapi juga bermakna di hati',
        image: '/assets/menu/original/original2.jpg'
      },
    ]
  },
  {
    category: 'Fruit',
    products: [
      {
        name: 'Banana Waffle',
        price: 8_000,
        description:
          'Telur Bebek yang dipilih dengan hati dan diasinkan dengan rasa yang pas menghasilkan telur asin yang berkualitas tinggi',
        image: '/assets/menu/fruit/fruit1.jpg'
      },
      {
        name: 'Strawberry Waffle',
        price: 8_000,
        description:
          'Telur Bebek yang dipilih dengan hati dan diasinkan dengan rasa yang pas menghasilkan telur asin yang berkualitas tinggi',
        image: '/assets/menu/fruit/fruit2.jpg'
      },
      {
        name: 'Blueberry Waffle',
        price: 8_000,
        description:
          'Telur Bebek yang dipilih dengan hati dan diasinkan dengan rasa yang pas menghasilkan telur asin yang berkualitas tinggi',
        image: '/assets/menu/fruit/fruit3.jpg'
      },
    ]
  },
  {
    category: 'Seafood',
    products: [
      {
        name: 'Prawn waffle',
        price: 15_000,
        description:
          'Krupuk asli Bandung yang digoreng dengan suhu yang pas menghasilkan krupuk yang gurih dan renyah',
        image: '/assets/menu/seafood/seafood1.jpg'
      },
      {
        name: 'Crab waffle',
        price: 15_000,
        description:
          'Krupuk asli Bandung yang digoreng dengan suhu yang pas menghasilkan krupuk yang gurih dan renyah',
        image: '/assets/menu/seafood/seafood2.jpg'
      },
      {
        name: 'Tuna waffle',
        price: 15_000,
        description:
          'Krupuk asli Bandung yang digoreng dengan suhu yang pas menghasilkan krupuk yang gurih dan renyah',
        image: '/assets/menu/seafood/seafood3.jpg'
      },
    ]
  }
];
