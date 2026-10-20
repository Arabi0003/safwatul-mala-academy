"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, GraduationCap } from "lucide-react";
import { academy } from "@/config/academy";

export default function HeroVideo() {
  return (
    <section className="relative min-h-[95vh] w-full flex items-center justify-center overflow-hidden bg-[var(--navy-dark)] pt-20">
      {/* Background Video Layer - Direct CSS rendering */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover opacity-40 scale-105"
        >
          <source src="/videos/safwat_web.mp4" type="video/mp4" />
          <source src="/videos/safwat.mp4" type="video/mp4" />
          <source src="/videos/safwa.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlays for high contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)] via-[var(--navy-dark)]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)] via-transparent to-[var(--navy-dark)]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid gap-12 lg:grid-cols-12 items-center py-12">
        <div className="lg:col-span-7 flex flex-col items-start space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ocean)]/40 bg-[var(--ocean)]/20 px-4 py-1.5 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[var(--orange)] animate-pulse" />
            <span className="text-xs font-bold tracking-wider text-white uppercase">
              Admissions Open 2025/2026
            </span>
          </div>

          <h1 className="font-[Playfair] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
            Nurturing <span className="text-[var(--orange-glow)]">Hearts</span> in the Qur'an, <br />
            Minds in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-sky-300">Excellence</span>
          </h1>

          <p className="max-w-xl text-lg text-slate-200 leading-relaxed font-medium">
            {academy.tagline}. A premier Islamic educational institution in Abuja combining authentic Qur'anic studies, Arabic mastery, and robust conventional academics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
            {["Tahfiz & Arabic Mastery", "Standard STEM Curriculum", "Spiritual Discipline", "On-Campus & Online"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-200 font-medium">
                <CheckCircle2 className="h-5 w-5 text-[var(--orange)] flex-none" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/enroll"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--orange)] px-8 py-4 text-sm font-bold text-white shadow-xl shadow-[var(--orange)]/20 transition hover:bg-[var(--orange-soft)] hover:-translate-y-1"
            >
              <span>Enroll Student Now</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/10 hover:border-white/40"
            >
              <GraduationCap className="h-4 w-4 text-[var(--orange-glow)]" />
              <span>Explore Programmes</span>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative hidden lg:block">
          <div className="relative rounded-3xl border border-white/10 bg-[var(--navy)]/40 p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[var(--orange)]" />
                Secure Your Place
              </span>
            </div>
            <div>
              <h3 className="font-[Playfair] text-2xl text-white font-bold mb-3">
                Join the Safwatul-Mala Family
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Choose from Full-Time Hifz & Academics, Evening Qur'an & Arabic, Weekend Madrasah, or our specialized Virtual Learning portal.
              </p>
            </div>
            <Link
              href="/enroll"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[var(--navy-dark)] font-bold py-4 hover:bg-slate-100 transition shadow-lg"
            >
              Start Online Registration
              <ArrowRight className="h-4 w-4 text-[var(--orange)]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
