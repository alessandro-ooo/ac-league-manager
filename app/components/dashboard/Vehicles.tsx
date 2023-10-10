import { getCarLiveries } from "@/app/libs/prisma/car/cars";
import { TLiveriesProps, TVehiclesProps } from "../types";
import Image from 'next/image'

const Vehicles = async (props: TVehiclesProps) => {
    const { data } = props;

    return (
        <div className="flex flex-col">
            {data.map((item, i) => {
                return (
                    <div className="flex flex-col" key={i.toString()}>
                        <a className="hover:bg-black hover:text-white" id={item.cid.toString()}>{item.name}</a>
                        <div className="">
                            <button>create livery</button>
                            <Liveries data={item.liveries} />                     
                        </div>
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
                return (
                    <>
                        <a className="hover:bg-black hover:text-white">{item.name}</a>
                        <Image width={100} height={100} src={item.texture} alt="hi"/>  
                    </>
                )
            })}
        </div>
    )
}

export default Vehicles