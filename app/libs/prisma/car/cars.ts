import { JsonValue } from "@prisma/client/runtime/library";
import prisma from "../../prismadb";
import { 
    Livery, 
    Car,
    Prisma
} from "@prisma/client";
import { TVehiclesProps } from "@/app/components/types";

// Promise<{cid: number; name: string; liveries: { name: string; lid: number; preview: Prisma.JsonValue;}[];}[]>
// : { cid: number; name: string;      liveries: { name: string; lid: number; preview: Prisma.JsonValue;}[];}[]

const getAllCars = async (discordid?: number): Promise<{cid: number; name: string; liveries: { name: string; lid: number; preview: Prisma.JsonValue;}[];}[]> => {
    console.log("func getAllCars()");

    const result = await prisma.car.findMany({
        select: { 
            name: true,
            cid: true,
            liveries: {
                select: {
                    lid: true,
                    name: true,
                    preview: true,
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
    const result = await prisma.livery.findMany({
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
