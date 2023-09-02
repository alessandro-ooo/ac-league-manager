type TAddUser = {
    id: string;
    name: string;
}
type TCheckUser = {
    id: string;
}

type TUpdateUser = {
    to: string | string;
    from: string | string;
}

export type {
    TAddUser,
    TCheckUser,
    TUpdateUser
}