import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next"
import { LoginBtn } from "./LoginBtn";
import { getUsernameCookie } from "../libs/cookies/functions";
import { redirect } from "next/navigation";
import Dialog from "./dialog/Dialog";
import NewUserForm from "./forms/NewUserForm";

const User = async () => {
    const session = await getServerSession(authOptions);
    const usernameCookie = getUsernameCookie();

    if(session) {
        if(usernameCookie == undefined) {
            const res = await fetch('/api/user', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(session.user)
            });

            if(res.status == 404) {
                return (
                    <Dialog>
                        <NewUserForm />
                    </Dialog>
                )
            }
        }
    }

    if(!session) {
        return redirect('/login');
    }
    // if(!session) {
    //     return (
    //         <div>
    //             Not signed in.
    //             <LoginBtn></LoginBtn>
    //         </div>
    //     )
    // }
}

export default User