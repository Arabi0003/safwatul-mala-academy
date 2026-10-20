import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Monitor, Clock, Globe2, Video, ArrowRight } from "lucide-react";

export default function OnlineLearningPage() {
  return (
    <main className="bg-white">
      <PageHero tag="Virtual Classes" title="Online Learning" subtitle="Learn the Qur'an, Arabic, and Islamic studies from anywhere in the world — with live, interactive teachers from Abuja." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {[
            { icon: Video, title: "Live One-on-One Classes", desc: "Direct video calls with your assigned ustadh. No pre-recorded lessons." },
            { icon: Clock, title: "Flexible Scheduling", desc: "Choose session times that fit your timezone and routine." },
            { icon: Globe2, title: "Global Student Family", desc: "Join learners from across Nigeria, Africa, Europe, and the Americas." },
            { icon: Monitor, title: "Digital Resources", desc: "Access learning materials, progress tracking, and recordings." },
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-xl transition">
              <div className="h-14 w-14 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center mb-6">
                <f.icon className="h-7 w-7 text-[var(--orange)]" />
              </div>
              <h3 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/enroll" className="inline-flex items-center gap-2 bg-[var(--orange)] text-white px-8 py-4 rounded-xl font-bold">
            Register for Online Classes <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
