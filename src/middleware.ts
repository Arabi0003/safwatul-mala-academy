import { type NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // Frontend-only mode: pass everything through
  // Auth protection will be enabled when Supabase keys are configured
  return NextResponse.next({ request });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|videos/|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4)$).*)",
  ],
};
