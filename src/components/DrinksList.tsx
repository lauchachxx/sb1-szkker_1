import React from 'react';
import { Coffee, AlertCircle } from 'lucide-react';
import { Drink, Ingredient } from '../types';

interface DrinksListProps {
  drinks: Drink[];
  ingredients: Ingredient[];
  onOrder: (drinkId: string) => void;
}

export default function DrinksList({ drinks, ingredients, onOrder }: DrinksListProps) {
  const checkAvailability = (drink: Drink) => {
    return drink.ingredients.every(({ ingredientId, amount }) => {
      const ingredient = ingredients.find(i => i.id === ingredientId);
      return ingredient && ingredient.currentLevel >= amount;
    });
  };

  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-900">Available Drinks</h4>
      <div className="grid grid-cols-2 gap-4">
        {drinks.map((drink) => {
          const isAvailable = checkAvailability(drink);
          return (
            <div
              key={drink.id}
              className="bg-gray-50 p-4 rounded-lg space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Coffee className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-gray-900">{drink.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-700">
                  ${drink.price.toFixed(2)}
                </span>
              </div>
              
              <button
                onClick={() => isAvailable && onOrder(drink.id)}
                disabled={!isAvailable}
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors
                  ${isAvailable 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {isAvailable ? 'Order Now' : 'Unavailable'}
              </button>

              {!isAvailable && (
                <div className="flex items-center space-x-1 text-red-600 text-xs">
                  <AlertCircle className="w-4 h-4" />
                  <span>Insufficient ingredients</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}