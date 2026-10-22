'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashLoader({ children, duration = 4500 }: { children: React.ReactNode; duration?: number }) {
  const [phase, setPhase] = useState<'loading' | 'exiting' | 'done'>('loading');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = window.setInterval(() => {
      const pct = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(pct);
      if (pct >= 100) window.clearInterval(tick);
    }, 40);

    const exitTimer = window.setTimeout(() => setPhase('exiting'), duration - 700);
    const doneTimer = window.setTimeout(() => setPhase('done'), duration);

    document.body.style.overflow = 'hidden';

    return () => {
      window.clearInterval(tick);
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, [duration]);

  useEffect(() => {
    if (phase === 'done') document.body.style.overflow = '';
  }, [phase]);

  return (
    <>
      <AnimatePresence>
        {phase !== 'done' && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-200 via-white to-slate-100"
          >
            {/* Orange & Green Glow Accents */}
            <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-green-500/15 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col items-center px-6 text-center"
            >
              <div className="relative mb-8 h-28 w-28 overflow-hidden rounded-full border-4 border-teal-500 shadow-2xl shadow-teal-500/20 bg-white">
                <Image src="/safwa.png" alt="Logo" fill priority className="object-cover" />
              </div>

              <h1 className="font-serif text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
                AS SAFWATUL-MALA
              </h1>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.35em] text-green-600">
                Academy Abuja
              </p>
              <p className="mt-4 max-w-sm text-sm font-semibold text-slate-600">
                Preparing the campus experience...
              </p>

              {/* Progress track (Orange to Green) */}
              <div className="mt-10 h-1.5 w-56 overflow-hidden rounded-full bg-slate-300 md:w-72 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-teal-500 to-green-500"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear', duration: 0.05 }}
                />
              </div>
              <p className="mt-3 text-xs font-bold tracking-widest text-slate-500">
                {Math.round(progress)}%
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={phase === 'done' ? 'opacity-100 transition-opacity duration-700' : 'opacity-0'}>
        {children}
      </div>
    </>
  );
}
