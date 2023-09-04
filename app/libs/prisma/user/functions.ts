import { 
    TAddUser,
    TCheckUser,
    TUpdateUser
} from "./types";

import prisma from "../../prismadb";
import { User } from "@prisma/client";

const checkUser = async (params: TCheckUser): Promise<{id: string; name: string;} | null> => {
    const { id } = params;

    const result = await prisma.user.findUnique({
        where: {
            id: id
        }
    });

    return result;
}

const createUser = async (params: TAddUser): Promise<User> => {
    const {id, name} = params;

    const result = await prisma.user.create({
        data: {
            id: id,
            name: name
        }
    });

    return result;
}

const updateUserName = async (params: TUpdateUser): Promise<void> => {
    const {to, from} = params; 

    const result = await prisma.user.update({
        where: {
            name: from
        },

        data: {
            name: to
        }
    });
}

export {
    checkUser,
    createUser,
    updateUserName
}