import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL as string,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.request_Status.create({
    data: {
      id: 'b30be7ae-d0b3-4933-89c8-56b89bba42f6',
      name: 'Reprovado',
      weight: 1,
    },
  });
  await prisma.request_Status.create({
    data: {
      id: '4d71b208-d4dc-4667-8ce3-da137889ecf0',
      name: 'Em análise',
      weight: 2,
    },
  });
  await prisma.request_Status.create({
    data: {
      id: '590afbf4-e6e5-4c4a-89d7-ca3a71a7fa14',
      name: 'Pendente',
      weight: 3,
    },
  });
  await prisma.request_Status.create({
    data: {
      id: '0b4211a6-850c-47ba-a355-f52a8612e303',
      name: 'Aprovado',
      weight: 4,
    },
  });
}

main()
  .catch((e) => {
    (console.log(e), process.exit(1));
  })
  .finally(() => {
    prisma.$disconnect();
  });
