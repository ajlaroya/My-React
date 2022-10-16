import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const options = {
  pages: {
    signIn: "/my-account",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET
};

export default (req, res) => NextAuth(req, res, options);
