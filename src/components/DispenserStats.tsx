import React from 'react';
import { Activity, AlertTriangle, Check } from 'lucide-react';
import { Dispenser } from '../types';

interface DispenserStatsProps {
  dispensers: Dispenser[];
}

export default function DispenserStats({ dispensers }: DispenserStatsProps) {
  const stats = {
    operational: dispensers.filter(d => d.status === 'operational').length,
    maintenance: dispensers.filter(d => d.status === 'maintenance').length,
    offline: dispensers.filter(d => d.status === 'offline').length,
    lowIngredients: dispensers.filter(d => 
      d.ingredients.some(ing => (ing.currentLevel / ing.maxLevel) < 0.2)
    ).length
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard
        title="Operational"
        value={stats.operational}
        icon={<Check className="w-5 h-5" />}
        color="text-green-600"
        bgColor="bg-green-100"
      />
      <StatCard
        title="Maintenance"
        value={stats.maintenance}
        icon={<Activity className="w-5 h-5" />}
        color="text-yellow-600"
        bgColor="bg-yellow-100"
      />
      <StatCard
        title="Offline"
        value={stats.offline}
        icon={<AlertTriangle className="w-5 h-5" />}
        color="text-red-600"
        bgColor="bg-red-100"
      />
      <StatCard
        title="Low Ingredients"
        value={stats.lowIngredients}
        icon={<AlertTriangle className="w-5 h-5" />}
        color="text-orange-600"
        bgColor="bg-orange-100"
      />
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

function StatCard({ title, value, icon, color, bgColor }: StatCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <div className={`${bgColor} ${color} p-2 rounded-lg`}>
          {icon}
        </div>
      </div>
      <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}