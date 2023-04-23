import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  // const user = await prisma.user.create({ data: { name: "G'ulomjon" } });
  // await prisma.user.deleteMany();
  // const user = await prisma.user.create({
  //   data: {
  //     name: "G'ulomjon",
  //     email: "Bakirov@gmail.com",
  //     age: 22,
  //     userPreference: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   // include: {
  //   //   userPreference: true,
  //   // },
  //   select: {
  //     name: true,
  //     userPreference: { select: { id: true } },
  //   },
  // });

  const user = await prisma.user.findMany({
    // where: { email: "bakirov.dev@gmail.com" },
    where: {
      // name: { equals: "Sally" },
      // name: { not: "Sally" },
      // name: { in: ["Sally", "Bakirov"] },
      // name: { notIn: ["Sally"] },
      // age: { gt: 22 },
      // AND: [{ email: { contains: "dev" } }, { name: "Sally" }],
      // OR: [{ email: { contains: "dev" } }, { name: "Sally" }],
      NOT: { email: { contains: "dev" } },
    },
    // distinct: ["name"],
    orderBy: { age: "asc" },
    // take: 1,
    // skip: 1,
  });
  console.log(user);
}

main()
  .catch((err) => console.log(err.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
