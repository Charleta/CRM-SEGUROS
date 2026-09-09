@AGENTS.md

# CRM Seguros — Contexto del proyecto

## Qué es esto
CRM para productores de seguros (PAS) con IA integrada. Proyecto portfolio para demostrar skills de desarrollo web.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Prisma ORM
- Supabase (PostgreSQL)
- NextAuth v4 (autenticación)
- Claude API (generación de mensajes con IA)

## Estilo de trabajo
El usuario aprende mientras construye. No escribir código directamente salvo que lo pida. Explicar conceptos con claridad y validar si va bien o mal cuando tiene dudas.

## Decisiones tomadas
- Se usa **next-auth v4** (no v5/beta) — ya instalado, doc más estable
- Separar config de NextAuth en `lib/auth.ts` e importarla en el route handler
- Datos ficticios cargados via seed en Supabase

## Estado de las fases (roadmap en Estrategia_CRM.md)
- ✅ Fase 1 — Setup inicial (Next.js + Prisma + Supabase)
- ✅ Fase 2 — Modelo de datos (schema + seed)
- 🔄 Fase 3 — Autenticación (next-auth v4, en curso)
- ⬜ Fase 4 — Dashboard home con urgencias
- ⬜ Fase 5 — Módulo de clientes
- ⬜ Fase 6 — Módulo de pólizas
- ⬜ Fase 7 — IA: generador de mensajes
- ⬜ Fase 8 — Gráficos y analítica
- ⬜ Fase 9 — Polish y deploy

## Modelos de datos
- `User` — id, nombre, apellido, email (unique), passwordHash (bcrypt) — para login
- `Cliente` — id, nombre, apellido, dni (unique), email?, telefono?
- `Poliza` — numero (unique), tipo (enum), compania, premio, fechaInicio, fechaVencimiento, estado (enum), clienteId
- `Pago` — monto, fecha, estado (enum), polizaId
- Enums: TipoPoliza (AUTO/HOGAR/VIDA/COMERCIO/MOTO), EstadoPoliza (VIGENTE/POR_VENCER/VENCIDA/RENOVADA), EstadoPago (PAGADO/PENDIENTE/VENCIDO)

## Estado de Fase 3 (autenticación) — al día 2026-09-09
Hecho:
1. ✅ NEXTAUTH_SECRET y NEXTAUTH_URL en .env
2. ✅ lib/auth.ts con CredentialsProvider (route handler y login page ya existían)
3. ✅ Modelo `User` agregado al schema + migrado
4. ✅ bcrypt instalado (`dependencies`) y `@types/bcrypt` (`devDependencies`)
5. ✅ prisma/seed.ts ahora crea también un usuario admin de prueba (carlos@example.com / 123456789, hasheado) antes de cargar clientes — para correrlo: `npx tsx --env-file=.env prisma/seed.ts` (Node no carga .env solo, y hace falta `--env-file` porque Prisma tampoco lo carga automáticamente fuera de Next.js)

Pendiente — siguiente paso inmediato:
- `authorize()` en src/lib/auth.ts TODAVÍA devuelve un usuario mockeado ("J Smith"), no valida nada real. Falta:
  1. Buscar el user con `prisma.user.findUnique({ where: { email: credentials.email } })`
  2. Comparar password con `bcrypt.compare(credentials.password, user.passwordHash)`
  3. Devolver el user si coincide, `null` si no

Después de eso, sigue:
5. Crear middleware.ts para proteger rutas del dashboard (no existe todavía)
6. Crear layout del dashboard con sidebar y header
7. Botón de logout funcional

