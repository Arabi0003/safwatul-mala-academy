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
          <p className="text-xl text-slate-600 leading-relaxed animate-in" style={{ animationDelay: '0.6s' }}>
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
                  <h3 className="text-[22px] font-bold text-blue-900 mb-3">{f.title}</h3>
                  <p className="text-slate-600 text-base leading-relaxed">{f.desc}</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}