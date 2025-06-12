# GitHub Codespaces

## Introdução ao GitHub Codespaces

O GitHub Codespaces é um ambiente de desenvolvimento na nuvem que permite codificar diretamente no seu navegador ou através do Visual Studio Code. Ele oferece uma máquina virtual pré-configurada com todas as ferramentas necessárias para seu projeto.

### Configuração Inicial

#### 1. Acesso ao Codespaces

- **Via GitHub.com**:
  - Navegue até seu repositório no GitHub
  - Clique no botão "Code" e selecione a aba "Codespaces"
  - Clique em "Create codespace on main" (ou no branch desejado)

- **Via Visual Studio Code**:
  - Instale a extensão "GitHub Codespaces" na marketplace do VS Code
  - Faça login com sua conta GitHub
  - Acesse a paleta de comandos (Ctrl+Shift+P ou Cmd+Shift+P) e digite "Codespaces: Create New Codespace"

#### 2. Configuração do Ambiente
- O Codespace é criado automaticamente com base no arquivo `.devcontainer.json` do seu repositório
- Se não existir, um container padrão será usado
- Personalize o ambiente editando o arquivo `.devcontainer/devcontainer.json`

### Uso no Navegador Web

#### 1. Interface Principal
- Editor de código central
- Terminal integrado na parte inferior
- Barra lateral com explorador de arquivos, extensões e outras ferramentas

#### 2. Funcionalidades Principais
- **Edição de código**: Igual ao VS Code desktop
- **Terminal**: Acesso completo ao shell do container
- **Portas**: Exposição automática de portas para aplicações web
- **Extensões**: Instalação de extensões do VS Code Marketplace

#### 3. Gerenciamento do Codespace
- Pause/Resume: Ociosos são automaticamente pausados após 30 minutos
- Configurações: Ajuste de máquina (2 a 32 cores, até 64GB RAM)
- Delete: Remova codespaces não utilizados para economizar recursos

### Uso no Visual Studio Code Desktop

#### 1. Conexão ao Codespace
- Abra a paleta de comandos (Ctrl+Shift+P)
- Digite "Codespaces: Connect to Codespace"
- Selecione o codespace desejado na lista

#### 2. Vantagens sobre a versão web
- Melhor performance para projetos grandes
- Integração mais profunda com o sistema operacional
- Acesso a todas as extensões do VS Code

### Fluxo de Trabalho Recomendado

1. **Inicie seu codespace** a partir do repositório GitHub
2. **Desenvolva** como faria localmente
3. **Faça commit** das alterações diretamente para o branch
4. **Pause/Delete** quando não estiver em uso para economizar recursos
5. **Recupere** seu ambiente exatamente como estava na próxima sessão

### Dicas Avançadas

#### 1. Configuração Personalizada
- Use `devcontainer.json` para:
  - Especificar extensões obrigatórias
  - Configurar variáveis de ambiente
  - Definir comandos pós-criação

#### 2. Pré-build de Codespaces
- Configure pré-builds para reduzir tempo de inicialização
- Disponível para organizações GitHub

#### 3. Integração com GitHub Actions
- Automatize testes e builds diretamente no seu fluxo Codespace

### Solução de Problemas Comuns

- **Conexão lenta**: Mude a região do codespace nas configurações
- **Problemas de extensão**: Algumas extensões podem não funcionar em ambientes remotos
- **Timeout**: Configure o tempo de inatividade nas configurações

### Conclusão
O GitHub Codespaces oferece um ambiente de desenvolvimento completo acessível de qualquer lugar, eliminando problemas de configuração de ambiente e permitindo focar no código.