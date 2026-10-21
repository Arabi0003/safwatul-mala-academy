import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth_token')?.value;
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard');

  // Protect Dashboard Routes
  if (isDashboard) {
    if (!token) {
      return NextResponse.redirect(new URL('/portal/staff', request.url));
    }
    
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret');
      // Cryptographically verify the token
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      // If token is tampered with or expired, kick them out
      const response = NextResponse.redirect(new URL('/portal/staff', request.url));
      response.cookies.delete('auth_token');
      return response;
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};