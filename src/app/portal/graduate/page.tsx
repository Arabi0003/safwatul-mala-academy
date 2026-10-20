"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, CheckCircle, CalendarDays, Users, LogOut, Bell, Briefcase, FileCheck } from "lucide-react";
import PortalLogin from "@/components/ui/PortalLogin";

/*
 * POSTGRES SCHEMA:
 * CREATE TABLE graduates (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   email VARCHAR(255) UNIQUE NOT NULL,
 *   password_hash VARCHAR(255) NOT NULL,
 *   full_name VARCHAR(255) NOT NULL,
 *   student_id VARCHAR(50) UNIQUE NOT NULL,
 *   graduation_year INTEGER,
 *   certificate_id VARCHAR(100) UNIQUE,
 *   certificate_status VARCHAR(20) DEFAULT 'verified',
 *   current_occupation VARCHAR(255),
 *   created_at TIMESTAMP DEFAULT NOW()
 * );
 * CREATE TABLE alumni_events (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   title VARCHAR(255), description TEXT,
 *   event_date DATE, location VARCHAR(255),
 *   created_at TIMESTAMP DEFAULT NOW()
 * );
 */

export default function GraduatePortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) return <PortalLogin role="Graduate" accentColor="var(--gold)" accentBg="#FFFBEB" onLogin={() => setLoggedIn(true)} />;

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full p-0.5 border-2 border-[var(--gold)] overflow-hidden"><Image src="/safwa.png" alt="Logo" fill className="object-cover rounded-full" /></div>
            <div><p className="font-[Playfair] font-bold text-[var(--navy)] text-sm">Graduate Portal</p><p className="text-[10px] text-slate-400">AS SAFWATUL-MALA</p></div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-slate-100"><Bell className="h-5 w-5 text-slate-500" /><span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" /></button>
            <button onClick={() => setLoggedIn(false)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50"><LogOut className="h-3.5 w-3.5" /> Logout</button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-[Playfair] text-2xl sm:text-3xl font-bold text-[var(--navy)]">As-salamu alaykum, Yusuf!</h1>
          <p className="text-slate-500 text-sm mt-1">Welcome to your alumni network. Class of 2023.</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[{ icon: Award, label: "Graduation", value: "2023", c: "var(--gold)" },{ icon: CheckCircle, label: "Certificate", value: "Verified", c: "var(--ocean)" },{ icon: CalendarDays, label: "Upcoming Events", value: "3", c: "var(--orange)" },{ icon: Users, label: "Network", value: "45", c: "var(--navy)" }].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3" style={{ background: s.c + "15", color: s.c }}><s.icon className="h-5 w-5" /></div>
              <p className="text-2xl font-bold text-[var(--navy)]">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="font-bold text-[var(--navy)] mb-4 flex items-center gap-2"><FileCheck className="h-4 w-4 text-[var(--gold)]" /> Recent Activity</h2>
            <div className="space-y-3">
              {[{ t: "Certificate verified by employer request", d: "1 day ago", c: "var(--gold)" },{ t: "RSVP confirmed - Annual Alumni Meetup", d: "3 days ago", c: "var(--orange)" },{ t: "New job posting matched your profile", d: "1 week ago", c: "var(--ocean)" },{ t: "Profile updated with new qualification", d: "2 weeks ago", c: "var(--navy)" }].map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50">
                  <div className="h-2 w-2 rounded-full mt-1.5 flex-none" style={{ background: a.c }} />
                  <div><p className="text-sm font-medium text-[var(--navy)]">{a.t}</p><p className="text-[11px] text-slate-400">{a.d}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="font-bold text-[var(--navy)] mb-4 flex items-center gap-2"><Briefcase className="h-4 w-4 text-[var(--gold)]" /> Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Verify Certificate", "Update Profile", "Browse Jobs", "Alumni Network", "Upcoming Events", "Contact Academy"].map((a, i) => (
                <button key={i} className="p-4 rounded-xl border border-slate-200 hover:shadow-md transition text-sm font-semibold text-[var(--navy)] hover:border-[var(--gold)]">
                  {a}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
