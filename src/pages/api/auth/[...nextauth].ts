import prisma from "@/utils/db";
import { compareSync } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", name: "email" },
        password: { label: "Password", type: "password", name: "password" },
      },
      authorize: async (credentials) => {
        const user = await prisma.admin.findFirst({
          where: {
            email: credentials?.email,
          },
        });

        if (user) {
          const password = compareSync(
            credentials?.password as string,
            user.password,
          );

          if (password) {
            return Promise.resolve(user);
          }
        }

        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log(user);
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }

      return Promise.resolve(token);
    },

    session: async ({ session, token, user }) => {
      if (session && session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }

      return Promise.resolve(session);
    },
  },
});
