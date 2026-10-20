"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProgOpen(false);
    setDesktopDropdown(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = "-" + scrollY + "px";
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const toggleMobile = useCallback(() => setMobileOpen((p) => !p), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const programmes = [
    { title: "Quran Studies", desc: "Hifz, Tajweed and Qiraat", href: "/quran-studies", icon: BookOpen },
    { title: "Huruf and Arabic", desc: "Alphabet, Grammar and Spoken", href: "/huruf-arabic", icon: Sparkles },
    { title: "Islamic Studies", desc: "Fiqh, Aqeedah, Seerah and Hadith", href: "/islamic-studies", icon: GraduationCap },
    { title: "Academic Subjects", desc: "STEM, Humanities and Languages", href: "/academic-subjects", icon: Layers },
    { title: "Online Learning", desc: "Global Virtual Classrooms", href: "/online-learning", icon: Globe },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  const navLinks2 = [
    { href: "/admissions", label: "Admissions" },
    { href: "/teachers", label: "Teachers" },
    { href: "/calendar", label: "Calendar" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header 
        className={"fixed top-0 left-0 right-0 z-40 transition-all duration-300 " + (scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 text-[var(--navy)]" 
          : "bg-white/90 backdrop-blur-sm py-3.5 text-[var(--navy)] border-b border-slate-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-2.5 group">
            <motion.div 
              whileHover={{ rotate: 8, scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative h-11 w-11 md:h-12 md:w-12 rounded-full bg-white p-0.5 shadow-md border-2 border-[var(--orange)] flex-none overflow-hidden"
            >
              <Image 
                src="/safwa.png" 
                alt="Safwatul-Mala Academy Logo" 
                fill 
                className="object-cover rounded-full"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-[Playfair] text-base md:text-lg font-black tracking-tight text-[var(--navy)] leading-tight">
                AS SAFWATUL-MALA
              </span>
              <span className="text-[9px] md:text-[10px] font-bold text-[var(--orange)] tracking-widest uppercase">
                ACADEMY
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 font-medium text-sm">
            {navLinks.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.92 }}>
                <Link 
                  href={link.href} 
                  className={"hover:text-[var(--orange)] transition " + (pathname === link.href ? "text-[var(--orange)] font-bold" : "text-[var(--navy)]")}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <div 
              className="relative"
              onMouseEnter={() => setDesktopDropdown(true)}
              onMouseLeave={() => setDesktopDropdown(false)}
            >
              <motion.button 
                type="button"
                whileTap={{ scale: 0.93 }}
                onClick={() => setDesktopDropdown(!desktopDropdown)}
                className="flex items-center gap-1 hover:text-[var(--orange)] transition py-2 text-[var(--navy)] font-medium cursor-pointer"
              >
                Programmes
                <motion.span animate={{ rotate: desktopDropdown ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
              </motion.button>

              <AnimatePresence>
                {desktopDropdown && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1 z-50"
                  >
                    {programmes.map((p, i) => (
                      <motion.div
                        key={p.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, duration: 0.2 }}
                      >
                        <Link 
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
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks2.map((link) => (
              <motion.div key={link.href} whileHover={{ y: -2 }} whileTap={{ scale: 0.92 }}>
                <Link 
                  href={link.href} 
                  className={"hover:text-[var(--orange)] transition " + (pathname === link.href ? "text-[var(--orange)] font-bold" : "text-[var(--navy)]")}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.93 }}>
              <Link 
                href="/portal" 
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border border-[var(--navy)]/20 text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white transition"
              >
                <Shield className="h-3.5 w-3.5" /> Portal
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.93 }}>
              <Link 
                href="/enroll" 
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white shadow-md hover:shadow-lg transition"
              >
                <UserCheck className="h-4 w-4" /> Enroll Now
              </Link>
            </motion.div>
          </div>

          <motion.button 
            type="button"
            whileTap={{ scale: 0.8, rotate: 90 }}
            onClick={toggleMobile}
            onTouchEnd={(e) => { e.preventDefault(); toggleMobile(); }}
            className="lg:hidden relative z-[110] p-2.5 rounded-xl text-[var(--navy)] bg-slate-100/80 active:bg-slate-200 transition cursor-pointer"
            style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="h-6 w-6 text-[var(--orange)]" />
                </motion.div>
              ) : (
                <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="h-6 w-6 text-[var(--navy)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <div 
            className="fixed top-0 left-0 right-0 bottom-0 z-[100] lg:hidden"
            style={{ height: "100dvh" }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-0 left-0 right-0 bottom-0 bg-black/60"
              onClick={closeMobile}
              onTouchEnd={(e) => { e.preventDefault(); closeMobile(); }}
              aria-hidden="true"
            />

            <motion.aside 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 left-0 bottom-0 w-[85%] max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6"
              style={{ height: "100dvh", overscrollBehavior: "none" }}
            >
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
                <motion.button 
                  type="button"
                  whileTap={{ scale: 0.8, rotate: 90 }}
                  onClick={closeMobile}
                  onTouchEnd={(e) => { e.preventDefault(); closeMobile(); }}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800"
                  style={{ touchAction: "manipulation" }}
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 space-y-1 font-medium text-sm text-[var(--navy)]" style={{ overscrollBehavior: "contain" }}>
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                ].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={closeMobile}
                      className={"block px-3 py-2.5 rounded-xl transition " + (pathname === link.href ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50")}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                  <button 
                    type="button"
                    onClick={() => setMobileProgOpen(!mobileProgOpen)}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 transition text-[var(--navy)] font-medium text-left"
                    style={{ touchAction: "manipulation" }}
                  >
                    <span>Programmes</span>
                    <motion.span animate={{ rotate: mobileProgOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                      <ChevronDown className="h-4 w-4 text-[var(--orange)]" />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileProgOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="ml-3 pl-3 border-l-2 border-[var(--orange)]/30 overflow-hidden"
                      >
                        <div className="space-y-1 my-1">
                          {programmes.map((p, i) => (
                            <motion.div
                              key={p.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.05 }}
                            >
                              <Link
                                href={p.href}
                                onClick={closeMobile}
                                className="block px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[var(--orange)] transition"
                              >
                                {p.title}
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {[
                  { href: "/admissions", label: "Admissions" },
                  { href: "/teachers", label: "Teachers" },
                  { href: "/calendar", label: "Academic Calendar" },
                  { href: "/news", label: "News and Articles" },
                  { href: "/contact", label: "Contact Us" },
                ].map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.05 }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={closeMobile}
                      className={"block px-3 py-2.5 rounded-xl transition " + (pathname === link.href ? "bg-[var(--orange)]/10 text-[var(--orange)] font-bold" : "hover:bg-slate-50")}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4 border-t border-slate-100 flex flex-col gap-2.5"
              >
                <Link 
                  href="/portal" 
                  onClick={closeMobile}
                  className="w-full text-center py-3 rounded-xl border border-[var(--navy)] text-[var(--navy)] font-bold text-xs hover:bg-[var(--navy)] hover:text-white transition"
                >
                  Portal Access
                </Link>
                <Link 
                  href="/enroll" 
                  onClick={closeMobile}
                  className="w-full text-center py-3 rounded-xl bg-[var(--orange)] text-white font-bold text-xs shadow-md active:bg-[var(--orange-deep)] transition"
                >
                  Apply / Enroll Now
                </Link>
              </motion.div>

            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
