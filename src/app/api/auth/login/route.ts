import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { prisma } from "@/lib/prisma";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "safwatul-mala-academy-jwt-secret-key-2024");
const STAFF = ["SUPERADMIN", "ADMIN", "SECRETARY", "TEACHER"] as const;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const id = String(body.id || body.username || body.staffId || body.studentId || "").trim();
    const password = String(body.password || "");
    const portalType = String(body.portalType || "STAFF").toUpperCase();
    let selectedRole = body.role ? String(body.role).toUpperCase().replace("SUPER_ADMIN", "SUPERADMIN") : null;

    if (!id || !password) {
      return NextResponse.json({ error: "ID and password are required." }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ staffId: id }, { studentId: id }, { email: id }],
      },
    });

    if (!user || !user.isActive) {
      return NextResponse.json({ error: "Invalid credentials or account disabled." }, { status: 401 });
    }

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) {
      return NextResponse.json({ error: "Invalid credentials. Check ID and password." }, { status: 401 });
    }

    if (portalType === "STUDENT") {
      if (user.role !== "STUDENT" && user.role !== "GRADUATE") {
        return NextResponse.json({ error: "Not a student account." }, { status: 403 });
      }
    } else {
      if (!(STAFF as readonly string[]).includes(user.role)) {
        return NextResponse.json({ error: "This account cannot use Staff Portal." }, { status: 403 });
      }
      if (selectedRole && selectedRole !== user.role) {
        return NextResponse.json({ error: "Role mismatch. Account is " + user.role + "." }, { status: 403 });
      }
    }

    const token = await new SignJWT({
      userId: user.id,
      role: user.role,
      name: user.name,
      staffId: user.staffId,
      studentId: user.studentId,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(SECRET);

    const res = NextResponse.json({
      success: true,
      user: { id: user.id, name: user.name, role: user.role, staffId: user.staffId, studentId: user.studentId },
    });
    res.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });
    return res;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server login error." }, { status: 500 });
  }
}
