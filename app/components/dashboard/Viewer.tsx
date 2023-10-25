import { getLivery } from "@/app/libs/prisma/car/cars";
import { ViewerProps } from "../types";
import { cookies } from 'next/headers'
import Image from 'next/image'
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

const Viewer = async (props: ViewerProps) => {
    const { lid } = props;
    const livery = await getLivery(lid);
    const discordId: RequestCookie | any = cookies().get('discordid');
    const previews = JSON.parse(livery!.preview);

    console.log(discordId, livery!.uid)

    return (
        <div>
            {previews.map((previewImage: string, p: string) => {
                return (
                    <div>
                        <p>{livery!.name}</p>
                        <p>{previewImage}</p>
                        <Image width={100} height={100} src={previewImage} id={p} alt="hi"/>
                    </div>
                )
            })}
            
            <button id={lid.toString()}>use livery</button>
            {discordId.value == livery!.uid && 
                <button id={lid.toString()}>delete livery</button>
            }
        </div>
    )
}

export default Viewer;