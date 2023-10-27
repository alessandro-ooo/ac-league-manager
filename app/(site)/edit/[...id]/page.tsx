import { getSteamID } from "@/app/libs/prisma/user/functions"
import { cookies } from "next/headers"

const Edit = ({ params }: { params: { lid: string } }) => {
    const discordid = cookies().get('discordid');
    const userSteamID = getSteamID(discordid?.value as string) 
}