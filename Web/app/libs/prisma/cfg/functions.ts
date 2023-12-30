import { Prisma } from "@prisma/client";
import prisma from "../../prismadb";
import { TServerSettings } from "@/app/components/types";

const createRace = async (race: string, date: string) => {
    const result = await prisma.race.create({
        data: {
            race: race,
            datetime: new Date(date)
        }
    });

    return result;
}

const getRace = async (id: number) => {
    const result = await prisma.race.findUnique({where: {id: id}});
    return result;
}

const getRaceDrivers = async (id: number): Promise<{
    id: number;
    raceId: number;
    model: string;
    skin: string;
    spectator: number;
    name: string;
    team: string | null;
    guid: string | null;
    ballast: number | null;
}[]> => {
    const result = await prisma.driver.findMany({
        where: {
            raceId: id
        }
    });

    return result;
}

const getAllRaces = async () => {
    const result = await prisma.race.findMany({});
    return result;
}

const updateRace = async (id: number, race: string, datetime: string): Promise<void> => {
    await prisma.race.update({
        where: {
            id: id
        },

        data: {
            race: race,
            datetime: new Date(datetime)
        }
    });
}

const updateCFG = async (data: any) => {
    for (const key in data) {
        const keyValue = data[key];
        
        await prisma.serverCFG.update({ 
            where: { field: key },
            data: {value: keyValue}
        });
    }
}

const getAllFields = async () => {
    const result = await prisma.serverCFG.findMany();
    return result;
}

const checkCFG = async (): Promise<number> => {
    const count = await prisma.serverCFG.count();
    return count;
}

const inject = async (): Promise<Prisma.BatchPayload> => {
    console.log("- warn - Injecting ServerCFG table with server data.");
    const result = await prisma.serverCFG.createMany({
        data: [
            { field: 'NAME', value: 'AC_Server' },
            { field: 'CARS', value: 'bmw_m3_e30' },
            { field: 'CONFIG_TRACK', value: '' },
            { field: 'TRACK', value: 'magione' },
            { field: 'SUN_ANGLE', value: '48' },
            { field: 'PASSWORD', value: 'CHANGEME' },
            { field: 'ADMIN_PASSWORD', value: '' },
            { field: 'UDP_PORT', value: '9600' },
            { field: 'TCP_PORT', value: '9600' },
            { field: 'HTTP_PORT', value: '8081' },
            { field: 'PICKUP_MODE_ENABLED', value: '1' },
            { field: 'LOOP_MODE', value: '1' },
            { field: 'SLEEP_TIME', value: '1' },
            { field: 'CLIENT_SEND_INTERVAL_HZ', value: '18' },
            { field: 'SEND_BUFFER_SIZE', value: '0' },
            { field: 'RECV_BUFFER_SIZE', value: '0' },
            { field: 'RACE_OVER_TIME', value: '180' },
            { field: 'KICK_QUORUM', value: '85' },
            { field: 'VOTING_QUORUM', value: '80' },
            { field: 'VOTE_DURATION', value: '20' },
            { field: 'BLACKLIST_MODE', value: '1' },
            { field: 'FUEL_RATE', value: '100' },
            { field: 'DAMAGE_MULTIPLIER', value: '100' },
            { field: 'TYRE_WEAR_RATE', value: '100' },
            { field: 'ALLOWED_TYRES_OUT', value: '2' },
            { field: 'ABS_ALLOWED', value: '1' },
            { field: 'TC_ALLOWED', value: '1' },
            { field: 'STABILITY_ALLOWED', value: '0' },
            { field: 'AUTOCLUTCH_ALLOWED', value: '0' },
            { field: 'TYRE_BLANKETS_ALLOWED', value: '0' },
            { field: 'FORCE_VIRTUAL_MIRROR', value: '1' },
            { field: 'REGISTER_TO_LOBBY', value: '1' },
            { field: 'MAX_CLIENTS', value: '18' },
            { field: 'UDP_PLUGIN_LOCAL_PORT', value: '0' },
            { field: 'UDP_PLUGIN_ADDRESS', value: '' },
            { field: 'AUTH_PLUGIN_ADDRESS', value: '' },
            { field: 'LEGAL_TYRES', value: 'SV' }
        ]
    });
    return result;
}

export {
    checkCFG,
    inject,
    getAllFields,
    updateCFG,
    createRace,
    getAllRaces,
    getRace,
    getRaceDrivers,
    updateRace
}