// src/components/SearchBar.jsx
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
    onSearch(event.target.value); // Chama onSearch em cada mudança
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar itens..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;