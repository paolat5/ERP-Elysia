import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { db } from './core/db';
import { tenants, users, inventoryItems } from './core/db/schema';

const app = new Elysia()
  .use(swagger({
    documentation: {
      info: {
        title: 'Open ERP Core API',
        version: '1.0.0',
        description: 'Modular ERP backend built with ElysiaJS, Bun, and PostgreSQL'
      }
    }
  }))
  .get('/', () => ({
    status: 'online',
    message: 'ERP-Elysia Core API is running'
  }))
  .get('/api/health', async () => {
    // ทดสอบ query ฐานข้อมูล
    const tenantList = await db.select().from(tenants).limit(1);
    return {
      database: 'connected',
      tenantsCount: tenantList.length
    };
  })
  .listen(process.env.PORT || 3000);

console.log(`🦊 ERP Core is running at http://${app.server?.hostname}:${app.server?.port}`);



// import { Elysia } from "elysia";

// const app = new Elysia().get("/", () => "Hello ERP-Elysia").listen(3000);

// console.log(
//   `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
// );
