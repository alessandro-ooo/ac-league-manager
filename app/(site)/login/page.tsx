import { LoginBtn } from "@/app/components/LoginBtn"
import { redirect } from "next/navigation";
import { cookies } from 'next/headers'

const Login = () => {
    const usernameCookie = cookies().get('username')

    if(usernameCookie != undefined) {
        return redirect('/dashboard');
    }
    
    return (
        <p>login here <LoginBtn /></p>
    )
} 

export default Login