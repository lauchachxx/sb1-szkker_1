import { Dispenser } from './types';

export const initialDispensers: Dispenser[] = [
  {
    id: 'keyoss-1',
    name: 'Keyoss One',
    location: 'Main Lobby',
    status: 'operational',
    ingredients: [
      { id: 'milk', name: 'Fresh Milk', currentLevel: 2000, maxLevel: 5000, unit: 'ml' },
      { id: 'coffee', name: 'Coffee Powder', currentLevel: 500, maxLevel: 1000, unit: 'g' },
      { id: 'sugar', name: 'Sugar Syrup', currentLevel: 1000, maxLevel: 2000, unit: 'ml' },
      { id: 'tea', name: 'Tea Powder', currentLevel: 400, maxLevel: 800, unit: 'g' },
    ],
    drinks: [
      {
        id: 'latte',
        name: 'Café Latte',
        price: 4.50,
        available: true,
        ingredients: [
          { ingredientId: 'milk', amount: 200 },
          { ingredientId: 'coffee', amount: 18 },
        ],
      },
      {
        id: 'americano',
        name: 'Americano',
        price: 3.50,
        available: true,
        ingredients: [
          { ingredientId: 'coffee', amount: 18 },
        ],
      },
      {
        id: 'milk-tea',
        name: 'Milk Tea',
        price: 4.00,
        available: true,
        ingredients: [
          { ingredientId: 'milk', amount: 150 },
          { ingredientId: 'tea', amount: 12 },
          { ingredientId: 'sugar', amount: 30 },
        ],
      },
    ],
  },
  {
    id: 'keyoss-2',
    name: 'Keyoss Two',
    location: 'Conference Area',
    status: 'operational',
    ingredients: [
      { id: 'milk', name: 'Fresh Milk', currentLevel: 1500, maxLevel: 5000, unit: 'ml' },
      { id: 'coffee', name: 'Coffee Powder', currentLevel: 300, maxLevel: 1000, unit: 'g' },
      { id: 'sugar', name: 'Sugar Syrup', currentLevel: 800, maxLevel: 2000, unit: 'ml' },
      { id: 'tea', name: 'Tea Powder', currentLevel: 600, maxLevel: 800, unit: 'g' },
    ],
    drinks: [
      {
        id: 'latte',
        name: 'Café Latte',
        price: 4.50,
        available: true,
        ingredients: [
          { ingredientId: 'milk', amount: 200 },
          { ingredientId: 'coffee', amount: 18 },
        ],
      },
      {
        id: 'americano',
        name: 'Americano',
        price: 3.50,
        available: true,
        ingredients: [
          { ingredientId: 'coffee', amount: 18 },
        ],
      },
      {
        id: 'milk-tea',
        name: 'Milk Tea',
        price: 4.00,
        available: true,
        ingredients: [
          { ingredientId: 'milk', amount: 150 },
          { ingredientId: 'tea', amount: 12 },
          { ingredientId: 'sugar', amount: 30 },
        ],
      },
    ],
  },
];