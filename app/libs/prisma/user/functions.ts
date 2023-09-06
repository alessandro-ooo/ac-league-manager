import prisma from "../../prismadb";
import { User } from "@prisma/client";

const checkUser = async (id: string | undefined): Promise<{id: string} | null> => {

    const result = await prisma.user.findUnique({
        where: {
            id: id
        }
    });

    return result;
}

const createUser = async (id: string, name: string): Promise<User> => {

    const result = await prisma.user.create({
        data: {
            id: id,
            name: name
        }
    });

    return result;
}

const updateUserName = async (to: string, from: string): Promise<void> => {

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