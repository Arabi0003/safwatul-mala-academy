"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion || failed) return;
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => setFailed(true));
  }, [reducedMotion, failed]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback / reduced-motion static */}
      {(failed || reducedMotion) && (
        <div className="absolute inset-0 bg-gradient-to-br from-brown-deep via-[#2a1a12] to-brown-deep" />
      )}

      {/* Primary video */}
      {!reducedMotion && !failed && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-fallback.jpg"
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/safwat.mp4" type="video/mp4" />
          <source src="/videos/safwa.mp4" type="video/mp4" />
        </video>
      )}

      {/* Premium overlays — white / champagne-gold / silver */}
      <div className="absolute inset-0 bg-brown-deep/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-brown-deep/80 via-transparent to-brown-deep/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.12)_0%,transparent_65%)]" />

      {/* Soft glass shimmer strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
