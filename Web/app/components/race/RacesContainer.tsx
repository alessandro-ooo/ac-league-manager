import { getAllRaces } from "@/app/libs/prisma/cfg/functions"
import Race from "./race";


const RacesContainer = async () => {
    const races = await getAllRaces();
    return (
        <div>
            <Race data={races} />
        </div>
    )
}

export default RacesContainer;