import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Type, BookOpen, MessageCircle, PenTool } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Huruf & Arabic Language",
  description: "Learn Arabic letters (Huruf), reading, writing, and conversational Arabic at AS SAFWATUL-MALA ACADEMY.",
};

const levels = [
  { icon: Type, title: "Huruf Foundation", text: "Master all 28 Arabic letters — shapes, sounds, and how they connect in words." },
  { icon: BookOpen, title: "Reading Fluency", text: "Move from individual letters to full words, sentences, and eventually Qur'anic passages." },
  { icon: PenTool, title: "Writing Practice", text: "Develop clear Arabic handwriting through guided exercises and regular practice." },
  { icon: MessageCircle, title: "Spoken Arabic", text: "Build everyday vocabulary and simple conversation skills step by step." },
];

export default function HurufPage() {
  return (
    <>
      <PageHero
        label="Programme"
        title="Huruf & Arabic Language"
        subtitle="From the first letter to confident reading and conversation — a clear path into the Arabic language."
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-brown-light leading-relaxed text-[17px] mb-4">
            Many students struggle with the Qur&apos;an simply because they never
            properly learned the letters. We fix that first.
          </p>
          <p className="text-brown-light leading-relaxed text-[17px]">
            Our Huruf and Arabic programme starts at absolute beginner level
            and builds steadily. No one is rushed. No one is left behind.
            Exact course outlines and materials will be confirmed by the academy.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-deep text-center mb-12">Learning Path</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {levels.map((l) => (
              <div key={l.title} className="flex gap-5 p-7 rounded-2xl bg-white border border-platinum/60 hover:border-gold-light/40 transition-all">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <l.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brown-deep mb-1">{l.title}</h3>
                  <p className="text-sm text-brown-light leading-relaxed">{l.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <Link href="/admissions" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all">
            Enrol in Arabic Classes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
