import React, { useState } from 'react';
import { initialDispensers } from './data';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { UserProvider } from './contexts/UserContext';
import { useUser } from './contexts/UserContext';

function AppContent() {
  const [dispensers, setDispensers] = useState(initialDispensers);
  const { user } = useUser();

  const allDispensers = user?.dispenser 
    ? [...dispensers, user.dispenser]
    : dispensers;

  const handleRestock = (dispenserId: string, ingredientId: string) => {
    setDispensers(current =>
      current.map(dispenser => {
        if (dispenser.id !== dispenserId) return dispenser;
        
        return {
          ...dispenser,
          ingredients: dispenser.ingredients.map(ing => {
            if (ing.id !== ingredientId) return ing;
            return { ...ing, currentLevel: ing.maxLevel };
          })
        };
      })
    );
  };

  const handleOrder = (dispenserId: string, drinkId: string) => {
    setDispensers(current =>
      current.map(dispenser => {
        if (dispenser.id !== dispenserId) return dispenser;
        
        const drink = dispenser.drinks.find(d => d.id === drinkId);
        if (!drink) return dispenser;

        return {
          ...dispenser,
          ingredients: dispenser.ingredients.map(ing => {
            const drinkIngredient = drink.ingredients.find(i => i.ingredientId === ing.id);
            if (!drinkIngredient) return ing;
            
            return {
              ...ing,
              currentLevel: Math.max(0, ing.currentLevel - drinkIngredient.amount)
            };
          })
        };
      })
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Dashboard 
          dispensers={allDispensers}
          onRestock={handleRestock}
          onOrder={handleOrder}
        />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}