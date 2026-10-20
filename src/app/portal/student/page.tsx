"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, TrendingUp, Calendar, ClipboardList, LogOut, Bell, Clock, Award } from "lucide-react";
import PortalLogin from "@/components/ui/PortalLogin";

/*
 * POSTGRES SCHEMA (ready for backend integration):
 * CREATE TABLE students (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   email VARCHAR(255) UNIQUE NOT NULL,
 *   password_hash VARCHAR(255) NOT NULL,
 *   full_name VARCHAR(255) NOT NULL,
 *   student_id VARCHAR(50) UNIQUE NOT NULL,
 *   class_level VARCHAR(50),
 *   hifz_juz INTEGER DEFAULT 0,
 *   enrollment_date DATE DEFAULT CURRENT_DATE,
 *   status VARCHAR(20) DEFAULT 'active',
 *   created_at TIMESTAMP DEFAULT NOW()
 * );
 * CREATE TABLE student_grades (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   student_id UUID REFERENCES students(id),
 *   subject VARCHAR(100), grade VARCHAR(10), score NUMERIC(5,2),
 *   term VARCHAR(20), created_at TIMESTAMP DEFAULT NOW()
 * );
 */

export default function StudentPortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) return <PortalLogin role="Student" accentColor="var(--ocean)" accentBg="#EFF6FF" onLogin={() => setLoggedIn(true)} />;

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full p-0.5 border-2 border-[var(--ocean)] overflow-hidden"><Image src="/safwa.png" alt="Logo" fill className="object-cover rounded-full" /></div>
            <div><p className="font-[Playfair] font-bold text-[var(--navy)] text-sm">Student Portal</p><p className="text-[10px] text-slate-400">AS SAFWATUL-MALA</p></div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-slate-100"><Bell className="h-5 w-5 text-slate-500" /><span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" /></button>
            <button onClick={() => setLoggedIn(false)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50"><LogOut className="h-3.5 w-3.5" /> Logout</button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-[Playfair] text-2xl sm:text-3xl font-bold text-[var(--navy)]">As-salamu alaykum, Ahmad!</h1>
          <p className="text-slate-500 text-sm mt-1">Welcome back. Here is your learning progress overview.</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[{ icon: BookOpen, label: "Courses", value: "6", c: "var(--ocean)" },{ icon: TrendingUp, label: "GPA", value: "3.8", c: "var(--orange)" },{ icon: Calendar, label: "Attendance", value: "95%", c: "var(--gold)" },{ icon: ClipboardList, label: "Pending", value: "3", c: "var(--sky)" }].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3" style={{ background: s.c + "15", color: s.c }}><s.icon className="h-5 w-5" /></div>
              <p className="text-2xl font-bold text-[var(--navy)]">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="font-bold text-[var(--navy)] mb-4 flex items-center gap-2"><Clock className="h-4 w-4 text-[var(--ocean)]" /> Recent Activity</h2>
            <div className="space-y-3">
              {[{ t: "Quran Hifz - Completed Surah Al-Mulk", d: "2 hours ago", c: "var(--ocean)" },{ t: "Arabic Grammar - Quiz Score: 92%", d: "Yesterday", c: "var(--orange)" },{ t: "Mathematics - Assignment Submitted", d: "2 days ago", c: "var(--gold)" },{ t: "Islamic Studies - Essay Graded: A", d: "3 days ago", c: "var(--sky)" }].map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50">
                  <div className="h-2 w-2 rounded-full mt-1.5 flex-none" style={{ background: a.c }} />
                  <div><p className="text-sm font-medium text-[var(--navy)]">{a.t}</p><p className="text-[11px] text-slate-400">{a.d}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="font-bold text-[var(--navy)] mb-4 flex items-center gap-2"><Award className="h-4 w-4 text-[var(--ocean)]" /> Today's Schedule</h2>
            <div className="space-y-3">
              {[{ time: "08:00", sub: "Quran Hifz (Juz 28)", who: "Ustadh Ibrahim" },{ time: "10:00", sub: "Arabic Language", who: "Ustadzah Fatimah" },{ time: "12:00", sub: "Dhuhr Prayer and Lunch", who: "" },{ time: "13:30", sub: "Mathematics", who: "Mr. Abdullah" },{ time: "15:00", sub: "Islamic Studies", who: "Sheikh Yusuf" }].map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50">
                  <span className="text-xs font-bold text-[var(--ocean)] w-12 flex-none">{s.time}</span>
                  <div><p className="text-sm font-semibold text-[var(--navy)]">{s.sub}</p>{s.who && <p className="text-[11px] text-slate-400">{s.who}</p>}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
