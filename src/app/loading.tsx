"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[150] bg-[var(--navy-dark)]/95 backdrop-blur-md flex items-center justify-center">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[var(--orange)] border-r-[var(--orange-glow)] animate-spin" style={{ animationDuration: "1.2s" }} />
        <div className="absolute inset-2 rounded-full border-[2px] border-transparent border-b-[var(--gold-soft)] border-l-[var(--gold)] animate-spin" style={{ animationDuration: "2s", animationDirection: "reverse" }} />
        <div className="relative w-14 h-14 rounded-full bg-white p-0.5 shadow-xl overflow-hidden">
          <Image src="/safwa.png" alt="Loading" fill className="object-cover rounded-full" priority />
        </div>
      </div>
    </div>
  );
}
