'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SubLink { label: string; href: string }
interface NavLink { label: string; href: string; sub?: SubLink[] }

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    sub: [
      { label: 'Our Founder', href: '/founder' },
      { label: 'Our Teachers', href: '/teachers' },
    ],
  },
  {
    label: 'Academics',
    href: '/academic',
    sub: [
      { label: "Qur'an Studies", href: '/quran-studies' },
      { label: 'Islamic Studies', href: '/islamic-studies' },
      { label: 'Huruf Arabic', href: '/huruf-arabic' },
      { label: 'All Subjects', href: '/academic-subjects' },
    ],
  },
  { label: 'Courses', href: '/courses' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Online', href: '/online-learning' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSub, setActiveSub] = useState<string | null>(null)
  const lastY = useRef(0)
  const rafId = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > 20)
        setHidden(y > 300 && y > lastY.current)
        lastY.current = y
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  useEffect(() => { setMobileOpen(false); setActiveSub(null) }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.documentElement.style.overflow = ''
    }
    return () => { document.documentElement.style.overflow = '' }
  }, [mobileOpen])

  const isActive = useCallback(
    (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href)),
    [pathname]
  )

  const linkBase =
    'relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg'
  const linkActive = 'text-emerald-300'
  const linkIdle = 'text-white/80 hover:text-white hover:bg-white/10'

  return (
    <>
      <motion.header
        initial={false}
        animate={{ y: hidden && !mobileOpen ? -100 : 0 }}
        transition={{ type: 'tween', duration: 0.25 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-emerald-950/90 backdrop-blur-xl shadow-lg shadow-emerald-950/30 border-b border-emerald-800/30'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo with Official Image */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white/10 p-1 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 group-hover:border-emerald-400 group-hover:shadow-emerald-500/30 transition-all">
              <Image
                src="/safwa.png"
                alt="Safwatulmala Academy Logo"
                fill
                className="object-contain p-0.5"
                sizes="40px"
                priority
              />
            </div>
            <div>
              <p className="text-base font-bold text-white leading-tight tracking-wide group-hover:text-emerald-300 transition-colors">
                Safwatulmala
              </p>
              <p className="text-[10px] text-emerald-300/70 leading-none tracking-widest uppercase">
                Academy
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.sub && setActiveSub(link.label)}
                onMouseLeave={() => setActiveSub(null)}
              >
                <Link
                  href={link.href}
                  className={`${linkBase} ${isActive(link.href) ? linkActive : linkIdle} flex items-center gap-1`}
                >
                  {link.label}
                  {link.sub && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>

                <AnimatePresence>
                  {link.sub && activeSub === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-52 rounded-xl bg-emerald-950/95 backdrop-blur-xl border border-emerald-700/30 shadow-2xl shadow-emerald-950/50 p-1.5 overflow-hidden"
                    >
                      {link.sub.map((s) => (
                        <Link
                          key={s.href}
                          href={s.href}
                          className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                            isActive(s.href)
                              ? 'bg-emerald-600/20 text-emerald-300'
                              : 'text-white/70 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/register"
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow"
            >
              <span className="relative z-10">Enroll Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed top-0 left-0 bottom-0 z-40 w-80 max-w-[85vw] bg-gradient-to-b from-emerald-950 via-emerald-950 to-emerald-900 shadow-2xl lg:hidden overflow-y-auto overscroll-contain"
            >
              <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-emerald-800/30">
                <div className="relative h-9 w-9 overflow-hidden rounded-xl bg-white/10 p-1 border border-emerald-500/30">
                  <Image src="/safwa.png" alt="Logo" fill className="object-contain p-0.5" sizes="36px" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Safwatulmala</p>
                  <p className="text-[10px] text-emerald-400/60 tracking-widest uppercase">Academy</p>
                </div>
              </div>

              <div className="px-3 py-4 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <div className="flex items-center">
                      <Link
                        href={link.href}
                        onClick={() => !link.sub && setMobileOpen(false)}
                        className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                          isActive(link.href)
                            ? 'bg-emerald-600/20 text-emerald-300'
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                      {link.sub && (
                        <button
                          onClick={() => setActiveSub(activeSub === link.label ? null : link.label)}
                          className="p-2 text-white/40 hover:text-white transition-colors"
                        >
                          <motion.div animate={{ rotate: activeSub === link.label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </button>
                      )}
                    </div>
                    <AnimatePresence>
                      {link.sub && activeSub === link.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-4"
                        >
                          {link.sub.map((s) => (
                            <Link
                              key={s.href}
                              href={s.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block rounded-lg px-4 py-2.5 text-sm transition-colors ${
                                isActive(s.href)
                                  ? 'text-emerald-300 bg-emerald-600/10'
                                  : 'text-white/50 hover:text-white/80'
                              }`}
                            >
                              {s.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="px-5 pt-4 pb-8 border-t border-emerald-800/30 mt-2">
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/portal"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full mt-3 rounded-full border border-emerald-600/30 px-5 py-3 text-center text-sm font-medium text-emerald-300 hover:bg-emerald-600/10 transition-colors"
                >
                  Student Portal
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}