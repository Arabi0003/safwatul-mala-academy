"use client";

import PageHero from "@/components/ui/PageHero";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { academy } from "@/config/academy";
import { useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const phoneDisplay = typeof academy.phone === "string" ? academy.phone : academy.phone.formatted;

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50/70 to-emerald-100 text-slate-900 bg-white">
      <PageHero 
        tag="Get in Touch" 
        title="Contact AS Safwatul-Mala" 
        subtitle="We would be delighted to hear from you. Reach out for inquiries, admissions, or partnerships." 
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: MapPin, title: "Visit Us", info: "Abuja, Federal Capital Territory, Nigeria" },
              { icon: Phone, title: "Call Us", info: phoneDisplay },
              { icon: Mail, title: "Email Us", info: academy.emails.join(" | ") },
              { icon: Clock, title: "Office Hours", info: "Mon - Fri: 8am - 4pm | Sat: 9am - 1pm" },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 flex gap-4">
                <div className="h-12 w-12 rounded-xl bg-[var(--orange)]/10 flex-none flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-[var(--orange)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--navy)] mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm break-all">{item.info}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3 p-10 bg-[var(--navy)] rounded-3xl text-white">
            <h3 className="font-[Playfair] text-3xl font-bold mb-2">Send us a Message</h3>
            <p className="text-slate-300 text-sm mb-8">We respond within 24 hours, insha'Allah.</p>
            {sent ? (
              <div className="bg-emerald-500/20 border border-emerald-400 p-6 rounded-xl text-center">
                <p className="font-bold">Jazakum Allahu Khayran! Your message has been received.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-4">
                <input required placeholder="Full Name" className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 outline-none focus:border-[var(--orange)]" />
                <input required type="email" placeholder="Email Address" className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 outline-none focus:border-[var(--orange)]" />
                <input placeholder="Phone (Optional)" className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 outline-none focus:border-[var(--orange)]" />
                <textarea required rows={5} placeholder="Your Message..." className="w-full p-3.5 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 outline-none focus:border-[var(--orange)]"></textarea>
                <button type="submit" className="w-full bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition">
                  Send Message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}