export interface FeaturedRecipe {
  id: string;
  name: string;
  image: string | number;
  ingredients: Array<{name: string, amount: string}>;
  steps: string[];
  cookingTime: string;
  calories: string;
}

export const featuredRecipes: FeaturedRecipe[] = [
  {
    id: '1',
    name: 'Денер',
    image: require('@/assets/Dener.png'),
    ingredients: [
      { name: 'Лаваш', amount: '1 шт' },
      { name: 'Курица', amount: '200 г' },
      { name: 'Овощи', amount: '100 г' }
    ],
    steps: [
      'Приготовить начинку: обжарить курицу с специями',
      'Нагреть лаваш на сухой сковороде',
      'Выложить начинку и завернуть',
      'Подавать горячим с соусом'
    ],
    cookingTime: '20 мин',
    calories: '350'
  },
  {
    id: '2',
    name: 'Салат Цезарь',
    image: require('@/assets/Dener.png'),
    ingredients: [
      { name: 'Салат', amount: '100 г' },
      { name: 'Курица', amount: '150 г' },
      { name: 'Сухарики', amount: '50 г' },
      { name: 'Сыр', amount: '30 г' }
    ],
    steps: [
      'Нарезать курицу и обжарить до готовности',
      'Порвать салат руками',
      'Смешать все ингредиенты',
      'Заправить соусом и посыпать сыром'
    ],
    cookingTime: '15 мин',
    calories: '250'
  }
];