import Link from "next/link";
import { GraduationCap, BookOpen, Shield, Users, Settings, Heart, ArrowRight, LogIn } from "lucide-react";

const portals = [
  {
    title: "Student Portal",
    desc: "Check your timetable, submit assignments, view your Qur'an memorization progress, and see your results.",
    href: "/portal/student",
    icon: GraduationCap,
    status: "active",
  },
  {
    title: "Teacher Portal",
    desc: "Manage your classes, record attendance, upload lesson materials, and track each student's progress.",
    href: "/portal/teacher",
    icon: BookOpen,
    status: "active",
  },
  {
    title: "Staff Portal",
    desc: "Access administrative tools, internal communications, and operational resources.",
    href: "/portal/staff",
    icon: Shield,
    status: "coming",
  },
  {
    title: "Graduate Portal",
    desc: "Stay in touch with the academy, access alumni resources, and connect with fellow graduates.",
    href: "/portal/graduate",
    icon: Users,
    status: "coming",
  },
  {
    title: "Parent Portal",
    desc: "Monitor your child's attendance, academic progress, and receive important announcements.",
    href: "/portal/parent",
    icon: Heart,
    status: "coming",
  },
  {
    title: "Admin Portal",
    desc: "Full academy management — users, permissions, academic settings, and reports.",
    href: "/portal/admin",
    icon: Settings,
    status: "restricted",
  },
];

export default function PortalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brown-deep via-[#2a1a12] to-brown-deep pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.5'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z'/%3E%3Cpath d='M40 10L70 40L40 70L10 40Z'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="w-14 h-14 mx-auto rounded-full glass-gold flex items-center justify-center mb-5">
            <LogIn className="w-7 h-7 text-gold" />
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            Academy <span className="text-gold">Portals</span>
          </h1>
          <p className="text-silver-light/60 text-lg max-w-xl mx-auto">
            Select your portal to sign in. If you do not have an account yet,
            contact the academy administration.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portals.map((p) => (
            <Link key={p.href} href={p.href}
              className="group glass rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-gold to-gold-dark scale-x-0 group-hover:scale-x-100 transition-transform" />

              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center group-hover:bg-gold group-hover:border-gold transition-all">
                  <p.icon className="w-7 h-7 text-gold group-hover:text-brown-deep transition-colors" />
                </div>
                <span className={`text-[10px] tracking-wider uppercase font-bold px-3 py-1 rounded-full ${
                  p.status === "active" ? "bg-green-500/20 text-green-400 border border-green-500/30" :
                  p.status === "coming" ? "bg-gold/15 text-gold-light border border-gold/25" :
                  "bg-red-500/15 text-red-400/70 border border-red-500/20"
                }`}>
                  {p.status === "active" ? "Active" : p.status === "coming" ? "Coming Soon" : "Restricted"}
                </span>
              </div>

              <h3 className="font-heading text-xl font-bold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed mb-5">{p.desc}</p>

              <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                {p.status === "active" ? "Sign In" : p.status === "coming" ? "Coming Soon" : "Authorized Only"}
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-sm text-white/40 hover:text-gold transition-colors">
            &larr; Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
