import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { academy } from "@/config/academy";

export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <PageHero tag="Privacy" title="Privacy Policy" subtitle="Your information is an amanah — a trust we handle with care." />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-8 text-slate-700 leading-relaxed">
          <div>
            <h2 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">What We Collect</h2>
            <p>Personal details (name, contact, DOB), academic and Qur'anic background, guardian information, and technical data for online learners (IP, browser).</p>
          </div>
          <div>
            <h2 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">How We Use It</h2>
            <p>For enrollment, programme delivery, communication, safeguarding, and service improvement. We do not sell your data.</p>
          </div>
          <div>
            <h2 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">Sharing</h2>
            <p>Shared only with trusted staff and necessary service providers under strict confidentiality.</p>
          </div>
          <div>
            <h2 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">Security</h2>
            <p>Reasonable technical and organisational measures protect your information from unauthorized access.</p>
          </div>
          <div>
            <h2 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">Your Rights</h2>
            <p>You may request access, correction, or deletion by writing to <a href={`mailto:${academy.emails[0]}`} className="text-[var(--orange)] font-bold">{academy.emails[0]}</a>.</p>
          </div>
          <div className="text-center pt-6">
            <Link href="/" className="inline-flex items-center gap-2 border border-[var(--navy)] text-[var(--navy)] px-6 py-3 rounded-xl font-bold hover:bg-[var(--navy)] hover:text-white transition">
              ← Return to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
