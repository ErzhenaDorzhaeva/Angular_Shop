import { BehaviorSubject } from 'rxjs';

const storeData = {
  dishes: [
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
  ],
};

const store = new BehaviorSubject(storeData);
module.exports = {
  store,
};
