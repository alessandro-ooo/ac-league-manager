import RaceSettingsForm from "@/app/components/forms/RaceSettingsForm";
import ServerSettingsForm from "@/app/components/forms/ServerSettingsForm"
import { getAllFields } from "@/app/libs/prisma/cfg/functions";
import { promises as fs } from 'fs';

const Admin = async ({ params }: { params: { slug: string } }) => {
    if(params.slug == "server") {
        // const file = await fs.readFile(process.cwd() + '/app/server_cfg.json', 'utf8');
        const data = await getAllFields();

        return (
            <ServerSettingsForm settings={data}/>
        )
    }

    if(params.slug == "race") {
        return <RaceSettingsForm />
    }
} 

export default Admin