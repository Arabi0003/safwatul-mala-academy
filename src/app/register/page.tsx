'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import {
  User, Mail, Phone, BookOpen, Calendar, Users,
  MapPin, GraduationCap, MessageCircle, Loader2,
  Check, Download, ArrowLeft, Shield
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

  const inputClass = 'w-full rounded-xl border border-emerald-700/30 bg-emerald-900/30 px-4 py-3 text-sm text-white placeholder:text-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 transition-all'
  const labelClass = 'block text-xs font-medium text-emerald-300/60 mb-1.5'

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-[#021a13] to-[#010d09] py-8 px-4">
      <div className="mx-auto max-w-2xl">
        {/* Logo + Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-emerald-400/60 hover:text-emerald-300 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="relative mx-auto h-20 w-20 mb-4">
            <Image src="/safwa.png" alt="Safwatulmala" fill className="object-contain rounded-2xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Student Registration</h1>
          <p className="text-sm text-emerald-300/40 mt-2">Join Safwatulmala Academy — Begin your journey of knowledge</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-emerald-700/20 bg-emerald-900/20 backdrop-blur-xl p-6 sm:p-8 shadow-2xl"
            >
              {error && (
                <div className="mb-4 rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-3 text-sm text-red-400">{error}</div>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass}>Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/30" />
                    <input type="text" value={form.full_name} onChange={set('full_name')} required placeholder="Muhammad Abdullah" className={inputClass + ' pl-10'} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/30" />
                    <input type="email" value={form.email} onChange={set('email')} required placeholder="you@example.com" className={inputClass + ' pl-10'} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/30" />
                    <input type="tel" value={form.phone} onChange={set('phone')} required placeholder="+234 800 000 0000" className={inputClass + ' pl-10'} />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>Course *</label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/30" />
                    <select value={form.course} onChange={set('course')} required className={inputClass + ' pl-10 appearance-none'}>
                      <option value="">Select a course</option>
                      {courses.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Age</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/30" />
                    <input type="number" value={form.age} onChange={set('age')} placeholder="e.g. 18" min="5" max="80" className={inputClass + ' pl-10'} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Gender</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/30" />
                    <select value={form.gender} onChange={set('gender')} className={inputClass + ' pl-10 appearance-none'}>
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>Home Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-emerald-400/30" />
                    <textarea value={form.address} onChange={set('address')} rows={2} placeholder="Your residential address" className={inputClass + ' pl-10 resize-none'} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Guardian / Parent Name</label>
                  <input type="text" value={form.guardian_name} onChange={set('guardian_name')} placeholder="Guardian full name" className={inputClass} />
                </div>

                <div>
                  <label className={labelClass}>Previous Education</label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/30" />
                    <input type="text" value={form.previous_education} onChange={set('previous_education')} placeholder="e.g. Secondary School" className={inputClass + ' pl-10'} />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass}>How did you hear about us?</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/30" />
                    <select value={form.referral_source} onChange={set('referral_source')} className={inputClass + ' pl-10 appearance-none'}>
                      <option value="">Select</option>
                      {referrals.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-emerald-500/25 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Registering...</> : <><Shield className="h-4 w-4" /> Complete Registration</>}
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-2xl border border-emerald-500/30 bg-emerald-900/20 backdrop-blur-xl p-8 text-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
                className="mx-auto mb-4 h-20 w-20 rounded-full bg-emerald-500/20 flex items-center justify-center"
              >
                <Check className="h-10 w-10 text-emerald-400" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
              <p className="text-sm text-emerald-300/50 mb-2">Welcome to Safwatulmala Academy, {form.full_name}!</p>
              <p className="text-xs text-emerald-400/30 mb-6">Ref: {regId.substring(0, 8).toUpperCase()}</p>

              <button
                onClick={downloadPDF}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3 text-sm font-bold text-white shadow-lg hover:shadow-emerald-500/25 transition-all mb-4"
              >
                <Download className="h-4 w-4" /> Download Registration Slip (PDF)
              </button>

              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-4">
                <Link href="/courses" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors">
                  Browse More Courses
                </Link>
                <Link href="/" className="text-sm text-emerald-400/50 hover:text-emerald-300 transition-colors">
                  Return Home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}