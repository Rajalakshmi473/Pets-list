export default async function fetchPets() {
  const response = await fetch('http://localhost:3001/pets');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}
