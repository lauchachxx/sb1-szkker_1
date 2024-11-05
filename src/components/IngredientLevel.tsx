import React from 'react';
import { RefreshCw } from 'lucide-react';
import { Ingredient } from '../types';

interface IngredientLevelProps {
  ingredient: Ingredient;
  onRestock: () => void;
}

export default function IngredientLevel({ ingredient, onRestock }: IngredientLevelProps) {
  const percentage = (ingredient.currentLevel / ingredient.maxLevel) * 100;
  const levelColor = percentage < 20 ? 'bg-red-500' : percentage < 50 ? 'bg-yellow-500' : 'bg-green-500';

  return (
    <div className="bg-gray-50 p-3 rounded-lg space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700">{ingredient.name}</span>
        <button
          onClick={onRestock}
          className="p-1 hover:bg-gray-200 rounded-full transition-colors"
          title="Restock"
        >
          <RefreshCw className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${levelColor} transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{ingredient.currentLevel}{ingredient.unit}</span>
        <span>{ingredient.maxLevel}{ingredient.unit}</span>
      </div>
    </div>
  );
}