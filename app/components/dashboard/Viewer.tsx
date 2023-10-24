import { getLivery } from "@/app/libs/prisma/car/cars";
import { ViewerProps } from "../types";
import Image from 'next/image'

const Viewer = async (props: ViewerProps) => {
    const { lid } = props;
    const livery = await getLivery(lid);
    const previews = JSON.parse(livery!.preview);

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
        </div>
    )
}

export default Viewer;