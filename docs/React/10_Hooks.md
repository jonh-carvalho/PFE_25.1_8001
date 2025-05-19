# 010 - **Hooks (Foco em Componentes Funcionais)**  

**Objetivo:** Dominar os principais Hooks do React para gerenciar estado, efeitos colaterais e referências em componentes funcionais.  

---

## **1. : useState (Estado em Componentes Funcionais)**
# **Conteúdo Teórico: Estado em React (useState)**  

## **1. O que é Estado em React?**  
O **estado (state)** em React representa os dados dinâmicos de um componente. Ele permite que o componente:  
- **Armazene informações** que podem mudar ao longo do tempo.  
- **Re-renderize** a interface quando o estado é atualizado.  
- **Gerencie interações do usuário** (cliques, formulários, etc.).  

**Exemplo:** Um contador que incrementa quando o usuário clica em um botão.  

---

## **2. Diferença entre `props` e `state`**  

| **`props`**                          | **`state`**                          |
|--------------------------------------|--------------------------------------|
| Passado de um componente **pai para filho**. | Gerenciado **internamente** pelo componente. |
| **Imutável** (não pode ser modificado pelo componente filho). | **Mutável** (pode ser atualizado com `setState`). |
| Usado para **comunicação entre componentes**. | Usado para **controle interno do componente**. |

**Exemplo:**  
```jsx
// Componente Pai (passa props)
<PaiComponente nome="João" />  

// Componente Filho (usa props + state)
function FilhoComponente({ nome }) {
  const [idade, setIdade] = useState(25); // Estado interno
  return <p>{nome} tem {idade} anos.</p>;
}
```

---

## **3. Sintaxe do `useState`**  
O `useState` é um **Hook** que retorna um array com:  
1. **Valor atual do estado** (`state`).  
2. **Função para atualizá-lo** (`setState`).  

```jsx
const [state, setState] = useState(initialValue);
```

**Exemplo:**  
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // Estado inicial = 0

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicou {count} vezes
    </button>
  );
}
```

---

## **4. Atualizações Assíncronas e Imutabilidade**  

### **a) Atualizações Assíncronas**  
- O React **não atualiza o estado imediatamente** (é agendado).  
- Se precisar do **valor anterior**, use a forma funcional:  
  ```jsx
  setCount(prevCount => prevCount + 1); // Garante a atualização correta
  ```

### **b) Imutabilidade**  
- **Nunca modifique o estado diretamente!**  
  ❌ `state.count = 5` (Errado!)  
  ✅ `setCount(5)` (Correto!)  

**Exemplo com Objetos:**  
```jsx
const [user, setUser] = useState({ name: 'Ana', age: 30 });

// ❌ Errado (mutação direta)
user.age = 31; // Não re-renderiza!

// ✅ Correto (cria um novo objeto)
setUser({ ...user, age: 31 }); // Spread operator
```

---

## **Resumo Visual**  

```jsx
import { useState } from 'react';

function Example() {
  // 1. Declaração do estado
  const [value, setValue] = useState('');

  // 2. Atualização com imutabilidade
  const handleChange = (e) => {
    setValue(e.target.value); // ✅ Atualiza corretamente
  };

  return <input value={value} onChange={handleChange} />;
}
```

### **Boas Práticas:**  
✔ Use `useState` para dados que mudam e afetam a UI.  
✔ Atualize o estado **apenas com `setState`** (nunca diretamente).  
✔ Para estados complexos, considere `useReducer`.  


### **Exemplo Prático:**
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  );
}
```

### **Exercício:**
1. Crie um componente `ToggleButton` que alterna entre "Ligado" e "Desligado".  
2. Faça um contador que permita incrementar, decrementar e resetar o valor.  

---

## **2. : useEffect (Efeitos Colaterais)**
### **Conteúdo Teórico:**
- O que são efeitos colaterais? (API calls, subscriptions, timers).  
- Sintaxe:  
  ```jsx
  useEffect(() => { ... }, [dependencies]);
  ```
- Dependências vazias (`[]`) vs com dependências.  
- Cleanup function (`return () => { ... }`).  

### **Exemplo Prático:**
```jsx
import { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []); // Executa apenas uma vez

  return <p>Tempo: {seconds} segundos</p>;
}
```

### **Exercício:**
1. Crie um componente que busca dados de uma API (ex: [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)) e exibe em uma lista.  
2. Implemente um `useEffect` que atualize o título da página com um contador.  

---

## **3. : useContext (Compartilhamento de Estado)**
### **Conteúdo Teórico:**
- Problema do "prop drilling".  
- Criar e consumir um Context.  
- `createContext`, `Provider` e `useContext`.  

### **Exemplo Prático:**
```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Tema atual: {theme}
    </button>
  );
}
```

### **Exercício:**
1. Crie um contexto `UserContext` que armazene o nome do usuário e permita alterá-lo.  
2. Consuma esse contexto em dois componentes diferentes.  

---

## **4. : useRef (Referências e Valores Mutáveis)**
### **Conteúdo Teórico:**
- Diferença entre `useRef` e `useState`.  
- Acessar elementos DOM diretamente.  
- Armazenar valores mutáveis sem rerenderizar.  

### **Exemplo Prático:**
```jsx
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focar no Input</button>
    </div>
  );
}
```

### **Exercício:**
1. Crie um componente que armazene o número de renders usando `useRef`.  
2. Faça um "scroll to top" usando `useRef`.  

---

## **5. : useReducer (Estado Complexo)**
### **Conteúdo Teórico:**
- Quando usar `useReducer` vs `useState`.  
- Sintaxe:  
  ```jsx
  const [state, dispatch] = useReducer(reducer, initialState);
  ```
- Padrão de ações (`{ type, payload }`).  

### **Exemplo Prático:**
```jsx
import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```

### **Exercício:**
1. Implemente um carrinho de compras usando `useReducer`.  
2. Crie um formulário com validação usando `useReducer`.  

---

## **Exercício Final do Módulo**
**Desafio:** Construa um **"Todo List"** usando:  
✅ `useState` para gerenciar a lista de tarefas.  
✅ `useEffect` para salvar no `localStorage`.  
✅ `useReducer` para ações como adicionar, remover e marcar como concluída.  
✅ `useContext` para um tema claro/escuro.  
✅ `useRef` para focar no input ao adicionar uma tarefa.  

---

### **Recursos Adicionais:**
- [Documentação Oficial dos Hooks](https://react.dev/reference/react)  
- [React Hooks Cheat Sheet](https://react-hooks-cheatsheet.com/)  

