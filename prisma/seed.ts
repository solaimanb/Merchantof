import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.user.createMany({
      data: [
        {
          email: 'john.doe@example.com',
          password: 'password123',
          name: 'John Doe',
        },
        {
          email: 'jane.doe@example.com',
          password: 'password123',
          name: 'Jane Doe',
        },
      ],
    });
    console.log('Users created');
  } catch (e) {
    console.error('Error creating users:', e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
