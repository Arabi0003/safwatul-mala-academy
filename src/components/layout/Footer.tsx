import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { academy } from '@/config/academy';

export default function Footer() {
  const currentYear = 2025;

  // Safely extract contact details regardless of configuration object shape
  const academyObj = academy as Record<string, any>;
  const addressText = academyObj.address || academyObj.location?.address || 'Abuja, FCT, Nigeria';
  const emailText = academyObj.email || academyObj.emails?.info || academyObj.emails?.primary || 'info@safwatulmalaacademy.online';
  const phoneText = typeof academyObj.phone === 'string' 
    ? academyObj.phone 
    : academyObj.phone?.formatted || academyObj.phone?.primary || '+234 800 000 0000';

  return (
    <footer className="bg-white border-t border-emerald-200 pt-20 pb-10 text-emerald-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 overflow-hidden rounded-full border-2 border-teal-500 shadow-md">
                <Image src="/safwa.png" alt="Logo" fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl leading-none text-emerald-950">
                  AS SAFWATUL-MALA
                </span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-teal-600 uppercase">Academy Abuja</span>
              </div>
            </Link>
            <p className="text-emerald-900 font-medium text-base leading-relaxed">
              Nurturing the next generation of leaders with wisdom, integrity, and deep-rooted spiritual values.
            </p>
            
            {/* Social Media Icons (Facebook, X, Instagram, TikTok, YouTube) */}
            <div className="flex items-center gap-3 mt-2">
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-teal-500 hover:text-white transition-all shadow-sm">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="#" aria-label="X" className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-teal-500 hover:text-white transition-all shadow-sm">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-teal-500 hover:text-white transition-all shadow-sm">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-teal-500 hover:text-white transition-all shadow-sm">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.78-1.15 5.54-3.33 7.37-1.92 1.62-4.55 2.28-6.95 1.88-2.58-.43-4.9-2.07-5.9-4.46-1.1-2.59-.88-5.74.78-8.1 1.6-2.27 4.28-3.56 6.99-3.79 0 1.34.02 2.69-.02 4.03-1.4.15-2.81.79-3.72 1.88-.93 1.13-1.19 2.74-.72 4.12.44 1.31 1.52 2.39 2.85 2.79 1.39.42 2.96.26 4.18-.54 1.25-.82 2-2.3 2.05-3.82.04-4.8.02-9.61.02-14.41L12.525.02z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900 hover:bg-teal-500 hover:text-white transition-all shadow-sm">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-emerald-950">Quick Links</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Programmes', path: '/academic' },
                { name: 'Admissions', path: '/enroll' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path} className="flex items-center gap-2 text-emerald-900 font-semibold hover:text-teal-600 transition-colors group">
                    <ChevronRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Portals */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-emerald-950">Portals</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: 'Student Portal', path: '/portal/student' },
                { name: 'Teacher Portal', path: '/portal/teacher' },
                { name: 'Staff Portal', path: '/portal/staff' },
                { name: 'Graduate Portal', path: '/portal/graduate' }
              ].map((item, idx) => (
                <li key={idx}>
                  <Link href={item.path} className="flex items-center gap-2 text-emerald-900 font-semibold hover:text-teal-600 transition-colors group">
                    <ChevronRight size={16} className="text-teal-500 group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-emerald-950">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 bg-emerald-100 rounded-lg group-hover:bg-teal-500 group-hover:text-white transition-colors text-emerald-900">
                  <MapPin size={18} />
                </div>
                <span className="text-emerald-900 font-semibold leading-relaxed">
                  {addressText}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-teal-500 group-hover:text-white transition-colors text-emerald-900">
                  <Phone size={18} />
                </div>
                <span className="text-emerald-900 font-semibold">
                  {phoneText}
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-teal-500 group-hover:text-white transition-colors text-emerald-900">
                  <Mail size={18} />
                </div>
                <span className="text-emerald-900 font-semibold">
                  {emailText}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-emerald-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-emerald-900 font-semibold">
            {"\u00A9"} {currentYear} As Safwatul-Mala Academy. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-emerald-900 font-semibold hover:text-teal-600 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-emerald-900 font-semibold hover:text-teal-600 transition-colors">Terms of Service</Link>
            <p className="text-emerald-900 font-semibold flex items-center gap-1">
              Powered by <a href="https://www.yalerima.com.ng/" target="_blank" rel="noopener noreferrer" className="text-teal-600 font-bold hover:underline">Yalerima Technologies</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

