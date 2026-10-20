import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Languages, PenTool, MessageCircle, ArrowRight } from "lucide-react";

export default function HurufArabicPage() {
  return (
    <main className="bg-white">
      <PageHero tag="Programme" title="Huruf & Arabic Language" subtitle="Master the language of the Qur'an — from the first letter to fluent conversation and classical text comprehension." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            { icon: PenTool, title: "Huruf (Letters)", desc: "Introduction to Arabic alphabet, phonetics, and basic writing for beginners of all ages." },
            { icon: Languages, title: "Grammar & Nahw", desc: "Classical Arabic grammar enabling comprehension of Qur'an and Hadith texts." },
            { icon: MessageCircle, title: "Conversation", desc: "Spoken Arabic for daily use, with modern vocabulary and dialect understanding." },
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
        <div className="text-center mt-12">
          <Link href="/enroll" className="inline-flex items-center gap-2 bg-[var(--orange)] text-white px-8 py-4 rounded-xl font-bold">
            Enroll in Arabic Program <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
