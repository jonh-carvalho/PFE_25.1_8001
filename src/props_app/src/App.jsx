import React from 'react';
import Usuario from './components/Usuario';

function App() {
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <Usuario nome="Alice" idade={28} />
      <Usuario nome="Carlos" idade={34} />
      <Usuario nome="Alice" idade={28} />
      <Usuario nome="Carlos" idade={34} />
      <Usuario nome="Alice" idade={28} />
      <Usuario nome="Carlos" idade={34} />
      <Usuario nome="Alice" idade={28} />
      <Usuario nome="Carlos" idade={34} />
    </div>
  );
}

export default App;