import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Scroll, Sun, Users, ArrowRight } from "lucide-react";

export default function IslamicStudiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-slate-900 bg-white">
      <PageHero tag="Programme" title="Islamic Studies" subtitle="Fiqh, Aqeedah, Seerah, and Hadith — building a complete understanding of the Deen based on the Qur'an and Sunnah." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: Scroll, title: "Fiqh & Aqeedah", desc: "Islamic jurisprudence and creed, grounded in the four schools of thought and authentic sources." },
            { icon: Sun, title: "Seerah & Hadith", desc: "Life of Prophet Muhammad ﷺ and study of authentic hadith collections." },
            { icon: Users, title: "Akhlaq & Adab", desc: "Islamic character, manners, and ethics applied to daily life and interactions." },
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-emerald-50 border border-slate-200 hover:shadow-xl transition">
              <div className="h-14 w-14 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center mb-6">
                <t.icon className="h-7 w-7 text-[var(--orange)]" />
              </div>
              <h3 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">{t.title}</h3>
              <p className="text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/enroll" className="inline-flex items-center gap-2 bg-[var(--orange)] text-white px-8 py-4 rounded-xl font-bold">
            Enroll in Islamic Studies <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

