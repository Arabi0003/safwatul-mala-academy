'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Array of videos to loop through
  const videos = ['/videos/safwat_web.mp4', '/videos/safwa.mp4'];
  const [currentVidIndex, setCurrentVidIndex] = useState(0);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    el.muted = true;
    el.defaultMuted = true;
    el.playsInline = true;
    el.setAttribute('playsinline', 'true');
    el.setAttribute('webkit-playsinline', 'true');

    const playPromise = el.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => console.log('Autoplay deferred'));
    }
  }, [currentVidIndex]);

  // Handle switching to the next video when the current one ends
  const handleVideoEnded = () => {
    setCurrentVidIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Poster/Gradient Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-slate-900" />
      </div>

      {/* High-Definition Fast Video with Dual Looping */}
      <video
        ref={videoRef}
        key={videos[currentVidIndex]} // Forces video element to reload source
        className="absolute inset-0 z-[1] h-full w-full object-cover opacity-50 transition-opacity duration-1000"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/safwa.png"
        onEnded={handleVideoEnded}
      >
        <source src={videos[currentVidIndex]} type="video/mp4" />
      </video>

      {/* Darker Overlays to Reduce Lightness & Increase Contrast */}
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-b from-slate-950/80 via-slate-900/60 to-slate-950/95" />
      <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-blue-950/60 via-transparent to-green-900/30" />

      {/* Content Layer */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pb-8 pt-28 text-center">
        <div
          className="mb-8 h-24 w-24 overflow-hidden rounded-full border-4 border-amber-500 shadow-2xl shadow-amber-500/30 animate-in"
          style={{ animationDelay: '0.1s' }}
        >
          <div className="relative h-full w-full bg-white">
            <Image src="/safwa.png" alt="As Safwatul-Mala Academy" fill priority className="object-cover" />
          </div>
        </div>

        <p
          className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-amber-400 animate-in drop-shadow-md"
          style={{ animationDelay: '0.2s' }}
        >
          Abuja, Nigeria
        </p>

        <h1
          className="mb-6 font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl animate-in drop-shadow-2xl"
          style={{ animationDelay: '0.35s' }}
        >
          AS SAFWATUL-MALA
          <span className="mt-2 block text-amber-400">Academy</span>
        </h1>

        <p
          className="mb-10 max-w-2xl text-lg font-medium leading-relaxed text-slate-100 md:text-xl animate-in drop-shadow-lg"
          style={{ animationDelay: '0.5s' }}
        >
          Excellence in Qur&apos;an education, Arabic, and Islamic learning — nurturing minds with
          faith, discipline, and academic strength.
        </p>

        <div
          className="flex flex-col items-center gap-4 sm:flex-row animate-in"
          style={{ animationDelay: '0.65s' }}
        >
          <Link
            href="/enroll"
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-amber-500/25 transition-all hover:bg-amber-600 hover:shadow-amber-500/40"
          >
            Enroll Now <ArrowRight size={22} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
          >
            <BookOpen size={20} /> Discover More
          </Link>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-[3] h-32 bg-gradient-to-t from-slate-50 to-transparent" />
    </section>
  );
}