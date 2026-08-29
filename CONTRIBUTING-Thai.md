Allowed Types: feat, fix, docs, style, refactor, perf, test, chore.

Examples:

feat(inventory): add batch tracking and stock alert endpoints

fix(auth): resolve token expiration edge case in JWT guard

docs(api): update Swagger docs for accounting ledger routes

2. Modular Architecture & Code Standards
Every business domain (e.g., Sales, Inventory, Accounting, HR) must be implemented as an isolated, pluggable module under src/modules/<module-name>/.

2.1 Standard Module Structure
Plaintext
src/modules/<module-name>/
├── index.ts        # Elysia router instance & route definitions
├── schema.ts       # Drizzle ORM table definitions & relations
├── service.ts      # Business logic & database operations
└── types.ts        # TypeBox request/response schemas & TypeScript types
2.2 Database Schema Guidelines (schema.ts)
Multi-Tenancy: Every entity table must contain a tenantId field referencing tenants.id with cascading delete:

TypeScript
tenantId: uuid('tenant_id').references(() => tenants.id, { onDelete: 'cascade' }).notNull()
Primary Keys: Use UUIDs generated via defaultRandom().

Timestamps: Always include createdAt and updatedAt timestamps.

Precise Numbers: Use numeric({ precision: 12, scale: 2 }) or higher for financial/stock quantities.

2.3 Elysia Route Standards (index.ts)
Use TypeBox validation (t.Object(...)) for all query parameters, route parameters, and request bodies.

Group endpoints logically and document each route with OpenAPI/Swagger metadata:

TypeScript
export const salesModule = new Elysia({ prefix: '/sales' })
  .get('/orders', async ({ headers, set }) => {
    // Logic
  }, {
    detail: {
      tags: ['Sales'],
      summary: 'List tenant sales orders'
    }
  });
3. Pull Request (PR) Checklist
Before opening a Pull Request, verify the following steps:

Fork and Clone:

Bash
git clone [https://github.com/](https://github.com/)<your-username>/ERP-Elysia.git
cd ERP-Elysia
Install Dependencies:

Bash
bun install
Create a Feature Branch:

Bash
git checkout -b feat/your-feature-name
Format & Type Check:

Bash
bun run test
Push and Submit PR:

Push to your fork: git push origin feat/your-feature-name

Open a PR against the main branch of paolat5/ERP-Elysia.

Provide a concise description of what changed, reference any related issues (e.g., Closes #12), and include API testing results.

4. Code of Conduct
We are committed to providing a welcoming, diverse, and harassment-free environment for everyone. Please be respectful, constructive, and collaborative in all discussions and code reviews.
"""

with open("CONTRIBUTING.md", "w", encoding="utf-8") as f:
f.write(content)

print("CONTRIBUTING.md successfully created.")


```text?code_stdout&code_event_index=1
CONTRIBUTING.md successfully created.






**********************************



Allowed Types: feat, fix, docs, style, refactor, perf, test, chore.

Examples:

feat(inventory): add batch tracking and stock alert endpoints

fix(auth): resolve token expiration edge case in JWT guard

docs(api): update Swagger docs for accounting ledger routes

2. Modular Architecture & Code Standards
Every business domain (e.g., Sales, Inventory, Accounting, HR) must be implemented as an isolated, pluggable module under src/modules/<module-name>/.

2.1 Standard Module Structure
Plaintext
src/modules/<module-name>/
├── index.ts        # Elysia router instance & route definitions
├── schema.ts       # Drizzle ORM table definitions & relations
├── service.ts      # Business logic & database operations
└── types.ts        # TypeBox request/response schemas & TypeScript types
2.2 Database Schema Guidelines (schema.ts)
Multi-Tenancy: Every entity table must contain a tenantId field referencing tenants.id with cascading delete:

TypeScript
tenantId: uuid('tenant_id').references(() => tenants.id, { onDelete: 'cascade' }).notNull()
Primary Keys: Use UUIDs generated via defaultRandom().

Timestamps: Always include createdAt and updatedAt timestamps.

Precise Numbers: Use numeric({ precision: 12, scale: 2 }) or higher for financial/stock quantities.

2.3 Elysia Route Standards (index.ts)
Use TypeBox validation (t.Object(...)) for all query parameters, route parameters, and request bodies.

Group endpoints logically and document each route with OpenAPI/Swagger metadata:

TypeScript
export const salesModule = new Elysia({ prefix: '/sales' })
  .get('/orders', async ({ headers, set }) => {
    // Logic
  }, {
    detail: {
      tags: ['Sales'],
      summary: 'List tenant sales orders'
    }
  });
3. Pull Request (PR) Checklist
Before opening a Pull Request, verify the following steps:

Fork and Clone:

Bash
git clone [https://github.com/](https://github.com/)<your-username>/ERP-Elysia.git
cd ERP-Elysia
Install Dependencies:

Bash
bun install
Create a Feature Branch:

Bash
git checkout -b feat/your-feature-name
Format & Type Check:

Bash
bun run test
Push and Submit PR:

Push to your fork: git push origin feat/your-feature-name

Open a PR against the main branch of paolat5/ERP-Elysia.

Provide a concise description of what changed, reference any related issues (e.g., Closes #12), and include API testing results.

4. Code of Conduct
We are committed to providing a welcoming, diverse, and harassment-free environment for everyone. Please be respectful, constructive, and collaborative in all discussions and code reviews.
EOF