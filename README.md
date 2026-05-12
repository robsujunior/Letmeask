<div align="center">
  <img src="./src/assets/images/logo.svg" alt="Letmeask" height="60px"/>
  
  <br/>
  <br/>

> Crie salas de Q&A ao vivo e deixe a sua audiência fazer as perguntas — você decide quais merecem resposta.

  <p>
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/seu-usuario/letmeask?color=7159c1">
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/seu-usuario/letmeask?color=7159c1">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-7159c1">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/seu-usuario/letmeask?color=7159c1">
  </p>
</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Pré-requisitos](#-pré-requisitos)
- [Como rodar localmente](#-como-rodar-localmente)
- [Configuração do Firebase](#-configuração-do-firebase)
- [Licença](#-licença)

---

## 💡 Sobre o Projeto

**Letmeask** é uma aplicação para gerenciamento de perguntas em tempo real, ideal para streamers, professores e criadores de conteúdo. Criadores de salas podem receber perguntas do público, destacar as mais votadas e marcá-las como respondidas — tudo de forma organizada e interativa.

> Projeto desenvolvido durante a **Next Level Week Together** da [Rocketseat](https://rocketseat.com.br/) 🚀

---

## ✨ Funcionalidades

- 🔐 **Autenticação com Google** via Firebase Auth
- 🏠 **Criação de salas** com código único de acesso
- ❓ **Envio de perguntas** em tempo real por qualquer participante
- 👍 **Sistema de likes** para destacar as perguntas mais relevantes
- ✅ **Marcar perguntas como respondidas**
- 📌 **Destacar a pergunta atual** sendo discutida
- 🗑️ **Encerrar sala** e remover perguntas (apenas para o admin)
- 📋 **Copiar código da sala** com um clique
- 🌙 **Suporte a modo escuro**

---

## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

| Tecnologia                                    | Descrição                                   |
| --------------------------------------------- | ------------------------------------------- |
| [React](https://reactjs.org/)                 | Biblioteca para construção de interfaces    |
| [TypeScript](https://www.typescriptlang.org/) | Superset tipado do JavaScript               |
| [Firebase](https://firebase.google.com/)      | Banco de dados em tempo real e autenticação |
| [SASS](https://sass-lang.com/)                | Pré-processador CSS                         |

---

## ⚙️ Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/en/) (versão 14 ou superior)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- Uma conta no [Firebase](https://firebase.google.com/)

---

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/letmeask.git

# Entre na pasta do projeto
cd letmeask

# Instale as dependências
yarn install
# ou
npm install

# Inicie o servidor de desenvolvimento
yarn start
# ou
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

---

## 🔥 Configuração do Firebase

1. Acesse o [Console do Firebase](https://console.firebase.google.com/) e crie um novo projeto.

2. Ative o **Authentication** com o provedor **Google**.

3. Crie um **Realtime Database** e configure as regras de segurança:

```json
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",
        "questions": {
          ".read": true,
          ".write": "auth != null",
          "$questionId": {
            "likes": {
              ".read": true,
              ".write": "auth != null"
            }
          }
        }
      }
    }
  }
}
```

4. Nas configurações do projeto, copie as credenciais do seu app web e crie um arquivo `.env.local` na raiz do projeto:

```env
REACT_APP_API_KEY=sua_api_key
REACT_APP_AUTH_DOMAIN=seu_auth_domain
REACT_APP_DATABASE_URL=sua_database_url
REACT_APP_PROJECT_ID=seu_project_id
REACT_APP_STORAGE_BUCKET=seu_storage_bucket
REACT_APP_MESSAGING_SENDER_ID=seu_sender_id
REACT_APP_APP_ID=seu_app_id
```

> ⚠️ **Nunca suba o arquivo `.env.local` para o GitHub.** Ele já está incluído no `.gitignore`.
