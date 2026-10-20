"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Twitter, Send, BookOpen, Sparkles, type LucideIcon } from "lucide-react";
import { academy } from "@/config/academy";

type FooterLink = { label: string; href: string };

function FooterCol({ title, icon: Icon, links }: { title: string; icon?: LucideIcon; links: FooterLink[] }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[var(--orange)]">
        {Icon ? <Icon className="h-4 w-4" /> : <span className="h-px w-6 bg-[var(--orange)]" />}
        <span className="text-[11px] uppercase tracking-[0.2em] font-bold">{title}</span>
      </div>
      <h4 className="mt-2 font-[Playfair] text-lg text-white font-semibold">{title}</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group inline-flex items-center gap-2 text-slate-300 hover:text-[var(--orange-glow)] transition">
              <span className="h-px w-0 bg-[var(--orange)] transition-all duration-300 group-hover:w-3" />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [year, setYear] = useState<number>(2025);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative mt-20 overflow-hidden bg-[var(--navy-dark)] text-white border-t-4 border-[var(--orange)]">
      {/* Upper band */}
      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-4 group">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg overflow-hidden border-2 border-[var(--orange)] group-hover:scale-105 transition duration-300">
                <Image src="/safwa.png" alt="Academy Logo" width={56} height={56} className="h-12 w-12 object-contain" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-[Playfair] text-2xl font-bold tracking-wide text-white">AS SAFWATUL-MALA</span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--orange-glow)] font-semibold">Academy · Abuja</span>
              </span>
            </Link>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-300">
              A centre for Qur'anic excellence and principled learning — nurturing hearts in the Book, minds in knowledge, and character in the light of Islam.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--orange-glow)] transition hover:bg-[var(--orange)] hover:text-white">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[var(--orange)]">
              <Send className="h-4 w-4" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Stay Connected</span>
            </div>
            <h3 className="mt-2 font-[Playfair] text-xl text-white font-semibold">Receive term updates</h3>
            <form onSubmit={onSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-[var(--orange)] focus:ring-1 focus:ring-[var(--orange)]" />
              <button type="submit" className="rounded-xl bg-[var(--orange)] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[var(--orange-soft)]">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      {/* Middle grid */}
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <FooterCol title="Explore" icon={Sparkles} links={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Admissions", href: "/admissions" }, { label: "Enroll Now", href: "/enroll" }]} />
          <FooterCol title="Programmes" icon={BookOpen} links={[{ label: "Qur'an Studies", href: "/quran" }, { label: "Huruf & Arabic", href: "/huruf-arabic" }, { label: "Islamic Studies", href: "/islamic-studies" }, { label: "Academic Subjects", href: "/academic" }]} />
          <FooterCol title="Community" links={[{ label: "Teachers", href: "/teachers" }, { label: "Calendar", href: "/calendar" }, { label: "News", href: "/news" }, { label: "Portal Access", href: "/portal" }]} />
          <div>
            <div className="flex items-center gap-2 text-[var(--orange)]">
              <span className="h-px w-6 bg-[var(--orange)]" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-bold">Reach Us</span>
            </div>
            <h4 className="mt-2 font-[Playfair] text-lg text-white font-semibold">Visit or write</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 flex-none text-[var(--orange)]" /><span>Abuja, FCT, Nigeria</span></li>
              <li><a href={`tel:${academy.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 hover:text-[var(--orange-glow)] transition"><Phone className="h-4 w-4 flex-none text-[var(--orange)]" /><span>{academy.phone}</span></a></li>
              <li><a href={`mailto:${academy.emails[0]}`} className="flex items-center gap-3 hover:text-[var(--orange-glow)] transition"><Mail className="h-4 w-4 flex-none text-[var(--orange)]" /><span>{academy.emails[0]}</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Legal bar */}
      <div className="bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-300">
          <p>© {year} AS Safwatul-Mala Academy. All rights reserved.</p>
          <nav className="flex items-center gap-6 font-medium">
            <Link href="/terms-and-conditions" className="text-white hover:text-[var(--orange-glow)] transition">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-[var(--orange-glow)] transition">Privacy Policy</Link>
          </nav>
          <p className="text-xs">Powered by <a href="https://www.yalerima.com.ng/" target="_blank" className="font-bold text-[var(--orange-glow)] hover:text-white">Yalerima Technologies</a></p>
        </div>
      </div>
    </footer>
  );
}
