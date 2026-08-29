# Elysia with Bun runtime

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
bun create elysia ./elysia-example
```

## Development
To start the development server run:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.


************************************



# Open ERP Core (Elysia + Bun)

An open-source, modular Enterprise Resource Planning (ERP) backend built on Bun, ElysiaJS, and Drizzle ORM.

## Features
- ⚡ **High Performance**: Powered by Bun & ElysiaJS
- 🧩 **Modular Architecture**: Isolated business modules (Inventory, Sales, Accounting)
- 🗄️ **Drizzle ORM**: Type-safe PostgreSQL queries
- 📑 **Swagger / OpenAPI**: Auto-generated API documentation at `/docs`

## Quick Start

1. Install dependencies:
\`\`\`bash
bun install
\`\`\`

2. Setup environment variables:
\`\`\`bash
cp .env.example .env
\`\`\`

3. Run development server:
\`\`\`bash
bun run dev
\`\`\`

## Contributing
Pull requests and feature discussions are welcome. Please open an issue to discuss proposed changes before submitting a PR.



*******
Swagger / OpenAPI Documentation: http://localhost:3000/swagger

API Health Check & Database Query: http://localhost:3000/api/health

Root Endpoint: http://localhost:3000
*******
