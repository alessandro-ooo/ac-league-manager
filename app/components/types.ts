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

type TFiltersForm = {
    carName: string
    author?: string
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
    TFiltersForm,
    TModelProps,
    TVehicleDataProps,
    TVehiclesProps,
    TLiveriesProps,
    ViewerProps,
    TUserSettingsForm
}