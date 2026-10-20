"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, GraduationCap, DollarSign, UserPlus, LogOut, Bell, FileBarChart, Settings } from "lucide-react";
import PortalLogin from "@/components/ui/PortalLogin";

/*
 * POSTGRES SCHEMA:
 * CREATE TABLE staff (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   email VARCHAR(255) UNIQUE NOT NULL,
 *   password_hash VARCHAR(255) NOT NULL,
 *   full_name VARCHAR(255) NOT NULL,
 *   staff_id VARCHAR(50) UNIQUE NOT NULL,
 *   department VARCHAR(100),
 *   role VARCHAR(50),
 *   hire_date DATE DEFAULT CURRENT_DATE,
 *   status VARCHAR(20) DEFAULT 'active',
 *   created_at TIMESTAMP DEFAULT NOW()
 * );
 * CREATE TABLE enrollments (
 *   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *   student_name VARCHAR(255), parent_email VARCHAR(255),
 *   class_level VARCHAR(50), status VARCHAR(20) DEFAULT 'pending',
 *   processed_by UUID REFERENCES staff(id),
 *   created_at TIMESTAMP DEFAULT NOW()
 * );
 */

export default function StaffPortal() {
  const [loggedIn, setLoggedIn] = useState(false);
  if (!loggedIn) return <PortalLogin role="Staff" variant="staff" accentColor="var(--navy)" accentBg="#F1F5F9" onLogin={() => setLoggedIn(true)} />;

  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 rounded-full p-0.5 border-2 border-[var(--navy)] overflow-hidden"><Image src="/safwa.png" alt="Logo" fill className="object-cover rounded-full" /></div>
            <div><p className="font-[Playfair] font-bold text-[var(--navy)] text-sm">Staff Portal</p><p className="text-[10px] text-slate-400">AS SAFWATUL-MALA</p></div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-slate-100"><Bell className="h-5 w-5 text-slate-500" /><span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" /></button>
            <button onClick={() => setLoggedIn(false)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-red-600 hover:bg-red-50"><LogOut className="h-3.5 w-3.5" /> Logout</button>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="font-[Playfair] text-2xl sm:text-3xl font-bold text-[var(--navy)]">As-salamu alaykum, Admin!</h1>
          <p className="text-slate-500 text-sm mt-1">Academy operations dashboard. All systems operational.</p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[{ icon: Users, label: "Total Students", value: "342", c: "var(--navy)" },{ icon: GraduationCap, label: "Active Teachers", value: "28", c: "var(--orange)" },{ icon: DollarSign, label: "Revenue (Month)", value: "N2.4M", c: "var(--gold)" },{ icon: UserPlus, label: "Pending Admissions", value: "15", c: "var(--sky)" }].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-3" style={{ background: s.c + "15", color: s.c }}><s.icon className="h-5 w-5" /></div>
              <p className="text-2xl font-bold text-[var(--navy)]">{s.value}</p>
              <p className="text-xs text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="font-bold text-[var(--navy)] mb-4 flex items-center gap-2"><FileBarChart className="h-4 w-4 text-[var(--navy)]" /> Recent Operations</h2>
            <div className="space-y-3">
              {[{ t: "New enrollment processed - Ahmad Bello", d: "30 min ago", c: "var(--navy)" },{ t: "Fee payment received - N150,000", d: "2 hours ago", c: "var(--gold)" },{ t: "Staff leave approved - Ustadzah Amina", d: "Yesterday", c: "var(--orange)" },{ t: "Term report generated - All classes", d: "2 days ago", c: "var(--sky)" }].map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50">
                  <div className="h-2 w-2 rounded-full mt-1.5 flex-none" style={{ background: a.c }} />
                  <div><p className="text-sm font-medium text-[var(--navy)]">{a.t}</p><p className="text-[11px] text-slate-400">{a.d}</p></div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
            <h2 className="font-bold text-[var(--navy)] mb-4 flex items-center gap-2"><Settings className="h-4 w-4 text-[var(--navy)]" /> Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              {["Process Admission", "Generate Report", "Manage Payroll", "Send Notice", "Fee Collection", "Student Records"].map((a, i) => (
                <button key={i} className="p-4 rounded-xl border border-slate-200 hover:shadow-md transition text-sm font-semibold text-[var(--navy)] hover:border-[var(--orange)]">
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

