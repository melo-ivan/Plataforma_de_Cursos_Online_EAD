# 🎓 Plataforma de Cursos Online EAD

![Status](https://img.shields.io/badge/status-online-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/frontend-React.js-blue)
![Spring Boot](https://img.shields.io/badge/backend-SpringBoot-green)
![TypeScript](https://img.shields.io/badge/language-TypeScript-lightgrey)
![PostgreSQL](https://img.shields.io/badge/database-PostgreSQL-blueviolet)

A **Plataforma de Cursos Online EAD** é um sistema educacional completo, desenvolvido com uma arquitetura moderna full stack, para simular um ambiente real de ensino a distância.  

Ela oferece autenticação segura, múltiplos perfis de usuário, gestão de cursos e aulas, dashboards interativos e uma interface responsiva e agradável.

---

## 🔗 Acesse o Projeto em Produção

> 🌐 [Frontend Deploy (Netlify)](https://seu-link.netlify.app)  
> ⚙️ [Backend API (Swagger/Heroku)](https://seu-backend-api.com/swagger)

---

## 🧠 Visão Geral das Funcionalidades

### 🔐 Autenticação e Controle de Acesso
- Login seguro com JWT
- Registro de novos usuários
- Validação de formulários
- Proteção de rotas com base no perfil
- Atualização de perfil e logout

### 👥 Perfis de Usuários

| Perfil         | Funcionalidades                                                  |
|----------------|------------------------------------------------------------------|
| 🎓 Estudante   | Visualiza cursos, aulas, progresso e certificados (mock)        |
| 👩‍🏫 Professor | Gerencia cursos e aulas, acompanha alunos e agenda              |
| 🛠️ Administrador | Controle total do sistema: usuários, relatórios e auditoria     |

### 📚 Gestão Educacional
- Criação e edição de cursos e aulas
- Upload e exibição de vídeos/aulas (simulados)
- Matrícula e progresso de estudantes
- Painéis com indicadores por perfil
- Gerenciamento de categorias e turmas

### 📊 Dashboards Interativos
- Gráficos com desempenho do aluno
- Estatísticas de engajamento por curso
- Comparativo entre turmas

### 💻 Experiência do Usuário
- Interface moderna e responsiva (Tailwind)
- Navegação fluida com React Router
- Feedback visual com animações
- Componentes reutilizáveis com TypeScript
- UX adaptado por tipo de usuário

---

## 🛠️ Tecnologias Utilizadas

### 🔷 Frontend
- React.js
- TypeScript
- Tailwind CSS
- React Router DOM
- Axios
- Context API + custom hooks

### 🔶 Backend
- Spring Boot
- Spring Security
- JWT Authentication
- JPA/Hibernate
- PostgreSQL

---

## 📁 Estrutura do Projeto (Frontend)

```bash
plataforma-ead/
│
├── public/                # Imagens e arquivos estáticos
├── src/
│   ├── assets/            # Ícones, imagens e vídeos
│   ├── components/        # Componentes reutilizáveis
│   ├── contexts/          # Auth e outros contextos globais
│   ├── pages/             # Telas (Login, Dashboard, Cursos, etc.)
│   ├── routes/            # Definição e proteção de rotas
│   ├── services/          # Integração com backend (Axios)
│   ├── utils/             # Funções auxiliares
│   └── App.tsx            # Componente principal
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
# Clone o repositório
git clone https://github.com/seuusuario/Plataforma_de_Cursos_Online_EAD.git
cd frontend

# Instale as dependências
npm install

# Rode o servidor
npm run dev
# Navegue até o diretório backend
cd backend

# Compile e rode o projeto
./mvnw spring-boot:run
# Fork o repositório
# Crie sua branch: git checkout -b minha-feature
# Commit: git commit -m 'feat: minha melhoria'
# Push: git push origin minha-feature
# Crie um Pull Request 🚀

