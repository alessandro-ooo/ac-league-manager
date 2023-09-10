import { 
    NextRequest, 
    NextResponse 
} from 'next/server'

import { signOut } from "next-auth/react"

const middleware = async (request: NextRequest) => {
    const cookie = request.cookies.get('username');
    const nextAuthCookie = request.cookies.get('next-auth.session-token');

    if(request.nextUrl.pathname.startsWith('/dashboard')) {
        if(cookie === undefined) {
            console.log("No cookie")
            // signOut();
            return NextResponse.redirect(new URL('/login', request.url));
        }
        else {
            console.log("y")
        }
    }

    if(request.nextUrl.pathname.startsWith('/login')) {
        console.log("middleware")
        if(cookie != undefined) {
            console.log("user is logged in, shouldn't be here")
            NextResponse.redirect(new URL('/dashboard', request.url));
        }

        if(cookie === undefined) {
            console.log("user hasn't logged in");
           
            // return NextResponse.redirect(new URL('/api/auth/signout?callbackUrl=/api/auth/session', request.url));
        }
    }
}

export default middleware
export const config = { matcher: ["/dashboard"] }
// export { default } from "next-auth/middleware"