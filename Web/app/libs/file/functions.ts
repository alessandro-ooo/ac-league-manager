import { TDrivers } from "@/app/components/types";
import { getAllFields, getRaceDrivers } from "../prisma/cfg/functions"
import { Mode, ObjectEncodingOptions, OpenMode, promises as fs } from 'fs';
import { Abortable } from "node:events";

const createINI = async (race: number) => {
    let entry_list_str: string = "";
    const drivers = await getRaceDrivers(race);

    for(let i = 0; i < drivers.length; i++) {
        entry_list_str+= "\n[CAR_" + i + "]\nMODEL=" + drivers[i].model + "\nSKIN=" + drivers[i].skin + "\nSPECTATOR_MODE=" + drivers[i].spectator + "\nDRIVERNAME=" + drivers[i].name + "\nTEAM=" + drivers[i].team + "\nGUID=" + drivers[i].guid + "\nBALLAST=" + drivers[i].ballast + "\n";
    }

    await fs.writeFile('../Assetto Corsa Server/cfg/entry_list.ini', entry_list_str);
    
    let server_cfg: string = "[SERVER]";
    const settings = await getAllFields();
    
    for(let i = 0; i < settings.length; i++) {
        server_cfg+= "\n" + settings[i].field + "=" + settings[i].value;
        console.log(server_cfg);
    }

    const server_cfg_practice = "\n[PRACTICE]\nNAME=Practice\nTIME=10\nIS_OPEN=1\n";
    const server_cfg_qualify = "\n[QUALIFY]\nNAME=Qualify\nTIME=10\nIS_OPEN=1\n";
    const server_cfg_race = "\n[RACE]\nNAME=Race\nLAPS=5\nWAIT_TIME=60\nIS_OPEN=1";
    const server_cfg_weather="\n[WEATHER_0]\nGRAPHICS=3_clear\nBASE_TEMPERATURE_AMBIENT=18\nBASE_TEMPERATURE_ROAD=6\nVARIATION_AMBIENT=1\nVARIATION_ROAD=1\n"

    server_cfg+= server_cfg_practice + server_cfg_qualify + server_cfg_race + server_cfg_weather;
    await fs.writeFile('../Assetto Corsa Server/cfg/server_cfg.ini', server_cfg);
}

export {
    createINI
}