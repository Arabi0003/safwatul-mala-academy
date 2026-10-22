import PageHero from "@/components/ui/PageHero";
import { GraduationCap, Heart, Award, Users } from "lucide-react";

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-emerald-900 bg-white">
      <PageHero tag="Our Educators" title="Teachers & Learning Approach" subtitle="Qualified, caring, and continuously trained — our teachers are the heart of AS Safwatul-Mala Academy." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: GraduationCap, title: "Qualified Scholars", desc: "Teachers hold degrees in Islamic studies, Arabic, and specialized academic fields." },
            { icon: Heart, title: "Nurturing Approach", desc: "Every student is treated with care, patience, and personalized attention." },
            { icon: Award, title: "Continuous Training", desc: "Regular professional development to stay aligned with best teaching practices." },
            { icon: Users, title: "Small Class Sizes", desc: "Maximum 15 students per class, ensuring each voice is heard." },
          ].map((t, i) => (
            <div key={i} className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 hover:shadow-xl transition">
              <div className="h-12 w-12 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center mb-4">
                <t.icon className="h-6 w-6 text-[var(--orange)]" />
              </div>
              <h3 className="font-bold text-[var(--navy)] text-lg mb-2">{t.title}</h3>
              <p className="text-slate-600 text-sm">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-[Playfair] text-4xl font-bold text-[var(--navy)] mb-6">Our Learning Philosophy</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            We blend the classical Islamic halaqah model with modern pedagogical techniques. Students sit with their teacher in small circles for Qur'an and Islamic subjects, while structured, project-based learning drives academic classes.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our approach prioritizes understanding over memorization, character over credentials, and sincerity over competition.
          </p>
        </div>
      </section>
    </main>
  );
}

