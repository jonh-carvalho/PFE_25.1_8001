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