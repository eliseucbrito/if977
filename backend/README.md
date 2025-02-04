# 📘 Documentação do Projeto

## 📌 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- **Node.js** (versão recomendada: 18 ou superior)
- **pnpm** (instale com `npm install -g pnpm`)

---

## 📂 Estrutura do Projeto

```
/backend
│── /src
│   │── /routes
│   │   ├── taskRoutes.ts
│   │── /middlewares
│   │   ├── errorMiddleware.ts
│   │── /schemas
│   │   ├── taskSchema.ts
│   │── /controllers
│   │   ├── taskController.ts
│   │── /utils
│   │   ├── asyncHandler.ts
│   │── app.ts
│── /prisma
│   │── dev.db (gerado após as migrações) 
│   │── schema.prisma
│   │── /migrations
│── package.json
│── tsconfig.json
```

---

## 🚀 Configuração do Ambiente

### 1️⃣ Clonar o Repositório

```sh
git clone https://github.com/eliseucbrito/if977.git
cd if977/backend
```

### 2️⃣ Instalar Dependências

```sh
pnpm install
```

---

## 🔧 Configuração do Prisma

### 1️⃣ Criar o Cliente do Prisma

```sh
pnpm prisma:generate
```

### 2️⃣ Criar a Estrutura do Banco

```sh
pnpm prisma:push
```

---

## 🔥 Executando o Projeto

### Ambiente de Desenvolvimento (hot-reload com `ts-node`)

```sh
pnpm dev
```

### Ambiente de Produção (compilado com `tsc`)

1. **Compilar o código TypeScript:**
   ```sh
   pnpm build
   ```
2. **Rodar o servidor:**
   ```sh
   pnpm start
   ```

---

## 🛠️ Scripts Úteis

| Comando               | Descrição                                      |
|-----------------------|----------------------------------------------|
| `pnpm dev`           | Executa o projeto em modo desenvolvimento (hot-reload) |
| `pnpm build`         | Compila o código TypeScript para JavaScript   |
| `pnpm start`         | Inicia o servidor com código já compilado     |
| `pnpm prisma:generate` | Gera os clientes do Prisma                   |
| `pnpm prisma:push`   | Aplica o schema do Prisma no banco de dados  |

---

## 📝 Endpoints da API

| Método | Rota              | Descrição |
|--------|-------------------|-----------|
| GET    | `/tarefas`      | Lista todas as tarefas |
| GET    | `/tarefas/:id`  | Busca uma tarefa pelo ID |
| POST   | `/tarefas`      | Cria uma nova tarefa |
| PUT    | `/tarefas/:id`  | Atualiza uma tarefa existente |
| DELETE | `/tarefas/:id`  | Remove uma tarefa |