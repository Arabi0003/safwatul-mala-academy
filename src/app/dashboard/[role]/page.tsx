'use client';
import React, { use } from 'react';
import { Users, GraduationCap, TrendingUp, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Dashboard({ params }: { params: Promise<{ role: string }> }) {
  const resolvedParams = use(params);
  const roleName = resolvedParams.role.toUpperCase();

  // Dynamic greeting based on time
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';

  return (
    <div className="max-w-7xl mx-auto space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-emerald-900 mb-1">{greeting}!</h1>
          <p className="text-slate-500 font-medium">Here is what is happening in the academy today.</p>
        </div>
        <button className="px-6 py-2.5 bg-emerald-950 text-white rounded-xl font-bold hover:bg-emerald-900 transition-colors shadow-lg shadow-emerald-900/20">
          + Quick Action
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Students', value: '1,248', trend: '+12% this month', icon: <Users size={24}/>, color: 'text-emerald-600', bg: 'bg-emerald-100' },
          { title: 'Active Classes', value: '42', trend: 'Ongoing right now', icon: <BookOpen size={24}/>, color: 'text-teal-600', bg: 'bg-teal-100' },
          { title: 'Average Attendance', value: '94.5%', trend: '+2.1% from last week', icon: <TrendingUp size={24}/>, color: 'text-green-600', bg: 'bg-green-100' },
          { title: 'Pending Reviews', value: '18', trend: 'Requires attention', icon: <AlertCircle size={24}/>, color: 'text-red-600', bg: 'bg-red-100' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
            </div>
            <h3 className="text-slate-500 font-bold text-sm mb-1">{stat.title}</h3>
            <p className="text-3xl font-black text-emerald-900 mb-2">{stat.value}</p>
            <p className="text-xs font-bold text-slate-400">{stat.trend}</p>
          </div>
        ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Activity Table */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-emerald-900">Recent Registrations</h2>
            <button className="text-sm font-bold text-teal-600 hover:text-teal-700">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-100">
                  <th className="pb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Student Name</th>
                  <th className="pb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Program</th>
                  <th className="pb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Date</th>
                  <th className="pb-3 text-xs font-bold uppercase tracking-wider text-slate-400">Status</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { name: 'Abdullah Ibrahim', prog: 'Hifz Program', date: 'Oct 24, 2024', status: 'Admitted', color: 'bg-green-100 text-green-700' },
                  { name: 'Aisha Muhammad', prog: 'Arabic Immersion', date: 'Oct 23, 2024', status: 'Pending', color: 'bg-teal-100 text-teal-700' },
                  { name: 'Umar Farooq', prog: 'Standard Academic', date: 'Oct 22, 2024', status: 'Admitted', color: 'bg-green-100 text-green-700' },
                  { name: 'Fatima Sani', prog: 'Weekend Islamiyyah', date: 'Oct 22, 2024', status: 'Reviewed', color: 'bg-emerald-100 text-emerald-700' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-slate-50 hover:bg-emerald-50/50 transition-colors">
                    <td className="py-4 font-bold text-emerald-900">{row.name}</td>
                    <td className="py-4 font-medium text-slate-500">{row.prog}</td>
                    <td className="py-4 font-medium text-slate-500">{row.date}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${row.color}`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Schedule Widget */}
        <div className="bg-gradient-to-br from-emerald-950 to-slate-900 rounded-3xl shadow-xl p-6 text-white relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-teal-500/20 blur-3xl rounded-full pointer-events-none"></div>
          
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
            <Calendar className="text-teal-400" /> Upcoming Schedule
          </h2>
          
          <div className="space-y-4 relative z-10">
            {[
              { time: '08:00 AM', event: 'Morning Assembly', desc: 'Main Courtyard' },
              { time: '09:30 AM', event: 'Advanced Tajweed', desc: 'Classroom A2' },
              { time: '11:15 AM', event: 'Staff Briefing', desc: 'Conference Room' },
              { time: '02:00 PM', event: 'Zuhr Prayer & Break', desc: 'Academy Mosque' },
            ].map((schedule, i) => (
              <div key={i} className="flex gap-4 items-start group cursor-pointer">
                <div className="w-16 flex-shrink-0 text-right mt-1">
                  <p className="text-xs font-bold text-slate-400 group-hover:text-teal-400 transition-colors">{schedule.time}</p>
                </div>
                <div className="relative pb-6 border-l border-white/20 pl-4 last:border-0 last:pb-0">
                  <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-slate-600 group-hover:bg-teal-400 transition-colors ring-4 ring-emerald-950"></div>
                  <p className="font-bold text-white">{schedule.event}</p>
                  <p className="text-sm text-slate-400 mt-1">{schedule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// Temporary icon fallback to avoid missing lucide imports
function BookOpen({ size }: { size: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
}