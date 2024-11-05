export interface Ingredient {
  id: string;
  name: string;
  currentLevel: number;
  maxLevel: number;
  unit: string;
}

export interface Drink {
  id: string;
  name: string;
  ingredients: {
    ingredientId: string;
    amount: number;
  }[];
  price: number;
  available: boolean;
}

export interface Dispenser {
  id: string;
  name: string;
  location: string;
  status: 'operational' | 'maintenance' | 'offline';
  ingredients: Ingredient[];
  drinks: Drink[];
}