import React from 'react';
import HeroVideo from '@/components/home/HeroVideo';
import { BookOpen, Users, Trophy, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    { 
      title: 'Quality Education', 
      desc: 'Blending modern academic curricula with deep-rooted moral and spiritual values.', 
      icon: BookOpen 
    },
    { 
      title: 'Expert Faculty', 
      desc: 'Dedicated educators committed to nurturing every child to achieve maximum potential.', 
      icon: Users 
    },
    { 
      title: 'Excellence Guaranteed', 
      desc: 'Proven track record of high academic standard and moral discipline.', 
      icon: Trophy 
    },
    { 
      title: 'Safe Campus', 
      desc: 'Serene, safe, and modern learning environment situated in Abuja.', 
      icon: GraduationCap 
    },
  ];

  return (
    <main className="overflow-hidden bg-slate-50">
      <HeroVideo />

      {/* Intro Section - Headings 28px to 32px */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-amber-600 font-bold tracking-[0.25em] uppercase mb-4 block animate-in" style={{ animationDelay: '0.2s' }}>
            Welcome to As Safwatul-Mala Academy
          </span>
          <h2 className="text-blue-950 mb-6 animate-in" style={{ animationDelay: '0.4s' }}>
            Nurturing the <span className="text-amber-500 italic">Next Generation</span> of Leaders with Wisdom and Faith.
          </h2>
          <p className="text-xl text-slate-900 font-medium leading-relaxed animate-in" style={{ animationDelay: '0.6s' }}>
            We empower learners with rigorous academics, character development, and strong Islamic roots in Abuja, Nigeria.
          </p>
        </div>
      </section>

      {/* Glass Grid Section */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div 
                  key={i} 
                  className="ultra-glass p-8 rounded-[2rem] hover-card-anim group border border-white/60"
                >
                  <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-md group-hover:scale-110 transition-transform">
                    <Icon size={36} className="text-amber-500" />
                  </div>
                  <h3 className="text-[22px] font-bold text-blue-950 mb-3">{f.title}</h3>
                  <p className="text-slate-900 font-medium text-base leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl border border-white/20">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl">
                <h2 className="text-white mb-6">
                  Enroll Your Child for <br/><span className="text-amber-400">Academic & Moral Success</span>
                </h2>
                <p className="text-blue-100 text-xl leading-relaxed">
                  Admissions for the 2024/2025 Academic Session are active. Secure your position today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link href="/enroll" className="px-10 py-5 bg-amber-500 hover:bg-amber-600 text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-amber-500/20 flex items-center gap-3">
                  Apply Now <ArrowRight size={22} />
                </Link>
                <Link href="/contact" className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-2xl font-bold text-xl transition-all backdrop-blur-md">
                  Contact Us
                </Link>
                {/* Real WhatsApp Button */}
                <a 
                  href="https://wa.me/2348000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-green-900/20 flex items-center gap-3"
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}