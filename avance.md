## 📝 Notas — Setup Prisma + Supabase (Fase 1)

### Lo que armamos

- Proyecto Next.js con TypeScript creado
- Supabase configurado (proyecto: CRM-SEGUROS)
- Prisma 7 instalado y configurado
- Conexión a Supabase verificada (db pull confirmó que conecta)
- Adapter `@prisma/adapter-pg` instalado para runtime

### Conceptos clave que aprendí

**Dos tipos de URL de conexión:**
- `DATABASE_URL` → Transaction Pooler (puerto 6543) → la usa la app en runtime
- `DIRECT_DATABASE_URL` → Conexión directa (puerto 5432) → la usa el CLI para migraciones/pull/push

**Prisma 7 cambió la arquitectura:**
- Ya no hay `url` en el `datasource` del `schema.prisma`
- La URL de conexión para el CLI ahora vive en `prisma.config.ts`
- El cliente de Prisma en runtime ya no se conecta solo, necesita un "driver adapter" (`@prisma/adapter-pg`)
- Por eso hay DOS lugares donde se configura la base de datos: `prisma.config.ts` (para comandos) y `src/lib/prisma.ts` (para la app)

**npm vs npx:**
- `npm install` → instala paquetes
- `npx` → ejecuta comandos de herramientas ya instaladas

### Estructura de archivos final

proyecto/

├── prisma/

│   └── schema.prisma          ← solo modelos, sin url

├── prisma.config.ts            ← acá va DIRECT_DATABASE_URL (CLI)

├── src/

│   ├── generated/prisma/       ← cliente generado automáticamente

│   └── lib/

│       └── prisma.ts           ← acá va DATABASE_URL con el adapter (runtime)

├── .env                         ← las dos URLs (nunca se sube a git)