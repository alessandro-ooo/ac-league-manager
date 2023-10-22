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

type TModelProps = {
    dir: string,
    // texture: {map: Texture },
}

type TVehicleDataProps = {
    cid: string,
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
        preview: string
    }[]
}

export type {
    TDialog,
    TInputProps,
    TNewUserForm,
    TModelProps,
    TVehicleDataProps,
    TVehiclesProps,
    TLiveriesProps
}