import React from 'react';
import { Coffee, AlertTriangle } from 'lucide-react';
import { Dispenser } from '../types';
import IngredientLevel from './IngredientLevel';
import DrinksList from './DrinksList';

interface DispenserCardProps {
  dispenser: Dispenser;
  onRestock: (dispenserId: string, ingredientId: string) => void;
  onOrder: (dispenserId: string, drinkId: string) => void;
}

export default function DispenserCard({ dispenser, onRestock, onOrder }: DispenserCardProps) {
  const statusColor = {
    operational: 'bg-green-100 text-green-800',
    maintenance: 'bg-yellow-100 text-yellow-800',
    offline: 'bg-red-100 text-red-800',
  }[dispenser.status];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Coffee className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-xl font-bold text-gray-900">{dispenser.name}</h3>
            <p className="text-sm text-gray-500">{dispenser.location}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
          {dispenser.status.charAt(0).toUpperCase() + dispenser.status.slice(1)}
        </span>
      </div>

      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-gray-900">Ingredient Levels</h4>
        <div className="grid grid-cols-2 gap-4">
          {dispenser.ingredients.map((ingredient) => (
            <IngredientLevel
              key={ingredient.id}
              ingredient={ingredient}
              onRestock={() => onRestock(dispenser.id, ingredient.id)}
            />
          ))}
        </div>
      </div>

      <DrinksList
        drinks={dispenser.drinks}
        ingredients={dispenser.ingredients}
        onOrder={(drinkId) => onOrder(dispenser.id, drinkId)}
      />

      {dispenser.ingredients.some(ing => (ing.currentLevel / ing.maxLevel) < 0.2) && (
        <div className="flex items-center space-x-2 text-yellow-600 bg-yellow-50 p-3 rounded-lg">
          <AlertTriangle className="w-5 h-5" />
          <span className="text-sm">Some ingredients are running low!</span>
        </div>
      )}
    </div>
  );
}