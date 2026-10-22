'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import {
  Search, BookOpen, Clock, Users, Star,
  X, Check, Sparkles, Award, Globe,
  BookMarked, Languages, Scale, Landmark, Heart, Megaphone,
  Loader2, Download, User, Mail, Phone
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'
import Image from 'next/image'

interface Course {
  id: string; title: string; description: string; price: number
  duration: string; students: string; level: string; icon: any
  color: string; features: string[]
}

const allCourses: Course[] = [
  { id: 'quranic', title: "Qur'anic Studies", description: 'Comprehensive Qur\'an memorization, recitation, and deep understanding of divine revelation with certified scholars.', price: 66000, duration: '12 Months', students: '240+', level: 'All Levels', icon: BookOpen, color: 'from-emerald-500 to-teal-600', features: ['Hifz Program', 'Tajweed Rules', 'Tafsir Classes', 'Weekly Tests'] },
  { id: 'arabic', title: 'Arabic Language', description: 'Master Arabic from beginner to advanced with native-speaking tutors.', price: 55000, duration: '10 Months', students: '180+', level: 'Beginner-Advanced', icon: Languages, color: 'from-teal-500 to-cyan-600', features: ['Nahw & Sarf', 'Conversation', 'Reading Fluency', 'Writing Skills'] },
  { id: 'tajweed', title: 'Tajweed Mastery', description: 'Perfect your Qur\'an recitation with makharij, sifaat, and advanced techniques.', price: 55000, duration: '8 Months', students: '150+', level: 'Intermediate', icon: BookMarked, color: 'from-emerald-400 to-green-600', features: ['Makharij Practice', 'Sifaat Rules', 'Waqf & Ibtida', 'Ijazah Prep'] },
  { id: 'tafsir', title: 'Tafsir (Qur\'anic Exegesis)', description: 'Deep dive into the meanings and wisdom behind every surah.', price: 60000, duration: '12 Months', students: '120+', level: 'Intermediate-Advanced', icon: Sparkles, color: 'from-green-500 to-emerald-700', features: ['Classical Tafsir', 'Asbab al-Nuzul', 'Thematic Study', 'Research Projects'] },
  { id: 'fiqh', title: 'Islamic Jurisprudence (Fiqh)', description: 'Study rulings of worship, transactions, and family law.', price: 50000, duration: '10 Months', students: '130+', level: 'All Levels', icon: Scale, color: 'from-teal-400 to-emerald-600', features: ['Ibadat Rulings', 'Mu\'amalat', 'Family Law', 'Comparative Fiqh'] },
  { id: 'hadith', title: 'Hadith Sciences', description: 'Explore the sayings and traditions of the Prophet with authentication.', price: 50000, duration: '10 Months', students: '110+', level: 'Intermediate', icon: Award, color: 'from-emerald-500 to-green-700', features: ['Sahih Collections', 'Mustalah al-Hadith', 'Rijal Studies', 'Fiqh al-Hadith'] },
  { id: 'aqeedah', title: 'Aqeedah (Islamic Creed)', description: 'Build a rock-solid foundation of Islamic belief.', price: 45000, duration: '8 Months', students: '160+', level: 'Beginner-Intermediate', icon: Landmark, color: 'from-cyan-500 to-teal-700', features: ['Tawheed', 'Pillars of Iman', 'Refuting Doubts', 'Classical Texts'] },
  { id: 'seerah', title: 'Islamic History & Seerah', description: 'Journey through the life of Prophet Muhammad and Islamic civilization.', price: 45000, duration: '8 Months', students: '140+', level: 'All Levels', icon: Globe, color: 'from-green-400 to-teal-600', features: ['Makkan Period', 'Madinan Period', 'Righteous Caliphs', 'Islamic Empires'] },
  { id: 'ethics', title: 'Islamic Ethics & Morals', description: 'Cultivate noble character through Adab and Akhlaq.', price: 40000, duration: '6 Months', students: '100+', level: 'All Levels', icon: Heart, color: 'from-emerald-400 to-teal-500', features: ['Purification of Heart', 'Prophetic Manners', 'Social Ethics', 'Self-Discipline'] },
  { id: 'dawah', title: "Da'wah & Communication", description: 'Learn the art of inviting others to Islam with wisdom.', price: 45000, duration: '6 Months', students: '90+', level: 'Intermediate', icon: Megaphone, color: 'from-teal-500 to-green-600', features: ['Da\'wah Methods', 'Public Speaking', 'Interfaith Dialogue', 'Media Skills'] },
]

const categories = ['All', "Qur'an", 'Arabic', 'Islamic Sciences', 'Personal Development']
function getCategory(id: string): string {
  if (['quranic', 'tajweed', 'tafsir'].includes(id)) return "Qur'an"
  if (id === 'arabic') return 'Arabic'
  if (['fiqh', 'hadith', 'aqeedah', 'seerah'].includes(id)) return 'Islamic Sciences'
  return 'Personal Development'
}
function formatPrice(n: number): string { return '\u20A6' + n.toLocaleString() }

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selected, setSelected] = useState<Course | null>(null)
  const [step, setStep] = useState<'form' | 'loading' | 'success'>('form')
  const [regId, setRegId] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [error, setError] = useState('')

  const filtered = allCourses.filter((c) => {
    const ms = c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase())
    const mc = category === 'All' || getCategory(c.id) === category
    return ms && mc
  })

  const handleRegister = async () => {
    if (!form.name || !form.email || !form.phone || !selected) return
    setError('')
    setStep('loading')
    try {
      const supabase = createClient()
      const { data, error: dbErr } = await supabase.from('registrations').insert({
        full_name: form.name, email: form.email, phone: form.phone, course: selected.title,
      }).select('id').single()
      if (dbErr) { setError(dbErr.message); setStep('form'); return }
      setRegId(data.id)
      setStep('success')
    } catch { setError('Network error'); setStep('form') }
  }

  const downloadPDF = async () => {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a5' })
    const em: [number, number, number] = [6, 78, 59]; const gd: [number, number, number] = [180, 140, 20]; const dk: [number, number, number] = [2, 44, 34]; const lt: [number, number, number] = [209, 250, 229]
    doc.setFillColor(255, 255, 255); doc.rect(0, 0, 148, 210, 'F')
    doc.setDrawColor(...em); doc.setLineWidth(2); doc.rect(5, 5, 138, 200)
    doc.setDrawColor(...gd); doc.setLineWidth(0.5); doc.rect(8, 8, 132, 194)
    doc.setFillColor(...em); doc.roundedRect(12, 14, 124, 28, 3, 3, 'F')
    doc.setTextColor(255, 255, 255); doc.setFontSize(16); doc.setFont('helvetica', 'bold')
    doc.text('SAFWATULMALA ACADEMY', 74, 25, { align: 'center' })
    doc.setFontSize(7); doc.setFont('helvetica', 'normal')
    doc.text('Excellence in Islamic Education', 74, 31, { align: 'center' })
    doc.setTextColor(...em); doc.setFontSize(9); doc.setFont('helvetica', 'italic')
    doc.text('Bismillahir Rahmanir Raheem', 74, 49, { align: 'center' })
    doc.setTextColor(...dk); doc.setFontSize(13); doc.setFont('helvetica', 'bold')
    doc.text('REGISTRATION CONFIRMATION', 74, 58, { align: 'center' })
    const details: [string, string][] = [
      ['Registration ID', regId.substring(0, 8).toUpperCase()],
      ['Full Name', form.name], ['Email', form.email], ['Phone', form.phone],
      ['Course', selected?.title || ''], ['Date', new Date().toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })],
    ]
    let y = 68
    details.forEach(([l, v], i) => {
      doc.setFillColor(...(i % 2 === 0 ? lt : [245, 255, 250] as [number, number, number]))
      doc.roundedRect(14, y - 4, 120, 8, 1, 1, 'F')
      doc.setTextColor(...em); doc.setFontSize(7.5); doc.setFont('helvetica', 'bold'); doc.text(l, 17, y)
      doc.setTextColor(30, 30, 30); doc.setFont('helvetica', 'normal'); doc.text(v, 62, y)
      y += 9
    })
    doc.setFillColor(...em); doc.roundedRect(30, y + 5, 88, 12, 2, 2, 'F')
    doc.setTextColor(255, 255, 255); doc.setFontSize(10); doc.setFont('helvetica', 'bold')
    doc.text('Jazakallahu Khairan', 74, y + 12, { align: 'center' })
    doc.save('Safwatulmala_' + regId.substring(0, 8) + '.pdf')
  }

  const closeModal = () => { setSelected(null); setStep('form'); setForm({ name: '', email: '', phone: '' }); setError('') }
  const inputCls = 'w-full rounded-xl border border-emerald-700/30 bg-emerald-900/30 px-4 py-3 text-sm text-white placeholder:text-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/40'

  return (
    <>
      <PageHero title="Our Courses" subtitle="Embark on a transformative journey of Islamic knowledge with world-class scholars." />
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-emerald-950 via-[#021a13] to-[#010d09]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/60" />
                <input type="text" placeholder="Search courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-emerald-700/30 bg-emerald-900/30 pl-11 pr-4 py-3 text-sm text-white placeholder:text-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button key={cat} onClick={() => setCategory(cat)} className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${category === cat ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25' : 'bg-emerald-900/30 text-emerald-300/60 border border-emerald-700/20 hover:bg-emerald-800/30'}`}>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-emerald-400/50">Showing {filtered.length} of {allCourses.length} courses</p>
          </motion.div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, i) => {
              const Icon = course.icon
              return (
                <motion.div key={course.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.06 }} whileHover={{ y: -6 }} className="group relative rounded-2xl border border-emerald-700/20 bg-gradient-to-b from-emerald-900/40 to-emerald-950/60 backdrop-blur-sm overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10">
                  <div className={`h-1 w-full bg-gradient-to-r ${course.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.color} shadow-lg`}><Icon className="h-6 w-6 text-white" /></div>
                      <div className="text-right"><p className="text-xl font-bold text-white">{formatPrice(course.price)}</p><p className="text-[10px] text-emerald-400/50 uppercase tracking-wider">per session</p></div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{course.title}</h3>
                    <p className="text-sm text-emerald-200/50 leading-relaxed mb-4 line-clamp-2">{course.description}</p>
                    <div className="flex items-center gap-4 mb-4 text-xs text-emerald-400/50">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{course.students}</span>
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" />{course.level}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.features.map((f) => (<span key={f} className="rounded-full bg-emerald-800/30 px-2.5 py-1 text-[10px] text-emerald-300/60 border border-emerald-700/20">{f}</span>))}
                    </div>
                    <button onClick={() => setSelected(course)} className={`w-full rounded-xl bg-gradient-to-r ${course.color} py-3 text-sm font-semibold text-white shadow-lg opacity-90 hover:opacity-100 transition-all flex items-center justify-center gap-2`}>
                      <User className="h-4 w-4" /> Register Now
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
          {filtered.length === 0 && (<div className="text-center py-20"><BookOpen className="mx-auto h-12 w-12 text-emerald-600/30 mb-4" /><p className="text-lg text-emerald-300/40">No courses match your search.</p></div>)}
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={closeModal}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: 'spring', damping: 25 }} onClick={(e) => e.stopPropagation()} className="w-full max-w-md rounded-2xl bg-gradient-to-b from-emerald-950 to-[#010d09] border border-emerald-700/30 shadow-2xl overflow-hidden">
              <div className={`relative p-6 bg-gradient-to-r ${selected.color}`}>
                <button onClick={closeModal} className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30"><X className="h-4 w-4" /></button>
                <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Registration</p>
                <h3 className="text-xl font-bold text-white">{selected.title}</h3>
                <p className="text-2xl font-bold text-white mt-2">{formatPrice(selected.price)}</p>
              </div>
              <div className="p-6">
                {step === 'form' && (
                  <div className="space-y-4">
                    {error && <div className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm text-red-400">{error}</div>}
                    <div className="text-center mb-2">
                      <div className="relative mx-auto h-12 w-12 mb-2"><Image src="/safwa.png" alt="Logo" fill className="object-contain rounded-xl" /></div>
                      <p className="text-xs text-emerald-400/40">Safwatulmala Academy</p>
                    </div>
                    <div><label className="block text-xs font-medium text-emerald-300/60 mb-1.5">Full Name</label><input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Muhammad Abdullah" className={inputCls} /></div>
                    <div><label className="block text-xs font-medium text-emerald-300/60 mb-1.5">Email</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className={inputCls} /></div>
                    <div><label className="block text-xs font-medium text-emerald-300/60 mb-1.5">Phone</label><input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+234 800 000 0000" className={inputCls} /></div>
                    <button onClick={handleRegister} disabled={!form.name || !form.email || !form.phone} className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-white shadow-lg disabled:opacity-40 flex items-center justify-center gap-2">
                      <User className="h-4 w-4" /> Register for {selected.title}
                    </button>
                  </div>
                )}
                {step === 'loading' && (
                  <div className="flex flex-col items-center py-12">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-12 w-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 mb-4" />
                    <p className="text-sm text-emerald-300/60">Registering...</p>
                  </div>
                )}
                {step === 'success' && (
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center py-6">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4"><Check className="h-8 w-8 text-emerald-400" /></motion.div>
                    <h4 className="text-lg font-bold text-white mb-1">Registration Complete!</h4>
                    <p className="text-sm text-emerald-300/50 text-center mb-1">You are enrolled in {selected.title}</p>
                    <p className="text-xs text-emerald-400/30 mb-4">Ref: {regId.substring(0, 8).toUpperCase()}</p>
                    <button onClick={downloadPDF} className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-2.5 text-sm font-semibold text-white flex items-center gap-2 mb-3"><Download className="h-4 w-4" /> Download PDF Slip</button>
                    <button onClick={closeModal} className="text-sm text-emerald-400/50 hover:text-emerald-300">Close</button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}