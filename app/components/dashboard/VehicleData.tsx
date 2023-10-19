"use client"
import { TVehicleDataProps } from "../types"

const handleClick = () => {
    return console.log("tba");
}

const VehicleData = async (props: TVehicleDataProps) => {
    const {cid, name} = props;
    return <div onClick={handleClick} className="hover:bg-black hover:text-white" id={cid}>{name}</div>
}

export default VehicleData;