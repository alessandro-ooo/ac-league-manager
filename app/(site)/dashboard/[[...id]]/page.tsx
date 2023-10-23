import Vehicles from "@/app/components/dashboard/Vehicles";
import { getUsernameCookie } from "@/app/libs/cookies/functions";
import { getAllCars } from "@/app/libs/prisma/car/cars";

const Dashboard = async ({ params }: { params: { id: string } }) => {
    const usernameCookie = getUsernameCookie();
    const vehicles = await getAllCars();

    console.log(params.id);
    return(
        <div>
            <p>welcome {usernameCookie}</p>
            <Vehicles data={vehicles} />
            <p>slug: {params.id}</p>
        </div>
    )
}

export default Dashboard