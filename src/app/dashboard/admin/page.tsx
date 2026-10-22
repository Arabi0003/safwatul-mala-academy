'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Shield, Users, BookOpen, DollarSign, LogOut, Settings, Bell, ChevronRight, GraduationCap, UserCheck, FileText, BarChart3 } from 'lucide-react'
const stats = [
  { label: 'Total Students', value: '248', change: '+12%', icon: GraduationCap, color: 'from-blue-500 to-cyan-600' },
  { label: 'Active Courses', value: '10', change: '+2', icon: BookOpen, color: 'from-emerald-500 to-teal-600' },
  { label: 'Revenue (MTD)', value: '\u20A64.2M', change: '+18%', icon: DollarSign, color: 'from-yellow-500 to-orange-600' },
  { label: 'Enrollments', value: '67', change: '+8%', icon: UserCheck, color: 'from-purple-500 to-violet-600' },
]
const recentActivity = [
  { action: 'New enrollment', detail: 'Ahmad Ibrahim enrolled in Qur\'anic Studies', time: '2 min ago', icon: UserCheck },
  { action: 'Payment received', detail: '\u20A666,000 via Paystack', time: '15 min ago', icon: DollarSign },
  { action: 'Grade submitted', detail: 'Tajweed Mid-term by Ustadh Yusuf', time: '1 hr ago', icon: FileText },
  { action: 'New student', detail: 'Fatima Abdullahi registered', time: '3 hrs ago', icon: GraduationCap },
]
export default function AdminDashboard() {
  const router = useRouter()
  const [userName, setUserName] = useState('Admin')
  useEffect(() => {
    const name = document.cookie.split('; ').find((r) => r.startsWith('user_name='))?.split('=')[1]
    if (name) setUserName(decodeURIComponent(name))
  }, [])
  const handleLogout = async () => { await fetch('/api/auth/logout', { method: 'POST' }); router.push('/portal') }
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-[#021a13] to-[#010d09]">
      <header className="sticky top-0 z-40 border-b border-emerald-800/20 bg-emerald-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center"><Shield className="h-5 w-5 text-white" /></div>
            <div><h1 className="text-sm font-bold text-white">Super Admin</h1><p className="text-[10px] text-emerald-400/40">Safwatulmala Academy</p></div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative h-9 w-9 rounded-xl bg-emerald-900/30 flex items-center justify-center text-emerald-400/50 hover:text-white transition-colors"><Bell className="h-4 w-4" /><span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-emerald-950" /></button>
            <div className="hidden sm:block text-right"><p className="text-xs font-medium text-white">{userName}</p><p className="text-[10px] text-emerald-400/40">Super Admin</p></div>
            <button onClick={handleLogout} className="h-9 w-9 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors"><LogOut className="h-4 w-4" /></button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h2 className="text-2xl font-bold text-white">Welcome back, {userName}</h2>
          <p className="text-sm text-emerald-300/40 mt-1">Here is what is happening at your academy today.</p>
        </motion.div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((s, i) => { const Icon = s.icon; return (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-emerald-700/20 bg-emerald-900/20 p-5 hover:border-emerald-500/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className={'h-10 w-10 rounded-xl bg-gradient-to-br ' + s.color + ' flex items-center justify-center shadow-lg'}><Icon className="h-5 w-5 text-white" /></div>
                <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">{s.change}</span>
              </div>
              <p className="text-2xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-emerald-400/40 mt-0.5">{s.label}</p>
            </motion.div>
          )})}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl border border-emerald-700/20 bg-emerald-900/20 p-6">
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Settings className="h-4 w-4 text-emerald-400" /> Quick Actions</h3>
            <div className="space-y-2">
              {['Manage Students','Manage Teachers','View Payments','Add Course','Send Announcement','System Settings'].map((a) => (
                <button key={a} className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm text-emerald-200/60 hover:bg-emerald-800/20 hover:text-white transition-colors">{a}<ChevronRight className="h-3.5 w-3.5 opacity-30" /></button>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="lg:col-span-2 rounded-2xl border border-emerald-700/20 bg-emerald-900/20 p-6">
            <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><BarChart3 className="h-4 w-4 text-emerald-400" /> Recent Activity</h3>
            <div className="space-y-3">
              {recentActivity.map((a, i) => { const Icon = a.icon; return (
                <div key={i} className="flex items-start gap-3 rounded-xl p-3 hover:bg-emerald-800/10 transition-colors">
                  <div className="h-8 w-8 rounded-lg bg-emerald-800/30 flex items-center justify-center flex-shrink-0 mt-0.5"><Icon className="h-4 w-4 text-emerald-400/60" /></div>
                  <div className="flex-1 min-w-0"><p className="text-sm font-medium text-white">{a.action}</p><p className="text-xs text-emerald-300/40 truncate">{a.detail}</p></div>
                  <span className="text-[10px] text-emerald-400/30 whitespace-nowrap">{a.time}</span>
                </div>
              )})}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
}