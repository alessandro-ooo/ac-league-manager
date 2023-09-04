import NextAuth from "next-auth"
import Discord from "next-auth/providers/Discord"
import { NextAuthOptions } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: User;
    }


interface User {
    id: string;
    name: string;
    image: string;
    email: string;
}
}

export const authOptions: NextAuthOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_ID ?? "",
            clientSecret: process.env.DISCORD_SECRET ?? "",
        }),
    ],
    callbacks: {
        // https://stackoverflow.com/questions/75118956/how-do-i-receive-the-user-id-from-a-session-using-next-auth
        // CREDITS ^^^
        async jwt({ token, account, profile }: any) {
          // Persist the OAuth access_token and or the user id to the token right after signin
          if (account) {
            console.log("token", token);
            token.accessToken = account.access_token;
            token.id = profile.id;
          }
          return token;
        },
        async session({ session, token, user }: any) {
          // Send properties to the client, like an access_token and user id from a provider.
          if (token) {
            session.accessToken = token.accessToken;
            session.user = {};
            session.user.id = token.id;
          }
          return session;
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development"
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }