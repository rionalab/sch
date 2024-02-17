/* eslint-disable @typescript-eslint/non-nullable-type-assertion-style */

import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Input Username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Input Password",
        },
      },
      async authorize(credentials) {
        const user = { id: "11", name: "dave", password: "dave" };

        if (
          credentials?.username === user.name &&
          credentials.password === user.password
        ) {
          return user;
        }

        return null;
      },
    }),
  ],
};
