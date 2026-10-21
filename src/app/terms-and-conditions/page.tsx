import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { academy } from "@/config/academy";

const phoneStr = typeof academy.phone === "string" ? academy.phone : academy.phone.formatted;

const sections = [
  { title: "Welcome", body: "In the name of Allah, the Most Gracious, the Most Merciful. These Terms govern your use of AS Safwatul-Mala Academy's services, website, and enrollment. By registering, you agree to be bound by these conditions." },
  { title: "Mission & Values", body: "The Academy exists to nurture Qur'anic excellence, Arabic literacy, and Islamic character. All activities are conducted in a spirit of amanah (trust) and adab (respect)." },
  { title: "Eligibility & Enrollment", body: "Admission is open to sincere seekers of knowledge. For minors, a lawful guardian must complete registration. All information must be truthful. Admission is at the discretion of the Academy." },
  { title: "Fees & Payments", body: "Programme fees are communicated at enrollment. Fees are non-refundable except where required by Nigerian law or expressly agreed in writing." },
  { title: "Student Conduct", body: "Students must observe Islamic manners in speech, dress, and behaviour. Disrespect, bullying, or harm is strictly prohibited and may lead to disciplinary action." },
  { title: "Attendance", body: "Regular attendance and sincere effort are essential. Prolonged unexplained absence may affect a student's standing in the programme." },
  { title: "Online Learning", body: "Access to virtual classrooms is personal. Sharing credentials or redistributing materials is not permitted. Appropriate attire and conduct are expected." },
  { title: "Intellectual Property", body: "All content, lessons, recordings, and materials are property of AS Safwatul-Mala Academy. Unauthorized reproduction or commercial use is prohibited." },
  { title: "Privacy & Data", body: "We treat personal information as an amanah. Data is used solely for educational and administrative purposes. See our Privacy Policy for details." },
  { title: "Limitation of Liability", body: "The Academy delivers programmes with reasonable care but does not guarantee specific outcomes. Liability is limited to the fullest extent permitted by law." },
  { title: "Changes", body: "These Terms may be updated. Material changes will be communicated and posted on this page with a revised date." },
  { title: "Contact", body: `For questions, write to ${academy.emails[0]} or call ${phoneStr}.` },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-slate-900 bg-white">
      <PageHero tag="Legal" title="Terms & Conditions" subtitle="Effective: January 2025 â€” Please read carefully before enrollment." />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-8 bg-emerald-50 rounded-2xl border border-slate-200 mb-10">
            <p className="font-[Playfair] italic text-lg text-[var(--navy)]">"O you who have believed, fulfil all contracts."</p>
            <p className="text-right text-xs uppercase tracking-widest text-[var(--orange)] mt-2 font-bold">â€” Qur'an 5:1</p>
          </div>
          <div className="space-y-8">
            {sections.map((s, i) => (
              <div key={i} className="flex gap-5">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[var(--orange)] text-white font-bold text-sm">{i + 1}</span>
                <div>
                  <h2 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">{s.title}</h2>
                  <p className="text-slate-600 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/" className="inline-flex items-center gap-2 border border-[var(--navy)] text-[var(--navy)] px-6 py-3 rounded-xl font-bold hover:bg-[var(--navy)] hover:text-white transition">
              â† Return to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
