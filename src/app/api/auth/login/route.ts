import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';

const prisma = new PrismaClient();
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret');

export async function POST(req: Request) {
  try {
    const { identifier, password, role } = await req.json();

    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { staffId: identifier },
          { studentId: identifier },
          { email: identifier }
        ]
      }
    });

    if (!user) return NextResponse.json({ error: 'Account not found. Check your ID.' }, { status: 404 });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return NextResponse.json({ error: 'Invalid password.' }, { status: 401 });

    const token = await new SignJWT({ id: user.id, role: user.role, name: user.name })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('12h')
      .sign(SECRET);

    const res = NextResponse.json({ 
      success: true, 
      url: `/dashboard/${user.role.toLowerCase()}` 
    });
    
    res.cookies.set('auth_token', token, { 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax', 
      path: '/' 
    });

    return res;
  } catch (error) {
    return NextResponse.json({ error: 'Server error during authentication.' }, { status: 500 });
  }
}