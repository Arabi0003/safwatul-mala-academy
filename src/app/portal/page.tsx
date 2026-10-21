"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Users, Award, Shield, ArrowRight, Lock, CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

const portals = [
  { icon: User, title: "Student Portal", desc: "Access your schedule, grades, Quran progress, and learning resources.", href: "/portal/student", color: "#059669", bg: "#ECFDF5" },
  { icon: GraduationCap, title: "Teacher Portal", desc: "Manage classes, attendance, grading, and student assessments.", href: "/portal/teacher", color: "#0D9488", bg: "#F0FDFA" },
  { icon: Users, title: "Staff Portal", desc: "Administrative tools, enrollment management, and financial reports.", href: "/portal/staff", color: "#064E3B", bg: "#ECFDF5" },
  { icon: Award, title: "Graduate Portal", desc: "Alumni network, certificate verification, and career resources.", href: "/portal/graduate", color: "#10B981", bg: "#D1FAE5" },
];

function PortalContent() {
  const searchParams = useSearchParams();
  const welcome = searchParams.get("welcome");

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-slate-900">
      <PageHero tag="Secure Access" title="Portal Access" subtitle="Dedicated portals for every member of the Safwatul-Mala family." />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          {welcome && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 p-4 rounded-2xl bg-emerald-100 border border-emerald-300 flex items-center gap-3 max-w-2xl mx-auto">
              <CheckCircle className="h-6 w-6 text-emerald-600 shrink-0" />
              <p className="text-emerald-800 font-semibold text-sm">Successfully signed in! Welcome back to As Safwatul-Mala Academy.</p>
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            {portals.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={p.href} className="group block p-8 sm:p-10 rounded-3xl border border-emerald-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1" style={{ background: p.bg }}>
                  <div className="h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110" style={{ background: p.color + "15" }}>
                    <p.icon className="h-7 w-7" style={{ color: p.color }} />
                  </div>
                  <h3 className="font-[Playfair] text-2xl font-bold text-emerald-900 mb-3">{p.title}</h3>
                  <p className="text-slate-600 mb-5 text-sm leading-relaxed">{p.desc}</p>
                  <span className="font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all" style={{ color: p.color }}>
                    Enter Portal <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto mt-14 p-6 rounded-2xl text-center border border-emerald-200 bg-emerald-50">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="h-6 w-6 text-emerald-600" />
              <Lock className="h-4 w-4 text-emerald-500" />
            </div>
            <p className="text-emerald-900 text-sm font-semibold">All portals use 256-bit SSL encryption and role-based access control via Supabase.</p>
            <p className="text-emerald-700 text-xs mt-1">Credentials are issued by the academy administration upon enrollment or appointment.</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default function PortalPage() {
  return (
    <Suspense fallback={null}>
      <PortalContent />
    </Suspense>
  );
}