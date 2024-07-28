export const fetchPets = async () => {
  const response = await fetch('/api/pets');
  const data = await response.json();
  return data;
};

export const fetchPetById = async (id) => {
  const response = await fetch(`/api/pets/${id}`);
  const data = await response.json();
  return data;
};
