'use client';
import React, { useState, useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smart Auto-Close Logic (6 Seconds of inactivity or Click Outside)
  useEffect(() => {
    const handleActivity = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (isOpen || expandedItem) {
        timeoutRef.current = setTimeout(() => {
          setIsOpen(false);
          setExpandedItem(null);
        }, 6000); // 6 seconds
      }
    };

    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setExpandedItem(null);
      }
    };

    // Listeners
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('keydown', handleActivity);
    
    // Start initial timer if open
    handleActivity();

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen, expandedItem]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Founder', href: '/founder' },
    { 
      name: 'Programmes', 
      href: '#',
      submenu: [
        { name: 'Primary School', href: '/programmes/primary' },
        { name: 'Secondary School', href: '/programmes/secondary' },
        { name: 'Tahfiz Program', href: '/programmes/tahfiz' },
      ]
    },
    { name: 'Admissions', href: '/enroll' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav ref={navRef} className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled ? 'py-3 ultra-glass shadow-xl' : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-amber-500 shadow-md group-hover:scale-105 transition-transform">
            <Image src="/safwa.png" alt="Logo" fill className="object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none text-blue-900 group-hover:text-amber-600 transition-colors">
              AS SAFWATUL-MALA
            </span>
            <span className="text-[10px] tracking-[0.2em] font-bold text-amber-500 uppercase">Academy Abuja</span>
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
                className="text-[16px] font-bold text-slate-800 hover:text-amber-600 transition-colors flex items-center gap-1 py-2"
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className="text-amber-500" />}
              </Link>
              {link.submenu && expandedItem === link.name && (
                <div className="absolute top-full left-0 mt-1 w-56 ultra-glass rounded-2xl transition-all duration-300 shadow-2xl overflow-hidden p-2">
                  {link.submenu.map((sub) => (
                    <Link key={sub.name} href={sub.href} onClick={() => setExpandedItem(null)} className="block px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-500 hover:text-white transition-colors">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-3 ml-4">
            <Link href="/portal/staff" className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white transition-all text-sm">
              <User size={16} /> Staff
            </Link>
            <Link href="/portal/student" className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white transition-all text-sm">
              <User size={16} /> Student
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-blue-900 p-2">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 left-0 w-[85%] h-full ultra-glass-dark z-[101] p-8 lg:hidden flex flex-col justify-between"
          >
             <div className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button 
                      onClick={() => setExpandedItem(expandedItem === link.name ? null : link.name)}
                      className="text-2xl font-bold text-white flex justify-between w-full"
                    >
                      {link.name}
                      {link.submenu && <ChevronDown className={expandedItem === link.name ? 'rotate-180 text-amber-400' : 'text-amber-400'} />}
                    </button>
                    {link.submenu && expandedItem === link.name && (
                      <div className="pl-4 mt-4 flex flex-col gap-3 border-l-2 border-amber-500">
                        {link.submenu.map(sub => (
                          <Link key={sub.name} href={sub.href} onClick={() => setIsOpen(false)} className="text-lg text-amber-200">{sub.name}</Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
             </div>

             <div className="flex flex-col gap-4 mb-8">
               <Link href="/portal/student" onClick={() => setIsOpen(false)} className="w-full py-4 bg-amber-500 text-white rounded-xl font-bold text-center text-xl shadow-lg">Student Portal</Link>
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