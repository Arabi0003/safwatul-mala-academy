import HeroVideo from "@/components/home/HeroVideo";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Users, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroVideo />

      <section className="py-24 bg-white text-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-[Playfair] text-3xl md:text-5xl font-bold mb-6">Welcome to As Safwatul-Mala</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-12">
            We offer a balanced curriculum that deeply ingrains Qur'anic memorization, Islamic ethics, and Arabic proficiency, alongside rigorous conventional academics.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Qur'an & Arabic", icon: BookOpen, desc: "Structured Hifz programs and comprehensive Arabic language mastery." },
              { title: "Academic Excellence", icon: GraduationCap, desc: "Standard science and arts curriculum preparing students for global success." },
              { title: "Islamic Discipline", icon: Shield, desc: "Nurturing character, adab, and morals based on the Sunnah." },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-12 w-12 rounded-xl bg-[var(--sky-light)] flex items-center justify-center mb-6">
                  <f.icon className="h-6 w-6 text-[var(--sky)]" />
                </div>
                <h3 className="text-xl font-bold font-[Playfair] mb-3 text-[var(--navy)]">{f.title}</h3>
                <p className="text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--navy-dark)] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[var(--orange-glow)] font-bold tracking-widest uppercase text-sm mb-2 block">Admissions Open</span>
            <h2 className="font-[Playfair] text-4xl md:text-5xl font-bold mb-6 leading-tight">Secure Your Child's Future Today</h2>
            <p className="text-slate-300 text-lg mb-8">
              Registration for the upcoming academic session is now open. Begin the enrollment process online and secure a place in our full-time, evening, or weekend programs.
            </p>
            <div className="flex gap-4">
              <Link href="/enroll" className="inline-flex items-center gap-2 bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white px-8 py-3.5 rounded-xl font-bold transition">
                Start Enrollment <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12 bg-white/5 backdrop-blur-sm">
              <div className="aspect-square rounded-full border border-[var(--orange)]/30 w-full flex items-center justify-center relative shadow-[0_0_60px_rgba(234,88,12,0.15)]">
                 <h3 className="font-[Playfair] text-3xl font-bold text-center text-white z-10">Knowledge <br/><span className="text-[var(--orange-glow)]">& Light</span></h3>
                 <div className="absolute inset-0 bg-gradient-to-tr from-[var(--orange)]/10 to-transparent rounded-full animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
