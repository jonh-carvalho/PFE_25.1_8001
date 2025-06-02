// src/components/FilterOptions.jsx
import React from 'react';

function FilterOptions({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="filter-options">
      <label htmlFor="category-select">Filtrar por Categoria: </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">Todas</option>
        {categories.map(category => (
          <option key={category.id || category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterOptions;
