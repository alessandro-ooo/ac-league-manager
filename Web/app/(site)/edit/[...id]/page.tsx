import { getSteamID } from "@/app/libs/prisma/user/functions"
import { cookies } from "next/headers"
import { redirect } from 'next/navigation'

const Edit = async ({ params }: { params: { lid: string } }) => {
    const discordid = cookies().get('discordid');
    const userSteamID = await getSteamID(discordid?.value as string) ;
    

    if(userSteamID == 0) {
        return redirect('/settings/' + discordid?.value);
    }

    return (
        <p>edit livery page</p>
    )
}

export default Edit