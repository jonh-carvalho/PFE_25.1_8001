// src/services/api.js
const API_URL = 'http://localhost:3001';

export const fetchItems = async () => {
  try {
    const response = await fetch(`${API_URL}/items`);
    if (!response.ok) {
      throw new Error('Erro ao buscar itens');
    }
    return await response.json();
  } catch (error) {
    console.error("Falha ao buscar itens:", error);
    return []; // Retorna array vazio em caso de erro para não quebrar a UI
  }
};

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/categories`);
    if (!response.ok) {
      throw new Error('Erro ao buscar categorias');
    }
    return await response.json();
  } catch (error) {
    console.error("Falha ao buscar categorias:", error);
    return [];
  }
};

// Poderíamos adicionar aqui funções para buscar itens com filtros/query do json-server
// Ex: export const fetchItemsByQuery = async (query) => { ... fetch(`${API_URL}/items?${query}`) ... }
