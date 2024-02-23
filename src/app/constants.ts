import { IDish } from './types';

export const dishData: Array<IDish> = [
  {
    id: 0,
    name: 'Гамбургер',
    image: './assets/burger.jpg',
    price: 300,
    composition:
      'котлета из говяжего фарша, салат, сыр, помидоры, репчатый лук',
  },
  {
    id: 1,
    name: 'Плов',
    image: './assets/plov.jpg',
    price: 250,
    composition: 'рис, говядина, чеснок, морковь, изюм',
  },
  {
    id: 2,
    name: 'Паста Карбонара',
    image: './assets/Pasta.jpg',
    price: 250,
    composition: 'макароны, сливки, сыр, бекон',
  },
];

export const dishToBasket: Array<IDish> = [];
