'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, User, AlertCircle, ArrowLeft } from "lucide-react";

const ROLES = ["SUPERADMIN", "ADMIN", "SECRETARY", "TEACHER"] as const;

export default function StaffLoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<(typeof ROLES)[number]>("SUPERADMIN");
  const [username, setUsername] = useState("ASM/ADMIN/01");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const fail = (m: string) => {
    setError(m);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) navigator.vibrate([150, 80, 150, 80, 250]);
    setShake(true);
    setTimeout(() => setShake(false), 600);
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: username.trim(), password, portalType: "STAFF", role }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      const r = String(data.user.role || "admin").toLowerCase();
      router.push("/dashboard/" + r);
      router.refresh();
    } catch (err: unknown) {
      fail(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 flex flex-col justify-center items-center p-4 text-slate-900">
      <div className="w-full max-w-md">
        <div className="mb-6 flex justify-between items-center">
          <Link href="/" className="text-sm font-semibold text-emerald-800 bg-white/80 px-3 py-1.5 rounded-full border border-emerald-200 inline-flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" /> Home
          </Link>
          <span className="text-xs font-bold bg-emerald-700 text-white px-3 py-1 rounded-full">Staff Portal</span>
        </div>
        <div className={"bg-white/90 backdrop-blur-xl border border-emerald-200 shadow-2xl rounded-2xl p-8 " + (shake ? "animate-shake border-red-500 ring-4 ring-red-500/20" : "")}>
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-20 h-20 mb-3"><Image src="/logo.png" alt="Logo" fill className="object-contain" priority /></div>
            <h1 className="text-2xl font-black text-slate-900">Staff Login</h1>
            <p className="text-xs text-emerald-800 mt-1">Super Admin works with role SUPERADMIN</p>
          </div>
          {error && <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 text-xs rounded-xl flex gap-2"><AlertCircle className="w-4 h-4 shrink-0" />{error}</div>}
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              {ROLES.map((r) => (
                <button key={r} type="button" onClick={() => setRole(r)} className={"py-2 text-xs font-bold rounded-lg border " + (role === r ? "bg-emerald-700 text-white border-emerald-700" : "bg-emerald-50 text-slate-700 border-emerald-200")}>{r}</button>
              ))}
            </div>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-700" />
              <input className="w-full pl-9 py-2.5 border border-emerald-200 rounded-xl bg-emerald-50/40 text-sm" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="ASM/ADMIN/01" required />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-700" />
              <input type="password" className="w-full pl-9 py-2.5 border border-emerald-200 rounded-xl bg-emerald-50/40 text-sm" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button disabled={loading} className="w-full py-3 bg-emerald-700 text-white font-bold rounded-xl text-sm disabled:opacity-50">{loading ? "..." : "Sign In"}</button>
          </form>
          <p className="mt-3 text-[10px] text-center text-slate-500">ASM/ADMIN/01 · password123 · SUPERADMIN</p>
        </div>
      </div>
    </main>
  );
}
