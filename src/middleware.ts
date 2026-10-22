import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const roleRoutes: Record<string, string[]> = {
  super_admin: ['/dashboard/admin'],
  admin: ['/dashboard/admin'],
  teacher: ['/dashboard/teacher'],
  student: ['/dashboard/student'],
  staff: ['/dashboard/staff'],
  graduate: ['/dashboard/graduate'],
}
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (!pathname.startsWith('/dashboard/')) return NextResponse.next()
  const token = request.cookies.get('auth_token')?.value
  const role = request.cookies.get('user_role')?.value
  if (!token) return NextResponse.redirect(new URL('/portal', request.url))
  if (role) {
    const allowed = roleRoutes[role] || []
    const isAllowed = allowed.some((r) => pathname.startsWith(r))
    if (!isAllowed && !pathname.startsWith('/dashboard/' + role)) {
      return NextResponse.redirect(new URL('/dashboard/' + role, request.url))
    }
  }
  return NextResponse.next()
}
export const config = { matcher: ['/dashboard/:path*'] }