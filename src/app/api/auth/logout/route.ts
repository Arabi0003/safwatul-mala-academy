import { NextResponse } from 'next/server'
export async function POST() {
  const response = NextResponse.json({ success: true })
  for (const c of ['auth_token','user_role','user_name','user_id']) {
    response.cookies.set(c, '', { maxAge: 0, path: '/' })
  }
  return response
}