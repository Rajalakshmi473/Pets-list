import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PetList from './components/PetList';
import PetDetails from './components/PetDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/pets/:id" element={<PetDetails />} />
      </Routes>
    </div>
  );
}

export default App;
