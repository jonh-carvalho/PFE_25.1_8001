# Protótipo

Para criar protótipos em **PlantUML** a partir de cada tarefa da **Análise Hierárquica de Tarefas (AHT)** para o processo de **reservar um livro**, podemos criar uma interface visual separada para cada subtarefa. Isso vai simular como seria o layout ou a estrutura de uma interface de usuário para cada etapa do processo. Abaixo estão os exemplos de protótipos para cada tarefa.

### 1. **Fazer login no sistema**
```plantuml
@startuml
skinparam rectangle {
  BackgroundColor LightSkyBlue
  BorderColor Navy
  RoundCorner 20
}

rectangle "Tela de Login" {
  rectangle "Inserir nome de usuário"
  rectangle "Inserir senha"
  rectangle "Confirmar login"
  rectangle "[Botão] Entrar"
}
@enduml
```

### 2. **Buscar livro no catálogo**
```plantuml
@startuml
skinparam rectangle {
  BackgroundColor LightYellow
  BorderColor GoldenRod
  RoundCorner 20
}

rectangle "Buscar Livro no Catálogo" {
  rectangle "Campo de busca: Digitar nome do livro"
  rectangle "Selecionar categoria"
  rectangle "[Botão] Buscar"
  rectangle "Exibir resultados"
}
@enduml
```

### 3. **Selecionar livro para reservar**
```plantuml
@startuml
skinparam rectangle {
  BackgroundColor LightGreen
  BorderColor DarkGreen
  RoundCorner 20
}

rectangle "Selecionar Livro para Reservar" {
  rectangle "Ver detalhes do livro"
  rectangle "Verificar disponibilidade"
  rectangle "[Botão] Reservar"
}
@enduml
```

### 4. **Confirmar reserva**
```plantuml
@startuml
skinparam rectangle {
  BackgroundColor LightCoral
  BorderColor DarkRed
  RoundCorner 20
}

rectangle "Confirmar Reserva" {
  rectangle "Clicar em Reservar"
  rectangle "Receber confirmação"
  rectangle "[Botão] OK"
}
@enduml
```

### Explicação:
- **Visual de Cada Tarefa**: Cada tarefa foi convertida em um protótipo de interface separada, simulando como seria a tela do sistema para cada ação específica (login, busca, seleção e confirmação).
- **Estilo**: Usei cores diferentes e o `skinparam` para melhorar a visibilidade e estilo dos protótipos.
- **Componentes de UI**: As caixas representam campos de texto, botões e áreas de interação para cada tarefa.

### Como Usar:
- Copie cada bloco de código em seu editor **PlantUML** para gerar os diagramas individualmente.
- Esses protótipos podem ser usados para simular como seria a interface do usuário em cada fase do processo de reserva de livros.

Esses exemplos podem ser expandidos ou ajustados conforme as necessidades do seu projeto!