'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Shield, Lock, Mail, Eye, EyeOff, Loader2 } from 'lucide-react'
export default function AdminPortal() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
      const data = await res.json()
      if (!res.ok) { setError(data.error || 'Login failed'); setLoading(false); return }
      if (data.role !== 'super_admin' && data.role !== 'admin') { setError('Access denied. Admin role required.'); setLoading(false); return }
      router.push('/dashboard/admin')
    } catch { setError('Network error.'); setLoading(false) }
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0000] via-[#0d0000] to-[#010d09] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-[100px]" animate={{ scale: [1,1.2,1] }} transition={{ repeat: Infinity, duration: 4 }} />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative w-full max-w-md">
        <div className="rounded-2xl border border-red-800/20 bg-gradient-to-b from-red-950/30 to-emerald-950/30 backdrop-blur-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="mx-auto mb-4 h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-700 flex items-center justify-center shadow-xl shadow-red-500/20">
              <Shield className="h-8 w-8 text-white" />
            </motion.div>
            <h1 className="text-2xl font-bold text-white">Super Admin</h1>
            <p className="text-sm text-red-300/40 mt-1">Safwatulmala Academy Control Panel</p>
          </div>
          {error && <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">{error}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-red-300/50 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-400/30" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="superadmin@safwa.com" className="w-full rounded-xl border border-red-800/20 bg-red-950/20 pl-10 pr-4 py-3 text-sm text-white placeholder:text-red-400/20 focus:outline-none focus:ring-2 focus:ring-red-500/30" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-red-300/50 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-red-400/30" />
                <input type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Enter password" className="w-full rounded-xl border border-red-800/20 bg-red-950/20 pl-10 pr-10 py-3 text-sm text-white placeholder:text-red-400/20 focus:outline-none focus:ring-2 focus:ring-red-500/30" />
                <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400/30 hover:text-red-400/60">{show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full mt-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 py-3.5 text-sm font-bold text-white shadow-lg disabled:opacity-50 flex items-center justify-center gap-2">
              {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Signing in...</> : <><Shield className="h-4 w-4" /> Access Control Panel</>}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}