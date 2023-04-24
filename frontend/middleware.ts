import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authRoutes, getProtectedRoutes, protectedRoutes } from './router/router'

export function middleware(req: NextRequest) {

    const currentUser = req.cookies.get("token")?.value

    if (protectedRoutes.includes(req.nextUrl.pathname) && (!currentUser)) {
        req.cookies.delete('token')
        const response = NextResponse.redirect(new URL("/admin/login", req.url))
        response.cookies.delete('token')

        return response
    }

    if (authRoutes.includes(req.nextUrl.pathname) && currentUser) {
        return NextResponse.redirect(new URL('/admin', req.url))
    }
    // if (req.nextUrl.pathname.startsWith('/admin') && !request) {
    //     return NextResponse.rewrite(new URL('/admin', req.url))
    // } else if (req.nextUrl.pathname.startsWith('/admin') && request) {
    //     return NextResponse.rewrite(new URL('/admin', req.url))
    // }


}