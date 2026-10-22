'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import {
  User, Mail, Phone, BookOpen, Calendar, Users,
  MapPin, GraduationCap, MessageCircle, Loader2,
  Check, Download, ArrowLeft, Shield, Sparkles
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const courses = [
  "Qur'anic Studies",
  'Arabic Language',
  'Tajweed Mastery',
  'Tafsir (Qur\'anic Exegesis)',
  'Islamic Jurisprudence (Fiqh)',
  'Hadith Sciences',
  'Aqeedah (Islamic Creed)',
  'Islamic History & Seerah',
  'Islamic Ethics & Morals',
  'Da\'wah & Communication',
]

const referrals = ['Social Media', 'Friend / Family', 'Mosque', 'Website', 'WhatsApp', 'Other']

interface FormData {
  full_name: string
  email: string
  phone: string
  course: string
  age: string
  gender: string
  address: string
  guardian_name: string
  previous_education: string
  referral_source: string
}

const empty: FormData = {
  full_name: '', email: '', phone: '', course: '',
  age: '', gender: '', address: '', guardian_name: '',
  previous_education: '', referral_source: '',
}

export default function RegisterPage() {
  const [form, setForm] = useState<FormData>(empty)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [regId, setRegId] = useState('')

  const set = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [key]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      const { data, error: dbError } = await supabase
        .from('registrations')
        .insert({
          full_name: form.full_name,
          email: form.email,
          phone: form.phone,
          course: form.course,
          age: form.age ? parseInt(form.age) : null,
          gender: form.gender || null,
          address: form.address || null,
          guardian_name: form.guardian_name || null,
          previous_education: form.previous_education || null,
          referral_source: form.referral_source || null,
        })
        .select('id')
        .single()

      if (dbError) {
        setError('Registration failed: ' + dbError.message)
        setLoading(false)
        return
      }

      setRegId(data.id)
      setSuccess(true)
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  const downloadPDF = async () => {
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a5' })

    const em: [number, number, number] = [6, 78, 59]
    const gd: [number, number, number] = [180, 140, 20]
    const dk: [number, number, number] = [2, 44, 34]
    const lt: [number, number, number] = [209, 250, 229]

    doc.setFillColor(255, 255, 255)
    doc.rect(0, 0, 148, 210, 'F')

    doc.setDrawColor(...em)
    doc.setLineWidth(2)
    doc.rect(5, 5, 138, 200)
    doc.setDrawColor(...gd)
    doc.setLineWidth(0.5)
    doc.rect(8, 8, 132, 194)

    const corners = [[12, 12], [136, 12], [12, 198], [136, 198]]
    corners.forEach(([cx, cy]) => {
      doc.setDrawColor(...gd)
      doc.setLineWidth(0.3)
      for (let i = 0; i < 8; i++) {
        const a = (i * Math.PI) / 4
        doc.line(cx, cy, cx + Math.cos(a) * 6, cy + Math.sin(a) * 6)
      }
      doc.setDrawColor(...em)
      doc.circle(cx, cy, 3, 'S')
    })

    doc.setFillColor(...em)
    doc.roundedRect(12, 14, 124, 28, 3, 3, 'F')

    doc.setDrawColor(...gd)
    doc.setLineWidth(0.8)
    doc.line(20, 40, 128, 40)

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('SAFWATULMALA ACADEMY', 74, 25, { align: 'center' })

    doc.setFontSize(7)
    doc.setFont('helvetica', 'normal')
    doc.text('Excellence in Islamic Education', 74, 31, { align: 'center' })

    doc.setFontSize(8)
    doc.text('www.safwatulmala-academy.vercel.app', 74, 37, { align: 'center' })

    doc.setTextColor(...em)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'italic')
    doc.text('Bismillahir Rahmanir Raheem', 74, 49, { align: 'center' })

    doc.setTextColor(...dk)
    doc.setFontSize(13)
    doc.setFont('helvetica', 'bold')
    doc.text('REGISTRATION CONFIRMATION', 74, 58, { align: 'center' })

    doc.setDrawColor(...gd)
    doc.setLineWidth(0.4)
    doc.line(35, 61, 113, 61)

    const details: [string, string][] = [
      ['Registration ID', regId.substring(0, 8).toUpperCase()],
      ['Full Name', form.full_name],
      ['Email Address', form.email],
      ['Phone Number', form.phone],
      ['Enrolled Course', form.course],
      ['Age', form.age || 'N/A'],
      ['Gender', form.gender || 'N/A'],
      ['Home Address', form.address || 'N/A'],
      ['Guardian Name', form.guardian_name || 'N/A'],
      ['Previous Education', form.previous_education || 'N/A'],
      ['Referral Source', form.referral_source || 'N/A'],
      ['Registration Date', new Date().toLocaleDateString('en-NG', { year: 'numeric', month: 'long', day: 'numeric' })],
    ]

    let y = 68
    details.forEach(([label, value], i) => {
      const bg: [number, number, number] = i % 2 === 0 ? lt : [245, 255, 250]
      doc.setFillColor(...bg)
      doc.roundedRect(14, y - 4, 120, 8, 1, 1, 'F')

      doc.setTextColor(...em)
      doc.setFontSize(7.5)
      doc.setFont('helvetica', 'bold')
      doc.text(label, 17, y)

      doc.setTextColor(30, 30, 30)
      doc.setFont('helvetica', 'normal')
      const v = value.length > 45 ? value.substring(0, 45) + '...' : value
      doc.text(v, 62, y)
      y += 9
    })

    doc.setDrawColor(...gd)
    doc.setLineWidth(0.5)
    doc.line(20, y + 3, 128, y + 3)

    doc.setFillColor(...em)
    doc.roundedRect(30, y + 7, 88, 12, 2, 2, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('Jazakallahu Khairan', 74, y + 14, { align: 'center' })

    doc.setTextColor(120, 120, 120)
    doc.setFontSize(6)
    doc.setFont('helvetica', 'normal')
    doc.text('This slip confirms your registration at Safwatulmala Academy.', 74, y + 24, { align: 'center' })
    doc.text('Please keep this for your records. Further details will be sent via email.', 74, y + 28, { align: 'center' })
    doc.text('Powered by Yalerima Technologies', 74, y + 34, { align: 'center' })

    doc.save('Safwatulmala_Registration_' + regId.substring(0, 8) + '.pdf')
  }

  const inputClass = 'w-full rounded-xl border border-teal-400/20 bg-white/5 backdrop-blur-sm px-4 py-3.5 text-sm text-white placeholder:text-teal-200/30 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400/30 focus:bg-white/10 transition-all duration-300'
  const labelClass = 'block text-xs font-semibold text-teal-200/70 mb-2 tracking-wide uppercase'

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Rich multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#0f172a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.08),_transparent_50%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%2310b981\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative z-10 py-10 px-4 sm:py-16">
        <div className="mx-auto max-w-2xl">
          {/* Logo + Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-teal-300/50 hover:text-amber-300 transition-colors mb-8 text-sm">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', delay: 0.15 }}
              className="relative mx-auto h-24 w-24 mb-5"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400/30 to-emerald-400/30 blur-xl" />
              <div className="relative h-full w-full rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-2 shadow-2xl shadow-emerald-500/20">
                <Image src="/safwa.png" alt="Safwatulmala" fill className="object-contain p-1" sizes="96px" />
              </div>
            </motion.div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-amber-400" />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400/80">Bismillahir Rahmanir Raheem</p>
              <Sparkles className="h-4 w-4 text-amber-400" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent mb-3">
              Student Registration
            </h1>
            <p className="text-sm text-teal-200/50 max-w-md mx-auto leading-relaxed">
              Begin your journey of knowledge at Safwatulmala Academy — where faith meets excellence.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
                className="relative rounded-3xl border border-white/10 bg-white/[0.07] backdrop-blur-2xl p-6 sm:p-10 shadow-2xl shadow-black/40"
              >
                {/* Gold top accent bar */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent rounded-full" />

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 rounded-2xl bg-red-500/10 border border-red-400/20 px-5 py-3.5 text-sm text-red-300"
                  >
                    {error}
                  </motion.div>
                )}

                {/* Section: Personal Info */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
                      <User className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h2 className="text-sm font-bold text-white/90 tracking-wide">Personal Information</h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-300/40" />
                        <input type="text" value={form.full_name} onChange={set('full_name')} required placeholder="Muhammad Abdullah" className={inputClass + ' pl-11'} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-300/40" />
                        <input type="email" value={form.email} onChange={set('email')} required placeholder="you@example.com" className={inputClass + ' pl-11'} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-300/40" />
                        <input type="tel" value={form.phone} onChange={set('phone')} required placeholder="+234 800 000 0000" className={inputClass + ' pl-11'} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Age</label>
                      <div className="relative">
                        <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-300/40" />
                        <input type="number" value={form.age} onChange={set('age')} placeholder="e.g. 18" min="5" max="80" className={inputClass + ' pl-11'} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Gender</label>
                      <div className="relative">
                        <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-300/40" />
                        <select value={form.gender} onChange={set('gender')} className={inputClass + ' pl-11 appearance-none'}>
                          <option value="" className="bg-emerald-950">Select</option>
                          <option value="Male" className="bg-emerald-950">Male</option>
                          <option value="Female" className="bg-emerald-950">Female</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent my-6" />

                {/* Section: Academic */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                      <BookOpen className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h2 className="text-sm font-bold text-white/90 tracking-wide">Academic Details</h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Preferred Course *</label>
                      <div className="relative">
                        <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-300/40" />
                        <select value={form.course} onChange={set('course')} required className={inputClass + ' pl-11 appearance-none'}>
                          <option value="" className="bg-emerald-950">Select a course</option>
                          {courses.map((c) => <option key={c} value={c} className="bg-emerald-950">{c}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Previous Education</label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-300/40" />
                        <input type="text" value={form.previous_education} onChange={set('previous_education')} placeholder="e.g. Secondary School" className={inputClass + ' pl-11'} />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>How did you hear about us?</label>
                      <div className="relative">
                        <MessageCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-teal-300/40" />
                        <select value={form.referral_source} onChange={set('referral_source')} className={inputClass + ' pl-11 appearance-none'}>
                          <option value="" className="bg-emerald-950">Select</option>
                          {referrals.map((r) => <option key={r} value={r} className="bg-emerald-950">{r}</option>)}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent my-6" />

                {/* Section: Contact */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <MapPin className="h-3.5 w-3.5 text-white" />
                    </div>
                    <h2 className="text-sm font-bold text-white/90 tracking-wide">Contact & Guardian</h2>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className={labelClass}>Home Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-teal-300/40" />
                        <textarea value={form.address} onChange={set('address')} rows={2} placeholder="Your residential address" className={inputClass + ' pl-11 resize-none'} />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label className={labelClass}>Guardian / Parent Name</label>
                      <input type="text" value={form.guardian_name} onChange={set('guardian_name')} placeholder="Guardian full name" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-2xl py-4 text-sm font-bold text-white shadow-xl shadow-emerald-900/40 transition-all duration-300 disabled:opacity-50 hover:shadow-emerald-500/30 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-300/20 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center justify-center gap-2.5">
                    {loading ? (
                      <><Loader2 className="h-4 w-4 animate-spin" /> Registering...</>
                    ) : (
                      <><Shield className="h-4 w-4" /> Complete Registration</>
                    )}
                  </span>
                </button>

                <p className="text-center text-[11px] text-teal-300/30 mt-4">
                  Your information is secure and will only be used for academy enrollment.
                </p>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 20 }}
                className="relative rounded-3xl border border-emerald-400/20 bg-white/[0.07] backdrop-blur-2xl p-8 sm:p-12 text-center shadow-2xl shadow-black/40"
              >
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent rounded-full" />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="relative mx-auto mb-6 h-24 w-24"
                >
                  <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-xl animate-pulse" />
                  <div className="relative h-full w-full rounded-full bg-gradient-to-br from-emerald-400/30 to-teal-500/30 border border-emerald-400/30 flex items-center justify-center">
                    <Check className="h-12 w-12 text-emerald-300" />
                  </div>
                </motion.div>

                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-emerald-100 to-teal-200 bg-clip-text text-transparent mb-3">
                  Registration Successful!
                </h2>
                <p className="text-sm text-teal-200/50 mb-1">
                  Welcome to Safwatulmala Academy, <span className="text-amber-300 font-semibold">{form.full_name}</span>!
                </p>
                <p className="text-xs text-teal-300/30 mb-8 tracking-wider">
                  Ref: {regId.substring(0, 8).toUpperCase()}
                </p>

                <button
                  onClick={downloadPDF}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-2xl px-8 py-3.5 text-sm font-bold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] mb-6"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Download className="relative z-10 h-4 w-4" />
                  <span className="relative z-10">Download Registration Slip (PDF)</span>
                </button>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/courses" className="text-sm text-teal-300 hover:text-amber-300 transition-colors font-medium">
                    Browse More Courses
                  </Link>
                  <span className="hidden sm:inline text-teal-500/30">|</span>
                  <Link href="/" className="text-sm text-teal-300/40 hover:text-teal-200 transition-colors">
                    Return Home
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}