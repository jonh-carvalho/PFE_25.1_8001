import React from 'react';
import styled from 'styled-components';

const BotaoEstilizado = styled.button`
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

function App() {
  return (
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/module">Module</a></li>
      </ul>
      <h1>Meu App com Styled Components</h1>
      <BotaoEstilizado>Clique aqui</BotaoEstilizado>
    </div>
  );
}

export default App;