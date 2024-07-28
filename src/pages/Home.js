import React, { useEffect, useState } from 'react';
import PetList from '../components/PetList';
import { fetchPets } from '../utils/fetchPets';

const Home = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPets()
      .then((data) => {
        setPets(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading pets: {error.message}</div>;
  }

  return <PetList pets={pets} />;
};

export default Home;
