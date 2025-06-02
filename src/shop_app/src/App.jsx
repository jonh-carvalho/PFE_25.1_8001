// src/App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import ItemList from './components/ItemList';
import ItemDetailView from './components/ItemDetailView'; // Novo componente
import { fetchItems, fetchCategories } from './services/api';
import './App.css'; // Crie este arquivo para estilos básicos

function App() {
  const [allItems, setAllItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // 'all' ou '' para todos
  //const [selectedItems, setSelectedItems] = useState(new Set()); // Usar Set para IDs únicos
  const [viewingItemId, setViewingItemId] = useState(null); // ID do item em visualização detalhada

  useEffect(() => {
    const loadData = async () => {
      const itemsData = await fetchItems();
      const categoriesData = await fetchCategories();
      setAllItems(itemsData);
      setCategories(categoriesData);
    };
    loadData();
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleViewItemDetails = (itemId) => {
    setViewingItemId(itemId);
  };

  const handleCloseDetailView = () => {
    setViewingItemId(null);
  };
  
  const filteredItems = useMemo(() => {
    return allItems
      .filter(item =>
        item.name.toLowerCase().includes(searchTerm)
      )
      .filter(item =>
        selectedCategory === '' || item.category === selectedCategory
      );
  }, [allItems, searchTerm, selectedCategory]);

  const itemToView = useMemo(() => {
    if (!viewingItemId) return null;
    return allItems.find(item => item.id === viewingItemId);
  }, [allItems, viewingItemId]);
  
  return (
    <div className="app-container">
      <h1>Catálogo de Itens Interativo</h1>

      {itemToView ? (
        <ItemDetailView item={itemToView} onClose={handleCloseDetailView} />
      ) : (
        <>
          <div className="controls">
            <SearchBar onSearch={handleSearchChange} />
            <FilterOptions
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
            />
          </div>
        
        {/*
        {selectedItems.size > 0 && (
          <div className="selection-info">
            <p>{selectedItems.size} item(s) selecionado(s).</p>
            </div>
        )}
      */}

      <ItemList
        items={filteredItems}
        onItemClick={handleViewItemDetails}
      />
        </>
      )}
    </div>
  );
}

export default App;
