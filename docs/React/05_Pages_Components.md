# 05 - Pages e Components

## Introdução

A organização de uma aplicação **React** pode ser melhorada ao diferenciar **Pages** (páginas) de **Components** (componentes). A distinção entre essas duas categorias é importante para manter o código escalável, reutilizável e de fácil manutenção. Vou explicar a diferença e como você pode organizá-los de forma eficiente.

### Diferença entre **Pages** e **Components**

#### **Pages**

- **O que são**: São componentes que representam rotas individuais da aplicação, geralmente associadas a uma URL específica. Cada **Page** é uma "página" completa e geralmente agrupa vários componentes.

- **Função**: Uma page contém a estrutura e layout principal da página e usa outros componentes para construir sua interface. É responsável por representar uma tela completa da aplicação.
- **Exemplo**: HomePage, AboutPage, ContactPage, DashboardPage, etc.

#### **Components (Componentes)**

- **O que são**: São blocos reutilizáveis menores de interface, que podem ser usados em várias páginas. Componentes são mais modulares e têm uma única responsabilidade, como um botão, um formulário, ou uma tabela.
- **Função**: Eles não estão vinculados a uma URL específica e podem ser combinados dentro de **Pages** ou outros componentes.
- **Exemplo**: Navbar, Footer, Button, Card, Modal, FormField, etc.

### Organização de **Pages** e **Components**

Uma boa prática é criar pastas separadas para **Pages** e **Components** no diretório `src`. Isso ajuda a organizar o código e deixar claro o propósito de cada arquivo.

### Criar o projeto

```bash
   npm create vite@latest pages_app
```

#### Estrutura de diretório recomendada

```bash
src/
│
├── components/
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── ContactPage.jsx
│   └── DashboardPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

#### Exemplo de uso prático

##### **HomePage.jsx** (Página)

```jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Features from '../components/Features';
import Hero from '../components/Hero';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default HomePage;
```

Aqui, a página **HomePage** serve como a estrutura principal da página de "Home", e ela reutiliza componentes como **Navbar**, **Hero**, **Features** e **Footer**. Cada componente pode ser reutilizado em outras páginas, mantendo o código modular.

##### **Navbar.jsx** (Componente)

```jsx
function Navbar() {
  return (
    <nav>
      <h1>Logo</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
```

O **Navbar** é um componente que pode ser utilizado em várias páginas, como **HomePage**, **AboutPage** e **ContactPage**. Ele contém a lógica e a estrutura do menu de navegação.

##### **AboutPage.jsx** (Página)

```jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <>
      <Navbar />
      <section className="about">
        <h1>About Us</h1>
        <p>We are a company that values...</p>
      </section>
      <Footer />
    </>
  );
}

export default AboutPage;
```

Aqui, a **AboutPage** também reutiliza os mesmos componentes de **Navbar** e **Footer**, mas tem um conteúdo único no corpo da página, como a seção "About Us".

### Resumo da Organização

- **Páginas** (**Pages**) representam **rotas** e normalmente combinam vários **componentes** para formar uma tela completa.
- **Componentes** (**Components**) são elementos mais simples e reutilizáveis que compõem partes da interface.
- Manter pastas separadas para páginas e componentes ajuda na escalabilidade e clareza do código.

Ao seguir essa organização, você mantém o código mais estruturado, fácil de entender e de escalar conforme a aplicação cresce.
