import { Prisma } from "@prisma/client"
import { ReactNode } from "react"

type TDialog = {
    children: ReactNode
}

type TInputProps = {
    label: string,
    type: string,
    placeholder: string,
}

type TNewUserForm = {
    username: string;
    id: string,
}

type TServerSettingFormProps = {
    settings: string
}
type TServerSettings = {
    NAME: string;
    CARS: string;
    CONFIG_TRACK: string;
    TRACK: string;
    SUN_ANGLE: number;
    PASSWORD: string;
    ADMIN_PASSWORD: string;
    UDP_PORT: number;
    TCP_PORT: number;
    HTTP_PORT: number;
    PICKUP_MODE_ENABLED: number;
    LOOP_MODE: number;
    SLEEP_TIME: number;
    CLIENT_SEND_INTERVAL_HZ: number;
    SEND_BUFFER_SIZE: number;
    RECV_BUFFER_SIZE: number;
    RACE_OVER_TIME: number;
    KICK_QUORUM: number;
    VOTE_DURATION: number;
    BLACKLIST_MODE: number;
    FUEL_RATE: number;
    DAMAGE_MULTIPLIER: number;
    TYRE_WEAR_RATE: number;
    ABS_ALLOWED: number;
    TC_ALLOWED: number;
    STABILITY_ALLOWED: number;
    AUTOCLUTCH_ALLOWED: number;
    TYRE_BLANKETS_ALLOWED: number;
    FORCE_VIRTUAL_MIRROR: number;
    REGISTER_TO_LOBBY: number;
    MAX_CLIENTS: number;
    UDP_PLUGIN_LOCAL_PORT: number;
    UDP_PLUGIN_ADDRESS: string;
    AUTH_PLUGIN_ADDRESS: string;
    LEGAL_TYRES: string;
};

type TFiltersForm = {
    carName: string
    author?: string
}

type TFilterFormProps = {
    carNameSlug: string
    liveryAuthor?: string
}

type TModelProps = {
    dir: string,
    // texture: {map: Texture },
}

type TVehicleDataProps = {
    lid: number,
    name: string
}

type TVehiclesProps = {
    data: {
        name: string,
        cid: number,
        liveries: {
            lid: number,
            name: string,
            preview: string
        }[]
    }[]
}

type TLiveriesProps = {
    data: {
        name: string,
        lid: number,
        preview: string
    }[]
}

type ViewerProps = {
    lid: number;
}


type TUserSettingsForm = {
    name: string,
    currentName: string,
    steamid: bigint,
    id: string
}

export type {
    TDialog,
    TInputProps,
    TNewUserForm,
    TServerSettings,
    TServerSettingFormProps,
    TFiltersForm,
    TModelProps,
    TVehicleDataProps,
    TVehiclesProps,
    TLiveriesProps,
    ViewerProps,
    TUserSettingsForm,
    TFilterFormProps
}