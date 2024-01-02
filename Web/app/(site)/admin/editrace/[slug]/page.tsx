import EditRaceSettingsForm from "@/app/components/forms/EditRaceSettingsForm";
import Roster from "@/app/components/race/Roster";
import { getRace, getRaceDrivers } from "@/app/libs/prisma/cfg/functions"

const EditRace = async ({ params }: { params: { slug: string } }) => {
    const race = await getRace(Number(params.slug));
    if(race == null) {
        return <p>something went wrong</p>
    }

    return (
        <div>
            <EditRaceSettingsForm id={race.id} race={race.race} datetime={race.datetime.toString()} />
            <Roster rid={race.id}/>
        </div>
    )
} 

export default EditRace