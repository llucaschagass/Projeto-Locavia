# Locavia

Este projeto foi gerado com o Angular CLI na versão 17.0.1 e Node.js na versão 20.9.0.

## Etapas

1. **Criar o Backend em Node.js**
   - Implementar um servidor Node.js usando Express para criar uma API Rest.
   - Configurar rotas para manipular operações CRUD (Create, Read, Update, Delete) de veículos.
   - Integrar lógica de manipulação de dados usando o sistema de arquivos (FS) para persistência.

2. **Criar o Frontend em Angular**
   - Desenvolver uma aplicação Angular para interagir com a API Rest criada no backend.
   - Implementar componentes para listar, adicionar, visualizar detalhes e atualizar veículos.
   - Utilizar serviços Angular para integrar o frontend com o backend.

3. **Criar API Rest**
   - Implementar endpoints no backend para manipular informações sobre veículos.
   - Estabelecer comunicação entre o frontend e o backend usando solicitações HTTP (GET, POST, PUT, DELETE).

## O que o programa deve executar

O sistema Locavia tem como objetivo gerenciar informações sobre veículos. As principais funcionalidades incluem:

1. **Listar Veículos**
   - Apresentar uma lista de veículos cadastrados no sistema.

2. **Adicionar Veículo**
   - Permitir a adição de novos veículos, fornecendo informações como ID, placa, chassi, renavam, modelo, marca e ano.

3. **Visualizar Detalhes do Veículo**
   - Exibir informações detalhadas sobre um veículo específico ao clicar no botão de detalhes.

4. **Atualizar Informações do Veículo**
   - Permitir a edição das informações de um veículo existente.

5. **Excluir Veículo**
   - Possibilitar a exclusão de um veículo do sistema.

## Como Executar o Projeto

### Backend

1. Navegue até a pasta `backend` no terminal.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar o servidor backend.

### Frontend

1. Navegue até a pasta `frontend` no terminal.
2. Execute `npm install` para instalar as dependências.
3. Execute `npm start` para iniciar o servidor de desenvolvimento Angular.

Acesse `http://localhost:4200/` no seu navegador para interagir com o frontend.

**Observação:** Certifique-se de que o servidor backend esteja em execução antes de iniciar o frontend para garantir a comunicação adequada entre os dois.

## Notas do desenvolvimento

Estou encontrando dificuldade em implementar o código pois assim que eu modifico o Typescript dos módulos eles param de funcionar em app-module.ts e em app.components.ts

