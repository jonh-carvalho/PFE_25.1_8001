No React, **props** (abreviação de "properties") são parâmetros passados para componentes para transmitir dados e customizar o comportamento desses componentes. Com props, um componente pai pode enviar informações para um componente filho, permitindo uma comunicação unidirecional, que é uma característica fundamental da arquitetura do React.

### Conceitos Principais de Props

1. **Imutabilidade**: Props são imutáveis dentro do componente filho. Ou seja, um componente filho não deve alterar as props que recebe; ele pode apenas lê-las.
2. **Unidirecional**: Os dados fluem do componente pai para o filho, não ao contrário. Isso ajuda a manter uma estrutura de dados previsível e facilita a depuração.
3. **Transmissão de Dados e Funções**: Props podem transmitir valores (como números, strings, objetos e arrays) e funções, permitindo que o componente pai controle o comportamento do filho.

### Usando Props no React

Para ilustrar o uso de props, vamos criar um exemplo básico de um componente que exibe informações de um usuário.

#### Passo 1: Definir o Componente Pai

No exemplo a seguir, o componente pai `App` envia dados ao componente filho `Usuario` por meio de props:

```jsx
import React from 'react';
import Usuario from './Usuario';

function App() {
  return (
    <div>
      <h1>Lista de Usuários</h1>
      <Usuario nome="Alice" idade={28} />
      <Usuario nome="Carlos" idade={34} />
    </div>
  );
}

export default App;
```

#### Passo 2: Criar o Componente Filho

No componente `Usuario`, recebemos as props `nome` e `idade` e as exibimos:

```jsx
import React from 'react';

function Usuario(props) {
  return (
    <div>
      <h2>Nome: {props.nome}</h2>
      <p>Idade: {props.idade} anos</p>
    </div>
  );
}

export default Usuario;
```

#### Usando Desestruturação para Simplificar

É comum usar desestruturação para tornar o código mais legível:

```jsx
function Usuario({ nome, idade }) {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade} anos</p>
    </div>
  );
}
```

### Exemplos de Props Dinâmicos e Interação com Funções

Props podem ser usados também para enviar funções de callback. Vamos adicionar um botão que exibe uma mensagem quando clicado, passando a função de callback como prop.

#### Componente Pai (`App.js`):

```jsx
function App() {
  const handleClick = (nome) => {
    alert(`Olá, ${nome}!`);
  };

  return (
    <div>
      <Usuario nome="Alice" idade={28} onClick={handleClick} />
    </div>
  );
}
```

#### Componente Filho (`Usuario.js`):

```jsx
function Usuario({ nome, idade, onClick }) {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade} anos</p>
      <button onClick={() => onClick(nome)}>Diga Olá</button>
    </div>
  );
}
```

Aqui, a função `handleClick` é passada ao componente `Usuario` e chamada ao clicar no botão. O resultado é um alerta exibindo o nome do usuário.

### Vantagens das Props

- **Reusabilidade**: Componentes podem ser criados de forma genérica e usados em diferentes partes da aplicação.
- **Isolamento de Dados**: Com a passagem de dados por props, é mais fácil manter o estado da aplicação previsível.
- **Separação de Responsabilidades**: O componente pai é responsável por gerenciar dados e lógica, enquanto o filho apenas renderiza e exibe as informações.

Props são fundamentais para a comunicação entre componentes no React, ajudando a manter o código modular, flexível e fácil de manter.