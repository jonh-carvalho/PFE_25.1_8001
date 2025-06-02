// src/components/ItemList.jsx
import React from 'react';
import Item from './Item';

function ItemList({ items, onItemClick }) { // Prop onItemClick para lidar com o clique no card
  if (items.length === 0) {
    return <p>Nenhum item encontrado.</p>;
  }

  return (
    <div className="item-gallery"> {/* Mudança de ul para div e nova classe */}
      {items.map(item => (
        <Item
          key={item.id}
          item={item}
          onClick={() => onItemClick(item.id)} // O clique no item agora chama onItemClick
        />
      ))}
    </div>
  );
}

export default ItemList;
