import React, { createContext, useContext, useState } from 'react';
import { Dispenser } from '../types';

interface User {
  id: string;
  name: string;
  email: string;
  dispenser: Dispenser | null;
}

interface UserContextType {
  user: User | null;
  signUp: (name: string, email: string) => void;
  signOut: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const signUp = (name: string, email: string) => {
    const newDispenser: Dispenser = {
      id: `keyoss-${Date.now()}`,
      name: 'My Keyoss',
      location: 'Personal',
      status: 'operational',
      ingredients: [
        { id: 'milk', name: 'Fresh Milk', currentLevel: 5000, maxLevel: 5000, unit: 'ml' },
        { id: 'coffee', name: 'Coffee Powder', currentLevel: 1000, maxLevel: 1000, unit: 'g' },
        { id: 'sugar', name: 'Sugar Syrup', currentLevel: 2000, maxLevel: 2000, unit: 'ml' },
        { id: 'tea', name: 'Tea Powder', currentLevel: 800, maxLevel: 800, unit: 'g' },
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
    };

    setUser({
      id: `user-${Date.now()}`,
      name,
      email,
      dispenser: newDispenser,
    });
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signUp, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}