
import { TLiveriesProps, TVehiclesProps } from "../types";
import VehicleData from "./VehicleData";

const Vehicles = (props: TVehiclesProps) => {

    const { data } = props;
    
    return (
        <div className="flex flex-col">
            {data.map((item, i) => {
                return (
                    <div className="flex flex-col" key={i.toString()}>
                        <p>{item.name}</p>
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
                    <div>
                        <VehicleData lid={item.lid} name={item.name}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Vehicles