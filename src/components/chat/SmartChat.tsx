'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react'

interface Message {
  id: number
  role: 'bot' | 'user'
  text: string
}

const qaData: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'salam', 'assalamu', 'good morning', 'good evening'],
    answer: 'Wa Alaikum Assalam! Welcome to Safwatulmala Academy. How can I help you today? You can ask about our courses, fees, admissions, or location.',
  },
  {
    keywords: ['course', 'courses', 'program', 'programs', 'study', 'learn', 'offer', 'subjects'],
    answer: "We offer 10 comprehensive courses:\n\n1. Qur'anic Studies (\u20A666,000)\n2. Arabic Language (\u20A655,000)\n3. Tajweed Mastery (\u20A655,000)\n4. Tafsir (\u20A660,000)\n5. Islamic Jurisprudence (\u20A650,000)\n6. Hadith Sciences (\u20A650,000)\n7. Aqeedah (\u20A645,000)\n8. Islamic History & Seerah (\u20A645,000)\n9. Islamic Ethics (\u20A640,000)\n10. Da'wah & Communication (\u20A645,000)\n\nVisit our Courses page for full details!",
  },
  {
    keywords: ['fee', 'fees', 'price', 'cost', 'tuition', 'how much', 'payment', 'pay'],
    answer: "Our course fees range from \u20A640,000 to \u20A666,000 per session. Payment is made securely through Paystack. You can enroll directly from our Courses page. Would you like to know about a specific course?",
  },
  {
    keywords: ['admission', 'admit', 'enroll', 'enrol', 'register', 'registration', 'apply', 'join'],
    answer: "To enroll at Safwatulmala Academy:\n\n1. Visit our Courses page\n2. Choose your preferred course\n3. Click 'Enroll Now'\n4. Fill in your details and pay via Paystack\n5. You'll receive a confirmation email\n\nIt's that simple! Admissions are open year-round.",
  },
  {
    keywords: ['location', 'address', 'where', 'find', 'direction', 'map', 'campus'],
    answer: "Safwatulmala Academy is located in Nigeria. For the exact address and directions, please visit our Contact page or call us directly. We also offer online learning for students anywhere in the world!",
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'whatsapp', 'social'],
    answer: "You can reach us through:\n\n- Contact page on our website\n- Email via the Contact form\n- Social media channels\n\nOur team typically responds within 24 hours. We'd love to hear from you!",
  },
  {
    keywords: ['online', 'remote', 'virtual', 'distance', 'internet', 'zoom'],
    answer: "Yes! We offer comprehensive online learning programs. You can study from anywhere in the world with live classes, recorded sessions, and interactive assignments. Visit our Online Learning page for details.",
  },
  {
    keywords: ['quran', "qur'an", 'quranic', 'hifz', 'memoriz', 'recitation', 'tajweed'],
    answer: "Our Qur'anic Studies program (\u20A666,000) is one of our flagship courses! It includes Hifz (memorization), Tajweed rules, Tafsir classes, and weekly assessments. We also have a dedicated Tajweed Mastery course (\u20A655,000). Both are taught by certified scholars.",
  },
  {
    keywords: ['arabic', 'language', 'nahw', 'sarf', 'grammar'],
    answer: "Our Arabic Language course (\u20A655,000) covers everything from beginner to advanced levels. You'll learn Nahw (grammar), Sarf (morphology), conversation, reading, and writing with native-speaking tutors. Duration: 10 months.",
  },
  {
    keywords: ['founder', 'who started', 'who founded', 'owner', 'established'],
    answer: "Safwatulmala Academy was founded with a vision to provide authentic Islamic education accessible to all. Visit our Founder page to learn more about the inspiring story behind the academy.",
  },
  {
    keywords: ['time', 'hours', 'schedule', 'when', 'open', 'class time', 'duration'],
    answer: "Our courses run in structured sessions ranging from 6 to 12 months depending on the program. Classes are scheduled to accommodate different time zones for our online students. Check the specific course page for detailed schedules.",
  },
  {
    keywords: ['certificate', 'certification', 'diploma', 'degree', 'ijazah', 'qualification'],
    answer: "Upon successful completion of any course, students receive a certificate of completion from Safwatulmala Academy. Advanced Qur'an students may also be eligible for Ijazah (chain of transmission) certification.",
  },
  {
    keywords: ['thank', 'thanks', 'jazaak', 'jazakallah', 'appreciate'],
    answer: "Wa Iyyakum! May Allah bless your pursuit of knowledge. If you have any more questions, feel free to ask. We're always here to help!",
  },
  {
    keywords: ['bye', 'goodbye', 'see you', 'farewell', 'ma\'a salama'],
    answer: "Ma'a As-Salama! May Allah grant you success in your studies. We hope to see you enrolled soon. Feel free to return anytime you have questions!",
  },
]

const quickReplies = ['Courses', 'Fees', 'Admission', 'Online Learning', 'Contact']

function getResponse(input: string): string {
  const lower = input.toLowerCase().trim()
  for (const qa of qaData) {
    if (qa.keywords.some((kw) => lower.includes(kw))) return qa.answer
  }
  return "Thank you for your question! I'm not sure about that specific topic, but our team would love to help. Please visit our Contact page or try asking about our courses, fees, admissions, or location."
}

export default function SmartChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: 'bot', text: 'Assalamu Alaikum! Welcome to Safwatulmala Academy. I\'m your virtual assistant. How can I help you today?' },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const idRef = useRef(2)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, typing])

  const send = (text: string) => {
    if (!text.trim()) return
    const userMsg: Message = { id: idRef.current++, role: 'user', text: text.trim() }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const reply = getResponse(text)
      const botMsg: Message = { id: idRef.current++, role: 'bot', text: reply }
      setMessages((prev) => [...prev, botMsg])
      setTyping(false)
    }, 800 + Math.random() * 600)
  }

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl shadow-emerald-500/30 flex items-center justify-center text-white hover:shadow-emerald-500/50 transition-shadow"
          >
            <MessageCircle className="h-6 w-6" />
            {/* Pulse ring */}
            <span className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-emerald-700/30 bg-gradient-to-b from-emerald-950 to-[#010d09] shadow-2xl shadow-emerald-950/50 overflow-hidden flex flex-col"
            style={{ height: '520px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-emerald-600 to-teal-600">
              <div className="flex items-center gap-2.5">
                <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white flex items-center gap-1">
                    Safwa Assistant
                    <Sparkles className="h-3 w-3 text-yellow-300" />
                  </p>
                  <p className="text-[10px] text-white/60 flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 inline-block" />
                    Online now
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    msg.role === 'bot' ? 'bg-emerald-600/30' : 'bg-teal-500/30'
                  }`}>
                    {msg.role === 'bot' ? <Bot className="h-3.5 w-3.5 text-emerald-400" /> : <User className="h-3.5 w-3.5 text-teal-400" />}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
                    msg.role === 'bot'
                      ? 'bg-emerald-900/50 text-emerald-100/80 rounded-tl-sm border border-emerald-700/20'
                      : 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-tr-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {typing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="h-7 w-7 rounded-full bg-emerald-600/30 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="h-3.5 w-3.5 text-emerald-400" />
                  </div>
                  <div className="bg-emerald-900/50 rounded-2xl rounded-tl-sm px-4 py-3 border border-emerald-700/20 flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -4, 0] }}
                        transition={{ repeat: Infinity, duration: 0.6, delay: i * 0.15 }}
                        className="h-2 w-2 rounded-full bg-emerald-400/60"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {quickReplies.map((qr) => (
                  <button
                    key={qr}
                    onClick={() => send(qr)}
                    className="rounded-full border border-emerald-600/30 bg-emerald-900/30 px-3 py-1 text-[11px] text-emerald-300/70 hover:bg-emerald-600/20 hover:text-emerald-300 transition-colors"
                  >
                    {qr}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="px-3 py-3 border-t border-emerald-800/30">
              <form
                onSubmit={(e) => { e.preventDefault(); send(input) }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-emerald-700/30 bg-emerald-900/30 px-3.5 py-2.5 text-sm text-white placeholder:text-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="h-10 w-10 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white shadow-lg disabled:opacity-30 hover:shadow-emerald-500/30 transition-all"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}