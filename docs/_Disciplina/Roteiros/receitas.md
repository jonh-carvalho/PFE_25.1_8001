# 04 - **Compartilhamento de Receitas**

**Tema Proposto:**  
**"Desenvolvimento de uma Plataforma Web Colaborativa para Compartilhamento de Receitas"**  
*(Tecnologias: HTML, CSS, JavaScript)*  

---

### **Objetivo do Projeto**  
Criar uma plataforma web onde usuários possam:  
1. Cadastrar/login com perfil personalizado.  
2. Compartilhar receitas com fotos, ingredientes e modo de preparo.  
3. Buscar receitas por ingredientes, categorias ou dificuldade.  
4. Curtir, comentar e salvar receitas favoritas.  
5. Visualizar estatísticas básicas (ex.: receitas mais populares).  

---

### **Organização do Product Backlog**  
**User Stories Priorizadas:**  
1. **Como usuário**, quero me cadastrar/logar para ter um perfil personalizado.  
   - *Critérios de Aceitação*: Formulário de cadastro, validação de campos, armazenamento em LocalStorage.  
2. **Como usuário**, quero criar e publicar receitas com título, descrição, ingredientes, modo de preparo e imagem.  
   - *Critérios de Aceitação*: Formulário de criação, upload de imagem (mock), exibição em grid/card.  
3. **Como usuário**, quero buscar receitas por palavra-chave, categoria ou dificuldade.  
   - *Critérios de Aceitação*: Barra de busca, filtros dinâmicos, resultados em tempo real.  
4. **Como usuário**, quero curtir e comentar receitas para interagir com a comunidade.  
   - *Critérios de Aceitação*: Botão de curtir, contador de likes, campo de comentários.  
5. **Como usuário**, quero salvar receitas em uma lista de favoritos.  
   - *Critérios de Aceitação*: Botão "Salvar", sessão de favoritos no perfil do usuário.  
6. **Como visitante**, quero visualizar receitas sem login para explorar o conteúdo.  
   - *Critérios de Aceitação*: Acesso público às receitas, restrição de funcionalidades para não cadastrados.  

---

### **Sprints Backlog (4 Sprints de 2 Semanas)**  
**Sprint 1: Fundação do Projeto**  
- **Meta da Sprint**: Protótipo funcional com cadastro/login e estrutura básica.  
- **Tarefas**:  
  - Criar layout responsivo com HTML/CSS (header, footer, grid de receitas).  
  - Implementar formulário de cadastro/login (mock de autenticação via LocalStorage).  
  - Desenvolver página inicial com cards de receitas estáticos (exibição mock).  

**Sprint 2: Funcionalidades Principais**  
- **Meta da Sprint**: Publicação e busca de receitas.  
- **Tarefas**:  
  - Implementar formulário de criação de receitas (com upload de imagem simulado).  
  - Armazenar receitas no LocalStorage e exibi-las dinamicamente.  
  - Desenvolver barra de busca com filtro por título e categoria.  

**Sprint 3: Interação e Personalização**  
- **Meta da Sprint**: Permitir curtidas, comentários e favoritos.  
- **Tarefas**:  
  - Adicionar botões de curtir e contagem de likes.  
  - Implementar seção de comentários com LocalStorage.  
  - Criar página de perfil do usuário com lista de receitas salvas.  

**Sprint 4: Refinamento e Entrega**  
- **Meta da Sprint**: Polir a experiência do usuário e preparar para deploy.  
- **Tarefas**:  
  - Adicionar animações/transições com CSS/JavaScript.  
  - Criar página de estatísticas (ex.: receitas mais curtidas).  
  - Testes de usabilidade e ajustes finais.  
  - Publicar o projeto em um servidor estático (ex.: GitHub Pages).  

---

### **Dinâmica**  

1. **Simulação de Priorização**: Dividir os alunos em grupos para priorizar o product backlog com base em valor, complexidade e riscos.  
2. **Role Play**: Designar papéis (Product Owner, Scrum Master, Dev Team) para planejar sprints e resolver impedimentos.  
3. **Adaptação a Mudanças**: Na metade do projeto, pode ocorrer uma nova user story (ex.: "Compartilhar receitas nas redes sociais") para praticar replanejamento.  
4. **Retrospectivas**: Após cada sprint, discutir aprendizados e ajustar o processo.
