# Contributing to Open ERP Core (ERP-Elysia)

Thank you for your interest in contributing to **ERP-Elysia**! This project is an open-source, community-driven Enterprise Resource Planning engine built on [Bun](https://bun.sh), [ElysiaJS](https://elysiajs.com), and [Drizzle ORM](https://orm.drizzle.team).

To ensure high code quality, maintainability, and architectural consistency across modules, please review the contribution guidelines below before submitting issues or pull requests.

---

## 1. Development Workflow & Git Standards

### 1.1 Branch Naming Conventions
All branches should follow a structured naming pattern with clear prefixes:

| Prefix | Use Case | Example |
| :--- | :--- | :--- |
| `feat/` | New features or business modules | `feat/sales-order-module` |
| `fix/` | Bug fixes and patches | `fix/inventory-sku-lookup` |
| `refactor/` | Code structure improvements without feature changes | `refactor/drizzle-connection-pool` |
| `docs/` | Documentation updates, examples, or guides | `docs/contributing-guide` |
| `test/` | Adding or updating automated tests | `test/auth-jwt-guard` |
| `chore/` | Tooling, dependency bumps, or config adjustments | `chore/update-bun-deps` |

### 1.2 Commit Message Convention (Conventional Commits)
Write concise and descriptive commit messages following the standard format:

```text
<type>(<scope>): <short summary>

[optional body]

[optional footer(s)]
```

**Allowed Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.

**Examples:**
- `feat(inventory): add batch tracking and stock alert endpoints`
- `fix(auth): resolve token expiration edge case in JWT guard`
- `docs(api): update Swagger docs for accounting ledger routes`

---

## 2. Modular Architecture & Code Standards

Every business domain (e.g., Sales, Inventory, Accounting, HR) must be implemented as an isolated, pluggable module under `src/modules/<module-name>/`.

### 2.1 Standard Module Structure
```text
src/modules/<module-name>/
├── index.ts        # Elysia router instance & route definitions
├── schema.ts       # Drizzle ORM table definitions & relations
├── service.ts      # Business logic & database operations
└── types.ts        # TypeBox request/response schemas & TypeScript types
```

### 2.2 Database Schema Guidelines (`schema.ts`)
- **Multi-Tenancy**: Every entity table must contain a `tenantId` field referencing `tenants.id` with cascading delete:
  ```typescript
  tenantId: uuid('tenant_id').references(() => tenants.id, { onDelete: 'cascade' }).notNull()
  ```
- **Primary Keys**: Use UUIDs generated via `defaultRandom()`.
- **Timestamps**: Always include `createdAt` and `updatedAt` timestamps.
- **Precise Numbers**: Use `numeric({ precision: 12, scale: 2 })` or higher for financial/stock quantities.

### 2.3 Elysia Route Standards (`index.ts`)
- Use TypeBox validation (`t.Object(...)`) for all query parameters, route parameters, and request bodies.
- Group endpoints logically and document each route with OpenAPI/Swagger metadata:
  ```typescript
  export const salesModule = new Elysia({ prefix: '/sales' })
    .get('/orders', async ({ headers, set }) => {
      // Logic
    }, {
      detail: {
        tags: ['Sales'],
        summary: 'List tenant sales orders'
      }
    });
  ```

---

## 3. Pull Request (PR) Checklist

Before opening a Pull Request, verify the following steps:

1. **Fork and Clone**:
   ```bash
   git clone https://github.com/<your-username>/ERP-Elysia.git
   cd ERP-Elysia
   ```
2. **Install Dependencies**:
   ```bash
   bun install
   ```
3. **Create a Feature Branch**:
   ```bash
   git checkout -b feat/your-feature-name
   ```
4. **Format & Type Check**:
   ```bash
   bun run test
   ```
5. **Push and Submit PR**:
   - Push to your fork: `git push origin feat/your-feature-name`
   - Open a PR against the `main` branch of `paolat5/ERP-Elysia`.
   - Provide a concise description of what changed, reference any related issues (e.g., `Closes #12`), and include API testing results.

---

## 4. Code of Conduct

We are committed to providing a welcoming, diverse, and harassment-free environment for everyone. Please be respectful, constructive, and collaborative in all discussions and code reviews.







*************






cat << 'EOF' > CONTRIBUTING.md
# Contributing to Open ERP Core (ERP-Elysia)

Thank you for your interest in contributing to **ERP-Elysia**! This project is an open-source, community-driven Enterprise Resource Planning engine built on [Bun](https://bun.sh), [ElysiaJS](https://elysiajs.com), [Drizzle ORM](https://orm.drizzle.team), and [PostgreSQL](https://www.postgresql.org).

To ensure high code quality, maintainability, and architectural consistency across modules, please review the contribution guidelines below before submitting issues or pull requests.

---

## 1. Prerequisites & Database Standards

### 1.1 Database Requirement: PostgreSQL 15+
- **Primary Database Engine**: PostgreSQL (version 15 or higher) is strictly required for all ERP modules.
- **ORM & Driver**: Use `drizzle-orm/pg-core` with `postgres` (postgres-js driver).
- **No SQLite / MySQL Dialects**: Pull Requests containing non-PostgreSQL schemas or driver dependencies will not be accepted.

### 1.2 Local Database Setup (Docker)
Contributors can quickly spin up the official PostgreSQL database instance using Docker:

```bash
docker run --name open-erp-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=open_erp \
  -p 5432:5432 \
  -d postgres:16-alpine





  DATABASE_URL=postgres://postgres:postgres@localhost:5432/open_erp





  2. Development Workflow & Git Standards2.1 Branch Naming ConventionsAll branches must follow structured prefixes:PrefixUse CaseExamplefeat/New features or business modulesfeat/sales-order-modulefix/Bug fixes and patchesfix/inventory-sku-lookuprefactor/Code improvements without feature changesrefactor/drizzle-pooldocs/Documentation updates or guidesdocs/contributing-guidetest/Adding or updating automated teststest/auth-jwt-guardchore/Tooling, dependency bumps, or configschore/update-bun-deps2.2 Commit Message Convention (Conventional Commits)Plaintext<type>(<scope>): <short summary>

[optional body]

[optional footer(s)]
Allowed Types: feat, fix, docs, style, refactor, perf, test, chore.3. Modular Architecture & PostgreSQL Schema StandardsEvery business domain (e.g., Sales, Inventory, Accounting) must reside under src/modules/<module-name>/.3.1 Standard Module StructurePlaintextsrc/modules/<module-name>/
├── index.ts        # Elysia router instance & route definitions
├── schema.ts       # Drizzle PostgreSQL schema definitions & relations
├── service.ts      # Business logic & database operations
└── types.ts        # TypeBox request/response schemas & TypeScript types
3.2 PostgreSQL Database Schema Rules (schema.ts)Dialect: Import exclusively from drizzle-orm/pg-core.Multi-Tenancy: Every entity table must contain a tenantId foreign key referencing tenants.id:TypeScriptimport { pgTable, uuid, varchar, numeric, timestamp } from 'drizzle-orm/pg-core';
import { tenants } from '../../core/db/schema';

export const orders = pgTable('orders', {
  id: uuid('id').defaultRandom().primaryKey(),
  tenantId: uuid('tenant_id').references(() => tenants.id, { onDelete: 'cascade' }).notNull(),
  totalAmount: numeric('total_amount', { precision: 14, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});
IDs & Primary Keys: Use PostgreSQL native UUIDs (uuid('id').defaultRandom().primaryKey()).Financial Precision: Use PostgreSQL numeric types for all monetary values and inventory counts.3.3 Database MigrationsWhen adding new tables or modifying schemas:Bash# 1. Generate migration files
bun run db:generate

# 2. Apply migrations to PostgreSQL
bun run db:migrate
4. Pull Request (PR) ChecklistBefore submitting a Pull Request:Ensure all schema definitions adhere strictly to PostgreSQL dialect conventions.Run database migrations and verify there are no migration drifts.Test all endpoints via Elysia Swagger UI at http://localhost:3000/docs.Run automated test suites:Bashbun test
Submit your PR against the main branch with a clear summary and schema change notes.EOF