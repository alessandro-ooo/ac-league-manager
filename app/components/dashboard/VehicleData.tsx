"use client"
import { useRouter } from "next/navigation";
import { TVehicleDataProps } from "../types"

const VehicleData = (props: TVehicleDataProps) => {
    const router = useRouter();
    const {cid, name} = props;
    return <div onClick={(cid) => router.push('/dashboard/' + cid.currentTarget.id)} className="hover:bg-black hover:text-white" id={cid}>{name}</div>
}

export default VehicleData;