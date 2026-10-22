'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, User, AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase/client";

export default function StudentLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: authError } = await supabase.auth.signInWithPassword({ email, password });
      if (authError) throw new Error(authError.message);

      await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role: "student" }),
      });

      router.push("/portal?welcome=true");
      router.refresh();
    } catch (err: any) {
      setError(err.message === "Invalid login credentials" ? "Invalid student ID or password" : err.message);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 relative overflow-hidden">
      {/* Background orbs */}
      <motion.div animate={{ y: [0, -30, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[90px] opacity-20 bg-emerald-500" />
      <motion.div animate={{ y: [0, 25, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full blur-[70px] opacity-15 bg-teal-400" />

      <div className={"relative z-10 w-full max-w-md mx-4 " + (shake ? "animate-shake" : "")}>
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-500" />

          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center mb-6">
              <div className="relative h-20 w-20 rounded-full bg-white p-1 shadow-xl border-[3px] border-emerald-500 overflow-hidden mb-4">
                <Image src="/safwa.png" alt="Logo" fill className="object-cover rounded-full" priority />
              </div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-600">AS SAFWATUL-MALA ACADEMY</p>
              <h1 className="font-[Playfair] text-2xl font-bold text-emerald-900 mt-1">Student Portal</h1>
              <p className="text-slate-400 text-xs mt-1 font-[Playfair] italic">As-salamu alaykum wa rahmatullah</p>
            </div>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2">
                <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
                <span className="text-red-600 text-sm font-medium">{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setError(""); }} placeholder="student@academy.edu" className="w-full pl-10 pr-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); setError(""); }} placeholder="Enter your password" className="w-full pl-10 pr-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-sm" required />
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-70 hover:bg-emerald-700 transition">
                {loading ? (
                  <><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full" /> Authenticating...</>
                ) : (
                  <><Lock className="h-4 w-4" /> Sign In</>
                )}
              </button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/portal" className="text-xs text-slate-400 hover:text-slate-600 inline-flex items-center gap-1 transition">
                <ArrowLeft className="h-3 w-3" /> Back to All Portals
              </Link>
            </div>
          </div>

          <div className="bg-emerald-50 px-8 py-3 flex items-center justify-center gap-2 border-t border-emerald-100">
            <Lock className="h-3 w-3 text-emerald-500" />
            <span className="text-[10px] text-slate-400 font-medium">Protected by Supabase enterprise-grade encryption.</span>
          </div>
        </div>
      </div>
    </div>
  );
}