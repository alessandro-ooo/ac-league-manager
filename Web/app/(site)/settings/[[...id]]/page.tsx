import UserSettingsForm from "@/app/components/forms/UserSettingsForm";
import { checkUser } from "@/app/libs/prisma/user/functions"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";

const Settings = async ({ params }: { params: { id: string } }) => {
    // const discordId: RequestCookie | any = cookies().get('discordid');
    const userData = await checkUser(params.id.toString());

    return (
        <UserSettingsForm currentName={userData!.name} name={userData!.name} steamid={userData!.steamid} id={params.id} />
    )
}

export default Settings