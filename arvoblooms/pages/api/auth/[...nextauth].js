import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (typeof window !== 'undefined') {
  const checkoutId = localStorage.getItem("checkout_id");
  console.log(checkoutId)
}


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
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = profile.id
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id
      session.user.test = "test"
      
      return session
    }
  }
};

export default (req, res) => NextAuth(req, res, options);
