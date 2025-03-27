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

    return (
        <div className="dashboard p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1">
                    <PetProfile pet={petData} onUpdate={handlePetUpdate} />
                </div>
                <div className="col-span-1">
                    <FoodLevelMonitor currentLevel={75} />
                </div>
            </div>
            <div className="mt-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-4">Historial de Alimentación</h2>
                    <BarChartComp />
                </div>
            </div>
        </div>
    );
}