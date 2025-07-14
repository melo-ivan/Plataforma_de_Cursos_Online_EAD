# 🎓 Plataforma de Cursos Online (EAD)

![Status](https://img.shields.io/badge/status-online-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/frontend-React.js-blue)
![Spring Boot](https://img.shields.io/badge/backend-Spring%20Boot-yellowgreen)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue)
![PostgreSQL](https://img.shields.io/badge/database-PostgreSQL-blueviolet)

A **Plataforma de Cursos Online (EAD)** é um sistema educacional **Full Stack**, moderno e funcional, que simula o ambiente de uma instituição de ensino digital. Desenvolvido com foco em boas práticas de arquitetura, autenticação e usabilidade, o projeto permite o gerenciamento completo de cursos, usuários e conteúdo educacional, com dashboards por perfil.

---

## 🔗 Acesse o Projeto Online

👉 [https://legendary-sawine-e4b380.netlify.app/](https://legendary-sawine-e4b380.netlify.app/)

---

## 🚀 Funcionalidades Principais

- 🔐 Autenticação segura com **JWT**
- 🧑‍🏫 Painéis para **Estudante**, **Professor** e **Administrador**
- 📚 Gestão de cursos, aulas, usuários e conteúdos
- 📊 Dashboards com indicadores de progresso
- 🎓 Controle de matrícula, notas e certificados
- 💬 Feedback visual (loading, validações, erros)
- 📱 Interface responsiva (Tailwind CSS)

---

## 👥 Perfis de Usuário

| Perfil         | Acesso                                                                 |
|----------------|------------------------------------------------------------------------|
| Estudante      | Visualização de cursos, aulas, progresso, certificados                 |
| Professor      | Gerenciamento de cursos, conteúdos e acompanhamento de alunos          |
| Administrador  | Gestão de usuários, relatórios, cursos e permissões                    |

---

## 🧱 Estrutura do Projeto

```bash
Plataforma_de_Cursos_Online_EAD/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── pages/
│   │   ├── routes/
│   │   ├── services/
│   │   └── App.tsx
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   └── main/java/com/ead/
│   │       ├── controllers/
│   │       ├── models/
│   │       ├── repositories/
│   │       ├── services/
│   │       ├── security/
│   └── pom.xml
# Na pasta backend/
cd backend
# Configure o application.properties com seu banco local
mvn spring-boot:run

# Na pasta frontend/
cd frontend
npm install
npm run dev
