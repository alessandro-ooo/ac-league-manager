type TAddUser = {
    id: string;
    name: string;
}
interface TCheckUser {
    id: string | undefined;
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