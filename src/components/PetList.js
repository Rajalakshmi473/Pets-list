import React, { useState, useEffect } from 'react';
import fetchPets from '../utils/fetchPets';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const data = await fetchPets();
      setPets(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching pets:', err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Pet List</h1>
      <ul>
        {pets.map((pet) => (
          <li key={pet.id}>{pet.name} - {pet.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
