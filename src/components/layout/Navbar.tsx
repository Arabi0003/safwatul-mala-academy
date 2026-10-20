"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ChevronDown, GraduationCap, BookOpen, 
  Sparkles, Layers, Globe, UserCheck, Shield 
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProgOpen, setMobileProgOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(false);
  const pathname = usePathname();

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileProgOpen(false);
    setDesktopDropdown(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const programmes = [
    { title: "Qur'an Studies", desc: "Hifz, Tajweed & Qira'at", href: "/quran-studies", icon: BookOpen },
    { title: "Huruf & Arabic", desc: "Alphabet, Grammar & Spoken", href: "/huruf-arabic", icon: Sparkles },
    { title: "Islamic Studies", desc: "Fiqh, Aqeedah, Seerah & Hadith", href: "/islamic-studies", icon: GraduationCap },
    { title: "Academic Subjects", desc: "STEM, Humanities & Languages", href: "/academic-subjects", icon: Layers },
    { title: "Online Learning", desc: "Global Virtual Classrooms", href: "/online-learning", icon: Globe },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 text-[var(--navy)]" 
            : "bg-white/90 backdrop-blur-sm py-3.5 text-[var(--navy)] border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Brand Logo - Pure Circle */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative h-11 w-11 md:h-12 md:w-12 rounded-full bg-white p-0.5 shadow-md border-2 border-[var(--orange)] flex-none overflow-hidden transition-transform group-hover:scale-105">
              <Image 
                src="/safwa.png" 
                alt="Safwatul-Mala Academy Logo" 
                fill 
                className="object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-[Playfair] text-base md:text-lg font-black tracking-tight text-[var(--navy)] leading-tight">
                AS SAFWATUL-MALA
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-[var(--orange)] tracking-widest uppercase">
                ACADEMY • ABUJA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 font-medium text-sm">
            <Link 
              href="/" 
              className={`hover:text-[var(--orange)] transition ${pathname === "/" ? "text-[var(--orange)] font-bold" : "text-[var(--navy)]"}`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`hover:text-[var(--orange)] transition ${pathname === "/about" ? "text-[var(--orange)] font-bold" : "text-[var(--navy)]"}`}
            >
              About
            </Link>

            {/* Desktop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDesktopDropdown(true)}
              onMouseLeave={() => setDesktopDropdown(false)}
            >
              <button 
                type="button"
                onClick={() => setDesktopDropdown(!desktopDropdown)}
                className="flex items-center gap-1 hover:text-[var(--orange)] transition py-2 text-[var(--navy)] font-medium cursor-pointer"
              >
                Programmes <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${desktopDropdown ? "rotate-180 text-[var(--orange)]" : ""}`} />
              </button>

              {desktopDropdown && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1 z-50">
                  {programmes.map((p) => (
                    <Link 
                      key={p.href}
                      href={p.href}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition group"
                    >
                      <div className="h-9 w-9 rounded-lg bg-[var(--orange)]/10 text-[var(--orange)] flex items-center justify-center flex-none group-hover:bg-[var(--orange)] group-hover:text-white transition">
                        <p.icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-bold text-[var(--navy)] text-xs group-hover:text-[var(--orange)] transition">{p.title}</p>
                        <p className="text-[11px] text-slate-500">{p.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/admissions" 
              className={`hover:text-[var(--orange)] transition ${pathname === "/admissions" ? "text-[var(--orange)] font-bold" : "text-[var(--navy)]"}`}
            >
              Admissions
            </Link>

            <Link 
              href="/teachers" 
              className={`hover:text-[var(--orange)] transition ${pathname === "/teachers" ? "text-[var(--orange)] font-bold" : "text-[var(--navy)]"}`}
            >
              Teachers
            </Link>

            <Link 
              href="/calendar" 
              className={`hover:text-[var(--orange)] transition ${pathname === "/calendar" ? "text-[var(--orange)] font-bold" : "text-[var(--navy)]"}`}
            >
              Calendar
            </Link>

            <Link 
              href="/contact" 
              className={`hover:text-[var(--orange)] transition ${pathname === "/contact" ? "text-[var(--orange)] font-bold" : "text-[var(--navy)]"}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link 
              href="/portal" 
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border border-[var(--navy)]/20 text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition"
            >
              <Shield className="h-3.5 w-3.5" /> Portal
            </Link>

            <Link 
              href="/enroll" 
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white shadow-md hover:shadow-lg transition"
            >
              <UserCheck className="h-4 w-4" /> Enroll Now
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl text-[var(--navy)] bg-slate-100/80 active:bg-slate-200 transition touch-manipulation cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-6 w-6 text-[var(--orange)]" /> : <Menu className="h-6 w-6 text-[var(--navy)]" />}
          </button>

        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div 
        className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-xs" 
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer Panel */}
        <aside 
          className={`absolute top-0 left-0 bottom-0 w-[85%] max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Header in Drawer */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="relative h-10 w-10 rounded-full bg-white p-0.5 border border-[var(--orange)] overflow-hidden flex-none">
                <Image src="/safwa.png" alt="Logo" fill className="object-cover rounded-full" />
              </div>
              <div>
                <p className="font-[Playfair] font-bold text-[var(--navy)] text-sm leading-tight">AS SAFWATUL-MALA</p>
                <p className="text-[9px] font-bold text-[var(--orange)] uppercase tracking-wider">Academy Abuja</p>
              </div>
            </div>
            <button 
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto py-4 space-y-1 font-medium text-sm text-[var(--navy)]">
            <Link 
              href="/" 
              className={`block px-3 py-2.5 rounded-xl transition ${pathname === "/" ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50"}`}
            >
              Home
            </Link>

            <Link 
              href="/about" 
              className={`block px-3 py-2.5 rounded-xl transition ${pathname === "/about" ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50"}`}
            >
              About Us
            </Link>

            {/* Mobile Accordion for Programmes */}
            <div>
              <button 
                type="button"
                onClick={() => setMobileProgOpen(!mobileProgOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 transition text-[var(--navy)] font-medium text-left"
              >
                <span>Programmes</span>
                <ChevronDown className={`h-4 w-4 text-[var(--orange)] transition-transform duration-200 ${mobileProgOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileProgOpen && (
                <div className="ml-3 pl-3 border-l-2 border-[var(--orange)]/30 space-y-1 my-1">
                  {programmes.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[var(--orange)] transition"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/admissions" 
              className={`block px-3 py-2.5 rounded-xl transition ${pathname === "/admissions" ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50"}`}
            >
              Admissions
            </Link>

            <Link 
              href="/teachers" 
              className={`block px-3 py-2.5 rounded-xl transition ${pathname === "/teachers" ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50"}`}
            >
              Teachers
            </Link>

            <Link 
              href="/calendar" 
              className={`block px-3 py-2.5 rounded-xl transition ${pathname === "/calendar" ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50"}`}
            >
              Academic Calendar
            </Link>

            <Link 
              href="/news" 
              className={`block px-3 py-2.5 rounded-xl transition ${pathname === "/news" ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50"}`}
            >
              News & Articles
            </Link>

            <Link 
              href="/contact" 
              className={`block px-3 py-2.5 rounded-xl transition ${pathname === "/contact" ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50"}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link 
              href="/portal" 
              className="w-full text-center py-3 rounded-xl border border-[var(--navy)] text-[var(--navy)] font-bold text-xs hover:bg-[var(--navy)] hover:text-white transition"
            >
              Portal Access
            </Link>
            <Link 
              href="/enroll" 
              className="w-full text-center py-3 rounded-xl bg-[var(--orange)] text-white font-bold text-xs shadow-md active:bg-[var(--orange-deep)] transition"
            >
              Apply / Enroll Now
            </Link>
          </div>

        </aside>
      </div>
    </>
  );
}