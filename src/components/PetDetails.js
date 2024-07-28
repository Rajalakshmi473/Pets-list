import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchPetById from '../utils/fetchPetById';

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petData = await fetchPetById(id);
        setPet(petData);
      } catch (error) {
        console.error('Error fetching pet details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{pet.name}</h1>
      <p>{pet.description}</p>
    </div>
  );
};

export default PetDetails;
