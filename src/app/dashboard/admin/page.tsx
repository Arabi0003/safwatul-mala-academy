'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  Shield, LogOut, Settings, Bell, ChevronRight,
  GraduationCap, UserCheck, FileText, BarChart3,
  BookOpen, DollarSign, Users, RefreshCw, Mail, Phone
} from 'lucide-react'

interface Registration {
  id: string; full_name: string; email: string; phone: string
  course: string; created_at: string; status: string
}

const stats = [
  { label: 'Total Students', value: '248', change: '+12%', icon: GraduationCap, color: 'from-blue-500 to-cyan-600' },
  { label: 'Active Courses', value: '10', change: '+2', icon: BookOpen, color: 'from-emerald-500 to-teal-600' },
  { label: 'Revenue (MTD)', value: '\u20A64.2M', change: '+18%', icon: DollarSign, color: 'from-yellow-500 to-orange-600' },
  { label: 'Enrollments', value: '67', change: '+8%', icon: UserCheck, color: 'from-purple-500 to-violet-600' },
]

export default function AdminDashboard() {
  const router = useRouter()
  const [userName, setUserName] = useState('Admin')
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loadingReg, setLoadingReg] = useState(true)

  useEffect(() => {
    const name = document.cookie.split('; ').find((r) => r.startsWith('user_name='))?.split('=')[1]
    if (name) setUserName(decodeURIComponent(name))
    loadRegistrations()
  }, [])

  const loadRegistrations = async () => {
    setLoadingReg(true)
    try {
      const supabase = createClient()
      const { data } = await supabase
        .from('registrations')
        .select('id, full_name, email, phone, course, created_at, status')
        .order('created_at', { ascending: false })
        .limit(20)
      if (data) setRegistrations(data)
    } catch { /* ignore */ }
    setLoadingReg(false)
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    router.push('/portal')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-[#021a13] to-[#010d09]">
      <header className="sticky top-0 z-40 border-b border-emerald-800/20 bg-emerald-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center"><Shield className="h-5 w-5 text-white" /></div>
            <div><h1 className="text-sm font-bold text-white">Super Admin</h1><p className="text-[10px] text-emerald-400/40">Safwatulmala Academy</p></div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative h-9 w-9 rounded-xl bg-emerald-900/30 flex items-center justify-center text-emerald-400/50 hover:text-white"><Bell className="h-4 w-4" /><span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-emerald-950" /></button>
            <div className="hidden sm:block text-right"><p className="text-xs font-medium text-white">{userName}</p><p className="text-[10px] text-emerald-400/40">Super Admin</p></div>
            <button onClick={handleLogout} className="h-9 w-9 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 hover:bg-red-500/20"><LogOut className="h-4 w-4" /></button>
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

        {/* Registrations Table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="rounded-2xl border border-emerald-700/20 bg-emerald-900/20 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2"><Users className="h-4 w-4 text-emerald-400" /> Recent Registrations ({registrations.length})</h3>
            <button onClick={loadRegistrations} className="h-8 w-8 rounded-lg bg-emerald-800/30 flex items-center justify-center text-emerald-400/50 hover:text-white transition-colors"><RefreshCw className="h-3.5 w-3.5" /></button>
          </div>
          {loadingReg ? (
            <div className="text-center py-8"><RefreshCw className="mx-auto h-6 w-6 text-emerald-400/30 animate-spin" /><p className="text-xs text-emerald-400/30 mt-2">Loading...</p></div>
          ) : registrations.length === 0 ? (
            <div className="text-center py-8"><p className="text-sm text-emerald-400/30">No registrations yet.</p></div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-emerald-800/20">
                    <th className="text-left py-2 px-3 text-xs font-medium text-emerald-400/50">Name</th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-emerald-400/50 hidden sm:table-cell">Email</th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-emerald-400/50 hidden md:table-cell">Phone</th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-emerald-400/50">Course</th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-emerald-400/50 hidden lg:table-cell">Date</th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-emerald-400/50">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {registrations.map((r) => (
                    <tr key={r.id} className="border-b border-emerald-800/10 hover:bg-emerald-800/10 transition-colors">
                      <td className="py-3 px-3 text-white font-medium">{r.full_name}</td>
                      <td className="py-3 px-3 text-emerald-300/50 hidden sm:table-cell">{r.email}</td>
                      <td className="py-3 px-3 text-emerald-300/50 hidden md:table-cell">{r.phone}</td>
                      <td className="py-3 px-3 text-emerald-300/70">{r.course}</td>
                      <td className="py-3 px-3 text-emerald-400/30 hidden lg:table-cell">{new Date(r.created_at).toLocaleDateString()}</td>
                      <td className="py-3 px-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${r.status === 'pending' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-emerald-500/10 text-emerald-400'}`}>{r.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="rounded-2xl border border-emerald-700/20 bg-emerald-900/20 p-6">
          <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2"><Settings className="h-4 w-4 text-emerald-400" /> Quick Actions</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['Manage Students', 'Manage Teachers', 'View Payments', 'Add Course', 'Send Announcement', 'System Settings'].map((a) => (
              <button key={a} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-emerald-200/60 hover:bg-emerald-800/20 hover:text-white transition-colors">{a}<ChevronRight className="h-3.5 w-3.5 opacity-30" /></button>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}