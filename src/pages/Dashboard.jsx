import React, { useState } from 'react';
import BarChartComp from "../components/BarChartComp";
import FoodLevelMonitor from "../components/FoodLevelMonitor";
import PetProfile from "../components/PetProfile";

export default function Dashboard() {
    const [petData, setPetData] = useState({
        name: 'Max',
        age: '3',
        weight: '15',
        breed: 'Labrador',
        recommendedPortion: '200'
    });

    const handlePetUpdate = (updatedPet) => {
        setPetData(updatedPet);
    };

    const handleFeedMe = () => {
        // TODO: Implement feed me functionality
        console.log('Feed me clicked');
    };

    return (
        <div className="dashboard p-4 md:p-6">
            {/* Feed Me Button */}
            <div className="mb-6">
                <button
                    onClick={handleFeedMe}
                    className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 4a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                    ¡Aliméntame!
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="col-span-1">
                    <PetProfile pet={petData} onUpdate={handlePetUpdate} />
                </div>
                <div className="col-span-1">
                    <FoodLevelMonitor currentLevel={60} />
                </div>
            </div>
            <div className="mt-4 md:mt-6">
                <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                    <h2 className="text-xl font-semibold mb-4">Historial de Alimentación</h2>
                    <BarChartComp />
                </div>
            </div>
        </div>
    );
}