import { getCarLiveries } from "@/app/libs/prisma/car/cars";
import { TLiveriesProps, TVehiclesProps } from "../types";


const Vehicles = async (props: TVehiclesProps) => {
    const { data } = props;

    return (
        <div className="flex flex-col">
            {data.map((item, i) => {
                return (
                    <div>
                        <a className="hover:bg-black hover:text-white" id={item.cid.toString()}>{item.name}</a>
                        <Liveries data={item.liveries} />
                    </div>
                )
            })}

        </div>
    )
}

const Liveries = async (props: TLiveriesProps) => {
    const { data } = props;
    return (
        <div className="flex flex-col">
            {data.map((item, i) => {
                return <a className="hover:bg-black hover:text-white">{item.name}</a>
            })}
        </div>
    )
}

export default Vehicles