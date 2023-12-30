import EditRaceSettingsForm from "@/app/components/forms/EditRaceSettingsForm";
import { getRace, getRaceDrivers } from "@/app/libs/prisma/cfg/functions"

const EditRace = async ({ params }: { params: { slug: string } }) => {
    const race = await getRace(Number(params.slug));
    if(race == null) {
        return <p>something went wrong</p>
    }

    const drivers = await getRaceDrivers(race.id);

    return (
        <EditRaceSettingsForm id={race.id} race={race.race} datetime={race.datetime.toString()} />
    )
} 

export default EditRace