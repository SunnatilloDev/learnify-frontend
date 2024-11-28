import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('Sign In Callback Data:');
      console.log('User:', user);
      console.log('Account:', account);
      console.log('Profile:', profile);
      return true;
    },
    async jwt({ token, user, account, profile }) {
      console.log('JWT Callback Data:');
      console.log('Token:', token);
      console.log('User:', user);
      console.log('Account:', account);
      console.log('Profile:', profile);
      return token;
    },
    async session({ session, user, token }) {
      console.log('Session Callback Data:');
      console.log('Session:', session);
      console.log('User:', user);
      console.log('Token:', token);
      return session;
    },
  },
  debug: process.env.NODE_ENV === 'development',
};
