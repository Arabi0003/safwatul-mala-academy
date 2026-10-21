'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about", submenu: [
    { name: "Our Founder", href: "/founder" },
    { name: "Our Teachers", href: "/teachers" },
  ]},
  { name: "Academics", href: "/academic", submenu: [
    { name: "Qur'an Studies", href: "/quran-studies" },
    { name: "Islamic Studies", href: "/islamic-studies" },
    { name: "Huruf Arabic", href: "/huruf-arabic" },
    { name: "All Subjects", href: "/academic-subjects" },
  ]},
  { name: "Admissions", href: "/admissions" },
  { name: "Online", href: "/online-learning" },
  { name: "Contact", href: "/contact" },
];

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // FIX: Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedItem(null);
  }, [pathname]);

  // FIX: Throttled scroll with rAF (was firing every pixel)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // FIX: Click-outside only (REMOVED mousemove — was 100x/sec)
  useEffect(() => {
    if (!isOpen && !expandedItem) return;
    const onClick = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setExpandedItem(null);
      }
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('touchstart', onClick, { passive: true });
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('touchstart', onClick);
    };
  }, [isOpen, expandedItem]);

  // FIX: Use CSS class on <html> instead of body.style.overflow (no scroll jump)
  useEffect(() => {
    const el = document.documentElement;
    if (isOpen) el.classList.add('overflow-hidden');
    else el.classList.remove('overflow-hidden');
    return () => el.classList.remove('overflow-hidden');
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + (scrolled ? 'ultra-glass shadow-lg py-2' : 'bg-transparent py-4')}
      style={{ willChange: 'transform' }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 overflow-hidden rounded-full border-2 border-teal-500 shadow-md">
            <Image src="/safwa.png" alt="Logo" fill className="object-cover" priority />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none text-emerald-900 group-hover:text-teal-600 transition-colors">
              AS SAFWATUL-MALA
            </span>
            <span className="text-[10px] tracking-[0.2em] font-bold text-teal-500 uppercase">Academy Abuja</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => setExpandedItem(link.name)}
              onMouseLeave={() => setExpandedItem(null)}
            >
              <Link
                href={link.href}
                className="text-[16px] font-bold text-slate-800 hover:text-teal-600 transition-colors flex items-center gap-1 py-2"
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className="text-teal-500" />}
              </Link>
              {link.submenu && expandedItem === link.name && (
                <div className="absolute top-full left-0 mt-1 w-56 ultra-glass rounded-2xl shadow-2xl overflow-hidden p-2 z-50">
                  {link.submenu.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setExpandedItem(null)}
                      className="block px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-teal-500 hover:text-white transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-3 ml-4">
            <Link href="/portal/staff" className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-emerald-900 font-bold text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all text-sm">
              <User size={16} /> Staff
            </Link>
            <Link href="/portal/student" className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-emerald-900 font-bold text-emerald-900 hover:bg-emerald-900 hover:text-white transition-all text-sm">
              <User size={16} /> Student
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-emerald-900 p-2 z-[102]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Drawer — FIX: tween instead of spring, 100dvh, overscroll */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-[85%] h-[100dvh] ultra-glass-dark z-[101] p-8 lg:hidden flex flex-col justify-between overscroll-contain"
          >
            <div className="flex flex-col gap-6 mt-12 overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => setExpandedItem(expandedItem === link.name ? null : link.name)}
                        className="text-2xl font-bold text-white flex justify-between w-full"
                      >
                        {link.name}
                        <ChevronDown className={'text-teal-400 transition-transform ' + (expandedItem === link.name ? 'rotate-180' : '')} />
                      </button>
                      {expandedItem === link.name && (
                        <div className="pl-4 mt-4 flex flex-col gap-3 border-l-2 border-teal-500">
                          {link.submenu.map((sub) => (
                            <Link key={sub.name} href={sub.href} onClick={() => setIsOpen(false)} className="text-lg text-teal-200">
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white block">
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 mb-8">
              <Link href="/portal/student" onClick={() => setIsOpen(false)} className="w-full py-4 bg-teal-500 text-white rounded-xl font-bold text-center text-xl shadow-lg">Student Portal</Link>
              <Link href="/portal/staff" onClick={() => setIsOpen(false)} className="w-full py-4 border-2 border-white text-white rounded-xl font-bold text-center text-xl">Staff Portal</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function Navbar() {
  return <Suspense fallback={null}><NavbarContent /></Suspense>;
}