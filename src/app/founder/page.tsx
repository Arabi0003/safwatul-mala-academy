import React from 'react';
import { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import Image from 'next/image';
import { Award, BookOpen, HeartHandshake } from 'lucide-react';

// AEO & SEO Optimization
export const metadata: Metadata = {
  title: 'Our Founder - Oseni Bashiru | As Safwatul-Mala Academy',
  description: 'Meet Oseni Bashiru, the visionary founder of As Safwatul-Mala Academy Abuja. Learn about his dedication to integrating modern education with deep Islamic values.',
  keywords: ['Oseni Bashiru', 'Founder', 'As Safwatul-Mala Academy', 'Abuja', 'Islamic Education Leader'],
  openGraph: {
    title: 'Our Founder - Oseni Bashiru | As Safwatul-Mala Academy',
    description: 'Visionary leadership dedicated to academic excellence and moral discipline.',
    images: [{ url: '/founder.jpg', width: 800, height: 600, alt: 'Oseni Bashiru - Founder' }],
  }
};

export default function FounderPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-slate-900 min-h-screen bg-slate-50">
      <PageHero 
        title="Meet Our Founder" 
        subtitle="A vision built on faith, integrity, and excellence."
      />

      <section className="py-24 px-6 relative z-10 -mt-20">
        <div className="container mx-auto max-w-6xl">
          <div className="ultra-glass p-8 md:p-16 rounded-[3rem] shadow-2xl border-white/60 flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Beautiful Amber Framed Image */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-t-full bg-slate-200 shadow-2xl border-[6px] border-amber-500 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 to-transparent z-10 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-amber-400 font-serif font-bold text-xl tracking-wider">Visionary</span>
                </div>
                {/* Fallback silhouette if image is missing */}
                <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-400">
                  {/* Replace /founder.jpg with actual image when available */}
                  <Image src="/safwa.png" alt="Oseni Bashiru" fill className="object-cover opacity-30" priority />
                </div>
              </div>
            </div>

            {/* Content optimized for Readability (Pure Black Text) */}
            <div className="w-full lg:w-2/3">
              <span className="text-amber-600 font-bold tracking-[0.25em] uppercase mb-4 block">
                The Visionary
              </span>
              <h2 className="text-blue-950 mb-6 text-4xl font-serif font-bold">
                Oseni Bashiru
              </h2>
              <div className="w-20 h-1 bg-amber-500 mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-slate-900 font-medium text-lg leading-relaxed">
                <p>
                  Welcome to As Safwatul-Mala Academy. My vision in establishing this institution was rooted in a profound desire to bridge the gap between academic brilliance and uncompromising moral integrity. 
                </p>
                <p>
                  In a rapidly changing world, it is our duty to equip the next generation not only with modern intellectual tools but with the deep-rooted spiritual values required to navigate life with wisdom, compassion, and discipline.
                </p>
                <p>
                  Our curriculum is carefully curated to foster critical thinking while grounding our students in the teachings of Islam. We believe that true excellence is achieved when a sharp mind is guided by a pure heart.
                </p>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <Award className="text-amber-500" size={28} />
                  <span className="text-blue-950 font-bold">Excellence</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <BookOpen className="text-amber-500" size={28} />
                  <span className="text-blue-950 font-bold">Knowledge</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <HeartHandshake className="text-amber-500" size={28} />
                  <span className="text-blue-950 font-bold">Integrity</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}