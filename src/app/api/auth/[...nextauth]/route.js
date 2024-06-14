import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";

import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/models/db";

const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      authorization: {
        params: { scope: "openid profile email" },
      },
      issuer: "https://www.linkedin.com/oauth",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      profile(profile, tokens) {
        const defaultImage =
          "https://cdn-icons-png.flaticon.com/512/174/174857.png";
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = user.id;

      return session;
    },
    async signIn({ user, account, profile, email, credentials }) {
      if (user.username) {
        return true;
      }

      user.username = user.id.toLowerCase();

      return true;
    },
  },
};

const handler = NextAuth(authOptions);

export { authOptions, handler as GET, handler as POST };
