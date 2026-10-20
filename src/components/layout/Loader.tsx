"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.75, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Soft natural green glow — not muddy */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-[50vh] h-[50vh] rounded-full blur-[90px]"
              style={{ background: "var(--green-300)" }}
            />
          </div>

          <div className="relative flex flex-col items-center z-10">
            {/* Silver outer ring + green spin */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-silver-200 border-t-green-600 border-r-green-600 shadow-[0_0_20px_rgba(79,138,95,0.25)]"
              />
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-16 h-16"
              >
                <Image
                  src="/safwa.png"
                  alt="AS SAFWATUL-MALA ACADEMY"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </motion.div>
            </div>

            <div className="mt-8 overflow-hidden h-6">
              <motion.p
                initial={{ y: 28 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, delay: 0.25, ease: "easeOut" }}
                className="text-green-700 font-heading tracking-[0.22em] text-sm uppercase font-semibold"
              >
                Safwatul Mala
              </motion.p>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-2 text-silver-600 text-[11px] tracking-wide"
            >
              Qur&apos;an-centred education
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
