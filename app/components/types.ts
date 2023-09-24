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

export type {
    TDialog,
    TInputProps,
    TNewUserForm,
    TModelProps
}