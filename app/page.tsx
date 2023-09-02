import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"

import {LoginBtn, SignOutBtn} from "./components/LoginBtn";
import User from "./components/User";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {
        session == null && 
            <div>
                Not signed in.
                <LoginBtn></LoginBtn>
            </div>          
      }

      {

        session != null &&
            <div>
                <p>{JSON.stringify(session)}</p>
                <h1>CS rendering</h1>
                <User />
                <SignOutBtn></SignOutBtn>
            </div>
      }

    </div>
  )
}