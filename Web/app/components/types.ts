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

type TServerSettingsForm = {
    name: string,
    cars: string,
    config_track: string,
    track: string,
    sun_angle: number,
    password: string,
    admin_password: string,
    udp_port: number,
    tcp_port: number,
    http_port: number,
    pickup_mode_enabled: number,
    loop_mode: number,
    sleep_time: number,
    client_send_interval_hz: number,
    send_buffer_size: number,
    recv_buffer_size: number,
    race_over_time: number,
    kick_quorum: number,
    vote_duration: number,
    blacklist_mode: number,
    fuel_rate: number,
    damage_multiplier: number,
    tyre_wear_rate: number,
    abs_allowed: number,
    tc_allowed: number,
    stability_allowed: number,
    autoclutch_allowed: number,
    tyre_blankets_allowed: number,
    force_virtual_mirror: number,
    register_to_lobby: number,
    max_clients: number,
    udp_plugin_local_port: number,
    udp_plugin_address: string,
    auth_plugin_address: string,
    legal_tyres: string
}

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
    TServerSettingsForm,
    TFiltersForm,
    TModelProps,
    TVehicleDataProps,
    TVehiclesProps,
    TLiveriesProps,
    ViewerProps,
    TUserSettingsForm,
    TFilterFormProps
}