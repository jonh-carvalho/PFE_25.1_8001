# 14 - Filtros

## Objetivo do Aplicativo:

Criar uma lista de itens (por exemplo, produtos, tarefas, posts) que podem ser buscados por texto, filtrados por categorias (ou outros critérios) e selecionados individualmente ou em grupo.

## Tecnologias:

- Vite: Para um setup de projeto React rápido e moderno.
- React: Para a construção da interface do usuário.
- json-server: Para simular uma API RESTful de forma simples.

**Estrutura de Pastas Sugerida:**

```plaintext
/meu-app-react
|-- public/
|-- src/
|   |-- assets/
|   |-- components/
|   |   |-- SearchBar.jsx
|   |   |-- FilterOptions.jsx
|   |   |-- ItemList.jsx
|   |   |-- Item.jsx
|   |-- services/
|   |   |-- api.js
|   |-- hooks/
|   |   |-- useItems.js
|   |-- App.jsx
|   |-- main.jsx
|   |-- index.css
|-- db.json  (para o json-server)
|-- package.json
|-- vite.config.js
```

### Passos e Conceitos a Serem Abordados:

**Configuração do Ambiente:**

- Criar um novo projeto Vite com React: 
  
```bash 
npm create vite@latest meu-app-react -- --template react
```	

- Instalar json-server: 
  
```bash 
npm install json-server (ou npm install -g json-server para instalação global).
```	

- Criar o arquivo db.json na raiz do projeto.

- Adicionar um script no package.json para iniciar o json-server:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "server": "json-server --watch db.json --port 3001"
  }
}
```

- Iniciar o json-server em um terminal: npm run server.
- Iniciar o app Vite em outro terminal: npm run dev.

> db.json (Exemplo de Dados): Este arquivo servirá como nosso "banco de dados" para o json-server.

```json
{
  "items": [
    { "id": 1, "name": "Laptop Moderno", "category": "Eletrônicos", "price": 4500.00, "inStock": true },
    { "id": 2, "name": "Smartphone Avançado", "category": "Eletrônicos", "price": 3200.00, "inStock": false },
    { "id": 3, "name": "Livro de React", "category": "Livros", "price": 120.00, "inStock": true },
    { "id": 4, "name": "Cafeteira Elétrica", "category": "Casa", "price": 250.00, "inStock": true },
    { "id": 5, "name": "Fone de Ouvido Bluetooth", "category": "Eletrônicos", "price": 350.00, "inStock": true },
    { "id": 6, "name": "Teclado Mecânico", "category": "Acessórios", "price": 450.00, "inStock": false },
    { "id": 7, "name": "Mouse Gamer", "category": "Acessórios", "price": 220.00, "inStock": true }
  ],
  "categories": [
    { "id": "cat1", "name": "Eletrônicos" },
    { "id": "cat2", "name": "Livros" },
    { "id": "cat3", "name": "Casa" },
    { "id": "cat4", "name": "Acessórios" }
  ]
}
```	

Serviço da API (src/services/api.js): Um módulo para centralizar as chamadas à API.

```jsx
// javascript
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
```	

#### **Componente Principal**

Este componente orquestrará os demais e gerenciará o estado principal (lista de itens, termo de busca, filtro selecionado, itens selecionados).

```jsx
// src/App.jsx
import React, { useState, useEffect, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import FilterOptions from './components/FilterOptions';
import ItemList from './components/ItemList';
import { fetchItems, fetchCategories } from './services/api';
import './App.css'; // Crie este arquivo para estilos básicos

function App() {
  const [allItems, setAllItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // 'all' ou '' para todos
  const [selectedItems, setSelectedItems] = useState(new Set()); // Usar Set para IDs únicos

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

  const handleItemSelect = (itemId) => {
    setSelectedItems(prevSelectedItems => {
      const newSelectedItems = new Set(prevSelectedItems);
      if (newSelectedItems.has(itemId)) {
        newSelectedItems.delete(itemId);
      } else {
        newSelectedItems.add(itemId);
      }
      return newSelectedItems;
    });
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

  return (
    <div className="app-container">
      <h1>Catálogo de Itens Interativo</h1>

      <div className="controls">
        <SearchBar onSearch={handleSearchChange} />
        <FilterOptions
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {selectedItems.size > 0 && (
        <div className="selection-info">
          <p>{selectedItems.size} item(s) selecionado(s).</p>
          {/* Poderia adicionar botões de ação para itens selecionados aqui */}
        </div>
      )}

      <ItemList
        items={filteredItems}
        selectedItems={selectedItems}
        onItemSelect={handleItemSelect}
      />
    </div>
  );
}


export default App;
```

Este componente é responsável por:

- Gerenciar o estado geral da aplicação: Ele controla quais itens são buscados da API, quais categorias estão disponíveis, o termo de busca atual, a categoria selecionada para filtro e quais itens estão selecionados pelo usuário.
- Buscar dados iniciais: Ao ser montado, ele busca a lista de itens e categorias da API (simulada pelo json-server).
- Orquestrar os componentes filhos: Ele renderiza e passa dados e funções para os componentes SearchBar, FilterOptions e ItemList.
- Lidar com a lógica de filtragem e seleção: Ele calcula quais itens devem ser exibidos com base nos filtros e na busca, e gerencia a lista de itens selecionados.

#### **Componente de Busca:**

Um input simples para o usuário digitar o termo de busca.
	
```jsx
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
```

#### **Componente de Filtros**

Um select (ou botões/checkboxes) para filtrar por categoria.

```jsx
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
```

#### Componente de Lista de Itens (src/components/ItemList.jsx):

Renderiza a lista de componentes Item.

```jsx
// src/components/ItemList.jsx
import React from 'react';
import Item from './Item';

function ItemList({ items, selectedItems, onItemSelect }) {
  if (items.length === 0) {
    return <p>Nenhum item encontrado.</p>;
  }

  return (
    <ul className="item-list">
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          isSelected={selectedItems.has(item.id)}
          onSelect={() => onItemSelect(item.id)}
        />
      ))}
    </ul>
  );
}

export default ItemList;
```

- O componente FilterOptions é um elemento de UI reutilizável para filtragem baseada em categorias.
- Ele recebe a lista de categories disponíveis e a selectedCategory como props para exibir o estado atual.
- Quando o usuário altera a seleção no menu suspenso, ele chama a função onCategoryChange (também passada como prop), permitindo que um componente pai (como App.jsx) atualize o estado da aplicação e filtre novamente os itens de acordo.
- Inclui uma opção padrão "Todas" para limpar o filtro de categoria.

#### Componente de Item (src/components/Item.jsx): 

Exibe as informações de um único item e lida com sua seleção.

```jsx
// src/components/Item.jsx
import React from 'react';

function Item({ item, isSelected, onSelect }) {
  const itemStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '5px 0',
    borderRadius: '4px',
    backgroundColor: isSelected ? '#e0f7fa' : '#fff', // Destaque visual para selecionado
    cursor: 'pointer',
  };

  return (
    <li style={itemStyle} onClick={onSelect}>
      <h3>{item.name}</h3>
      <p>Categoria: {item.category}</p>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
      <p>Em estoque: {item.inStock ? 'Sim' : 'Não'}</p>
      {isSelected && <p><strong>Selecionado</strong></p>}
    </li>
  );
}

export default Item;
```

#### Estilos Básicos (src/App.css ou src/index.css):

Adicione alguns estilos para tornar a aplicação mais apresentável.

```css
/* src/App.css ou src/index.css */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f4f4f4;
}

.app-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.controls {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  align-items: center;
}

.search-bar input,
.filter-options select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1em;
}

.search-bar input {
  flex-grow: 1;
}

.item-list {
  list-style-type: none;
  padding: 0;
}

.selection-info {
  background-color: #fff3cd;
  border: 1px solid #ffeeba;
  color: #856404;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 4px;
}
```

### Conceitos de React Demonstrados:

- Componentização: Divisão da UI em SearchBar, FilterOptions, ItemList, Item.
- Estado (useState): Gerenciamento de searchTerm, selectedCategory, allItems, selectedItems.
- Efeitos (useEffect): Para buscar dados da API quando o componente é montado.
- Props: Passagem de dados e funções de callback entre componentes (ex: onSearch, items).
- Renderização Condicional: Exibir "Nenhum item encontrado" ou a mensagem de itens selecionados.
- Renderização de Listas (map): Para exibir os itens e as opções de categoria.
- Event Handling: onChange nos inputs/selects, onClick nos itens.
- Lifting State Up: O estado da busca, filtro e seleção é gerenciado no App.jsx e passado para os componentes filhos.
- Memoização (useMemo): Para otimizar o cálculo da lista filtrada, evitando recálculos desnecessários se as dependências (allItems, searchTerm, selectedCategory) não mudarem.
- Imutabilidade: Ao atualizar o Set de selectedItems, criamos um novo Set para garantir que o React detecte a mudança de estado corretamente.

### Conclusão:

Nessa aplicação, voce pode buscar itens, filtrar por categoria, selecionar itens individualmente ou em grupo, e exibir informações sobre os itens selecionados.