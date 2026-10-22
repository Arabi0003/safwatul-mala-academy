import PageHero from "@/components/ui/PageHero";
import { BookOpen, Users, Award, Heart, Target, Compass } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-emerald-900 bg-white">
      <PageHero 
        tag="Who We Are"
        title="A Legacy of Qur'anic Light & Academic Excellence"
        subtitle="AS Safwatul-Mala Academy exists to raise a generation deeply rooted in the Qur'an, grounded in Islamic morals, and competitive in modern academics."
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--orange)] font-bold text-xs tracking-widest uppercase">Our Story</span>
            <h2 className="font-[Playfair] text-4xl font-bold text-[var(--navy)] mt-3 mb-6">Founded on Principles, Driven by Purpose</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Established in the heart of Abuja, AS Safwatul-Mala Academy was born from a sincere intention to bridge the gap between authentic Islamic education and the demands of the modern age.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We believe that true success lies in nurturing a soul that knows its Creator, a mind that pursues knowledge, and a character that reflects the beauty of Islam.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--sky-light)] to-white border border-emerald-200 p-10 flex items-center justify-center">
              <BookOpen className="h-32 w-32 text-[var(--ocean)] opacity-50" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[var(--orange)] text-white p-6 rounded-2xl shadow-xl">
              <p className="font-bold text-3xl">10+</p>
              <p className="text-xs uppercase tracking-wider">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--orange)] font-bold text-xs tracking-widest uppercase">What Drives Us</span>
            <h2 className="font-[Playfair] text-4xl font-bold text-[var(--navy)] mt-3">Vision, Mission & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Vision", desc: "To be a leading Islamic academy producing well-rounded Muslims who contribute positively to their communities and the Ummah." },
              { icon: Compass, title: "Our Mission", desc: "To deliver authentic Qur'anic, Arabic, and Islamic education alongside rigorous academic standards in a nurturing environment." },
              { icon: Heart, title: "Our Values", desc: "Taqwa, Excellence, Integrity, Discipline, and Service — guiding every lesson, every interaction, every decision." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-emerald-200 shadow-sm hover:shadow-xl transition">
                <div className="h-14 w-14 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center mb-6">
                  <item.icon className="h-7 w-7 text-[var(--orange)]" />
                </div>
                <h3 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--navy-dark)] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          {[
            { num: "500+", label: "Students Enrolled" },
            { num: "40+", label: "Qualified Teachers" },
            { num: "15+", label: "Programs Offered" },
            { num: "95%", label: "Parent Satisfaction" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-[Playfair] text-5xl font-bold text-[var(--orange-glow)] mb-2">{stat.num}</p>
              <p className="text-slate-300 uppercase text-sm tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

