'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, UserCheck, AlertCircle, ArrowLeft } from "lucide-react";

export default function StudentLoginPage() {
  const router = useRouter();
  const [studentId, setStudentId] = useState("ASM/2024/0001");
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
        body: JSON.stringify({ id: studentId.trim(), password, portalType: "STUDENT" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      router.push("/dashboard/student");
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
        <div className="mb-6 flex justify-between">
          <Link href="/" className="text-sm font-semibold text-emerald-800 bg-white/80 px-3 py-1.5 rounded-full border border-emerald-200 inline-flex items-center gap-1"><ArrowLeft className="w-4 h-4" /> Home</Link>
          <span className="text-xs font-bold bg-orange-600 text-white px-3 py-1 rounded-full">Student</span>
        </div>
        <div className={"bg-white/90 border border-emerald-200 shadow-2xl rounded-2xl p-8 " + (shake ? "animate-shake border-red-500" : "")}>
          <div className="flex flex-col items-center mb-6">
            <div className="relative w-20 h-20 mb-3"><Image src="/logo.png" alt="Logo" fill className="object-contain" priority /></div>
            <h1 className="text-2xl font-black">Student Login</h1>
          </div>
          {error && <div className="mb-4 p-3 bg-red-50 border border-red-300 text-red-700 text-xs rounded-xl flex gap-2"><AlertCircle className="w-4 h-4" />{error}</div>}
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="relative">
              <UserCheck className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-700" />
              <input className="w-full pl-9 py-2.5 border border-emerald-200 rounded-xl bg-emerald-50/40 text-sm" value={studentId} onChange={(e) => setStudentId(e.target.value)} required />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-700" />
              <input type="password" className="w-full pl-9 py-2.5 border border-emerald-200 rounded-xl bg-emerald-50/40 text-sm" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button disabled={loading} className="w-full py-3 bg-orange-600 text-white font-bold rounded-xl text-sm disabled:opacity-50">{loading ? "..." : "Sign In"}</button>
          </form>
        </div>
      </div>
    </main>
  );
}
