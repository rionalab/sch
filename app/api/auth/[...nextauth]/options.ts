/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */

import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import { compare } from "bcrypt";
import { updateLastLogin } from "@/actions/auth";
import { urls } from "@/consts";
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
    // need to delete  the localstorage on auto logout
    // then can use  this feature
    // maxAge: 30 * 60, // 30 mins
  },
  pages: {
    signIn: urls.auth.signin,
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
          include: {
            Employee: true,
            role: true,
            department: true,
          },
        });

        if (!user || !credentials?.password || !credentials.username) {
          return null;
        }

        const passwordValid = await compare(
          credentials?.password,
          user.password,
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

// Use it in server contexts
export async function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return await getServerSession(...args, options);
}
