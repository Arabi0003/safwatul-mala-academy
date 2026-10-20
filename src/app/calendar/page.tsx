import PageHero from "@/components/ui/PageHero";
import { Calendar, Bell, ArrowRight } from "lucide-react";

export default function CalendarPage() {
  const events = [
    { date: "Sep 02, 2025", title: "First Term Resumption", type: "Academic" },
    { date: "Oct 15, 2025", title: "Qur'an Recitation Competition", type: "Event" },
    { date: "Nov 20, 2025", title: "Mid-Term Break Begins", type: "Holiday" },
    { date: "Dec 10, 2025", title: "End of Term Examinations", type: "Academic" },
    { date: "Jan 15, 2026", title: "Second Term Resumption", type: "Academic" },
  ];
  return (
    <main className="bg-white">
      <PageHero tag="Stay Informed" title="Calendar & Announcements" subtitle="Keep track of important dates, events, and updates from AS Safwatul-Mala Academy." />
      
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-[Playfair] text-3xl font-bold text-[var(--navy)] mb-10 text-center">Upcoming Events</h2>
          <div className="space-y-4">
            {events.map((e, i) => (
              <div key={i} className="flex items-center gap-6 p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[var(--orange)] transition">
                <div className="h-14 w-14 rounded-xl bg-[var(--orange)]/10 flex items-center justify-center flex-none">
                  <Calendar className="h-6 w-6 text-[var(--orange)]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-slate-500 font-bold">{e.date}</p>
                  <h3 className="font-bold text-[var(--navy)] text-lg">{e.title}</h3>
                </div>
                <span className="text-xs font-bold text-[var(--orange)] uppercase tracking-wider bg-[var(--orange)]/10 px-3 py-1 rounded-full">{e.type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
