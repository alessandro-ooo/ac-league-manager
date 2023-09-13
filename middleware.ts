import { 
    NextRequest, 
    NextResponse 
} from 'next/server'

const middleware = async (request: NextRequest) => {
    const cookie = request.cookies.get('username');

    if(request.nextUrl.pathname.startsWith('/dashboard')) {
        if(cookie === undefined) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    if(request.nextUrl.pathname.startsWith('/login')) {
        if(cookie != undefined) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }
}

export default middleware
