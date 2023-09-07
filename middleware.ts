export { default } from "next-auth/middleware"
export const config = { matcher: ["/fuuck"] }

// import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
 
// export async function middleware(request: NextRequest) {
//     if(request.nextUrl.pathname.startsWith('/')) {
//         return NextResponse.rewrite(new URL('/about-2', request.url))
//     }
// }