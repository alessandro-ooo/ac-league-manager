import prisma from "../../prismadb";
import { 
    File, 
    Car
} from "@prisma/client";

const getAllCars = async (): Promise<{name: string, cid: number }[]> => {
    console.log("func getAllCars()");

    const result = await prisma.car.findMany({
        select: { 
            name: true,
            cid: true
        }
    });
    return result;
}

const getCarLiveries = async () => {
    
}

export {
    getAllCars
}
