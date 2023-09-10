
import { getUsernameCookie } from "@/app/libs/cookies/functions";

const Dashboard = async () => {
    const usernameCookie = getUsernameCookie();

    return(
        <p>name is {usernameCookie}</p>
    )
}

export default Dashboard