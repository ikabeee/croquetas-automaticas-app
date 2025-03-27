import React from 'react';
import { Card } from '@heroui/card';

const FoodLevelMonitor = ({ currentLevel, maxLevel = 100 }) => {
  const percentage = (currentLevel / maxLevel) * 100;
  const getGradientColors = (level) => {
    if (level > 70) return 'from-green-400 to-green-600';
    if (level > 30) return 'from-yellow-400 to-yellow-600';
    return 'from-red-400 to-red-600';
  };

  return (
    <Card className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Nivel de Comida</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 rounded-full bg-gray-100 shadow-inner"></div>
          
          <div 
            className={`absolute left-0 right-0 h-1 ${getGradientColors(percentage)} transition-all duration-500`}
            style={{ 
              top: `${100 - percentage}%`,
              transform: 'translateY(-50%)'
            }}
          />
          
          {/* Sphere border */}
          <div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
          
          {/* Percentage display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-700">{currentLevel}%</span>
          </div>
        </div>
        
        <div className="mt-4 text-sm text-gray-600">
          {percentage > 70 ? 'Nivel óptimo' : 
           percentage > 30 ? 'Nivel medio - Considere rellenar pronto' : 
           'Nivel bajo - Por favor rellene el contenedor'}
        </div>
      </div>
    </Card>
  );
};

export default FoodLevelMonitor; 