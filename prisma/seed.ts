import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { clientesData } from './data/clients';

const adapter= new PrismaPg({connectionString: process.env.DATABASE_URL});// creo un adapter para conectar con la base de datos usando la URL de conexión proporcionada en las variables de entorno
const prisma = new PrismaClient({ adapter }); // creo una instancia de PrismaClient utilizando el adapter que acabo de crear para interactuar con la base de datos, este seria como el control remoto para ejecutar consultas y operaciones en la base de datos

async function main() {

    await prisma.pago.deleteMany(); // borro todos los registros de la tabla "pago" para empezar con una base de datos limpia. Aca es el importante el orde de las tablas, ya que "pago" depende de "poliza" y "client", por lo que debo borrar primero los registros de "pago" antes de borrar los registros de las tablas "poliza" y "client" para evitar violaciones de integridad referencial.
    await prisma.poliza.deleteMany(); 
    await prisma.cliente.deleteMany();

    for ( const cliente of clientesData) {
        const create = await prisma.cliente.create({data: cliente}); // itero sobre el arreglo de datos de clientes (clientData) y para cada cliente, creo un nuevo registro en la tabla "client" utilizando el método "create" de PrismaClient, pasando los datos del cliente como argumento.
        console.log(`Cliente creado: ${create.nombre} ${create.apellido}`); // imprimo un mensaje en la consola indicando que el cliente ha sido creado, mostrando su nombre y apellido.
    }


 
}
   main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });