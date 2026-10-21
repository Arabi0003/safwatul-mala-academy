const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
  const hash = await bcrypt.hash('password123', 10);
  
  // Super Admin
  await prisma.user.upsert({
    where: { staffId: 'ASM/ADMIN/01' },
    update: {},
    create: {
      staffId: 'ASM/ADMIN/01',
      name: 'Oseni Bashiru (Founder)',
      password: hash,
      role: 'SUPERADMIN'
    }
  });

  // Student
  await prisma.user.upsert({
    where: { studentId: 'ASM/2024/0001' },
    update: {},
    create: {
      studentId: 'ASM/2024/0001',
      name: 'Test Student',
      password: hash,
      role: 'STUDENT'
    }
  });

  console.log('✅ Database Seeded!');
  console.log('--------------------------------------------------');
  console.log('ADMIN LOGIN   -> ID: ASM/ADMIN/01    | Pass: password123');
  console.log('STUDENT LOGIN -> ID: ASM/2024/0001   | Pass: password123');
  console.log('--------------------------------------------------');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());