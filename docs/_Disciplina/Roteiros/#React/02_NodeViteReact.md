## Criando um App React com Vite

### Por que usar Vite?

Vite é uma ferramenta de construção de front-end que oferece um desenvolvimento rápido e uma experiência de usuário aprimorada, especialmente para projetos React. Ela é mais leve e rápida que ferramentas como Webpack, proporcionando hot module replacement (HMR) quase instantâneo.

### Criando o Projeto

**1. Instale o Node.js e npm (ou yarn):**

* Certifique-se de ter o Node.js instalado em sua máquina. Você pode baixá-lo em [https://nodejs.org/](https://nodejs.org/).
* Download the node.js LTS binary for Windows and extract it to your desired location Add the path of the nodejs folder to the PATH environment variable:

( Shortcut winkey+R and enter: rundll32 sysdm.cpl,EditEnvironmentVariables )

**2. Crie um novo projeto:**

**Bash**

```
npm create vite@latest my-react-app --template react
```

Substitua `my-react-app` pelo nome desejado para seu projeto.

**3. Instale as dependências:**

**Bash**

```
cd my-react-app
npm install
```

**4. Inicie o servidor de desenvolvimento:**

**Bash**

```
npm run dev
```

Seu aplicativo estará disponível em `http://localhost:3000/`.

### Construindo o App: Um Contador Simples

**1. Abra o arquivo `src/App.jsx`:**

**JavaScript**

```
import React, { useState } from'react';

functionApp() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <buttononClick={() => setCount(count + 1)}>
        Clique para incrementar
      </button>
    </div>
  );
}

export default App;
```

**Explicação:**

* **useState:** Hook do React que permite gerenciar o estado local de um componente.
* **count:** Variável de estado que armazena o número de cliques.
* **setCount:** Função para atualizar o valor de count.
* **onClick:** Manipulador de eventos que incrementa o valor de count quando o botão é clicado.

### Demonstração de Outros Conceitos

Outro pontos fundamentais do React:

* **Componentes:** Criar componentes funcionais e de classe para modularizar seu código.
* **Props:** Passar dados entre componentes usando props.
* **JSX:** Utilizar JSX para criar a estrutura HTML de seus componentes.
* **Ciclo de vida:** Entender os métodos do ciclo de vida de um componente (componentDidMount, componentDidUpdate, etc.).
* **Condicionalmente renderizar elementos:** Usar operadores lógicos para mostrar ou ocultar elementos.
* **Listas:** Renderizar listas de elementos usando o método `map`.
* **Eventos:** Manipular diversos tipos de eventos (e.g., `onMouseOver`, `onSubmit`).

### Próximos Passos

* **Redux:** Gerencie o estado global de sua aplicação.
* **React Router:** Crie rotas para navegar entre diferentes páginas.
* **Hooks:** Utilize hooks personalizados para criar lógica reutilizável.
* **Styled Components:** Estilize seus componentes de forma mais declarativa.

### **Exemplo mais completo: Uma lista de tarefas**

**JavaScript**

```
import React, { useState } from'react';

functionApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div>
      <inputtype="text"value={newTask}onChange={(e) => setNewTask(e.target.value)} />
      <buttononClick={handleAddTask}>Adicionar</button>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

**Este exemplo demonstra:**

* **Múltiplos estados:** `tasks` para armazenar a lista de tarefas e `newTask` para o valor do input.
* **Manipulação de eventos:** `onChange` para atualizar o valor do input e `onClick` para adicionar uma nova tarefa.
* **Renderização de listas:** Usando o método `map` para renderizar cada tarefa como um item de lista.
