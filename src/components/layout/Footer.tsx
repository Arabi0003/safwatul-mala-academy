"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { academy } from "@/config/academy";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const phoneHref = typeof academy.phone === "string" ? `tel:${academy.phone}` : academy.phone.href;
  const phoneDisplay = typeof academy.phone === "string" ? academy.phone : academy.phone.formatted;

  const socials = [
    { name: "Facebook", icon: FacebookIcon, href: "#", color: "hover:bg-[#1877F2]" },
    { name: "TikTok", icon: TikTokIcon, href: "#", color: "hover:bg-black" },
    { name: "Instagram", icon: InstagramIcon, href: "#", color: "hover:bg-[#E1306C]" },
    { name: "YouTube", icon: YouTubeIcon, href: "#", color: "hover:bg-[#FF0000]" },
    { name: "LinkedIn", icon: LinkedInIcon, href: "#", color: "hover:bg-[#0A66C2]" },
  ];

  return (
    <footer className="bg-[var(--navy-dark)] text-white border-t-4 border-[var(--orange)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--orange-glow)]">Stay Connected</span>
            <h3 className="font-[Playfair] text-2xl md:text-3xl font-bold mt-1 text-white">
              Subscribe to Academy Announcements {"\u0026"} News
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
            <div className="relative h-12 w-12 rounded-full bg-white p-0.5 overflow-hidden shadow-lg border-2 border-[var(--orange)] flex-none">
              <Image src="/safwa.png" alt="Safwatul-Mala Academy Logo" fill className="object-cover rounded-full" />
            </div>
            <div>
              <span className="font-[Playfair] text-lg font-extrabold tracking-tight text-white block leading-tight">
                AS SAFWATUL-MALA
              </span>
              <span className="text-[10px] uppercase font-bold text-[var(--orange-glow)] tracking-widest block">
                ACADEMY - ABUJA
              </span>
            </div>
          </Link>

          <p className="text-slate-300 text-sm leading-relaxed">
            A premier Islamic academy dedicated to raising a generation rooted in the Holy Quran, sound Islamic moral guidance, and competitive academic excellence.
          </p>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--orange-glow)] mb-3">Follow Us</p>
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className={`group relative h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:border-transparent ${s.color}`}
                >
                  <s.icon className="h-4 w-4 text-white transition" />
                </a>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <p className="text-xs text-slate-300 italic font-[Playfair] leading-relaxed">
              The best among you are those who learn the Quran and teach it.
            </p>
            <p className="text-[10px] font-bold text-[var(--orange-glow)] text-right mt-1 tracking-wider uppercase">
              Prophet Muhammad (pbuh)
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white text-base mb-6 pb-2 border-b border-[var(--orange)]/30 inline-block">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/about" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>About Our Academy</Link></li>
            <li><Link href="/admissions" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Admissions and Enrollment</Link></li>
            <li><Link href="/enroll" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2 text-[var(--orange-glow)] font-semibold"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Apply Online Now</Link></li>
            <li><Link href="/teachers" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Teachers and Pedagogy</Link></li>
            <li><Link href="/calendar" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Academic Calendar</Link></li>
            <li><Link href="/news" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>News and Articles</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white text-base mb-6 pb-2 border-b border-[var(--orange)]/30 inline-block">
            Academic Programs
          </h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li><Link href="/quran-studies" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Quran Studies (Tajweed and Hifz)</Link></li>
            <li><Link href="/huruf-arabic" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Huruf and Arabic Language</Link></li>
            <li><Link href="/islamic-studies" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Islamic Studies (Fiqh and Seerah)</Link></li>
            <li><Link href="/academic-subjects" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Conventional Academic Subjects</Link></li>
            <li><Link href="/online-learning" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Online and Virtual Classes</Link></li>
            <li><Link href="/portal" className="hover:text-[var(--orange-glow)] transition inline-flex items-center gap-2 font-medium text-blue-300"><span className="h-1.5 w-1.5 rounded-full bg-[var(--orange)]"></span>Digital Portals Hub</Link></li>
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
            {"\u00A9"} {year || 2025} AS SAFWATUL-MALA ACADEMY. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6 font-medium">
            <Link href="/terms-and-conditions" className="hover:text-[var(--orange-glow)] transition underline underline-offset-4">Terms and Conditions</Link>
            <Link href="/privacy" className="hover:text-[var(--orange-glow)] transition hover:underline">Privacy Policy</Link>
            <Link href="/admissions" className="hover:text-[var(--orange-glow)] transition hover:underline">Admissions</Link>
            <Link href="/contact" className="hover:text-[var(--orange-glow)] transition hover:underline">Contact</Link>
          </div>

          <p className="text-[11px] text-slate-500">
            Powered by{" "}
            <a href="https://www.yalerima.com.ng/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-[var(--orange-glow)] font-bold transition">
              Yalerima Technologies Limited
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

