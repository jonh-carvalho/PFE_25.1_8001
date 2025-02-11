---

### **Introdução ao React com HTML e CDN**

---

#### **Objetivo:**
Apresentar os conceitos básicos do React e como integrá-lo em uma página HTML utilizando um link para a CDN, sem a necessidade de um ambiente de desenvolvimento local como o Node.js.

---

### **Estrutura do Roteiro:**

#### **1. Introdução ao React**
   - **Definição**: React é uma biblioteca JavaScript criada pelo Facebook para criar interfaces de usuário de forma declarativa e eficiente.
   - **Vantagens**:
     - Componentes reutilizáveis.
     - Atualizações rápidas do DOM (Virtual DOM).
     - Facilita a criação de Single Page Applications (SPAs).
   
---

#### **2. Preparando o Ambiente**
   - Não é necessário instalar nada localmente para este exemplo inicial, vamos usar uma página HTML e um link para a biblioteca via CDN.
   
---

#### **3. Estrutura Básica do Projeto**
   - **HTML Básico**: 
     - Comece com a criação de uma página HTML simples contendo um elemento `<div>` que será usado como “ponto de montagem” para o React.
     
```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>React Introdução</title>
   </head>
   <body>
     <!-- Div onde o React renderizará o conteúdo -->
     <div id="root"></div>
   
     <!-- Scripts do React via CDN -->
     <script src="https://unpkg.com/react@17/umd/react.production.min.js" crossorigin></script>
     <script src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js" crossorigin></script>
     <!-- Nosso script JavaScript -->
     <script src="app.js"></script>
   </body>
   </html>
```

---

#### **4. Criando um Elemento React**
   
   
   Crie o arquivo `app.js` com o seguinte código:
   
```javascript
   ReactDOM.render(
    React.createElement(
        'h1',
        null,
        'Hello, World!'
    ),
    document.getElementById('root'))
```