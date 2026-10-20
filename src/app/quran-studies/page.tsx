import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { BookOpen, Mic, Award, ArrowRight, CheckCircle } from "lucide-react";

export default function QuranStudiesPage() {
  return (
    <main className="bg-white">
      <PageHero tag="Programme" title="Qur'an Studies" subtitle="Rooted in Tajweed, nurtured through Hifz — our comprehensive Qur'an program develops reciters and memorizers of the Book of Allah." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: "Nazira (Reading)", desc: "Fluent recitation of the Qur'an with correct pronunciation and rhythm." },
            { icon: Mic, title: "Tajweed Mastery", desc: "In-depth study of the rules of Qur'anic recitation under qualified ustadhs." },
            { icon: Award, title: "Hifz (Memorization)", desc: "Structured memorization program leading to full Hifz with sanad certification." },
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:shadow-xl transition">
              <div className="h-14 w-14 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center mb-6">
                <t.icon className="h-7 w-7 text-[var(--orange)]" />
              </div>
              <h3 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">{t.title}</h3>
              <p className="text-slate-600">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[Playfair] text-3xl font-bold text-[var(--navy)] text-center mb-12">What You'll Experience</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Daily revision sessions (muraaja'ah)",
              "One-on-one teacher attention",
              "Weekly progress tracking",
              "Qira'at variations exposure",
              "Tafseer of memorized portions",
              "Islamic etiquette with the Qur'an",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
                <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-none" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/enroll" className="inline-flex items-center gap-2 bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white px-8 py-4 rounded-xl font-bold">
              Enroll in Qur'an Program <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
