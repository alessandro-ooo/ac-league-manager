"use client"
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter()
    router.push('/dashboard')
    return (
        <p>test</p>
    )

}

export default Home