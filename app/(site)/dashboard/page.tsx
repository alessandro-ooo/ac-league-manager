import Vehicles from "@/app/components/dashboard/Vehicles";
import { getUsernameCookie } from "@/app/libs/cookies/functions";
import { getAllCars } from "@/app/libs/prisma/livery/function";

const Dashboard = async () => {
    const usernameCookie = getUsernameCookie();
    const vehicles = await getAllCars();
    return(
        <div>
            <p>welcome {usernameCookie}</p>
            <Vehicles data={vehicles} />
        </div>
    )
}

export default Dashboard