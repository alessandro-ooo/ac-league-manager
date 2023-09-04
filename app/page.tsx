import { useSession } from "next-auth/react"
import { authOptions } from "./api/auth/[...nextauth]/route"

import {LoginBtn, SignOutBtn} from "./components/LoginBtn";
import { checkUser, createUser } from "./libs/prisma/user/functions";
import User from "./components/User";

const Home = async () => {
    const { data: session } = useSession();
    const user = await checkUser(session?.user.id);

    if(!session) {
        return (
            <div>
                Not signed in.
                <LoginBtn></LoginBtn>
            </div>
        )
    }

    if(session) {
        if(user == null) {
            console.log(session.user.name)
            const newUser = await createUser(session?.user.id, session?.user.name);
            console.log(newUser);
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