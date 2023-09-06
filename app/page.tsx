import { getServerSession } from "next-auth/next"
import {LoginBtn, SignOutBtn} from "./components/LoginBtn";
import { checkUser, createUser } from "./libs/prisma/user/functions";
import User from "./components/User";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Dialog from "./components/dialog/Dialog";
import Input from "./components/Input";
import NewUserForm from "./components/forms/NewUserForm";

const Home = async () => {
    const session = await getServerSession(authOptions)
    
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

        if(user == null) {
            // const newUser = await createUser(session?.user.id, session?.user.name);
            return (
                <Dialog>
                    <NewUserForm />
                </Dialog>
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