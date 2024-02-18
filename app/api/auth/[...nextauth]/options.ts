/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import { compare } from "bcrypt";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: {
            email: credentials?.username,
          },
        });

        if (!user || !credentials?.password || !credentials.username) {
          return null;
        }

        const passwordValid = await compare(
          credentials?.password,
          user.password
        );

        if (!passwordValid) {
          return null;
        }

        return {
          ...user,
          name: user.name,
          id: String(user.id),
          roleAccess: user.roleAccess,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, session, trigger }) {
      console.log("JWT", { token, user, session });

      if (user) {
        return {
          ...token,
          ...user,
          password: "",
        };
      }

      return token;
    },
    async session({ session, token, user }) {
      console.log("SESSION", { session, token, user });
      return {
        ...session,
        user: {
          ...session.user,
          ...token,
        },
      };
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
