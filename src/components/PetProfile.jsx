import React, { useState } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Card } from '@heroui/card';

const PetProfile = ({ pet, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(pet || {
    name: '',
    age: '',
    weight: '',
    breed: '',
    recommendedPortion: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isEditing) {
    return (
      <Card className="p-6 bg-white rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Perfil de la Mascota</h2>
          <Button
            color="primary"
            onPress={() => setIsEditing(true)}
          >
            Editar
          </Button>
        </div>
        <div className="space-y-2">
          <p><span className="font-medium">Nombre:</span> {formData.name}</p>
          <p><span className="font-medium">Edad:</span> {formData.age} años</p>
          <p><span className="font-medium">Peso:</span> {formData.weight} kg</p>
          <p><span className="font-medium">Raza:</span> {formData.breed}</p>
          <p><span className="font-medium">Porción recomendada:</span> {formData.recommendedPortion} g</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Editar Perfil de la Mascota</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nombre</label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Edad (años)</label>
          <Input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
          <Input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Raza</label>
          <Input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Porción recomendada (g)</label>
          <Input
            type="number"
            name="recommendedPortion"
            value={formData.recommendedPortion}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex space-x-2">
          <Button type="submit" color="primary">
            Guardar
          </Button>
          <Button
            type="button"
            color="secondary"
            onClick={() => setIsEditing(false)}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default PetProfile; 