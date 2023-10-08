import { 
    NextRequest, 
    NextResponse 
} from 'next/server'

const middleware = async (request: NextRequest) => {
    console.log(request.url)
    const cookie = request.cookies.get('username');
    const discordid = request.cookies.get('discordid');

    if(request.nextUrl.pathname === '/dashboard') {
        if(discordid === undefined) {
            return NextResponse.redirect(new URL('/login', request.url));
        }

        if(cookie === undefined) {
            return NextResponse.redirect(new URL('/login/new', request.url));
        }
    }

    if(request.nextUrl.pathname === '/login') {
        if(cookie != undefined) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
        if(discordid != undefined && cookie === undefined) {
            return NextResponse.redirect(new URL('/login/new', request.url));
        }
    }

    if(request.nextUrl.pathname === '/login/new') {
        if(discordid === undefined) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
        
        if(discordid != undefined && cookie != undefined) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }
}
export default middleware
