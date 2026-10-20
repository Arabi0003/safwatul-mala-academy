"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const handleCanPlay = () => setVideoReady(true);
    video.addEventListener("canplay", handleCanPlay);

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }

    return () => video.removeEventListener("canplay", handleCanPlay);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[var(--navy-dark)] text-white pt-24 pb-16">

      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div
          className={`absolute inset-0 bg-[var(--navy-dark)] transition-opacity duration-700 ${videoReady ? "opacity-0" : "opacity-100"}`}
          style={{
            backgroundImage: "radial-gradient(circle at center, var(--navy) 0%, var(--navy-dark) 80%)",
          }}
        />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/safwa.png"
          className={`object-cover w-full h-full scale-105 transition-opacity duration-700 ${videoReady ? "opacity-55" : "opacity-0"}`}
        >
          <source src="/videos/safwat_web.mp4" type="video/mp4" />
          <source src="/videos/safwat.mp4" type="video/mp4" />
          <source src="/videos/safwa.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-dark)] via-[var(--navy-dark)]/60 to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)]/80 via-transparent to-[var(--navy-dark)]/80 pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">

        <div className="relative h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 rounded-full bg-white p-1 shadow-2xl border-4 border-[var(--orange)] mb-6 overflow-hidden animate-in fade-in zoom-in duration-500">
          <Image
            src="/safwa.png"
            alt="Safwatul-Mala Academy Seal"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--orange)]/40 bg-[var(--orange)]/20 px-4 py-1.5 mb-6 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[var(--orange)] animate-ping"></span>
          <span className="text-xs font-bold tracking-widest text-[var(--orange-glow)] uppercase">
            Admissions Open • Abuja, Nigeria
          </span>
        </div>

        <h1 className="font-[Playfair] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] tracking-tight mb-6 max-w-4xl">
          Nurturing <span className="text-[var(--orange-glow)] underline decoration-[var(--orange)]/50 decoration-2 underline-offset-8">Quranic Souls</span> and Modern Minds
        </h1>

        <p className="max-w-2xl text-slate-200 text-sm sm:text-base md:text-xl font-normal leading-relaxed mb-8 md:mb-10 text-shadow">
          AS SAFWATUL-MALA ACADEMY delivers authentic Quranic memorization (Hifz), classical Arabic, Islamic jurisprudence, and competitive conventional academics.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
          <Link
            href="/enroll"
            className="w-full sm:w-auto bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base shadow-xl transition flex items-center justify-center gap-3 group"
          >
            Apply for Admission
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/quran-studies"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-sm sm:text-base backdrop-blur-md transition flex items-center justify-center gap-2"
          >
            <BookOpen className="h-5 w-5 text-[var(--orange-glow)]" />
            Explore Programmes
          </Link>
        </div>

        <div className="mt-12 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 pt-6 md:pt-8 border-t border-white/10 w-full max-w-4xl text-left text-xs md:text-sm">
          {[
            "Full-Time Hifz and Academics",
            "Weekend and Evening Madrasah",
            "Structured Tajweed Certification",
            "Global Virtual Classrooms",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-300 font-medium">
              <CheckCircle2 className="h-4 w-4 text-[var(--orange-glow)] flex-none" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
