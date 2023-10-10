import prisma from "../../prismadb";
import { 
    File, 
    Car
} from "@prisma/client";

const getAllCars = async (discordid?: number): Promise<{name: string, cid: number, liveries: {fid: number, name: string, texture: string}[] }[]> => {
    console.log("func getAllCars()");

    const result = await prisma.car.findMany({
        select: { 
            name: true,
            cid: true,
            liveries: {
                select: {
                    fid: true,
                    name: true,
                    texture: true,
                },
                where: {
                    author: {
                        id: discordid?.toString()
                    }
                }
            }
        }
    });
    return result;
}

const getCarLiveries = async (cid: number): Promise<{name: string; cars: {cid: number;}[];}[]> => {
    const result = await prisma.file.findMany({
        select: {
            name: true,
            cars: {
                select: {
                    cid: true,
                },
                where: {
                    cid: cid
                }
            }
        }        
    });

    return result;
}

export {
    getAllCars,
    getCarLiveries
}
