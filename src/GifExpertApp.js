import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  /*  const handleAdd = () => {
    // setCategories([...categories, 'Avatar la leyenda de Ang']);
    setCategories((cats) => [...cats, 'Avatar la Leyenda de Ang']);
  }; */

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {
          // El key no puede ser el indice
          categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))
        }
      </ol>
    </div>
  );
};

export default GifExpertApp;
