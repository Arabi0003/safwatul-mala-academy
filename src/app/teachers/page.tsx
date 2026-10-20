import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Teachers & Learning Approach",
  description: "Meet the teaching approach at AS SAFWATUL-MALA ACADEMY — patient, structured, and centred on real progress.",
};

export default function TeachersPage() {
  return (
    <>
      <PageHero label="Our People" title="Teachers & Learning Approach" subtitle="Good teaching is quiet, consistent, and personal. That is the standard we hold." />
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 text-brown-light leading-relaxed text-[17px]">
          <p>
            Our teachers are selected for two things: knowledge of their subject,
            and the patience to teach it well. A scholar who cannot explain is not
            enough. A kind person who does not know the material is not enough either.
          </p>
          <p>
            We favour small groups, clear lesson plans, and regular feedback to parents.
            Students are assessed honestly — praised when they earn it, guided when they struggle.
          </p>
          <p>
            Individual teacher profiles, qualifications, and photographs will be
            published here once the academy provides and approves them.
            We will not invent biographies.
          </p>
        </div>
      </section>
      <section className="py-16 bg-ivory text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all">
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
