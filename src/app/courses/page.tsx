'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, BookOpen, Clock, Users, Star, CreditCard,
  X, Check, Sparkles, Award, Globe, Headphones,
  BookMarked, Languages, Scale, Landmark, Heart, Megaphone
} from 'lucide-react'
import PageHero from '@/components/ui/PageHero'

interface Course {
  id: string
  title: string
  description: string
  price: number
  duration: string
  students: string
  level: string
  icon: any
  color: string
  features: string[]
}

const allCourses: Course[] = [
  {
    id: 'quranic',
    title: "Qur'anic Studies",
    description: 'Comprehensive Qur\'an memorization, recitation, and deep understanding of divine revelation with certified scholars.',
    price: 66000,
    duration: '12 Months',
    students: '240+',
    level: 'All Levels',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-600',
    features: ['Hifz Program', 'Tajweed Rules', 'Tafsir Classes', 'Weekly Tests'],
  },
  {
    id: 'arabic',
    title: 'Arabic Language',
    description: 'Master Arabic from beginner to advanced — grammar, conversation, reading, and writing with native-speaking tutors.',
    price: 55000,
    duration: '10 Months',
    students: '180+',
    level: 'Beginner–Advanced',
    icon: Languages,
    color: 'from-teal-500 to-cyan-600',
    features: ['Nahw & Sarf', 'Conversation', 'Reading Fluency', 'Writing Skills'],
  },
  {
    id: 'tajweed',
    title: 'Tajweed Mastery',
    description: 'Perfect your Qur\'an recitation with the rules of Tajweed — makharij, sifaat, and advanced pronunciation techniques.',
    price: 55000,
    duration: '8 Months',
    students: '150+',
    level: 'Intermediate',
    icon: BookMarked,
    color: 'from-emerald-400 to-green-600',
    features: ['Makharij Practice', 'Sifaat Rules', 'Waqf & Ibtida', 'Ijazah Prep'],
  },
  {
    id: 'tafsir',
    title: 'Tafsir (Qur\'anic Exegesis)',
    description: 'Deep dive into the meanings, contexts, and wisdom behind every surah with classical and contemporary scholars.',
    price: 60000,
    duration: '12 Months',
    students: '120+',
    level: 'Intermediate–Advanced',
    icon: Sparkles,
    color: 'from-green-500 to-emerald-700',
    features: ['Classical Tafsir', 'Asbab al-Nuzul', 'Thematic Study', 'Research Projects'],
  },
  {
    id: 'fiqh',
    title: 'Islamic Jurisprudence (Fiqh)',
    description: 'Study the rulings of worship, transactions, family law, and daily life according to the four schools of thought.',
    price: 50000,
    duration: '10 Months',
    students: '130+',
    level: 'All Levels',
    icon: Scale,
    color: 'from-teal-400 to-emerald-600',
    features: ['Ibadat Rulings', 'Mu\'amalat', 'Family Law', 'Comparative Fiqh'],
  },
  {
    id: 'hadith',
    title: 'Hadith Sciences',
    description: 'Explore the sayings and traditions of the Prophet ﷺ — authentication, classification, and practical application.',
    price: 50000,
    duration: '10 Months',
    students: '110+',
    level: 'Intermediate',
    icon: Award,
    color: 'from-emerald-500 to-green-700',
    features: ['Sahih Collections', 'Mustalah al-Hadith', 'Rijal Studies', 'Fiqh al-Hadith'],
  },
  {
    id: 'aqeedah',
    title: 'Aqeedah (Islamic Creed)',
    description: 'Build a rock-solid foundation of Islamic belief — Tawheed, prophethood, the unseen, and the hereafter.',
    price: 45000,
    duration: '8 Months',
    students: '160+',
    level: 'Beginner–Intermediate',
    icon: Landmark,
    color: 'from-cyan-500 to-teal-700',
    features: ['Tawheed', 'Pillars of Iman', 'Refuting Doubts', 'Classical Texts'],
  },
  {
    id: 'seerah',
    title: 'Islamic History & Seerah',
    description: 'Journey through the life of Prophet Muhammad ﷺ and the golden age of Islamic civilization.',
    price: 45000,
    duration: '8 Months',
    students: '140+',
    level: 'All Levels',
    icon: Globe,
    color: 'from-green-400 to-teal-600',
    features: ['Makkan Period', 'Madinan Period', 'Righteous Caliphs', 'Islamic Empires'],
  },
  {
    id: 'ethics',
    title: 'Islamic Ethics & Morals',
    description: 'Cultivate noble character through the study of Adab, Akhlaq, and the spiritual diseases of the heart.',
    price: 40000,
    duration: '6 Months',
    students: '100+',
    level: 'All Levels',
    icon: Heart,
    color: 'from-emerald-400 to-teal-500',
    features: ['Purification of Heart', 'Prophetic Manners', 'Social Ethics', 'Self-Discipline'],
  },
  {
    id: 'dawah',
    title: "Da'wah & Communication",
    description: 'Learn the art of inviting others to Islam with wisdom, beautiful preaching, and effective communication skills.',
    price: 45000,
    duration: '6 Months',
    students: '90+',
    level: 'Intermediate',
    icon: Megaphone,
    color: 'from-teal-500 to-green-600',
    features: ['Da\'wah Methods', 'Public Speaking', 'Interfaith Dialogue', 'Media Skills'],
  },
]

const categories = ['All', "Qur'an", 'Arabic', 'Islamic Sciences', 'Personal Development']

function getCategory(id: string): string {
  if (['quranic', 'tajweed', 'tafsir'].includes(id)) return "Qur'an"
  if (['arabic'].includes(id)) return 'Arabic'
  if (['fiqh', 'hadith', 'aqeedah', 'seerah'].includes(id)) return 'Islamic Sciences'
  return 'Personal Development'
}

function formatPrice(n: number): string {
  return '\u20A6' + n.toLocaleString()
}

export default function CoursesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [payStep, setPayStep] = useState<'form' | 'loading' | 'success'>('form')
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })

  const filtered = allCourses.filter((c) => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.description.toLowerCase().includes(search.toLowerCase())
    const matchCat = category === 'All' || getCategory(c.id) === category
    return matchSearch && matchCat
  })

  const handlePay = () => {
    setPayStep('loading')
    setTimeout(() => setPayStep('success'), 2500)
  }

  const closeModal = () => {
    setSelectedCourse(null)
    setPayStep('form')
    setFormData({ name: '', email: '', phone: '' })
  }

  return (
    <>
      <PageHero
        title="Our Courses"
        subtitle="Embark on a transformative journey of Islamic knowledge with world-class scholars and structured curricula."

      />

      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-emerald-950 via-[#021a13] to-[#010d09]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-emerald-400/60" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-emerald-700/30 bg-emerald-900/30 pl-11 pr-4 py-3 text-sm text-white placeholder:text-emerald-400/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500/50 transition-all"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                      category === cat
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                        : 'bg-emerald-900/30 text-emerald-300/60 border border-emerald-700/20 hover:bg-emerald-800/30 hover:text-emerald-300'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-4 text-sm text-emerald-400/50">
              Showing {filtered.length} of {allCourses.length} courses
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((course, i) => {
              const Icon = course.icon
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl border border-emerald-700/20 bg-gradient-to-b from-emerald-900/40 to-emerald-950/60 backdrop-blur-sm overflow-hidden hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
                >
                  <div className={`h-1 w-full bg-gradient-to-r ${course.color}`} />

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${course.color} shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-white">{formatPrice(course.price)}</p>
                        <p className="text-[10px] text-emerald-400/50 uppercase tracking-wider">per session</p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-emerald-200/50 leading-relaxed mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 mb-4 text-xs text-emerald-400/50">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.duration}</span>
                      <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" />{course.students}</span>
                      <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5" />{course.level}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.features.map((f) => (
                        <span key={f} className="rounded-full bg-emerald-800/30 px-2.5 py-1 text-[10px] text-emerald-300/60 border border-emerald-700/20">
                          {f}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedCourse(course)}
                      className={`w-full rounded-xl bg-gradient-to-r ${course.color} py-3 text-sm font-semibold text-white shadow-lg opacity-90 hover:opacity-100 transition-all hover:shadow-emerald-500/20 flex items-center justify-center gap-2`}
                    >
                      <CreditCard className="h-4 w-4" />
                      Enroll Now
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <BookOpen className="mx-auto h-12 w-12 text-emerald-600/30 mb-4" />
              <p className="text-lg text-emerald-300/40">No courses match your search.</p>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl bg-gradient-to-b from-emerald-950 to-[#010d09] border border-emerald-700/30 shadow-2xl overflow-hidden"
            >
              <div className={`relative p-6 bg-gradient-to-r ${selectedCourse.color}`}>
                <button onClick={closeModal} className="absolute top-4 right-4 h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                  <X className="h-4 w-4" />
                </button>
                <p className="text-xs text-white/70 uppercase tracking-wider mb-1">Enrollment</p>
                <h3 className="text-xl font-bold text-white">{selectedCourse.title}</h3>
                <p className="text-2xl font-bold text-white mt-2">{formatPrice(selectedCourse.price)}</p>
              </div>

              <div className="p-6">
                {payStep === 'form' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-300/60 mb-1.5">Full Name</label>
                      <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Muhammad Abdullah" className="w-full rounded-xl border border-emerald-700/30 bg-emerald-900/30 px-4 py-3 text-sm text-white placeholder:text-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-300/60 mb-1.5">Email Address</label>
                      <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="w-full rounded-xl border border-emerald-700/30 bg-emerald-900/30 px-4 py-3 text-sm text-white placeholder:text-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-300/60 mb-1.5">Phone Number</label>
                      <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+234 800 000 0000" className="w-full rounded-xl border border-emerald-700/30 bg-emerald-900/30 px-4 py-3 text-sm text-white placeholder:text-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/40" />
                    </div>
                    <button onClick={handlePay} disabled={!formData.name || !formData.email || !formData.phone} className="w-full mt-2 rounded-xl bg-[#00C853] py-3.5 text-sm font-bold text-white shadow-lg hover:bg-[#00E676] transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      Pay {formatPrice(selectedCourse.price)} with Paystack
                    </button>
                    <p className="text-center text-[10px] text-emerald-400/30">Secured by Paystack. Your payment info is encrypted.</p>
                  </div>
                )}

                {payStep === 'loading' && (
                  <div className="flex flex-col items-center py-12">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="h-12 w-12 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 mb-4" />
                    <p className="text-sm text-emerald-300/60">Processing your payment...</p>
                    <p className="text-xs text-emerald-400/30 mt-1">Please do not close this window</p>
                  </div>
                )}

                {payStep === 'success' && (
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center py-8">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }} className="h-16 w-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                      <Check className="h-8 w-8 text-emerald-400" />
                    </motion.div>
                    <h4 className="text-lg font-bold text-white mb-1">Payment Successful!</h4>
                    <p className="text-sm text-emerald-300/50 text-center mb-2">Your enrollment for {selectedCourse.title} is confirmed.</p>
                    <p className="text-xs text-emerald-400/30 mb-6">Ref: PSK-{Date.now().toString(36).toUpperCase()}</p>
                    <button onClick={closeModal} className="rounded-xl bg-emerald-600 px-8 py-2.5 text-sm font-semibold text-white hover:bg-emerald-500 transition-colors">Done</button>
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