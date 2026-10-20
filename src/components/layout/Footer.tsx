"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight
} from "lucide-react";
import { academy } from "@/config/academy";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const phoneHref = typeof academy.phone === "string" ? `tel:${academy.phone}` : academy.phone.href;
  const phoneDisplay = typeof academy.phone === "string" ? academy.phone : academy.phone.formatted;

  return (
    <footer className="bg-[var(--navy-dark)] text-white border-t-4 border-[var(--orange)] relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }}
      />

      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--orange-glow)]">Stay Connected</span>
            <h3 className="font-[Playfair] text-2xl md:text-3xl font-bold mt-1 text-white">
              Subscribe to Academy Announcements & News
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Receive updates regarding admissions, academic calendar events, and spiritual articles.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-[var(--orange)] flex-1 text-sm"
              required
            />
            <button 
              type="submit"
              className="bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white font-bold px-6 py-3.5 rounded-xl text-sm transition flex items-center justify-center gap-2 flex-none"
            >
              Subscribe <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <Link href="/" className="inline-flex items-center gap-3">
            {/* CIRCULAR LOGO */}
            <div className="relative h-12 w-12 rounded-full bg-white p-0.5 overflow-hidden shadow-lg border-2 border-[var(--orange)] flex-none">
              <Image 
                src="/safwa.png" 
                alt="Safwatul-Mala Academy Logo" 
                fill 
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-[Playfair] text-lg font-extrabold tracking-tight text-white block leading-tight">
                AS SAFWATUL-MALA
              </span>
              <span className="text-[10px] uppercase font-bold text-[var(--orange-glow)] tracking-widest block">
                ACADEMY • ABUJA
              </span>
            </div>
          </Link>

          <p className="text-slate-300 text-sm leading-relaxed">
            A premier Islamic academy dedicated to raising a generation rooted in the Holy Qur'an, sound Islamic moral guidance, and competitive academic excellence.
          </p>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-slate-300 italic font-[Playfair] leading-relaxed">
              "The best among you are those who learn the Qur'an and teach it."
            </p>
            <p className="text-[10px] font-bold text-[var(--orange-glow)] text-right mt-1 tracking-wider uppercase">
              — Prophet Muhammad (pbuh)
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white text-base mb-6 pb-2 border-b border-[var(--orange)]/30 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <Link href="/about" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                About Our Academy
              </Link>
            </li>
            <li>
              <Link href="/admissions" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Admissions & Enrollment
              </Link>
            </li>
            <li>
              <Link href="/enroll" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2 text-[var(--orange-glow)] font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Apply Online Now
              </Link>
            </li>
            <li>
              <Link href="/teachers" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Teachers & Pedagogy
              </Link>
            </li>
            <li>
              <Link href="/calendar" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Academic Calendar
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                News & Articles
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-base mb-6 pb-2 border-b border-[var(--orange)]/30 inline-block">
            Academic Programs
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <Link href="/quran-studies" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Qur'an Studies (Tajweed & Hifz)
              </Link>
            </li>
            <li>
              <Link href="/huruf-arabic" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Huruf & Arabic Language
              </Link>
            </li>
            <li>
              <Link href="/islamic-studies" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Islamic Studies (Fiqh & Seerah)
              </Link>
            </li>
            <li>
              <Link href="/academic-subjects" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Conventional Academic Subjects
              </Link>
            </li>
            <li>
              <Link href="/online-learning" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Online & Virtual Classes
              </Link>
            </li>
            <li>
              <Link href="/portal" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2 font-medium text-blue-300">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>
                Digital Portals Hub
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-base mb-6 pb-2 border-b border-[var(--orange)]/30 inline-block">
            Contact Academy
          </h4>
          <ul className="space-y-4 text-sm text-slate-300">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[var(--orange-glow)] flex-none mt-0.5" />
              <span>Abuja, Federal Capital Territory, Nigeria</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[var(--orange-glow)] flex-none" />
              <a href={phoneHref} className="hover:text-[var(--orange-glow)] transition">{phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-[var(--orange-glow)] flex-none mt-0.5" />
              <div className="flex flex-col text-xs break-all gap-1">
                {academy.emails.map((e) => (
                  <a key={e} href={`mailto:${e}`} className="hover:text-[var(--orange-glow)] transition">{e}</a>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/30 py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {year || 2025} AS SAFWATUL-MALA ACADEMY. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 font-medium">
            <Link href="/terms-and-conditions" className="hover:text-[var(--orange-glow)] transition underline underline-offset-4">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="hover:text-[var(--orange-glow)] transition hover:underline">
              Privacy Policy
            </Link>
            <Link href="/admissions" className="hover:text-[var(--orange-glow)] transition hover:underline">
              Admissions
            </Link>
            <Link href="/contact" className="hover:text-[var(--orange-glow)] transition hover:underline">
              Contact
            </Link>
          </div>

          <p className="text-[11px] text-slate-500">
            Powered by{" "}
            <a 
              href="https://www.yalerima.com.ng/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-slate-300 hover:text-[var(--orange-glow)] font-bold transition"
            >
              Yalerima Technologies Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}