import prisma from "@/utils/db";
import { hashSync } from "bcrypt";

async function main() {
  async function createAdmin() {
    await prisma.admin.create({
      data: {
        name: "Hamdani",
        username: "hamdani",
        email: "hamdanilombok@gmail.com",
        password: hashSync("danis3m3t", Number(process.env.SALT_ROUND)),
        avatar:
          "https://res.cloudinary.com/hamdaniportfolio/image/upload/v1706356796/profile/me_jv9411.jpg ",
      },
    });
  }
  createAdmin();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
