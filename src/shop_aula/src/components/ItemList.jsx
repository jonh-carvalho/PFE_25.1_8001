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