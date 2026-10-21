import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const path = request.nextUrl.pathname;

  // Protect dashboard and admin routes
  const isProtected = path.startsWith('/dashboard') || path.startsWith('/portal/admin');

  if (isProtected) {
    if (!token) {
      return NextResponse.redirect(new URL('/portal/staff', request.url));
    }
    // Token exists — allow through
    // Full JWT verification happens in API routes via Supabase
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/portal/admin/:path*'],
};