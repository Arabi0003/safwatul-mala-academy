import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Academic Calendar & Announcements",
  description: "Term dates, events, and announcements from AS SAFWATUL-MALA ACADEMY.",
};

export default function CalendarPage() {
  return (
    <>
      <PageHero label="Stay Informed" title="Academic Calendar" subtitle="Term dates, holidays, and academy announcements." />
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-12 rounded-2xl border-2 border-dashed border-gold-light/40 bg-gold-pale/20">
            <p className="text-brown-light text-[17px] leading-relaxed mb-2">
              The academic calendar for the current session is being prepared.
            </p>
            <p className="text-sm text-brown-muted">
              Term dates, examination periods, and holiday schedules will appear here
              once confirmed by the academy administration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
