import { ReactNode } from "react"
import { Texture } from "three"

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

type TVehiclesProps = {
    data: {
        name: string,
        cid: number,
        liveries: {
            fid: number
            name: string;
        }[]
    }[]
}

type TLiveriesProps = {
    data: {
        name: string
    }[]
}

export type {
    TDialog,
    TInputProps,
    TNewUserForm,
    TModelProps,
    TVehiclesProps,
    TLiveriesProps
}