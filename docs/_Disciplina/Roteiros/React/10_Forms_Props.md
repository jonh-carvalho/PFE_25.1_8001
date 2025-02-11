No React, formulários funcionam de maneira semelhante ao HTML tradicional, mas com algumas diferenças importantes devido ao conceito de **estado** e **eventos controlados**. Em vez de apenas enviar dados ao servidor ao submeter o formulário, o React mantém os valores dos campos de entrada sincronizados com o estado do componente. Isso é feito através de formulários **controlados** e **não controlados**.

### 1. Formulários Controlados

Em formulários controlados, o estado do React mantém os valores dos campos. Isso significa que o valor de cada campo é controlado por uma variável no estado do componente, permitindo controle total sobre o que é exibido e processado.

#### Exemplo de Formulário Controlado com `useState`

Aqui está um exemplo de um formulário de login que usa o estado para controlar os valores dos campos:

```jsx
import React, { useState } from 'react';

function FormularioLogin() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', senha);
    // Processar o login
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Senha:
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default FormularioLogin;
```

Neste exemplo:

- **`email` e `senha`** são estados que armazenam os valores dos campos.
- O `onChange` atualiza o estado com o valor atual do campo.
- O `handleSubmit` previne o envio do formulário (`e.preventDefault()`) e pode ser usado para processar dados ou enviar ao servidor.

#### Vantagens dos Formulários Controlados

- **Controle Total**: O React controla o estado dos campos, permitindo validações e alterações dinâmicas.
- **Validação e Manipulação**: Facilidade em validar campos à medida que o usuário digita.
- **Sincronização**: Como os dados dos campos estão no estado, é fácil compartilhar e processar dados em outros componentes.

### 2. Formulários Não Controlados

Em formulários não controlados, os valores dos campos não são armazenados no estado, mas diretamente nos elementos do DOM. O React pode acessar o valor do campo diretamente com uma referência (`ref`) apenas quando necessário.

#### Exemplo de Formulário Não Controlado com `useRef`

Aqui está um exemplo de formulário de login usando o `useRef` para acessar os valores:

```jsx
import React, { useRef } from 'react';

function FormularioLogin() {
  const emailRef = useRef();
  const senhaRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', emailRef.current.value);
    console.log('Senha:', senhaRef.current.value);
    // Processar o login
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" ref={emailRef} />
      </label>
      <label>
        Senha:
        <input type="password" ref={senhaRef} />
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default FormularioLogin;
```

Neste exemplo:

- **`emailRef` e `senhaRef`** são referências (`useRef`) aos elementos de entrada.
- No `handleSubmit`, `emailRef.current.value` e `senhaRef.current.value` acessam o valor dos campos diretamente.

#### Vantagens dos Formulários Não Controlados

- **Menos Complexidade**: Útil em formulários simples, sem necessidade de armazenar dados no estado.
- **Desempenho**: Em formulários complexos, o React evita re-renderizações ao não monitorar o valor de cada campo.

### 3. Escolhendo entre Formulários Controlados e Não Controlados

- Use **formulários controlados** quando precisar validar ou manipular dados dinamicamente, ou quando o valor dos campos precisa ser sincronizado com outros estados ou componentes.
- Use **formulários não controlados** para formulários simples, onde o valor é lido apenas na submissão ou em momentos específicos, sem necessidade de interação constante.

### 4. Exemplos de Validação em Formulários Controlados

Para adicionar validações, use o estado para verificar condições e exibir mensagens conforme necessário:

```jsx
const handleEmailChange = (e) => {
  setEmail(e.target.value);
  if (!e.target.value.includes('@')) {
    setErroEmail('Email inválido');
  } else {
    setErroEmail('');
  }
};
```

React facilita a criação de formulários altamente dinâmicos, onde a experiência do usuário é controlada diretamente pelo estado do aplicativo.