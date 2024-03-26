import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { UserInfoProps } from '@/ next-auth';
import { AuthOptions } from 'next-auth';

const nextAuthConfig: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? '',
      clientSecret: process.env.GOOGLE_SECRET ?? '',
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      session.user = token;
      return session;
    },

    async jwt({ token, user, trigger, session }) {
      if (trigger === 'update') {
        token = { ...token, ...session };
      }

      if (user) {
        token = user as UserInfoProps;
      }

      return token;
    },
  },
};

const handler = NextAuth(nextAuthConfig);

export { handler as GET, handler as POST };
