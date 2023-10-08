import prisma from "../../prismadb";
import { 
    File, 
    Car
} from "@prisma/client";

const getAllCars = async (): Promise<{name: string }[]> => {
    console.log("func getAllCars()");

    const result = await prisma.car.findMany({
        select: { name: true }
    });
    return result;
}

export {
    getAllCars
}
