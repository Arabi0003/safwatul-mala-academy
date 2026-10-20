import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | AS SAFWATUL-MALA ACADEMY",
  description:
    "Terms and conditions for using AS SAFWATUL-MALA ACADEMY website, enrollment forms, learning information, and future digital portals.",
  alternates: {
    canonical: "https://safwatulmalaacademy.online/terms-and-conditions",
  },
};

const sections = [
  {
    title: "1. Islamic Conduct and Respect",
    body:
      "All learners, guardians, visitors, and users of this website are expected to interact with respect, honesty, modesty, and good manners. Communication with the academy should reflect adab and responsibility.",
  },
  {
    title: "2. Enrollment Information",
    body:
      "Information submitted through enrollment forms must be accurate and truthful. A parent, guardian, or responsible adult should assist where necessary. Submission of a form does not automatically guarantee final admission until the academy confirms placement.",
  },
  {
    title: "3. Privacy and Amanah",
    body:
      "Personal information shared with the academy should be treated as an amanah. The academy will use submitted information for admission communication, learning placement, and official academy purposes only.",
  },
  {
    title: "4. Learning Materials and Website Use",
    body:
      "Website content, academy learning materials, portal access, and private communications must not be copied, sold, misused, or shared without permission from AS SAFWATUL-MALA ACADEMY.",
  },
  {
    title: "5. Future Portal Access",
    body:
      "Student, staff, teacher, graduate, admin, and any approved parent portal will be protected areas. Users must keep their access details private and must not attempt to enter areas that are not assigned to them.",
  },
  {
    title: "6. Fees, Timetables, and Official Notices",
    body:
      "Any fees, schedules, placement details, or official academic notices must be confirmed directly by the academy through approved communication channels. The website may be updated from time to time.",
  },
  {
    title: "7. Responsible Communication",
    body:
      "Messages sent through the website, email, phone, or future portals should be respectful and relevant. Abusive, misleading, or harmful communication is not accepted.",
  },
  {
    title: "8. Updates to These Terms",
    body:
      "AS SAFWATUL-MALA ACADEMY may update these terms when needed. Continued use of the website means the visitor accepts the current terms displayed on this page.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <section className="relative overflow-hidden border-b border-[#f6cf72]/70 bg-gradient-to-br from-white via-[#fffaf0] to-[#fff1c2]">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#f97316]/15 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-16 h-80 w-80 rounded-full bg-[#d4af37]/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#f6cf72] bg-white px-4 py-2 text-sm font-bold text-[#b77900] transition hover:bg-[#fff8df]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#f6cf72] bg-white/80 px-4 py-2 text-sm font-semibold text-[#f97316]">
            <ShieldCheck className="h-4 w-4" />
            Website Terms
          </div>

          <h1 className="mt-6 max-w-3xl font-serif text-4xl font-semibold leading-tight text-zinc-950 sm:text-5xl">
            Terms & Conditions
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-700">
            These terms guide the use of AS SAFWATUL-MALA ACADEMY website,
            enrollment forms, public information, and future digital portals.
            They are written with amanah, respect, and responsible Islamic conduct
            in mind.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#f6cf72]/80 bg-white p-6 shadow-[0_24px_80px_rgba(212,175,55,0.13)] sm:p-8">
          <div className="mb-8 flex items-start gap-4 rounded-3xl border border-[#f6cf72] bg-[#fff8df] p-5">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f97316] text-white">
              <FileText className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-zinc-950">
                Important Notice
              </h2>
              <p className="mt-2 leading-7 text-zinc-700">
                This page provides general website terms. Final admission details,
                class placement, payment instructions, and internal policies are
                confirmed directly by the academy.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-[#f6cf72]/70 bg-white p-5 transition hover:border-[#f97316]/60 hover:bg-[#fffaf0]"
              >
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f97316]" />
                  <div>
                    <h2 className="text-lg font-bold text-zinc-950">
                      {section.title}
                    </h2>
                    <p className="mt-2 leading-7 text-zinc-700">
                      {section.body}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[#f6cf72] bg-gradient-to-br from-white via-[#fffaf0] to-[#fff1c2] p-6">
            <h2 className="text-xl font-bold text-zinc-950">
              Questions about these terms?
            </h2>
            <p className="mt-2 leading-7 text-zinc-700">
              Please contact the academy directly for clarification.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:info@safwatulmalaacademy.com"
                className="inline-flex items-center gap-2 rounded-full bg-[#f97316] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#ea580c]"
              >
                <Mail className="h-4 w-4" />
                Email the Academy
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-white px-5 py-3 text-sm font-bold text-[#b77900] transition hover:bg-[#fff8df]"
              >
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
