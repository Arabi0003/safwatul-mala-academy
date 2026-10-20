import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Mic, Brain, RefreshCw } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Qur'an Studies",
  description: "Qur'an memorization, recitation (tajweed), and understanding programmes at AS SAFWATUL-MALA ACADEMY, Abuja.",
};

const tracks = [
  { icon: Mic, title: "Recitation & Tajweed", text: "Learn to recite the Qur'an correctly — letter by letter, rule by rule — with proper makharij and sifaat." },
  { icon: Brain, title: "Memorization (Hifz)", text: "A structured path from short surahs to longer portions, paced to each student's ability and consistency." },
  { icon: BookOpen, title: "Understanding", text: "Basic tafseer and meanings so students connect with what they recite, not just the sound of it." },
  { icon: RefreshCw, title: "Revision & Retention", text: "Regular muraja'ah sessions to keep what you have memorized strong and ready." },
];

export default function QuranPage() {
  return (
    <>
      <PageHero
        label="Programme"
        title="Qur'an Studies"
        subtitle="The heart of everything we do. Recitation, memorization, and understanding — taught with care and structure."
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-brown-light leading-relaxed text-[17px] mb-4">
            Our Qur&apos;an programme is designed for students at every level —
            from those who are still learning to recognise Arabic letters,
            to those working toward full memorization.
          </p>
          <p className="text-brown-light leading-relaxed text-[17px]">
            Each student is assessed on entry so we place them at the right starting point.
            Progress is tracked honestly. Specific curriculum details, class schedules,
            and fee structures will be confirmed and published by the academy.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-deep text-center mb-12">What You Will Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tracks.map((t) => (
              <div key={t.title} className="flex gap-5 p-7 rounded-2xl bg-white border border-platinum/60 hover:border-gold-light/40 transition-all">
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <t.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brown-deep mb-1">{t.title}</h3>
                  <p className="text-sm text-brown-light leading-relaxed">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold text-brown-deep mb-4">Ready to Begin?</h2>
          <p className="text-brown-light mb-8">Speak with us about placement, schedules, and how to enrol.</p>
          <Link href="/admissions" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all">
            Start Enrolment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
