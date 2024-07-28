// src/utils/fetchPetById.js

const fetchPetById = async (id) => {
  const response = await fetch(`http://localhost:3001/pets/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch pet details');
  }
  const data = await response.json();
  return data;
};

export default fetchPetById;
