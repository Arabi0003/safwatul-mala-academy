import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Moon, Scale, Scroll, Heart } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Islamic Studies",
  description: "Islamic studies covering aqeedah, fiqh, seerah, and Islamic ethics at AS SAFWATUL-MALA ACADEMY, Abuja.",
};

const topics = [
  { icon: Heart, title: "Aqeedah (Belief)", text: "Core beliefs of Islam taught clearly and age-appropriately." },
  { icon: Scale, title: "Fiqh (Practice)", text: "How to pray, purify, fast, and live the daily obligations correctly." },
  { icon: Scroll, title: "Seerah & History", text: "The life of the Prophet ﷺ and the early generations — stories that shape character." },
  { icon: Moon, title: "Akhlaq (Character)", text: "Islamic manners, honesty, respect, and how a Muslim carries themselves." },
];

export default function IslamicStudiesPage() {
  return (
    <>
      <PageHero label="Programme" title="Islamic Studies" subtitle="Belief, practice, history, and character — taught in a way students can actually use." />
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-brown-light leading-relaxed text-[17px]">
            Islamic Studies at Safwatul Mala covers the essentials every Muslim needs:
            what we believe, how we worship, where we come from, and how we should behave.
            Content is adapted by age group. Full syllabus details will be published once confirmed.
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {topics.map((t) => (
              <div key={t.title} className="flex gap-5 p-7 rounded-2xl bg-white border border-platinum/60">
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
        <Link href="/admissions" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all">
          Apply Now <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
