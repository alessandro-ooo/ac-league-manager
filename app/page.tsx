"use server"

import { getServerSession } from "next-auth/next"
import {LoginBtn} from "./components/LoginBtn";
import { checkUser } from "./libs/prisma/user/functions";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Dialog from "./components/dialog/Dialog";
import NewUserForm from "./components/forms/NewUserForm";
import { getUsernameCookie, setUsernameCookie } from "./libs/cookies/functions";

const Home = async () => {
    const session = await getServerSession(authOptions)
    getUsernameCookie
    const idc = getUsernameCookie()

    if(!session) {
        return (
            <div>
                Not signed in.
                <LoginBtn></LoginBtn>
            </div>
        )
    }

    if(session) {
        const user = await checkUser(session?.user.id);
        console.log(user)
        if(user.length == 0) {
            return (
                <Dialog>
                    <NewUserForm />
                </Dialog>
            )
        } else {
            setUsernameCookie(user[0].name);
            const cUsername = getUsernameCookie();
            return (
                <p>Display username: {cUsername}</p>
            )
        }
        
    }
}


// const Home = async () => {
//     const session = await getServerSession(authOptions);
//     const user = await checkUser(session?.user.id);

//     return (
//         <div>
//         {
//             session == null && 
//                 <div>
//                     Not signed in.
//                     <LoginBtn></LoginBtn>
//                 </div>          
//         }

//         {
//             session != null &&

//                 <div>
//                     <p>{JSON.stringify(session.user.id)}</p>
//                     <h1>CS rendering</h1>
//                     <User />
//                     <SignOutBtn></SignOutBtn>
//                 </div>
//         }

//         </div>
//     )
// }

export default Home