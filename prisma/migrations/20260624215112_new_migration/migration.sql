-- CreateEnum
CREATE TYPE "TipoPoliza" AS ENUM ('AUTO', 'HOGAR', 'VIDA', 'COMERCIO', 'MOTO');

-- CreateEnum
CREATE TYPE "EstadoPoliza" AS ENUM ('VIGENTE', 'POR_VENCER', 'VENCIDA', 'RENOVADA');

-- CreateEnum
CREATE TYPE "EstadoPago" AS ENUM ('PAGADO', 'PENDIENTE', 'VENCIDO');

-- CreateTable
CREATE TABLE "Cliente" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "email" TEXT,
    "telefono" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Poliza" (
    "id" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "tipo" "TipoPoliza" NOT NULL,
    "compania" TEXT NOT NULL,
    "premio" DOUBLE PRECISION NOT NULL,
    "fechaInicio" TIMESTAMP(3) NOT NULL,
    "fechaVencimiento" TIMESTAMP(3) NOT NULL,
    "estado" "EstadoPoliza" NOT NULL,
    "clienteId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Poliza_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pago" (
    "id" TEXT NOT NULL,
    "monto" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "estado" "EstadoPago" NOT NULL,
    "polizaId" TEXT NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_dni_key" ON "Cliente"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Poliza_numero_key" ON "Poliza"("numero");

-- AddForeignKey
ALTER TABLE "Poliza" ADD CONSTRAINT "Poliza_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_polizaId_fkey" FOREIGN KEY ("polizaId") REFERENCES "Poliza"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
