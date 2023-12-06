import ServerSettingsForm from "@/app/components/forms/ServerSettingsForm"
import { promises as fs } from 'fs';

const Admin = async ({ params }: { params: { slug: string } }) => {
    if(params.slug == "server") {
        const file = await fs.readFile(process.cwd() + '/app/server_cfg.json', 'utf8');

        return (
            <ServerSettingsForm settings={file}/>
        )
    } 
} 

export default Admin