import NextAuth from "next-auth"
import Discord from "next-auth/providers/Discord"
import prisma from "../../../libs/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"


export const authOptions = {
    providers: [
        Discord({
            clientId: process.env.DISCORD_ID ?? "",
            clientSecret: process.env.DISCORD_SECRET ?? "",
        }),
    ], 

    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development"
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }