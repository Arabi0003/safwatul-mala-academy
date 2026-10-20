import HeroVideo from "@/components/home/HeroVideo";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, Shield } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <HeroVideo />

      {/* Values Section */}
      <section className="py-24 bg-slate-50 text-[var(--navy-dark)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-[Playfair] text-3xl md:text-5xl font-bold mb-6">Welcome to As Safwatul-Mala</h2>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-16 font-medium">
            We offer a balanced curriculum that deeply ingrains Qur'anic memorization, Islamic ethics, and Arabic proficiency, alongside rigorous conventional academics.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Qur'an & Arabic", icon: BookOpen, desc: "Structured Hifz programs and comprehensive Arabic language mastery for all ages." },
              { title: "Academic Excellence", icon: GraduationCap, desc: "Standard science and arts curriculum preparing students for global academic success." },
              { title: "Islamic Discipline", icon: Shield, desc: "Nurturing beautiful character, adab, and morals strictly based on the Sunnah." },
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="h-14 w-14 rounded-xl bg-[var(--sky-light)] flex items-center justify-center mb-6">
                  <f.icon className="h-7 w-7 text-[var(--ocean)]" />
                </div>
                <h3 className="text-xl font-bold font-[Playfair] mb-3 text-[var(--navy)]">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--navy)] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-dark)] to-[var(--navy)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--orange-glow)] font-bold tracking-widest uppercase text-xs mb-4 block flex items-center gap-2">
              <span className="h-px w-8 bg-[var(--orange-glow)]"></span> Take the First Step
            </span>
            <h2 className="font-[Playfair] text-4xl md:text-5xl font-bold mb-6 leading-tight">Secure Your Child's Future Today</h2>
            <p className="text-slate-300 text-lg mb-10 font-medium">
              Registration for the upcoming academic session is now open. Begin the enrollment process online and secure a place in our full-time, evening, or weekend programs.
            </p>
            <Link href="/enroll" className="inline-flex items-center justify-center gap-2 bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white px-8 py-4 rounded-xl font-bold transition shadow-xl shadow-[var(--orange)]/20 hover:-translate-y-1">
              Start Enrollment Application <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="relative hidden md:flex items-center justify-center">
            <div className="aspect-square rounded-full border border-white/10 p-12 bg-white/5 backdrop-blur-md shadow-2xl relative">
              <div className="absolute inset-0 border-2 border-[var(--orange)]/30 rounded-full animate-ping opacity-20"></div>
              <div className="aspect-square rounded-full border-2 border-[var(--orange)] w-full flex flex-col items-center justify-center relative bg-[var(--navy-dark)]/50 p-12 text-center">
                 <h3 className="font-[Playfair] text-4xl font-bold text-white z-10 leading-tight">
                   Knowledge<br/><span className="text-[var(--orange-glow)]">& Light</span>
                 </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
