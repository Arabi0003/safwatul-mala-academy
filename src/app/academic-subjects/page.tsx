import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Beaker, Calculator, Globe, Palette, ArrowRight } from "lucide-react";

export default function AcademicSubjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-emerald-900 bg-white">
      <PageHero tag="Programme" title="Academic Subjects" subtitle="A comprehensive conventional curriculum covering STEM, Languages, Humanities, and Arts — meeting national and international standards." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Calculator, title: "Mathematics", desc: "From foundational arithmetic to advanced calculus." },
            { icon: Beaker, title: "Sciences", desc: "Biology, Chemistry, Physics with practical lab sessions." },
            { icon: Globe, title: "Humanities", desc: "History, Geography, Civics, and Social Studies." },
            { icon: Palette, title: "Languages & Arts", desc: "English, French, Literature, and Creative Arts." },
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
        <div className="text-center mt-12">
          <Link href="/enroll" className="inline-flex items-center gap-2 bg-[var(--orange)] text-white px-8 py-4 rounded-xl font-bold">
            Apply Now <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}

