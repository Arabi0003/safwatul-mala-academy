"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Mail, Lock, Eye, EyeOff, Shield, ArrowLeft, Fingerprint } from "lucide-react";

interface PortalLoginProps {
  role: string;
  accentColor: string;
  accentBg: string;
  onLogin: () => void;
}

export default function PortalLogin({ role, accentColor, accentBg, onLogin }: PortalLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(); }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "var(--navy-dark)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20" style={{ background: accentColor }} />

      <motion.div initial={{ opacity: 0, y: 30, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.5 }} className="relative w-full max-w-md mx-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="h-1.5" style={{ background: "linear-gradient(90deg, " + accentColor + ", var(--gold))" }} />

          <div className="p-8 sm:p-10">
            <div className="flex flex-col items-center mb-6">
              <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }} className="relative h-20 w-20 rounded-full bg-white p-1 shadow-xl border-[3px] overflow-hidden mb-4" style={{ borderColor: accentColor }}>
                <Image src="/safwa.png" alt="Logo" fill className="object-cover rounded-full" priority />
              </motion.div>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: accentColor }}>AS SAFWATUL-MALA ACADEMY</p>
              <h1 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mt-1">{role} Portal</h1>
              <p className="text-slate-400 text-xs mt-1 font-[Playfair] italic">As-salamu alaykum wa rahmatullah</p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-6 py-2 px-4 rounded-xl" style={{ background: accentBg }}>
              <Shield className="h-3.5 w-3.5" style={{ color: accentColor }} />
              <span className="text-[11px] font-bold tracking-wide" style={{ color: accentColor }}>256-BIT SSL ENCRYPTED CONNECTION</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your.email@academy.edu" className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 text-sm transition" style={{ "--tw-ring-color": accentColor + "33" } as React.CSSProperties} required />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input type={showPw ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" className="w-full pl-10 pr-11 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 text-sm transition" style={{ "--tw-ring-color": accentColor + "33" } as React.CSSProperties} required />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300" /> Remember me
                </label>
                <button type="button" className="font-semibold hover:underline" style={{ color: accentColor }}>Forgot password?</button>
              </div>

              <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} disabled={loading} className="w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-70 transition" style={{ background: accentColor }}>
                {loading ? (
                  <><div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Authenticating...</>
                ) : (
                  <><Fingerprint className="h-4 w-4" /> Sign In to {role} Portal</>
                )}
              </motion.button>
            </form>

            <div className="mt-6 text-center">
              <Link href="/portal" className="text-xs text-slate-400 hover:text-slate-600 inline-flex items-center gap-1 transition">
                <ArrowLeft className="h-3 w-3" /> Back to All Portals
              </Link>
            </div>
          </div>

          <div className="bg-slate-50 px-8 py-3 flex items-center justify-center gap-2 border-t border-slate-100">
            <Lock className="h-3 w-3 text-green-500" />
            <span className="text-[10px] text-slate-400 font-medium">Protected by enterprise-grade encryption. Your data is secure.</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
