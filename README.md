# API para Portfolio

## Descrição

Esta API foi criada com o objetivo de ser utilizada em um **portfólio digital**. A API é responsável por armazenar e recuperar dados de um banco de dados SQLite, incluindo informações de usuários, habilidades, projetos, e outros elementos que podem ser apresentados em um portfólio profissional.

Com esta API, você pode:
- Gerenciar informações de **usuários**.
- Armazenar **habilidades** e associá-las aos usuários.
- Gerenciar **projetos** de usuários, associando-os a habilidades específicas.
- Controlar **contatos** de usuários e categorias de recursos.

## Funcionalidades

- **GET /AllData**: Recupera todos os dados de uma tabela especificada.
- **Banco de Dados**: SQLite, permitindo fácil configuração e persistência dos dados.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript.
- **Express**: Framework para criação da API.
- **SQLite3**: Banco de dados leve para armazenamento local.
- **CORS**: Para permitir que a API seja acessada por outros domínios.

## Como Rodar Localmente

### 1. Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
