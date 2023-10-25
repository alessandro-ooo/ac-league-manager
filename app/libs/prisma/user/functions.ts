import prisma from "../../prismadb";
import { User } from "@prisma/client";

const checkUser = async (id: string | undefined): Promise<{ id: string; name: string; steamid: number} | null> => {
    console.log("func checkuser(" + id + ")");
    const result = await prisma.user.findUnique({
        where: {
            id: id
        },
    });

    return result;
}

const createUser = async (id: string, name: string): Promise<User> => {
    console.log("func createUser(" + id + ", " + name +")");
    const result = await prisma.user.create({
        data: {
            id: id,
            name: name,
            steamid: 0 // 0 = no id set
        }
    });

    return result;
}

const updateUserName = async (to: string, from: string): Promise<void> => {
    console.log("func updateUserName(" + to + ", " + from +")");
    const result = await prisma.user.update({
        where: {
            name: from
        },

        data: {
            name: to
        }
    });
}

const updateUserSteamID = async (id: string, to: number): Promise<void> => {
    const result = await prisma.user.update({
        where: {
            id: id
        },

        data: {
            steamid: to
        }
    });
}

const getSteamID = async (id: string) => {

    const result = await prisma.user.findUnique({
        where: {
            id: id,
        },

        select: {
            steamid: true
        }
    });

    return result;
}

export {
    checkUser,
    createUser,
    updateUserName,
    updateUserSteamID,
    getSteamID
}