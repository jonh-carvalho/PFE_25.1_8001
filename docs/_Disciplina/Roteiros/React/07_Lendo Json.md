Exibir dados no seu aplicativo Vite com React usando três abordagens diferentes: com `const`, importação direta e usando `fetch`.

### 1. Exibindo dados com `const`

Se os dados forem pequenos e você quiser armazená-los diretamente no código, pode usar uma constante.

```jsx
import React from 'react';

// Dados armazenados em uma constante
const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

const App = () => {
  return (
    <div>
      <h1>Users List (Usando Const)</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

### 2. Exibindo dados com importação direta de JSON

Se os dados estiverem em um arquivo JSON local, você pode importá-los diretamente.

#### Passo 1: Crie o arquivo JSON

Crie um arquivo `data.json` (por exemplo) na mesma pasta do seu componente ou dentro da pasta `src`.

```json
// data.json
{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
  ]
}
```

#### Passo 2: Importe o JSON no componente

```jsx
import React from 'react';
import data from './data.json'; // ajuste o caminho conforme necessário

const App = () => {
  return (
    <div>
      <h1>Users List (Usando Import Direto)</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```

### 3. Exibindo dados com `fetch`

Se você quiser buscar dados dinamicamente de um arquivo JSON, você pode usar `fetch`. Coloque o arquivo JSON na pasta `public` para que o Vite sirva o arquivo corretamente.

#### Passo 1: Crie o arquivo JSON no diretório `public`

Crie o arquivo `public/data.json`.

```json
// public/data.json
{
  "users": [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
  ]
}
```

#### Passo 2: Use `fetch` para buscar o arquivo JSON

```jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json') // Caminho relativo ao diretório public
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Erro ao carregar dados:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Users List (Usando Fetch)</h1>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
```
