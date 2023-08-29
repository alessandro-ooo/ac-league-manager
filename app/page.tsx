import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route"

import {LoginBtn, SignOutBtn} from "./components/LoginBtn";

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
                <SignOutBtn></SignOutBtn>
            </div>
      }

    </div>
  )
}