import React from 'react';
import { Dispenser } from '../types';
import DispenserCard from './DispenserCard';
import DispenserStats from './DispenserStats';

interface DashboardProps {
  dispensers: Dispenser[];
  onRestock: (dispenserId: string, ingredientId: string) => void;
  onOrder: (dispenserId: string, drinkId: string) => void;
}

export default function Dashboard({ dispensers, onRestock, onOrder }: DashboardProps) {
  return (
    <div className="space-y-8">
      <DispenserStats dispensers={dispensers} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dispensers.map(dispenser => (
          <DispenserCard
            key={dispenser.id}
            dispenser={dispenser}
            onRestock={onRestock}
            onOrder={onOrder}
          />
        ))}
      </div>
    </div>
  );
}