import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { CheckCircle, FileText, Clock, Users, ArrowRight, Phone } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <main className="bg-white">
      <PageHero 
        tag="Enrollment Open"
        title="Admissions 2025/2026"
        subtitle="Begin your child's journey of Qur'anic excellence and academic brilliance. Discover our seamless admission process."
      >
        <Link href="/enroll" className="inline-flex items-center gap-2 bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white px-8 py-4 rounded-xl font-bold transition mt-8 shadow-xl">
          Apply Online Now <ArrowRight className="h-5 w-5" />
        </Link>
      </PageHero>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--orange)] font-bold text-xs tracking-widest uppercase">The Journey</span>
            <h2 className="font-[Playfair] text-4xl font-bold text-[var(--navy)] mt-3">4 Simple Steps to Enrollment</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Submit Application", desc: "Complete our online enrollment form with student details." },
              { step: "02", title: "Entrance Assessment", desc: "Brief evaluation of student's current level and readiness." },
              { step: "03", title: "Parent Interview", desc: "Meet with our academic team to align expectations." },
              { step: "04", title: "Welcome & Begin", desc: "Receive admission letter, pay fees, and start learning." },
            ].map((s, i) => (
              <div key={i} className="relative p-6 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="text-5xl font-black text-[var(--orange)]/20 mb-2">{s.step}</div>
                <h3 className="font-bold text-[var(--navy)] text-lg mb-2">{s.title}</h3>
                <p className="text-slate-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm">
            <FileText className="h-10 w-10 text-[var(--orange)] mb-4" />
            <h3 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-6">Required Documents</h3>
            <ul className="space-y-3">
              {[
                "Birth Certificate or Age Declaration",
                "Previous School Report (if applicable)",
                "Passport Photographs (4 copies)",
                "Parent/Guardian ID Card",
                "Medical/Immunization Record",
                "Proof of Residence",
              ].map((doc, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle className="h-5 w-5 text-[var(--orange)] flex-none" />
                  {doc}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--navy)] p-10 rounded-3xl text-white">
            <Clock className="h-10 w-10 text-[var(--orange-glow)] mb-4" />
            <h3 className="font-[Playfair] text-2xl font-bold mb-6">Important Dates</h3>
            <div className="space-y-4">
              {[
                { label: "Application Opens", date: "Rolling Admissions" },
                { label: "Entrance Assessment", date: "Weekly - Saturdays" },
                { label: "Term 1 Resumption", date: "September 2025" },
                { label: "Full-Time Enrollment Deadline", date: "August 15, 2025" },
              ].map((d, i) => (
                <div key={i} className="flex justify-between pb-3 border-b border-white/10">
                  <span className="text-slate-300">{d.label}</span>
                  <span className="font-bold text-[var(--orange-glow)]">{d.date}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-[var(--orange-glow)] font-bold hover:text-white">
              <Phone className="h-4 w-4" /> Need help? Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
