import Link from "next/link";
import { ArrowRight, BookOpen, Languages, Mosque, GraduationCap, Shield, Users, LogIn } from "lucide-react";
import HeroVideo from "@/components/home/HeroVideo";

const programmes = [
  {
    icon: BookOpen,
    title: "Qur'an Studies",
    desc: "Read, memorize, and understand the Qur'an at your own pace, with teachers who genuinely care about your progress.",
    href: "/quran-studies",
  },
  {
    icon: Languages,
    title: "Huruf & Arabic",
    desc: "Start from the very first letter and work your way up to reading, speaking, and understanding real Arabic.",
    href: "/huruf-arabic",
  },
  {
    icon: Mosque,
    title: "Islamic Studies",
    desc: "Learn the foundations of faith, prayer, and Islamic history in a way that connects to your daily life.",
    href: "/islamic-studies",
  },
  {
    icon: GraduationCap,
    title: "Academic Subjects",
    desc: "Core subjects that round out your child's education alongside their Islamic and Qur'anic studies.",
    href: "/academic-subjects",
  },
];

const portalCards = [
  { title: "Students", desc: "Access your lessons, results, and schedule.", href: "/portal/student", icon: GraduationCap },
  { title: "Teachers", desc: "Manage classes, mark attendance, and track progress.", href: "/portal/teacher", icon: BookOpen },
  { title: "Staff", desc: "Administrative tools and internal resources.", href: "/portal/staff", icon: Shield },
  { title: "Graduates", desc: "Stay connected with the academy community.", href: "/portal/graduate", icon: Users },
];

export default function HomePage() {
  return (
    <>
      {/* ===== CINEMATIC HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroVideo />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-dark rounded-3xl px-6 py-12 sm:px-12 sm:py-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-[1px] bg-gold/40" />
              <p className="text-gold text-xs tracking-[0.35em] uppercase font-medium">Abuja, Nigeria</p>
              <div className="w-10 h-[1px] bg-gold/40" />
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
              <span className="text-white">Where the Qur&apos;an</span>
              <br />
              <span className="text-gold">Comes Alive</span>
            </h1>

            <p className="text-lg sm:text-xl text-silver-light/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              We built Safwatul Mala for families who want their children to truly
              love the Qur&apos;an — not just memorize it, but live it.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/quran-studies" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-light transition-all shadow-lg shadow-gold/30">
                See Our Programmes <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-gold-light font-semibold hover:bg-white/15 transition-all">
                Enrol Now
              </Link>
              <Link href="/portal" className="inline-flex items-center gap-2 px-5 py-3 text-silver hover:text-gold transition-colors text-sm font-medium">
                <LogIn className="w-4 h-4" /> Access Portals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROGRAMMES ===== */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gold" />
              <p className="text-gold text-sm tracking-[0.25em] uppercase font-semibold">What We Teach</p>
              <div className="w-8 h-[1px] bg-gold" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-deep mb-4">
              Built Around the Qur&apos;an
            </h2>
            <p className="text-brown-light max-w-xl mx-auto">
              Everything we do starts with the Qur&apos;an. The rest grows from there.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.map((prog) => (
              <Link key={prog.href} href={prog.href}
                className="group relative p-8 rounded-2xl glass-gold hover:bg-gold/15 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-dark via-gold to-gold-dark rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform" />
                <div className="w-14 h-14 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center mb-5 group-hover:bg-gold group-hover:border-gold transition-all">
                  <prog.icon className="w-7 h-7 text-gold group-hover:text-brown-deep transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-brown-deep mb-3">{prog.title}</h3>
                <p className="text-sm text-brown-light leading-relaxed mb-4">{prog.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold-dark group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-gold-pale/40 via-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[1px] bg-gold" />
                <p className="text-gold text-sm tracking-[0.25em] uppercase font-semibold">Our Story</p>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-brown-deep mb-6 leading-tight">
                A School That Takes the Qur&apos;an <span className="text-gold-dark">Seriously</span>
              </h2>
              <p className="text-brown-light leading-relaxed mb-4">
                Safwatul Mala started with a simple idea: what if an Islamic school
                in Abuja actually matched the quality of the best secular schools —
                while keeping the Qur&apos;an at the centre of everything?
              </p>
              <p className="text-brown-light leading-relaxed mb-8">
                That is what we are building. Small classes. Trained teachers.
                A real curriculum. And a learning environment your child will
                actually look forward to.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all shadow-md shadow-gold/20">
                Read the Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl glass-gold flex items-center justify-center overflow-hidden shadow-lg shadow-gold/10">
                <div className="text-center p-8">
                  <BookOpen className="w-16 h-16 text-gold/40 mx-auto mb-4" />
                  <p className="text-sm text-brown-muted italic">Academy photos coming soon</p>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-gold/10 border border-gold/20 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== PORTALS ===== */}
      <section className="py-20 sm:py-28 bg-brown-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.1)_0%,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-gold/50" />
              <p className="text-gold text-sm tracking-[0.25em] uppercase font-semibold">Digital Portals</p>
              <div className="w-8 h-[1px] bg-gold/50" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Academy, Online
            </h2>
            <p className="text-silver-light/60 max-w-xl mx-auto">
              Access your classes, results, schedules, and messages from anywhere.
              Choose your portal below.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portalCards.map((p) => (
              <Link key={p.href} href={p.href}
                className="group glass rounded-2xl p-7 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:border-gold transition-all">
                  <p.icon className="w-6 h-6 text-gold group-hover:text-brown-deep transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">{p.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-gold group-hover:gap-2 transition-all">
                  Open Portal <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/portal" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-gold/40 text-gold rounded-full font-semibold hover:bg-gold/10 transition-all">
              <LogIn className="w-4 h-4" /> View All Portals
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 sm:py-24 relative overflow-hidden bg-gradient-to-br from-gold via-gold-dark to-gold-deeper">
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Admissions are open for the current session. Reach out to us or
            fill out the application form — we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gold-dark rounded-full font-bold hover:bg-brown-deep hover:text-gold transition-all shadow-lg">
              Apply for Admission <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/20 transition-all">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
