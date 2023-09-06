import prisma from "../../prismadb";
import { User } from "@prisma/client";

const checkUser = async (id: string | undefined): Promise<{id: string; name: string;}[]> => {
    console.log("func checkuser(" + id + ")");
    const result = await prisma.user.findMany({
        where: {
            id: id
        }
    });
    console.log(result[0].id)
    return result;
}

const createUser = async (id: string, name: string): Promise<User> => {
    console.log("func createUser(" + id + ", " + name +")");
    const result = await prisma.user.create({
        data: {
            id: id,
            name: name
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

export {
    checkUser,
    createUser,
    updateUserName
}