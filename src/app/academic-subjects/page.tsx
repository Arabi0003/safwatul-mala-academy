import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Academic Subjects",
  description: "Complementary academic subjects offered alongside Qur'an and Islamic education at AS SAFWATUL-MALA ACADEMY.",
};

export default function AcademicPage() {
  return (
    <>
      <PageHero label="Programme" title="Academic Subjects" subtitle="Well-rounded learning that supports — never replaces — our Qur'an-centred foundation." />
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 text-brown-light leading-relaxed text-[17px]">
          <p>
            Alongside Qur&apos;an, Arabic, and Islamic studies, the academy offers
            selected academic subjects to ensure students develop broadly.
          </p>
          <p>
            The exact subjects, levels, and timetable are being finalised by the
            academy. This page will be updated with confirmed details — we will
            not list subjects we cannot yet deliver.
          </p>
          <p>
            If you have questions about the academic offering, please contact us directly.
          </p>
        </div>
      </section>
      <section className="py-16 bg-ivory text-center">
        <div className="max-w-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all">
            Ask About Subjects <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/admissions" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gold/30 text-gold-dark rounded-full font-semibold hover:bg-gold/10 transition-all">
            Admissions
          </Link>
        </div>
      </section>
    </>
  );
}
