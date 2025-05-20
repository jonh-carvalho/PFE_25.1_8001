# 10 - **Hooks (Foco em Componentes Funcionais)**

---
## Introdução

**Objetivo:** Dominar os principais Hooks do React para gerenciar estado, efeitos colaterais e referências em componentes funcionais.  

### **1. - useState (Estado em Componentes Funcionais)**

#### **Conteúdo Teórico:**

- O que é estado em React?  
- Diferença entre `props` e `state`.  
- Sintaxe do `useState`:  

  ```jsx
  const [state, setState] = useState(initialValue);
  ```
- Atualizações assíncronas e imutabilidade.  

#### **1. O que é Estado em React?**  

O **estado (state)** em React representa os dados dinâmicos de um componente. Ele permite que o componente:  

- **Armazene informações** que podem mudar ao longo do tempo.  
- **Re-renderize** a interface quando o estado é atualizado.  
- **Gerencie interações do usuário** (cliques, formulários, etc.).  

**Exemplo:** Um contador que incrementa quando o usuário clica em um botão.  

---

#### **2. Diferença entre `props` e `state`**  

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

#### **3. Sintaxe do `useState`**  

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

#### **4. Atualizações Assíncronas e Imutabilidade**  

##### **a) Atualizações Assíncronas**  
- O React **não atualiza o estado imediatamente** (é agendado).  
- Se precisar do **valor anterior**, use a forma funcional: 
 
  ```jsx
  setCount(prevCount => prevCount + 1); // Garante a atualização correta
  ```

#### **b) Imutabilidade**  

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

#### **Resumo Visual**  

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

### **2. - useEffect (Efeitos Colaterais)**

#### **Conteúdo Teórico:**
- O que são efeitos colaterais? (API calls, subscriptions, timers).  
- Sintaxe:  
  ```jsx
  useEffect(() => { ... }, [dependencies]);
  ```
- Dependências vazias (`[]`) vs com dependências.  
- Cleanup function (`return () => { ... }`).  

#### **Exemplo Prático:**

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

#### **Exercício:**

1. Crie um componente que busca dados de uma API (ex: [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)) e exibe em uma lista.  
2. Implemente um `useEffect` que atualize o título da página com um contador.  

---

### **3. - createContext (Compartilhamento de Estado)**

- Problema do "prop drilling".  
- Criar e consumir um Context.  
- `createContext`, `Provider` e `useContext`.  

#### **Exemplo Prático:**

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

#### **Exercício:**

1. Crie um contexto `UserContext` que armazene o nome do usuário e permita alterá-lo.  
2. Consuma esse contexto em dois componentes diferentes.  

---
### **4. - useRef (Referências e Valores Mutáveis)**

#### **Conteúdo Teórico:**
- Diferença entre `useRef` e `useState`.  
- Acessar elementos DOM diretamente.  
- Armazenar valores mutáveis sem rerenderizar.  

#### **Exemplo Prático:**

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

#### **Exercício:**

1. Crie um componente que armazene o número de renders usando `useRef`.  
2. Faça um "scroll to top" usando `useRef`.  

---

### **5. - useReducer (Estado Complexo)**

#### **Conteúdo Teórico:**

- Quando usar `useReducer` vs `useState`.  
- Sintaxe:  
  
  ```jsx
  const [state, dispatch] = useReducer(reducer, initialState);
  ```
- Padrão de ações (`{ type, payload }`).  

#### **Exemplo Prático:**

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

#### **Exercício:**

1. Implemente um carrinho de compras usando `useReducer`.  
2. Crie um formulário com validação usando `useReducer`.  

---

### **Exercício Final do Módulo**

**Desafio:** Construa um **"Todo List"** usando:  

✅ `useState` para gerenciar a lista de tarefas.  
✅ `useEffect` para salvar no `localStorage`.  
✅ `useReducer` para ações como adicionar, remover e marcar como concluída.  
✅ `useContext` para um tema claro/escuro.  
✅ `useRef` para focar no input ao adicionar uma tarefa.  

### Todo List Avançada com React Hooks

Vou construir uma aplicação Todo List completa utilizando todos os Hooks solicitados. Vamos dividir em partes lógicas:

#### 1. Estrutura Inicial e Contexto de Tema

```jsx
import React, { useState, useEffect, useReducer, useContext, useRef, createContext } from 'react';

// Contexto para o tema
const ThemeContext = createContext();

// Reducer para gerenciar as ações das tarefas
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}
```

#### 2. Componente Principal App

```jsx
function App() {
  const [theme, setTheme] = useState('light');
  const [todos, dispatch] = useReducer(todoReducer, []);
  const inputRef = useRef(null);

  // Carregar tarefas do localStorage ao iniciar
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      dispatch({ type: 'INIT_TODOS', payload: JSON.parse(savedTodos) });
    }
  }, []);

  // Salvar tarefas no localStorage quando mudam
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Alternar tema
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <h1>Todo List</h1>
        <TodoForm dispatch={dispatch} inputRef={inputRef} />
        <TodoList todos={todos} dispatch={dispatch} />
      </div>
    </ThemeContext.Provider>
  );
}
```

#### 3. Componente TodoForm

```jsx
function TodoForm({ dispatch, inputRef }) {
  const [text, setText] = useState('');
  const { theme } = useContext(ThemeContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TODO', payload: text });
      setText('');
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Adicione uma tarefa"
        className={`input-${theme}`}
      />
      <button type="submit" className={`button-${theme}`}>Adicionar</button>
    </form>
  );
}
```

#### 4. Componente TodoList

```jsx
function TodoList({ todos, dispatch }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  if (todos.length === 0) {
    return <p className={`no-tasks-${theme}`}>Nenhuma tarefa adicionada ainda</p>;
  }

  return (
    <div>
      <button onClick={toggleTheme} className={`theme-button ${theme}`}>
        Alternar para tema {theme === 'light' ? 'escuro' : 'claro'}
      </button>
      <ul className={`todo-list ${theme}`}>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        ))}
      </ul>
    </div>
  );
}
```

#### 5. Componente TodoItem

```jsx
function TodoItem({ todo, dispatch }) {
  const { theme } = useContext(ThemeContext);

  return (
    <li className={`todo-item ${theme} ${todo.completed ? 'completed' : ''}`}>
      <span
        onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
        className="todo-text"
      >
        {todo.text}
      </span>
      <button
        onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
        className={`delete-button ${theme}`}
      >
        ×
      </button>
    </li>
  );
}
```

#### 6. Estilos CSS (exemplo básico)

```css
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.light {
  background-color: #fff;
  color: #333;
}

.dark {
  background-color: #333;
  color: #fff;
}

.input-light {
  padding: 8px;
  border: 1px solid #ddd;
}

.input-dark {
  padding: 8px;
  border: 1px solid #555;
  background-color: #444;
  color: white;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
}

.todo-item.light {
  background-color: #f5f5f5;
}

.todo-item.dark {
  background-color: #444;
}

.completed {
  text-decoration: line-through;
  opacity: 0.7;
}

.delete-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
}

.delete-button.light {
  color: #ff4444;
}

.delete-button.dark {
  color: #ff8888;
}

.theme-button {
  padding: 5px 10px;
  margin-bottom: 15px;
  cursor: pointer;
}
```

#### 7. Como usar a aplicação

1. **Adicionar tarefa**: Digite no campo de texto e pressione Enter ou clique em "Adicionar"
2. **Completar tarefa**: Clique no texto da tarefa
3. **Remover tarefa**: Clique no botão "×" ao lado da tarefa
4. **Alternar tema**: Clique no botão "Alternar tema"

#### Recursos utilizados:

- `useState`: Para gerenciar o estado do tema e do texto do input
- `useEffect`: Para persistir as tarefas no localStorage
- `useReducer`: Para gerenciar as operações CRUD das tarefas
- `useContext`: Para compartilhar o tema entre todos os componentes
- `useRef`: Para focar automaticamente no input após adicionar uma tarefa

---

### **Recursos Adicionais:**
- [Documentação Oficial dos Hooks](https://react.dev/reference/react)  
- [React Hooks Cheat Sheet](https://react-hooks-cheatsheet.com/)  
