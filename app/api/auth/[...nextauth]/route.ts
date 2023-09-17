import NextAuth from "next-auth"
import Discord from "next-auth/providers/Discord"
import { NextAuthOptions } from "next-auth"
import { checkUser } from "@/app/libs/prisma/user/functions";
import { cookies } from "next/headers";

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
                token.accessToken = account.access_token;
                token.id = profile.id;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (token) {
                session.accessToken = token.accessToken;
                session.user = {};
                session.user.id = token.id;
                session.user.name = token.name
                session.user.mail = token.mail
                session.user.image = token.image
            }   
            return session;
        },

        async signIn({ user, account, profile, email, credentials }) {
            cookies().set('discordid', user.id);

            if(cookies().get('username') == undefined) {
                const userid = await checkUser(user.id);

                if(userid) {
                    cookies().set('username', user.name);
                }
            }
            return true
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development"
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }