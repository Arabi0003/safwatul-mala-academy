import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, MessageSquare, UserCheck, ClipboardList } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { academy } from "@/config/academy";

export const metadata: Metadata = {
  title: "Admissions & Enrolment",
  description: "How to apply and enrol at AS SAFWATUL-MALA ACADEMY, Abuja. Steps, requirements, and contact information.",
};

const steps = [
  { icon: MessageSquare, title: "1. Enquire", text: "Call, email, or visit us. Tell us about the student and what you are looking for." },
  { icon: ClipboardList, title: "2. Assessment", text: "We place each student at the right level — especially for Qur'an and Arabic." },
  { icon: FileText, title: "3. Application", text: "Complete the enrolment form with the required documents." },
  { icon: UserCheck, title: "4. Confirmation", text: "Once accepted, you receive class details, schedule, and next steps." },
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero label="Join Us" title="Admissions & Enrolment" subtitle="A straightforward process. No confusion, no hidden steps." />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-brown-deep text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.title} className="p-7 rounded-2xl border border-platinum/60 bg-ivory/50 text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                  <s.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-heading text-lg font-bold text-brown-deep mb-2">{s.title}</h3>
                <p className="text-sm text-brown-light leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-brown-deep mb-4">What You Will Need</h2>
          <ul className="space-y-2 text-brown-light text-[17px] leading-relaxed mb-8">
            <li className="flex gap-2"><span className="text-gold font-bold">•</span> Basic student information (name, age, previous education)</li>
            <li className="flex gap-2"><span className="text-gold font-bold">•</span> Parent / guardian contact details</li>
            <li className="flex gap-2"><span className="text-gold font-bold">•</span> Any prior Qur&apos;an or Arabic experience (helpful, not required)</li>
          </ul>
          <p className="text-brown-light text-[17px] leading-relaxed mb-2">
            Exact document lists, fees, and session dates will be confirmed by the academy.
            For now, the fastest way to start is to contact us:
          </p>
          <div className="mt-6 space-y-2 text-[17px]">
            <p><a href={`mailto:${academy.emails[0]}`} className="text-gold-dark hover:text-gold font-medium">{academy.emails[0]}</a></p>
            <p><a href={academy.phone.href} className="text-gold-dark hover:text-gold font-medium">{academy.phone.formatted}</a></p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all">
            Contact Admissions <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/portal" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-gold/30 text-gold-dark rounded-full font-semibold hover:bg-gold/10 transition-all">
            Already Enrolled? Open Portal
          </Link>
        </div>
      </section>
    </>
  );
}
