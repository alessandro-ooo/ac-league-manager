"use client"

import { LoginBtn } from "@/app/components/LoginBtn"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
const Login = () => {
    const { data: session, status} = useSession()
    const router = useRouter()

    if(status == "authenticated") {
        // router.push('/dashboard')
    }

    if(status == "unauthenticated") {
        return (
            <>Please log in with discord<LoginBtn></LoginBtn></>
        )
    }
} 

export default Login