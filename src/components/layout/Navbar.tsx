"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ChevronDown, GraduationCap, BookOpen, 
  Sparkles, Layers, Globe, UserCheck, Shield
} from "lucide-react";

function NavbarContent() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const programmeLinks = [
    { title: "Qur'an Studies", desc: "Hifz, Tajweed, and Qira'at", href: "/quran-studies", icon: BookOpen },
    { title: "Huruf & Arabic", desc: "Alphabet, Grammar, Conversation", href: "/huruf-arabic", icon: Sparkles },
    { title: "Islamic Studies", desc: "Fiqh, Aqeedah, Seerah, Hadith", href: "/islamic-studies", icon: GraduationCap },
    { title: "Academic Subjects", desc: "STEM, Humanities, Languages", href: "/academic-subjects", icon: Layers },
    { title: "Online Learning", desc: "Global Virtual Classrooms", href: "/online-learning", icon: Globe },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 text-[var(--navy)]" 
          : "bg-white/90 backdrop-blur-sm py-4 text-[var(--navy)] border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Brand Logo - CIRCULAR / CIRCLE */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 rounded-full bg-white p-0.5 shadow-md border-2 border-[var(--orange)] flex-none overflow-hidden transition-transform group-hover:scale-105">
            <Image 
              src="/safwa.png" 
              alt="Safwatul-Mala Academy Logo" 
              fill 
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-[Playfair] text-lg font-black tracking-tight text-[var(--navy)] leading-tight">
              AS SAFWATUL-MALA
            </span>
            <span className="text-[10px] font-bold text-[var(--orange)] tracking-widest uppercase">
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

          {/* Programmes Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("programmes")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button 
              className="flex items-center gap-1 hover:text-[var(--orange)] transition py-2 text-[var(--navy)]"
            >
              Programmes <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "programmes" ? "rotate-180 text-[var(--orange)]" : ""}`} />
            </button>

            {activeDropdown === "programmes" && (
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                {programmeLinks.map((p) => (
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

        {/* Right CTA Actions */}
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
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl text-[var(--navy)] hover:bg-slate-100 transition"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6 text-[var(--orange)]" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 top-[73px] bg-black/40 z-40 lg:hidden" onClick={() => setMobileOpen(false)}>
          <div 
            className="w-4/5 max-w-sm h-full bg-white shadow-2xl p-6 flex flex-col gap-6 overflow-y-auto animate-in slide-in-from-left duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
              <div className="relative h-10 w-10 rounded-full bg-white p-0.5 border border-[var(--orange)] flex-none overflow-hidden">
                <Image src="/safwa.png" alt="Logo" fill className="object-cover rounded-full" />
              </div>
              <div>
                <p className="font-[Playfair] font-bold text-[var(--navy)] text-sm">AS SAFWATUL-MALA</p>
                <p className="text-[10px] font-bold text-[var(--orange)] uppercase">Academy Abuja</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 font-medium text-sm text-[var(--navy)]">
              <Link href="/" className="p-2 hover:text-[var(--orange)]">Home</Link>
              <Link href="/about" className="p-2 hover:text-[var(--orange)]">About Us</Link>
              
              <div className="p-2">
                <p className="text-xs font-bold uppercase text-[var(--orange)] mb-2">Programmes</p>
                <div className="pl-3 flex flex-col gap-2 border-l-2 border-slate-100">
                  {programmeLinks.map((p) => (
                    <Link key={p.href} href={p.href} className="text-xs py-1 hover:text-[var(--orange)] text-slate-700">
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/admissions" className="p-2 hover:text-[var(--orange)]">Admissions</Link>
              <Link href="/teachers" className="p-2 hover:text-[var(--orange)]">Teachers</Link>
              <Link href="/calendar" className="p-2 hover:text-[var(--orange)]">Calendar</Link>
              <Link href="/news" className="p-2 hover:text-[var(--orange)]">News & Articles</Link>
              <Link href="/contact" className="p-2 hover:text-[var(--orange)]">Contact Us</Link>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link 
                href="/portal" 
                className="w-full text-center py-3 rounded-xl border border-[var(--navy)] text-[var(--navy)] font-bold text-xs"
              >
                Portal Access
              </Link>
              <Link 
                href="/enroll" 
                className="w-full text-center py-3 rounded-xl bg-[var(--orange)] text-white font-bold text-xs shadow-md"
              >
                Enroll Online
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={
      <header className="fixed top-0 left-0 right-0 z-50 bg-white py-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="font-[Playfair] text-lg font-black text-[var(--navy)]">AS SAFWATUL-MALA</div>
        </div>
      </header>
    }>
      <NavbarContent />
    </Suspense>
  );
}