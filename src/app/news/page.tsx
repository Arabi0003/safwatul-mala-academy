import PageHero from "@/components/ui/PageHero";
import { BookOpen, ArrowRight } from "lucide-react";

export default function NewsPage() {
  const articles = [
    { title: "The Virtue of Memorizing the Qur'an", cat: "Reflections", excerpt: "Exploring the hadiths that highlight the reward of carrying the Qur'an in one's heart." },
    { title: "Welcoming the 2025 Academic Session", cat: "Announcements", excerpt: "A warm welcome to our new and returning students for the upcoming year." },
    { title: "Islamic Parenting in the Modern Age", cat: "Family", excerpt: "Practical guidance for parents raising children upon the Sunnah in today's world." },
    { title: "Arabic: The Key to Understanding Revelation", cat: "Learning", excerpt: "Why studying Arabic enhances every Muslim's relationship with the Qur'an." },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-slate-900 bg-white">
      <PageHero tag="Resources" title="News, Articles & Reflections" subtitle="Insights, announcements, and beneficial knowledge from the Academy." />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          {articles.map((a, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:shadow-xl hover:border-[var(--orange)] transition group">
              <span className="text-xs font-bold text-[var(--orange)] uppercase tracking-widest">{a.cat}</span>
              <h3 className="font-[Playfair] text-2xl font-bold text-[var(--navy)] mt-2 mb-3 group-hover:text-[var(--orange)] transition">{a.title}</h3>
              <p className="text-slate-600 mb-4">{a.excerpt}</p>
              <a className="text-[var(--orange)] font-bold inline-flex items-center gap-2 cursor-pointer">Read Article <ArrowRight className="h-4 w-4" /></a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
