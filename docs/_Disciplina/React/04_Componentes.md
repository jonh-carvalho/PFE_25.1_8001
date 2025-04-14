### Criar um SPA (Single Page Application) utilizando **React** com **Vite**

### Passos para criar um SPA React com Vite:

1\. **Instalar o Vite**:
   Vite é uma ferramenta de construção que facilita a criação de apps modernos com uma performance excelente. Para começar, abra seu terminal e execute o seguinte comando:

```bash
   npm create vite@latest my-spa-app
```

   O Vite irá te guiar na configuração inicial do projeto. Escolha as seguintes opções:

- `Project name`: **my-spa-app** (ou o nome que preferir)
- `Select a framework`: **React**
- `Select a variant`: **JavaScript** ou **TypeScript**, dependendo de sua preferência.

2\. **Instalar as dependências**:
   Após criar o projeto, vá para a pasta do projeto e instale as dependências:

```
   cd my-spa-app

   npm install
```

3\. **Estrutura de pastas**:
   Ao concluir, a estrutura do projeto será algo como:

```
public

src

	assets

	App.jsx

	main.jsx

	index.css

	index.html

vite.config.js
```

4\. **Iniciar o servidor de desenvolvimento**:

   Agora você pode iniciar o servidor de desenvolvimento e ver o app rodando:

```
   npm run dev
```

5\. **Criando Componentes de Rotas (React Router)**:
   Para um SPA, é comum utilizar o **React Router** para navegação. Instale-o:

```bash
   npm install react-router-dom
```

   Em seguida, configure as rotas no arquivo `App.jsx`:

```js

   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
   import Home from './components/Home';
   import About from './components/About';

   function App() {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
         </Routes>
       </Router>
     );
   }

   export default App;
```

6\. **Criar Páginas (Componentes)**:
   Crie os componentes para as páginas:

- `src/components/Home.jsx`:

```jsx
  function Home() {
    return <h1>Welcome to Home Page</h1>;
  }

  export default Home;
```

- `src/components/About.jsx`:

```jsx
  function About() {
    return <h1>About Us</h1>;
  }

  export default About;
```

7\. **Estilos (CSS)**:
   Para adicionar estilos, você pode usar o arquivo `index.css` ou criar estilos específicos para cada componente.

8\. **Build do projeto**:
   Quando quiser fazer o build do projeto para produção, basta rodar:

```bash
   npm run build
```

---

## Expandindo sua SPA

Para criar uma **landing page** com React, você pode estruturar a aplicação com diversos componentes reutilizáveis. Vou sugerir três componentes típicos que você pode incluir em uma landing page e fornecer o código para cada um:

### 1. **Hero Section**

Esse componente é o primeiro que o usuário vê, geralmente inclui uma mensagem de boas-vindas, uma breve descrição e um call-to-action (CTA).

```js

// src/components/Hero.jsx
function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1>Welcome to Our Product</h1>
        <p>Discover the best solution for your needs with our cutting-edge product.</p>
        <a href="#signup" className="cta-button">Get Started</a>
      </div>
    </section>
  );
}

export default Hero;
```

### 2. **Features Section**

Este componente destaca os principais recursos ou benefícios do produto/serviço oferecido pela landing page.

```js

// src/components/Features.jsx
function Features() {
  return (
    <section className="features">
      <div className="container">
        <h2>Main Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Feature One</h3>
            <p>Explanation of the first feature and its benefits.</p>
          </div>
          <div className="feature">
            <h3>Feature Two</h3>
            <p>Explanation of the second feature and its benefits.</p>
          </div>
          <div className="feature">
            <h3>Feature Three</h3>
            <p>Explanation of the third feature and its benefits.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
```

### 3. **Testimonial Section**

Um componente de depoimentos para mostrar feedback de usuários satisfeitos.

```js

// src/components/Testimonials.jsx
function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"This product changed my life! Highly recommended."</p>
            <span>- John Doe</span>
          </div>
          <div className="testimonial">
            <p>"A game-changer in the industry, I'm beyond impressed."</p>
            <span>- Jane Smith</span>
          </div>
          <div className="testimonial">
            <p>"Excellent customer service and fantastic results."</p>
            <span>- Michael Lee</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
```

### Como combinar esses componentes:

Agora você pode combinar esses componentes dentro do arquivo principal `App.jsx`:

```js

import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}

export default App;
```

### Estilos (CSS)

Para estilizar os componentes, adicione CSS no arquivo `index.css` ou crie arquivos CSS específicos para cada componente.

```css
/* index.css */
.hero {
  background-color: #f0f8ff;
  padding: 50px 0;
  text-align: center;
}

.features {
  background-color: #fff;
  padding: 50px 0;
  text-align: center;
}

.testimonials {
  background-color: #f8f9fa;
  padding: 50px 0;
  text-align: center;
}

.cta-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
}
```

Com esses três componentes — **Hero**, **Features**, e **Testimonials** — você pode criar uma landing page atrativa e funcional para destacar seu produto ou serviço.
