import React from 'react';
import HeroVideo from '@/components/home/HeroVideo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroVideo />
      <section className="bg-slate-50 py-24 px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-blue-950 mb-4 text-4xl md:text-5xl font-bold">Welcome to As Safwatul-Mala</h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-amber-500 mb-6" />
            <p className="mx-auto max-w-3xl text-lg text-slate-600 leading-relaxed font-medium">
              We provide a balanced education that integrates rigorous academic standards with profound Islamic teachings.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="ultra-glass p-10 rounded-[2rem] text-center border border-white/60 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-950 text-amber-400 shadow-lg rotate-3">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Islamic Studies</h3>
              <p className="text-slate-600 font-medium">Comprehensive Qur'anic memorization, Tajweed, and Arabic language immersion.</p>
            </div>

            <div className="ultra-glass p-10 rounded-[2rem] text-center border border-white/60 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-500 text-white shadow-lg -rotate-3">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Academic Excellence</h3>
              <p className="text-slate-600 font-medium">State-of-the-art curriculum ensuring our students excel in sciences and humanities.</p>
            </div>

            <div className="ultra-glass p-10 rounded-[2rem] text-center border border-white/60 shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-green-700 text-white shadow-lg rotate-3">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Moral Upbringing</h3>
              <p className="text-slate-600 font-medium">Fostering discipline, leadership, and community service anchored in Islamic ethics.</p>
            </div>
          </div>
          
          <div className="mt-20 flex justify-center gap-6 flex-wrap">
            <Link href="/about" className="px-8 py-5 bg-blue-950 hover:bg-blue-900 text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-blue-900/20">
              Discover Our Academy
            </Link>
            
            {/* Real WhatsApp Button */}
            <a 
              href="https://wa.me/2348000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-900/20 flex items-center gap-3"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}