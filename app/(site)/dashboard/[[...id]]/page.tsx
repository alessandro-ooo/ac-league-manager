import Vehicles from "@/app/components/dashboard/Vehicles";
import Viewer from "@/app/components/dashboard/Viewer";
import { getUsernameCookie } from "@/app/libs/cookies/functions";
import { getAllCars } from "@/app/libs/prisma/car/cars";

const Dashboard = async ({ params }: { params: { id: string } }) => {
    const usernameCookie = getUsernameCookie();
    const vehicles = await getAllCars();

    return(
        <div>
            <p>welcome {usernameCookie}</p>
            <Vehicles data={vehicles} />
            
            {params.id === undefined && 
                <div>
                    <p>click something</p>
                </div>
            }

            {params.id != undefined && 
                <div>
                    <Viewer lid={parseInt(params.id)} />
                </div>
            }
        </div>
    )
}

export default Dashboard