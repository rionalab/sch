/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import { compare } from "bcrypt";
import { updateLastLogin } from "@/actions/auth";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 60, // 30 mins
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
    async jwt({ token, user }) {
      if (user) {
        await updateLastLogin(Number(user.id));

        return {
          ...token,
          ...user,
          password: "",
        };
      }

      return token;
    },
    async session({ session, token }) {
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
