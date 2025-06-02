// src/components/ItemDetailView.jsx
import React from 'react';

function ItemDetailView({ item, onClose }) {
  if (!item) {
    // Isso pode acontecer brevemente se o item ainda não foi carregado
    // ou se um ID inválido for passado.
    return <p>Carregando detalhes do item ou item não encontrado...</p>;
  }

  return (
    <div className="item-detail-view">
      <button onClick={onClose} className="back-button">
        &larr; Voltar para a galeria
      </button>
      <h2>{item.name}</h2>
      <p><strong>ID:</strong> {item.id}</p>
      <p><strong>Categoria:</strong> {item.category}</p>
      <p><strong>Preço:</strong> R$ {item.price.toFixed(2)}</p>
      <p><strong>Em estoque:</strong> {item.inStock ? 'Sim' : 'Não'}</p>
      {/* Adicione quaisquer outros detalhes que o item possa ter */}
    </div>
  );
}

export default ItemDetailView;