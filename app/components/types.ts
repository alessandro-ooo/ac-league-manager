import { ReactNode } from "react"

type TDialog = {
    children: ReactNode
}

type TInputProps = {
    label: string,
    type: string
    placeholder: string,
}

type TNewUserForm = {
    username: string;
    id: string;
}

export type {
    TDialog,
    TInputProps,
    TNewUserForm
}