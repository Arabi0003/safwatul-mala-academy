
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();
async function main() {
  const password = await bcrypt.hash("password123", 10);
  await prisma.user.upsert({
    where: { staffId: "ASM/ADMIN/01" },
    update: { password, role: "SUPERADMIN", name: "Super Administrator", isActive: true, email: "admin@safwatulmalaacademy.online" },
    create: { staffId: "ASM/ADMIN/01", email: "admin@safwatulmalaacademy.online", password, name: "Super Administrator", role: "SUPERADMIN", isActive: true }
  });
  await prisma.user.upsert({
    where: { studentId: "ASM/2024/0001" },
    update: { password, role: "STUDENT", name: "Demo Student", isActive: true, email: "student@safwatulmalaacademy.online" },
    create: { studentId: "ASM/2024/0001", email: "student@safwatulmalaacademy.online", password, name: "Demo Student", role: "STUDENT", isActive: true }
  });
  console.log("SEEDED: ASM/ADMIN/01 SUPERADMIN + ASM/2024/0001 STUDENT / password123");
}
main().catch((e)=>{console.error(e);process.exit(1)}).finally(()=>prisma.$disconnect());
