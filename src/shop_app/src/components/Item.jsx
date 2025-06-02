// src/components/Item.jsx
import React from 'react';

function Item({ item, onClick }) { // Recebe onClick para lidar com o clique no card


  return (
    <div className="item-card" onClick={onClick}>
      <h3>{item.name}</h3>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
    </div>
  );
}

export default Item;
