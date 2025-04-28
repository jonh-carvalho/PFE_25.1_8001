No React, `useState` e `useRef` são hooks que ajudam a gerenciar e manipular o estado e referências de um componente funcional. Eles têm finalidades diferentes, mas ambos são essenciais para construir interfaces dinâmicas.

### 1. `useState`

O hook `useState` é usado para adicionar e manipular estados em componentes funcionais. O React monitora as mudanças de estado e, quando elas ocorrem, re-renderiza o componente para refletir o novo estado.

#### Como `useState` Funciona

- Ao declarar uma variável de estado com `useState`, ela retorna um **array** com dois elementos:
  1. O valor atual do estado.
  2. Uma função que permite atualizar o valor do estado.

#### Exemplo Simples

Aqui, `useState` é usado para controlar o número de cliques em um botão:

```jsx
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={incrementar}>Clique aqui</button>
    </div>
  );
}

export default Contador;
```

#### Explicação

- **Valor Inicial**: `useState(0)` define `contador` com o valor inicial de `0`.
- **Atualização de Estado**: `setContador(contador + 1)` incrementa o valor de `contador` em 1 cada vez que o botão é clicado.
- **Re-renderização**: Toda vez que `contador` é atualizado, o React re-renderiza o componente para refletir a nova contagem.

#### Vantagens do `useState`

- **Reatividade**: Garante que o componente sempre mostre o estado mais recente.
- **Controle Total**: Ideal para variáveis que afetam a renderização e a interface, como valores de input, exibições de mensagens, entre outros.

### 2. `useRef`

O hook `useRef` é usado para criar uma **referência mutável** que persiste entre renderizações de um componente, mas **não provoca re-renderização** quando atualizado. Isso é útil para manipular elementos do DOM diretamente ou para armazenar valores que não precisam desencadear uma re-renderização.

#### Como `useRef` Funciona

- `useRef` retorna um objeto com uma propriedade `.current`, que é inicializada com o valor passado como argumento e que pode ser atualizado sem afetar a renderização do componente.

#### Exemplo com `useRef`

Aqui está um exemplo em que `useRef` é usado para referenciar um campo de entrada:

```jsx
import React, { useRef } from 'react';

function FocoInput() {
  const inputRef = useRef(null);

  const focarInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Clique para focar" />
      <button onClick={focarInput}>Focar no input</button>
    </div>
  );
}

export default FocoInput;
```

#### Explicação

- **Referência ao DOM**: `useRef(null)` cria uma referência vazia. `inputRef.current` é associado ao campo de entrada com `ref={inputRef}`.
- **Manipulação Direta do DOM**: `inputRef.current.focus()` permite que o botão “Focar no input” posicione o cursor no campo de entrada.

### Diferença entre `useState` e `useRef`

| Característica          | `useState`                                          | `useRef`                                         |
|-------------------------|-----------------------------------------------------|--------------------------------------------------|
| Provoca re-renderização | Sim, ao atualizar o estado                          | Não, as mudanças em `.current` não causam render |
| Finalidade              | Gerenciar dados que afetam a renderização           | Referenciar elementos do DOM ou armazenar dados temporários |
| Persistência            | Entre re-renderizações                              | Entre re-renderizações                           |
| Uso comum               | Campos de formulário, contadores, flags             | Foco em elementos, armazenar IDs de intervalos, variáveis imutáveis |

### Quando Usar Cada Um

- **`useState`** é ideal para dados que impactam a interface e exigem uma atualização visível.
- **`useRef`** é útil para manipulação direta de elementos DOM ou armazenamento de dados que não devem afetar a renderização.

Esses hooks complementam a lógica do React, permitindo criar componentes interativos e performáticos com um bom gerenciamento de estado e referências.