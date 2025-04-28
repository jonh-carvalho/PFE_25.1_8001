# 06 - **Análise de Tarefas**  

**Contexto:**  

Uma empresa de e-commerce está desenvolvendo um **novo aplicativo web** para facilitar a gestão de pedidos, estoque e atendimento ao cliente. A equipe de UX/UI precisa realizar uma **análise de tarefas** para entender como os usuários (vendedores, gerentes e clientes) interagem com o sistema atual e identificar oportunidades de melhoria.  

---

## **1. Objetivo da Análise de Tarefas**  

- Mapear as principais tarefas realizadas pelos usuários no sistema atual.  
- Identificar pontos de dificuldade, redundâncias e oportunidades de otimização.  
- Validar se o novo aplicativo atenderá às necessidades dos usuários.  

---

## **2. Público-Alvo (Personas)**  

| Perfil          | Tarefas Principais                     |  
|-----------------|----------------------------------------|  
| **Vendedor**    | Registrar pedidos, consultar estoque   |  
| **Gerente**     | Aprovar descontos, gerar relatórios    |  
| **Cliente**     | Acompanhar pedido, solicitar suporte   |  

---

## **3. Métodos de Coleta de Dados**  

- **Entrevistas com usuários:** Perguntar sobre fluxos de trabalho e desafios.  
- **Observação contextual:** Acompanhar usuários em seu ambiente real.  
- **Questionários online:** Coletar feedback quantitativo.  
- **Análise de logs:** Verificar padrões de uso no sistema atual.  

---

## **4. Principais Tarefas a Serem Analisadas**  

| Tarefa                  | Passos Identificados                     | Possíveis Problemas              |  
|-------------------------|------------------------------------------|----------------------------------|  
| **Registrar pedido**    | 1. Buscar cliente → 2. Adicionar itens → 3. Aplicar desconto (se necessário) → 4. Finalizar venda | Lentidão na busca de produtos |  
| **Consultar estoque**   | 1. Filtrar por categoria → 2. Ver disponibilidade → 3. Checar previsão de reposição | Dados desatualizados |  
| **Gerar relatório**     | 1. Selecionar período → 2. Escolher métricas → 3. Exportar PDF/Excel | Interface confusa |  

---

## **5. Ferramentas Utilizadas**  

- **Mapeamento de fluxo:** **Figma** ou **Miro** para diagramas.  
- **Gravação de sessões:** **Hotjar** ou **Lookback** para análise de interações.  
- **Organização de dados:** **Excel** ou **Airtable** para catalogar tarefas.  

---

## **6. Resultados Esperados**  

- **Lista de tarefas críticas** a serem otimizadas no novo app.  
- **Protótipo de fluxos** aprimorados (ex.: checkout em menos etapas).  
- **Relatório de insights** com recomendações para a equipe de desenvolvimento.  

---

## **7. Próximos Passos**  

1. Validar os resultados com stakeholders.  
2. Priorizar melhorias com base na análise.  
3. Aplicar mudanças no design do novo aplicativo.  

---

**Conclusão:**  
A análise de tarefas ajudará a garantir que o novo aplicativo web seja **intuitivo, eficiente e alinhado** com as necessidades reais dos usuários.  

---

Aqui está um diagrama **WBS (Work Breakdown Structure)** em **PlantUML** para representar as tarefas da análise de tarefas do aplicativo web:

```plantuml
@startwbs
skinparam monochrome true
skinparam shadowing false
skinparam ArrowColor #000000
skinparam BackgroundColor #FFFFFF

* Análise de Tarefas - Aplicativo Web de E-commerce
** 1. Definição de Objetivos
*** 1.1. Identificar tarefas críticas dos usuários
*** 1.2. Mapear pontos de dificuldade
*** 1.3. Validar requisitos do novo app
** 2. Coleta de Dados
*** 2.1. Entrevistas com usuários (Vendedores, Gerentes, Clientes)
*** 2.2. Observação contextual
*** 2.3. Questionários online
*** 2.4. Análise de logs do sistema atual
** 3. Análise das Tarefas Principais
*** 3.1. Registrar Pedido
**** 3.1.1. Buscar cliente
**** 3.1.2. Adicionar itens
**** 3.1.3. Aplicar desconto (se necessário)
**** 3.1.4. Finalizar venda
*** 3.2. Consultar Estoque
**** 3.2.1. Filtrar por categoria
**** 3.2.2. Ver disponibilidade
**** 3.2.3. Checar previsão de reposição
*** 3.3. Gerar Relatório
**** 3.3.1. Selecionar período
**** 3.3.2. Escolher métricas
**** 3.3.3. Exportar (PDF/Excel)
** 4. Identificação de Problemas
*** 4.1. Lentidão na busca de produtos
*** 4.2. Dados de estoque desatualizados
*** 4.3. Interface confusa para relatórios
** 5. Proposta de Melhorias
*** 5.1. Otimizar fluxo de checkout
*** 5.2. Melhorar sincronização de estoque
*** 5.3. Redesenhar interface de relatórios
** 6. Validação e Priorização
*** 6.1. Apresentar insights aos stakeholders
*** 6.2. Priorizar melhorias
*** 6.3. Ajustar protótipos
@endwbs
```

### **Visualização do Diagrama:**

O diagrama organiza as tarefas em uma estrutura hierárquica, mostrando:

1. **Objetivos** da análise.
2. **Métodos de coleta de dados**.
3. **Tarefas principais** com subtarefas detalhadas.
4. **Problemas identificados**.
5. **Propostas de melhorias**.
6. **Validação final** com stakeholders.

### **Como Usar:**

- Copie o código e cole em um editor PlantUML (como [PlantText](https://www.planttext.com/) ou integrado a ferramentas como VS Code).
- O diagrama será gerado automaticamente.

---

Aqui está um protótipo de **fluxo de tarefas em formato wireframe** usando **PlantUML Salt**, simulando telas básicas do aplicativo web de e-commerce:

```plantuml
@startsalt
{
  {#white+lightgrey}
  {* <b>Aplicativo Web - Fluxo de Tarefas (Wireframe)</b> }

  // --- Tela: Registrar Pedido --- //
  {T "Registrar Pedido" 
    [Buscar cliente    | input:___________ 🔍]
    [Lista de produtos | ( ) Produto A  $10.00]
    [                  | ( ) Produto B  $15.00]
    [                  | (✔) Produto C  $20.00]
    [Desconto (%)      | input:___5%     [Aplicar]]
    [Total: $35.00     | [Finalizar Venda]]
  }

  // --- Tela: Consultar Estoque --- //
  {T "Consultar Estoque"
    [Filtrar por: | dropdown: Categoria ▼]
    [Itens no estoque:]
    {#
      | Produto | Qtd | Reposição |
      |---------|-----|-----------|
      | A       | 50  | 05/04     |
      | B       | 0   | 10/04     |
      | C       | 120 | -         |
    }
    [Atualizar Estoque]
  }

  // --- Tela: Gerar Relatório --- //
  {T "Gerar Relatório"
    [Período: | 01/03/2024 ▾ to 31/03/2024 ▾]
    [Métricas:]
    [ (✔) Vendas por dia  ]
    [ (✔) Produtos mais vendidos ]
    [ ( ) Ticket médio    ]
    [Formato: | (✔) PDF   ( ) Excel ]
    [ [Gerar Relatório] ]
  }

  // --- Notas --- //
  note right
    <b>Problemas identificados:</b>
    1. Campo de busca lento
    2. Atualização de estoque não automática
    3. Opções de relatório pouco intuitivas
  end note
}
@endsalt
```

---

### **Características do Protótipo:**

1. **Registrar Pedido**:
   - Campo de busca com ícone de lupa 🔍
   - Lista de produtos selecionáveis (checkboxes)
   - Seção para aplicar desconto
   - Botão de ação principal

2. **Consultar Estoque**:
   - Dropdown para filtro
   - Tabela de dados simulada
   - Botão para atualização manual (problema identificado)

3. **Gerar Relatório**:
   - Seletores de período
   - Checkboxes para métricas
   - Opções de formato de exportação

4. **Anotações**:
   - Destaque dos 3 principais problemas de UX

---

### **Como Visualizar:**

1. Copie o código para qualquer editor PlantUML (como [PlantText](https://www.planttext.com/))
2. O resultado será um wireframe estático com:
   - Elementos interativos simulados (inputs, dropdowns, checkboxes)
   - Organização visual por telas
   - Anotações contextuais

### **Variações Possíveis:**

- Para **fluxos navegacionais**, adicione setas entre telas:

```plantuml
  @startsalt
  {
    [Tela 1] -> [Tela 2] -> [Tela 3]
  }
  @endsalt
```

- Para **detalhar componentes**, use notação `+`:

```plantuml
  @startsalt
  {
    + Botão Primário [Confirmar]
    + Botão Secundário [Cancelar]
  }
  @endsalt
```

Este formato é ideal para **discussões iniciais** com a equipe, permitindo ajustes rápidos antes de protótipos high-fidelity.

---
