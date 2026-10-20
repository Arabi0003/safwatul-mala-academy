import PageHero from "@/components/ui/PageHero";
import Link from "next/link";
import { User, GraduationCap, Users, Award, Shield, ArrowRight } from "lucide-react";

export default function PortalPage() {
  const portals = [
    { icon: User, title: "Student Portal", desc: "Access your schedule, grades, and resources.", href: "/portal/student", color: "ocean" },
    { icon: GraduationCap, title: "Teacher Portal", desc: "Manage classes, attendance, and assessments.", href: "/portal/teacher", color: "orange" },
    { icon: Users, title: "Staff Portal", desc: "Administrative and operational tools.", href: "/portal/staff", color: "navy" },
    { icon: Award, title: "Graduate Portal", desc: "Alumni network and certificate verification.", href: "/portal/graduate", color: "ocean" },
  ];

  return (
    <main className="bg-white">
      <PageHero tag="Secure Access" title="Portal Access" subtitle="Dedicated portals for every member of the Safwatul-Mala family." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {portals.map((p, i) => (
            <Link key={i} href={p.href} className="group p-10 bg-slate-50 rounded-3xl border border-slate-200 hover:shadow-xl hover:border-[var(--orange)] transition">
              <div className="h-14 w-14 rounded-2xl bg-[var(--orange)]/10 flex items-center justify-center mb-6 group-hover:bg-[var(--orange)] transition">
                <p.icon className="h-7 w-7 text-[var(--orange)] group-hover:text-white transition" />
              </div>
              <h3 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">{p.title}</h3>
              <p className="text-slate-600 mb-4">{p.desc}</p>
              <span className="text-[var(--orange)] font-bold inline-flex items-center gap-2">Enter Portal <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl text-center">
          <Shield className="h-8 w-8 text-amber-600 mx-auto mb-2" />
          <p className="text-amber-900 text-sm font-medium">Portals are in secure development phase. Full access will be announced soon via official channels.</p>
        </div>
      </section>
    </main>
  );
}
