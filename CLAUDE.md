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
- `Cliente` — id, nombre, apellido, dni (unique), email?, telefono?
- `Poliza` — numero (unique), tipo (enum), compania, premio, fechaInicio, fechaVencimiento, estado (enum), clienteId
- `Pago` — monto, fecha, estado (enum), polizaId
- Enums: TipoPoliza (AUTO/HOGAR/VIDA/COMERCIO/MOTO), EstadoPoliza (VIGENTE/POR_VENCER/VENCIDA/RENOVADA), EstadoPago (PAGADO/PENDIENTE/VENCIDO)

## Próximos pasos (Fase 3)
1. Agregar NEXTAUTH_SECRET y NEXTAUTH_URL al .env.local
2. Crear lib/auth.ts con el credentials provider
3. Crear app/api/auth/[...nextauth]/route.ts
4. Crear página de login en app/(auth)/login/page.tsx
5. Crear middleware.ts para proteger rutas del dashboard
6. Crear layout del dashboard con sidebar y header
7. Botón de logout funcional

