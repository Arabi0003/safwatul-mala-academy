"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, Shield, ArrowLeft, Fingerprint, AlertCircle } from "lucide-react";
import { supabase } from "@/lib/supabase/client";

type Variant = "student" | "teacher" | "staff" | "graduate";

interface Props {
  role: string;
  variant: Variant;
  accentColor: string;
  accentBg: string;
  onLogin?: () => void;
}

/* ===== BACKGROUND ANIMATIONS (preserved from original) ===== */
function StudentBg() {
  return (
    <>
      <motion.div animate={{ y: [0, -30, 0], x: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-[90px] opacity-20 bg-emerald-500" />
      <motion.div animate={{ y: [0, 25, 0], x: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-1/4 right-1/4 w-56 h-56 rounded-full blur-[70px] opacity-15 bg-teal-400" />
      <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full blur-[60px] opacity-10 bg-emerald-300" />
      {[...Array(6)].map((_, i) => (
        <motion.div key={i} animate={{ y: [0, -40, 0], opacity: [0.1, 0.4, 0.1] }} transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }} className="absolute w-2 h-2 rounded-full bg-emerald-400" style={{ left: 15 + i * 14 + "%", top: 20 + i * 10 + "%" }} />
      ))}
    </>
  );
}

function TeacherBg() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <motion.div key={i} animate={{ rotate: 360, y: [0, -25, 0] }} transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }} className="absolute w-6 h-6 border-2 border-teal-400/15 rounded-md" style={{ top: 15 + i * 13 + "%", left: 8 + i * 15 + "%" }} />
      ))}
      <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-15 bg-teal-400" />
      <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full blur-[80px] opacity-10 bg-emerald-300" />
    </>
  );
}

function StaffBg() {
  return (
    <>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <motion.div animate={{ opacity: [0.02, 0.07, 0.02] }} transition={{ duration: 3, repeat: Infinity }} className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <motion.div animate={{ y: ["-10%", "110%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent" />
      <motion.div animate={{ y: ["110%", "-10%"] }} transition={{ duration: 5, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent" />
      <motion.div animate={{ x: ["-10%", "110%"] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent" />
    </>
  );
}

function GraduateBg() {
  return (
    <>
      {[...Array(10)].map((_, i) => (
        <motion.div key={i} animate={{ y: [0, -300], opacity: [0, 0.8, 0] }} transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }} className="absolute rounded-full bg-emerald-400" style={{ width: 2 + (i % 3) * 2, height: 2 + (i % 3) * 2, left: 10 + i * 8 + "%", bottom: "5%" }} />
      ))}
      <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0.25, 0.1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-[110px] bg-emerald-500" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-emerald-400/10" />
    </>
  );
}

const bgMap: Record<Variant, React.ReactNode> = {
  student: <StudentBg />,
  teacher: <TeacherBg />,
  staff: <StaffBg />,
  graduate: <GraduateBg />,
};

const logoAnim: Record<Variant, any> = {
  student: { initial: { y: 50, opacity: 0 }, animate: { y: [0, -8, 0], opacity: 1 }, transition: { y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }, opacity: { duration: 0.6 } } },
  teacher: { initial: { y: -100, opacity: 0, rotate: -25 }, animate: { y: 0, opacity: 1, rotate: 0 }, transition: { type: "spring", stiffness: 180, damping: 10, delay: 0.2 } },
  staff: { initial: { scale: 0, opacity: 0, rotate: -180 }, animate: { scale: 1, opacity: 1, rotate: 0 }, transition: { type: "spring", stiffness: 120, damping: 14, delay: 0.2 } },
  graduate: { initial: { y: 80, opacity: 0, scale: 0.3 }, animate: { y: 0, opacity: 1, scale: 1 }, transition: { type: "spring", stiffness: 80, damping: 8, delay: 0.2 } },
};

const formAnim: Record<Variant, any> = {
  student: { initial: { y: 60, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.4, duration: 0.7, ease: "easeOut" } },
  teacher: { initial: { rotateX: 40, opacity: 0, scale: 0.85 }, animate: { rotateX: 0, opacity: 1, scale: 1 }, transition: { delay: 0.5, duration: 0.8, type: "spring", stiffness: 150 } },
  staff: { initial: { x: -80, opacity: 0, skewX: -5 }, animate: { x: 0, opacity: 1, skewX: 0 }, transition: { delay: 0.4, duration: 0.6, type: "spring" } },
  graduate: { initial: { scale: 0.7, opacity: 0, filter: "blur(10px)" }, animate: { scale: 1, opacity: 1, filter: "blur(0px)" }, transition: { delay: 0.5, duration: 1, type: "spring", stiffness: 100 } },
};

export default function PortalLogin({ role, variant, accentColor, accentBg, onLogin }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Real Supabase authentication
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        throw new Error(authError.message);
      }

      // Set auth cookie via API route
      await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, role: variant }),
      });

      if (onLogin) onLogin();
      router.push("/portal?welcome=true");
      router.refresh();
    } catch (err: any) {
      const msg = err.message || "Login failed";
      setError(msg === "Invalid login credentials" ? "Invalid email or password" : msg);
      setShake(true);
      setTimeout(() => setShake(false), 600);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ background: "var(--navy-dark)" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      {bgMap[variant]}

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={"relative w-full max-w-md mx-4 z-10 " + (shake ? "animate-shake" : "")}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Top accent bar */}
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="h-1.5 origin-left" style={{ background: "linear-gradient(90deg, " + accentColor + ", var(--gold), " + accentColor + ")" }} />

          <div className="p-8 sm:p-10">
            {/* Logo + Title */}
            <div className="flex flex-col items-center mb-6">
              <motion.div {...logoAnim[variant]} className="relative mb-4">
                {variant === "student" && (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute -inset-3 rounded-full border-2 border-dashed border-emerald-300/40" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute -inset-5 rounded-full border border-emerald-200/20" />
                  </>
                )}
                {variant === "teacher" && (
                  <>
                    <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -inset-2 rounded-full border-2 border-teal-400/30" />
                    <motion.div animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="absolute -inset-2 rounded-full border border-teal-300/20" />
                  </>
                )}
                {variant === "staff" && (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} className="absolute -inset-2 rounded-full border border-emerald-400/25" />
                    <motion.div animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 rounded-full border border-dashed border-emerald-300/15" />
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -inset-6 rounded-full border border-emerald-200/10" />
                  </>
                )}
                {variant === "graduate" && (
                  <>
                    <motion.div animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute -inset-4 rounded-full bg-emerald-400/20 blur-md" />
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -inset-6 rounded-full border border-emerald-400/15" />
                    {[...Array(4)].map((_, i) => (
                      <motion.div key={i} animate={{ rotate: 360 }} transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: i * 1.5 }} className="absolute -inset-3">
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ top: 0, left: "50%" }} />
                      </motion.div>
                    ))}
                  </>
                )}

                <div className="relative h-20 w-20 rounded-full bg-white p-1 shadow-xl border-[3px] overflow-hidden" style={{ borderColor: accentColor }}>
                  <Image src="/safwa.png" alt="AS SAFWATUL-MALA ACADEMY" fill className="object-cover rounded-full" priority />
                </div>
              </motion.div>

              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: accentColor }}>AS SAFWATUL-MALA ACADEMY</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mt-1">{role} Portal</motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-slate-400 text-xs mt-1 font-[Playfair] italic">As-salamu alaykum wa rahmatullah</motion.p>
            </div>

            {/* Encryption badge */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-2 mb-6 py-2 px-4 rounded-xl" style={{ background: accentBg }}>
              <Shield className="h-3.5 w-3.5" style={{ color: accentColor }} />
              <span className="text-[11px] font-bold tracking-wide" style={{ color: accentColor }}>256-BIT SSL ENCRYPTED CONNECTION</span>
            </motion.div>

            {/* Error message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2"
                >
                  <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
                  <span className="text-red-600 text-sm font-medium">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Login Form */}
            <motion.form {...formAnim[variant]} onSubmit={handleSubmit} className="space-y-4" style={{ perspective: "1000px" }}>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(""); }}
                    placeholder="your.email@academy.edu"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 text-sm transition"
                    style={{ "--tw-ring-color": accentColor + "33" } as React.CSSProperties}
                    required
                  />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}>
                <label className="block text-xs font-bold text-slate-600 mb-1.5 uppercase tracking-wider">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    type={showPw ? "text" : "password"}
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setError(""); }}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-11 py-3 rounded-xl border border-emerald-200 focus:outline-none focus:ring-2 text-sm transition"
                    style={{ "--tw-ring-color": accentColor + "33" } as React.CSSProperties}
                    required
                  />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-slate-500 cursor-pointer">
                  <input type="checkbox" className="rounded border-emerald-300" /> Remember me
                </label>
                <button type="button" className="font-semibold hover:underline" style={{ color: accentColor }}>Forgot password?</button>
              </motion.div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={loading}
                className="w-full py-3.5 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-70 transition relative overflow-hidden"
                style={{ background: accentColor }}
              >
                {loading ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full" />
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Fingerprint className="h-4 w-4" /> Sign In to {role} Portal
                  </>
                )}
                {variant === "graduate" && !loading && (
                  <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                )}
                {variant === "student" && !loading && (
                  <motion.div animate={{ y: ["100%", "-100%"] }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-transparent" />
                )}
              </motion.button>
            </motion.form>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.85 }} className="mt-6 text-center">
              <Link href="/portal" className="text-xs text-slate-400 hover:text-slate-600 inline-flex items-center gap-1 transition">
                <ArrowLeft className="h-3 w-3" /> Back to All Portals
              </Link>
            </motion.div>
          </div>

          {/* Bottom security bar */}
          <div className="bg-emerald-50 px-8 py-3 flex items-center justify-center gap-2 border-t border-emerald-100">
            <Lock className="h-3 w-3 text-emerald-500" />
            <span className="text-[10px] text-slate-400 font-medium">Protected by Supabase enterprise-grade encryption.</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}