import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 })
    }
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({ email, password })
    if (authError || !authData.user || !authData.session) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }
    const token = authData.session.access_token
    const userClient = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      { global: { headers: { Authorization: 'Bearer ' + token } } }
    )
    const { data: profile } = await userClient
      .from('profiles')
      .select('role, full_name, is_active')
      .eq('id', authData.user.id)
      .single()
    if (!profile) {
      return NextResponse.json({ error: 'Profile not found. Contact admin.' }, { status: 403 })
    }
    if (!profile.is_active) {
      return NextResponse.json({ error: 'Account deactivated. Contact admin.' }, { status: 403 })
    }
    const role = profile.role || 'student'
    const name = profile.full_name || 'User'
    const response = NextResponse.json({ success: true, role, name })
    const cookieOpts = { secure: process.env.NODE_ENV === 'production', sameSite: 'lax' as const, maxAge: 60 * 60 * 24 * 7, path: '/' }
    response.cookies.set('auth_token', token, { ...cookieOpts, httpOnly: true })
    response.cookies.set('user_role', role, { ...cookieOpts, httpOnly: false })
    response.cookies.set('user_name', name, { ...cookieOpts, httpOnly: false })
    response.cookies.set('user_id', authData.user.id, { ...cookieOpts, httpOnly: false })
    return response
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}