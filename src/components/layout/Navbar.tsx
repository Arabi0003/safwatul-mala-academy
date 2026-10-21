'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function NavbarContent() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { 
      name: 'Programmes', 
      href: '#',
      submenu: [
        { name: 'Primary School', href: '/programmes/primary' },
        { name: 'Secondary School', href: '/programmes/secondary' },
        { name: 'Tahfiz Program', href: '/programmes/tahfiz' },
        { name: 'Adult Education', href: '/programmes/adult' },
      ]
    },
    { name: 'Admissions', href: '/enroll' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
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
            <div key={link.name} className="relative group">
              <Link 
                href={link.href}
                className="text-[16px] font-bold text-slate-800 hover:text-amber-600 transition-colors flex items-center gap-1"
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className="text-amber-500" />}
              </Link>
              {link.submenu && (
                <div className="absolute top-full left-0 mt-3 w-56 ultra-glass rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl overflow-hidden p-2">
                  {link.submenu.map((sub) => (
                    <Link key={sub.name} href={sub.href} className="block px-4 py-2.5 rounded-xl text-sm font-bold text-slate-800 hover:bg-amber-500 hover:text-white transition-colors">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-3 ml-4">
            <Link href="/portal/student" className="flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-blue-900 font-bold text-blue-900 hover:bg-blue-900 hover:text-white transition-all text-sm">
              <User size={16} /> Portal
            </Link>
            <Link href="/enroll" className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-600 text-white font-bold transition-all shadow-lg shadow-amber-500/30 text-sm">
              <Sparkles size={16} /> Enroll Now
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
               <Link href="/enroll" onClick={() => setIsOpen(false)} className="w-full py-4 bg-amber-500 text-white rounded-xl font-bold text-center text-xl shadow-lg">Enroll Now</Link>
               <Link href="/portal/student" onClick={() => setIsOpen(false)} className="w-full py-4 border-2 border-white text-white rounded-xl font-bold text-center text-xl">Student Portal</Link>
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