"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--navy-dark)] overflow-hidden"
        >
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full blur-[100px]"
              style={{ background: "var(--orange)" }}
            />
          </div>

          <div className="relative flex flex-col items-center z-10">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[var(--orange)] border-r-[var(--orange-glow)]"
                style={{ filter: "drop-shadow(0 0 10px rgba(234,88,12,0.6))" }}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border-[2px] border-transparent border-b-[var(--gold-soft)] border-l-[var(--gold)]"
              />
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-20 h-20 rounded-full bg-white p-1 shadow-2xl overflow-hidden"
              >
                <Image
                  src="/safwa.png"
                  alt="AS SAFWATUL-MALA ACADEMY"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 text-center"
            >
              <p className="font-[Playfair] text-white text-lg font-bold tracking-[0.3em] uppercase">
                Safwatul-Mala
              </p>
              <p className="mt-2 text-[var(--orange-glow)] text-[11px] tracking-[0.25em] uppercase font-semibold">
                Academy of Excellence
              </p>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              className="mt-6 h-[2px] bg-gradient-to-r from-transparent via-[var(--orange)] to-transparent"
              style={{ maxWidth: "200px" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
