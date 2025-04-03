const INGREDIENTS_MAPPING: Record<string, {color: string, image: any}> = {
  'молоко': {color: '#F0F8FF', image: require('@/assets/ingredients/milk.png')},
  'milk': {color: '#F0F8FF', image: require('@/assets/ingredients/milk.png')},
  'сыр': {color: '#FFD700', image: require('@/assets/ingredients/cheese.png')},
  'cheese': {color: '#FFD700', image: require('@/assets/ingredients/cheese.png')},

  'помидор': {color: '#FF6347', image: require('@/assets/ingredients/tomato.png')},
  'tomato': {color: '#FF6347', image: require('@/assets/ingredients/tomato.png')},
  'огурец': {color: '#32CD32', image: require('@/assets/ingredients/cucumber.png')},
  'cucumber': {color: '#32CD32', image: require('@/assets/ingredients/cucumber.png')},
  'лук': {color: '#71ed71', image: require('@/assets/ingredients/onion.png')},
  'onion': {color: '#71ed71', image: require('@/assets/ingredients/onion.png')},
  'салат': {color: '#489f48', image: require('@/assets/ingredients/lettuce.png')},
  'lettuce': {color: '#489f48', image: require('@/assets/ingredients/lettuce.png')},
  'чеснок': {color: '#bcc8bc', image: require('@/assets/ingredients/garlic.png')},
  'garlic': {color: '#bcc8bc', image: require('@/assets/ingredients/garlic.png')},
  'болгарский перец': {color: '#c11f38', image: require('@/assets/ingredients/bellPepper.png')},
  'bell pepper': {color: '#c11f38', image: require('@/assets/ingredients/bellPepper.png')},

  'курица': {color: '#F4A460', image: require('@/assets/ingredients/chicken.png')},
  'chicken': {color: '#F4A460', image: require('@/assets/ingredients/chicken.png')},
  'говядина': {color: '#8B4513', image: require('@/assets/ingredients/beef.png')},
  'beef': {color: '#8B4513', image: require('@/assets/ingredients/beef.png')},
  'свинина': {color: '#c1276a', image: require('@/assets/ingredients/pork.png')},
  'pork': {color: '#c1276a', image: require('@/assets/ingredients/pork.png')},
  'фарш': {color: '#9f1b40', image: require('@/assets/ingredients/forcemeat.png')},
  'forcemeat': {color: '#9f1b40', image: require('@/assets/ingredients/forcemeat.png')},

  'соус': {color: '#a8a5a5', image: require('@/assets/ingredients/sauce.png')},
  'sauce': {color: '#a8a5a5', image: require('@/assets/ingredients/sauce.png')},

  'яйца': {color: '#e17e62', image: require('@/assets/ingredients/egg.png')},
  'egg': {color: '#e17e62', image: require('@/assets/ingredients/egg.png')},

  'хлеб': {color: '#682e1c', image: require('@/assets/ingredients/bread.png')},
  'bread': {color: '#682e1c', image: require('@/assets/ingredients/bread.png')},
  'бургерные булочки': {color: '#d8b27e', image: require('@/assets/ingredients/burgerBuns.png')},
  'burger buns': {color: '#d8b27e', image: require('@/assets/ingredients/burgerBuns.png')},

  '_default': {color: '#616060', image: require('@/assets/ingredients/default.png')},
};

export function getIngredientData(name: string) {
  const lowerName = name.toLowerCase().trim();
  return INGREDIENTS_MAPPING[lowerName] || INGREDIENTS_MAPPING['_default'];
}