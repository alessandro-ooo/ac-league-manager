
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Dialog from "@/app/components/dialog/Dialog";
import NewUserForm from "@/app/components/forms/NewUserForm";
import { getUsernameCookie } from "@/app/libs/cookies/functions";
import {getServerSession} from "next-auth/next"
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession(authOptions);
    const usernameCookie = getUsernameCookie();
    // console.log(usernameCookie)

    if(session) {
        if(usernameCookie == undefined) {
            const res = await fetch("http://localhost:3000/api/user/id="+ session.user.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if(res.status == 404) {
                return (
                    <Dialog>
                        <NewUserForm />
                    </Dialog>
                )
            }
        } else {
            return (
                <p>your fucking name is {usernameCookie}</p>
            )
        }
    }

    if(!session) {
        return redirect('/login');
    }
}

export default Dashboard