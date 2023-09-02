"use client"

import { useSession } from "next-auth/react"

const User = () => {
    const { data: session } = useSession()
    return (
        <div>
            {JSON.stringify(session)}
            {session?.user?.name}
        </div>
    )
}

export default User