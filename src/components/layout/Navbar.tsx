"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, LogIn } from "lucide-react";
import { academy } from "@/config/academy";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Programmes",
    path: "#",
    sub: [
      { name: "Qur'an Studies", path: "/quran-studies" },
      { name: "Huruf & Arabic", path: "/huruf-arabic" },
      { name: "Islamic Studies", path: "/islamic-studies" },
      { name: "Other Academic Subjects", path: "/academic-subjects" },
    ],
  },
  { name: "Teachers", path: "/teachers" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-[80] transition-all duration-500 ease-in-out ${
          scrolled ? "pt-3 px-3 sm:px-4" : "pt-0"
        }`}
      >
        <div
          className={`mx-auto transition-all duration-500 flex items-center justify-between ${
            scrolled
              ? "max-w-5xl rounded-full glass-silver shadow-[0_8px_30px_rgba(36,61,44,0.08)] px-5 sm:px-6 py-2"
              : "w-full max-w-7xl bg-gradient-to-b from-white/95 via-white/80 to-transparent px-5 sm:px-6 py-4 lg:px-8"
          }`}
        >
          {/* Logo — safwa.png perfect placement */}
          <Link href="/" className="flex items-center gap-3 group relative z-10 min-w-0">
            <div
              className={`relative shrink-0 transition-all duration-500 ${
                scrolled ? "w-11 h-11" : "w-14 h-14 md:w-16 md:h-16"
              }`}
            >
              <Image
                src="/safwa.png"
                alt="AS SAFWATUL-MALA ACADEMY"
                fill
                className="object-contain drop-shadow-md group-hover:scale-[1.04] transition-transform duration-300"
                priority
                sizes="64px"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className={`font-heading font-bold text-green-deep leading-tight truncate transition-all duration-500 ${
                  scrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl md:text-2xl"
                }`}
              >
                {academy.shortName}
              </span>
              {!scrolled && (
                <span className="text-green-600 text-[10px] uppercase tracking-[0.18em] font-semibold hidden sm:block">
                  Academy
                </span>
              )}
            </div>
          </Link>

          {/* Desktop nav — silver text, green hover */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.sub ? (
                  <button
                    className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-silver-700 hover:text-green-700 transition-colors"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-3.5 h-3.5 opacity-60 transition-transform ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className={`relative px-3.5 py-2 text-sm font-medium transition-colors group ${
                      pathname === link.path
                        ? "text-green-700"
                        : "text-silver-700 hover:text-green-700"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-1 left-3.5 right-3.5 h-[2px] rounded-full bg-green-600 transition-transform origin-left duration-300 ease-out ${
                        pathname === link.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                )}

                {link.sub && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 pt-2 w-64"
                      >
                        <div className="bg-white rounded-2xl shadow-xl shadow-green-deep/10 border border-silver-200 overflow-hidden flex flex-col p-1.5">
                          {link.sub.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.path}
                              className="px-4 py-2.5 text-sm text-silver-700 hover:text-green-deep hover:bg-green-50 rounded-xl transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Portals CTA — natural green */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/portal"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-green-700 hover:bg-green-600 shadow-md shadow-green-deep/15 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <LogIn className="w-4 h-4" />
              Portals
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden p-2.5 rounded-full text-green-deep hover:bg-green-50 border border-transparent hover:border-silver-200 transition-colors relative z-10"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer — left slide, white body, green accents */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-green-deep/50 backdrop-blur-sm z-[90] lg:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl z-[100] lg:hidden flex flex-col overflow-y-auto"
            >
              <div className="p-5 flex items-center justify-between border-b border-silver-200 bg-silver-50">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative shrink-0">
                    <Image src="/safwa.png" alt="Logo" fill className="object-contain" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-green-deep text-lg leading-tight">
                      {academy.shortName}
                    </p>
                    <p className="text-[10px] uppercase tracking-widest text-green-600 font-semibold">
                      Menu
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-silver-700 hover:text-green-deep bg-white rounded-full border border-silver-200 shadow-sm"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 px-3 py-5 space-y-1 bg-white">
                {links.map((link) => (
                  <div key={link.name}>
                    {link.sub ? (
                      <div className="mb-2">
                        <div className="px-4 py-2 text-xs font-bold text-green-600 uppercase tracking-wider">
                          {link.name}
                        </div>
                        <div className="flex flex-col gap-0.5 pl-3 ml-3 border-l-2 border-green-200">
                          {link.sub.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.path}
                              className="px-4 py-2.5 text-[15px] text-silver-700 hover:text-green-deep hover:bg-green-50 rounded-xl transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={link.path}
                        className={`block px-4 py-3 text-lg font-medium rounded-xl transition-colors ${
                          pathname === link.path
                            ? "text-green-deep bg-green-50"
                            : "text-green-deep hover:bg-green-50"
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-5 border-t border-silver-200 bg-white">
                <Link
                  href="/portal"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-700 text-white rounded-2xl font-semibold text-base hover:bg-green-600 shadow-md transition-all"
                >
                  <LogIn className="w-5 h-5" />
                  Access Portals
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
