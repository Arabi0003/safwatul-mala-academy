import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { Lock, ArrowLeft } from "lucide-react";

export default function GraduatePortal() {
  return (
    <main className="bg-white min-h-screen">
      <PageHero tag="Secure Portal" title="Graduate Portal" subtitle="Alumni resources and certificate verification." />
      <section className="py-20">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-200">
            <div className="h-16 w-16 bg-[var(--orange)]/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="h-8 w-8 text-[var(--orange)]" />
            </div>
            <h2 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">Access Under Development</h2>
            <p className="text-slate-600 mb-6">The graduate portal is being built with secure authentication. Credentials will be issued upon activation.</p>
            <Link href="/portal" className="inline-flex items-center gap-2 text-[var(--orange)] font-bold">
              <ArrowLeft className="h-4 w-4" /> Back to Portal Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
