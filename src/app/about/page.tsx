import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Heart, Users, Target } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "About the Academy",
  description: "Learn about AS SAFWATUL-MALA ACADEMY — our mission, values, and approach to Qur'an-centred education in Abuja, Nigeria.",
};

const values = [
  { icon: BookOpen, title: "Qur'an First", text: "Every programme begins with the Book of Allah. Everything else supports that foundation." },
  { icon: Heart, title: "Genuine Care", text: "Small classes mean every student is known, guided, and encouraged — not lost in a crowd." },
  { icon: Users, title: "Community", text: "Parents, teachers, and students work together. This is a partnership, not a transaction." },
  { icon: Target, title: "Real Standards", text: "We measure progress honestly. No empty certificates. No shortcuts." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Who We Are"
        subtitle="An Islamic academy in Abuja built around one idea: the Qur'an deserves the best teaching we can give."
      />

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-deep mb-6">Our Story</h2>
          <div className="space-y-4 text-brown-light leading-relaxed text-[17px]">
            <p>
              AS SAFWATUL-MALA ACADEMY was founded in Abuja with a clear purpose:
              to offer Qur&apos;an education that is serious, structured, and personal.
            </p>
            <p>
              Too many schools treat Islamic studies as a side subject. We reverse that.
              The Qur&apos;an sits at the centre. Arabic, Huruf, Islamic studies, and academic
              subjects grow around it — not the other way around.
            </p>
            <p>
              We keep classes small. We hire teachers who know their craft.
              And we treat every student as someone who can genuinely excel,
              whether they are just starting their first letter or preparing for hifz.
            </p>
            <p>
              Details about our founding history, leadership, and formal accreditations
              will be published here once confirmed by the academy administration.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-deep mb-3">What We Stand For</h2>
            <p className="text-brown-light max-w-lg mx-auto">Four principles guide every decision we make.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl bg-white border border-platinum/60 hover:border-gold-light/40 hover:shadow-lg hover:shadow-gold/5 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brown-deep mb-2">{v.title}</h3>
                <p className="text-sm text-brown-light leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-deep mb-4">Want to Know More?</h2>
          <p className="text-brown-light mb-8">Visit us, call us, or start an application. We are happy to answer your questions.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all">
              Apply for Admission <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gold/30 text-gold-dark rounded-full font-semibold hover:bg-gold/10 transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
