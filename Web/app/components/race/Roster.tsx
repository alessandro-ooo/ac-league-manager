import { getRaceDrivers } from "@/app/libs/prisma/cfg/functions";
import { TRosterProps } from "../types";
import Driver from "./Driver";

const Roster = async (props: TRosterProps) => {
    const {rid} = props;
    const drivers = await getRaceDrivers(rid);
    return (
        <div>
            {drivers.map((driver, i: number) => {
                return(
                    <div>
                        <Driver name={driver.name} car={driver.model}></Driver>
                    </div>
                )
            })}
        </div>
    )    
}

export default Roster;