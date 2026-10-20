"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  User,
  BookOpen,
  Sparkles,
  Users,
  ChevronRight,
  ChevronLeft,
  Check,
  Loader2,
  Scale,
  ShieldCheck,
  HeartHandshake,
  BookText,
} from "lucide-react";

export default function EnrollPage() {
  const router = useRouter();

  // 0 = Terms, 1 = Section, 2 = Form
  const [phase, setPhase] = useState(0);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  const [data, setData] = useState({
    preferredProgramme: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "Nigerian",
    stateOfOrigin: "",
    address: "",
    phone: "",
    email: "",
    previousSchool: "",
    lastClassCompleted: "",
    academicInterest: "",
    quranLevel: "",
    memorizedPortion: "",
    canReadArabic: false,
    tajweedKnowledge: "",
    islamicStudiesBg: "",
    guardianName: "",
    guardianRelation: "",
    guardianPhone: "",
    guardianEmail: "",
    guardianOccupation: "",
    guardianAddress: "",
    emergencyContact: "",
  });

  const update = (key: string, value: any) => setData((d) => ({ ...d, [key]: value }));

  const selectSection = (section: string) => {
    update("preferredProgramme", section);
    setPhase(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const canProceed = () => {
    if (step === 1)
      return !!(data.fullName && data.dateOfBirth && data.gender && data.stateOfOrigin && data.address);
    if (step === 3) return !!data.quranLevel;
    if (step === 4)
      return !!(data.guardianName && data.guardianRelation && data.guardianPhone && data.emergencyContact);
    return true;
  };

  const submit = () => {
    setSubmitting(true);
    setTimeout(() => {
      const year = new Date().getFullYear();
      const randomNum = String(Math.floor(Math.random() * 9999) + 1).padStart(4, "0");
      const mockId = `ASM/${year}/${randomNum}`;
      const record = {
        ...data,
        studentId: mockId,
        createdAt: new Date().toISOString(),
        status: "PENDING",
      };
      sessionStorage.setItem(`safwatul_enrollment_${mockId}`, JSON.stringify(record));
      router.push(`/enroll/success/${encodeURIComponent(mockId)}`);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-20 selection:bg-gold selection:text-white">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        {/* Square logo — shaped angles (rounded square, not circle) */}
        <div className="text-center mb-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="relative w-32 h-32 mb-6 rounded-2xl border-[3px] border-gold bg-white shadow-[0_0_28px_rgba(212,175,55,0.28)] p-2 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gold/5" />
            <Image
              src="/safwa.png"
              alt="AS SAFWATUL-MALA ACADEMY"
              fill
              className="object-contain p-2 relative z-10"
              priority
            />
          </motion.div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-ink mb-3">
            Academy Enrollment
          </h1>
          <p className="text-ink-muted max-w-xl mx-auto font-medium">
            {phase === 0 && "Please read and accept our Islamic terms of study to begin."}
            {phase === 1 && "Select the section you wish to enroll in."}
            {phase === 2 && `Completing enrollment for: ${data.preferredProgramme}`}
          </p>
        </div>

        <AnimatePresence mode="wait">
          {/* PHASE 0 — Terms */}
          {phase === 0 && (
            <motion.div
              key="p0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-gold/35 overflow-hidden">
                <div className="h-1.5 bg-gold" />
                <div className="p-8 sm:p-10">
                  <h2 className="font-heading text-2xl font-bold text-ink mb-6 text-center">
                    Terms of Study &amp; Privacy (Amanah)
                  </h2>

                  <div className="space-y-6 text-sm text-ink-soft max-h-96 overflow-y-auto pr-3">
                    <div className="flex gap-4">
                      <HeartHandshake className="w-6 h-6 text-gold shrink-0" />
                      <div>
                        <strong className="block text-ink text-base mb-1">1. Niyyah (Intention)</strong>
                        Every student and guardian should seek this knowledge for the pleasure of Allah alone,
                        to remove ignorance, and to act upon what is learned.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <BookText className="w-6 h-6 text-gold shrink-0" />
                      <div>
                        <strong className="block text-ink text-base mb-1">2. Adab (Conduct)</strong>
                        Islamic manners, modest dress, and respect for teachers, staff, classmates, and the
                        Qur&apos;an are required at all times.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Scale className="w-6 h-6 text-gold shrink-0" />
                      <div>
                        <strong className="block text-ink text-base mb-1">3. Dedication &amp; Attendance</strong>
                        Consistent attendance, effort in revision, and seriousness—especially in Hifz—are expected.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
                      <div>
                        <strong className="block text-ink text-base mb-1">4. Privacy &amp; Data (Amanah)</strong>
                        Your details are a trust. AS SAFWATUL-MALA ACADEMY uses them only for education and
                        administration and does not share them unlawfully.
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <ShieldCheck className="w-6 h-6 text-gold shrink-0" />
                      <div>
                        <strong className="block text-ink text-base mb-1">5. Honesty in Application</strong>
                        All information must be true. False details may delay or cancel placement. Final admission
                        remains with the academy after review.
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gold/25">
                    <label className="flex items-start gap-4 p-4 rounded-2xl border-2 border-gold/40 bg-gold/5 cursor-pointer hover:bg-gold/10 transition-colors">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 w-5 h-5 accent-gold"
                      />
                      <span className="text-sm font-semibold text-ink">
                        I have read, understood, and agree to these Islamic terms and the privacy policy.
                      </span>
                    </label>
                    <div className="mt-6 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setPhase(1)}
                        disabled={!termsAccepted}
                        className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gold text-white font-bold shadow-lg shadow-gold/25 disabled:opacity-45 hover:opacity-95 hover:-translate-y-0.5 transition-all"
                      >
                        Accept &amp; Continue <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* PHASE 1 — Section */}
          {phase === 1 && (
            <motion.div
              key="p1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: "Full-Time Hifz & Academics",
                    desc: "Daily Qur'an memorisation with selected academic subjects.",
                  },
                  {
                    title: "Qur'an & Arabic (Evening)",
                    desc: "Afternoon/evening focus on Tilawah, Hifz, and Arabic.",
                  },
                  {
                    title: "Weekend Madrasah",
                    desc: "Saturday and Sunday classes for students in other schools.",
                  },
                  {
                    title: "Online / Remote Program",
                    desc: "Distance learning when in-person attendance is not possible.",
                  },
                ].map((sec) => (
                  <button
                    key={sec.title}
                    type="button"
                    onClick={() => selectSection(sec.title)}
                    className="bg-white border-2 border-gold/25 hover:border-gold rounded-3xl p-7 text-left transition-all hover:shadow-xl hover:shadow-gold/15 group"
                  >
                    <h3 className="font-heading text-xl sm:text-2xl font-bold text-ink mb-2 group-hover:text-gold-dark transition-colors">
                      {sec.title}
                    </h3>
                    <p className="text-ink-muted text-sm leading-relaxed mb-5">{sec.desc}</p>
                    <span className="inline-flex items-center gap-2 text-gold-dark font-bold text-sm">
                      Select section
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => setPhase(0)}
                  className="text-sm font-bold text-ink-muted hover:text-gold transition-colors"
                >
                  ← Back to Terms
                </button>
              </div>
            </motion.div>
          )}

          {/* PHASE 2 — Form */}
          {phase === 2 && (
            <motion.div
              key="p2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
            >
              <div className="mb-8 flex items-center justify-between relative max-w-2xl mx-auto">
                <div className="absolute top-5 left-0 right-0 h-[2px] bg-gold/20 -z-0" />
                <div
                  className="absolute top-5 left-0 h-[2px] bg-gold transition-all duration-500 -z-0"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />
                {[
                  { id: 1, name: "Personal", icon: User },
                  { id: 2, name: "Academic", icon: BookOpen },
                  { id: 3, name: "Qur'anic", icon: Sparkles },
                  { id: 4, name: "Guardian", icon: Users },
                ].map((s) => {
                  const Icon = s.icon;
                  const active = step === s.id;
                  const done = step > s.id;
                  return (
                    <div key={s.id} className="relative z-10 flex flex-col items-center bg-ivory px-2">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold transition-all border-2 ${
                          done
                            ? "bg-gold border-gold text-white shadow-md shadow-gold/30"
                            : active
                            ? "bg-white border-gold text-gold shadow-md scale-110"
                            : "bg-white border-gold/30 text-gold/45"
                        }`}
                      >
                        {done ? <Check className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                      </div>
                      <span
                        className={`mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                          active || done ? "text-gold-dark" : "text-gold/45"
                        }`}
                      >
                        {s.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white rounded-3xl shadow-2xl shadow-gold/10 border border-gold/30 overflow-hidden">
                <div className="h-2 bg-gold" />
                <div className="p-6 sm:p-10">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="1"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="space-y-6"
                      >
                        <SectionTitle title="Personal Information" subtitle="Student's basic details" />
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Full Name *" full>
                            <input
                              value={data.fullName}
                              onChange={(e) => update("fullName", e.target.value)}
                              className={iCls}
                              placeholder="e.g. Aisha Muhammad Bello"
                            />
                          </Field>
                          <Field label="Date of Birth *">
                            <input
                              type="date"
                              value={data.dateOfBirth}
                              onChange={(e) => update("dateOfBirth", e.target.value)}
                              className={iCls}
                            />
                          </Field>
                          <Field label="Gender *">
                            <select
                              value={data.gender}
                              onChange={(e) => update("gender", e.target.value)}
                              className={iCls}
                            >
                              <option value="">Select...</option>
                              <option value="MALE">Male</option>
                              <option value="FEMALE">Female</option>
                            </select>
                          </Field>
                          <Field label="Nationality">
                            <input
                              value={data.nationality}
                              onChange={(e) => update("nationality", e.target.value)}
                              className={iCls}
                            />
                          </Field>
                          <Field label="State of Origin *">
                            <input
                              value={data.stateOfOrigin}
                              onChange={(e) => update("stateOfOrigin", e.target.value)}
                              className={iCls}
                              placeholder="e.g. Kano"
                            />
                          </Field>
                          <Field label="Student Phone">
                            <input
                              value={data.phone}
                              onChange={(e) => update("phone", e.target.value)}
                              className={iCls}
                              placeholder="+234..."
                            />
                          </Field>
                          <Field label="Email Address">
                            <input
                              type="email"
                              value={data.email}
                              onChange={(e) => update("email", e.target.value)}
                              className={iCls}
                              placeholder="student@example.com"
                            />
                          </Field>
                          <Field label="Residential Address *" full>
                            <textarea
                              value={data.address}
                              onChange={(e) => update("address", e.target.value)}
                              className={`${iCls} min-h-[80px]`}
                              placeholder="Full home address..."
                            />
                          </Field>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="2"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="space-y-6"
                      >
                        <SectionTitle title="Academic Background" subtitle="Previous schooling (if any)" />
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Previous School" full>
                            <input
                              value={data.previousSchool}
                              onChange={(e) => update("previousSchool", e.target.value)}
                              className={iCls}
                              placeholder="Name of last school"
                            />
                          </Field>
                          <Field label="Last Class Completed">
                            <input
                              value={data.lastClassCompleted}
                              onChange={(e) => update("lastClassCompleted", e.target.value)}
                              className={iCls}
                              placeholder="e.g. Primary 5, JSS 2"
                            />
                          </Field>
                          <Field label="Academic Interest">
                            <input
                              value={data.academicInterest}
                              onChange={(e) => update("academicInterest", e.target.value)}
                              className={iCls}
                              placeholder="e.g. Mathematics"
                            />
                          </Field>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="3"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="space-y-6"
                      >
                        <SectionTitle title="Qur'anic Background" subtitle="For accurate placement" />
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Current Qur'an Level *">
                            <select
                              value={data.quranLevel}
                              onChange={(e) => update("quranLevel", e.target.value)}
                              className={iCls}
                            >
                              <option value="">Select...</option>
                              <option value="Complete Beginner">Complete Beginner</option>
                              <option value="Learning Huruf (Letters)">Learning Huruf (Letters)</option>
                              <option value="Reading Qaida">Reading Qaida</option>
                              <option value="Reading Qur'an">Reading Qur&apos;an</option>
                              <option value="Hifz (Juz Amma)">Hifz (Juz Amma)</option>
                              <option value="Partial Hifz">Partial Hifz</option>
                              <option value="Complete Hifz">Complete Hifz</option>
                            </select>
                          </Field>
                          <Field label="Portion Memorized">
                            <input
                              value={data.memorizedPortion}
                              onChange={(e) => update("memorizedPortion", e.target.value)}
                              className={iCls}
                              placeholder="e.g. Juz Amma"
                            />
                          </Field>
                          <Field label="Tajweed Knowledge">
                            <input
                              value={data.tajweedKnowledge}
                              onChange={(e) => update("tajweedKnowledge", e.target.value)}
                              className={iCls}
                              placeholder="e.g. Basic rules"
                            />
                          </Field>
                          <Field label="Islamic Studies Background">
                            <input
                              value={data.islamicStudiesBg}
                              onChange={(e) => update("islamicStudiesBg", e.target.value)}
                              className={iCls}
                              placeholder="e.g. Basic Fiqh"
                            />
                          </Field>
                          <Field label="" full>
                            <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-gold/35 bg-gold/5 cursor-pointer hover:bg-gold/10 transition-colors">
                              <input
                                type="checkbox"
                                checked={data.canReadArabic}
                                onChange={(e) => update("canReadArabic", e.target.checked)}
                                className="w-5 h-5 accent-gold"
                              />
                              <span className="text-sm font-bold text-ink">
                                Student can read or recognise Arabic script
                              </span>
                            </label>
                          </Field>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div
                        key="4"
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="space-y-6"
                      >
                        <SectionTitle title="Guardian Information" subtitle="Primary emergency contact" />
                        <div className="grid sm:grid-cols-2 gap-5">
                          <Field label="Guardian Full Name *" full>
                            <input
                              value={data.guardianName}
                              onChange={(e) => update("guardianName", e.target.value)}
                              className={iCls}
                            />
                          </Field>
                          <Field label="Relationship *">
                            <select
                              value={data.guardianRelation}
                              onChange={(e) => update("guardianRelation", e.target.value)}
                              className={iCls}
                            >
                              <option value="">Select...</option>
                              <option value="Father">Father</option>
                              <option value="Mother">Mother</option>
                              <option value="Uncle">Uncle</option>
                              <option value="Aunt">Aunt</option>
                              <option value="Legal Guardian">Legal Guardian</option>
                            </select>
                          </Field>
                          <Field label="Guardian Phone *">
                            <input
                              value={data.guardianPhone}
                              onChange={(e) => update("guardianPhone", e.target.value)}
                              className={iCls}
                            />
                          </Field>
                          <Field label="Emergency Contact (Name + Phone) *" full>
                            <input
                              value={data.emergencyContact}
                              onChange={(e) => update("emergencyContact", e.target.value)}
                              className={iCls}
                              placeholder="e.g. Yusuf — +234..."
                            />
                          </Field>
                          <Field label="Guardian Email">
                            <input
                              type="email"
                              value={data.guardianEmail}
                              onChange={(e) => update("guardianEmail", e.target.value)}
                              className={iCls}
                            />
                          </Field>
                          <Field label="Occupation">
                            <input
                              value={data.guardianOccupation}
                              onChange={(e) => update("guardianOccupation", e.target.value)}
                              className={iCls}
                            />
                          </Field>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-10 pt-6 border-t border-gold/20 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.max(1, s - 1))}
                      disabled={step === 1}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-gold/40 text-gold-dark hover:bg-gold hover:text-white disabled:opacity-30 transition-all font-bold"
                    >
                      <ChevronLeft className="w-4 h-4" /> Back
                    </button>

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={() => setStep((s) => Math.min(4, s + 1))}
                        disabled={!canProceed()}
                        className="flex items-center gap-2 px-7 py-2.5 rounded-xl bg-gold text-white font-bold hover:opacity-95 shadow-md shadow-gold/25 disabled:opacity-45 transition-all"
                      >
                        Continue <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={submit}
                        disabled={!canProceed() || submitting}
                        className="flex items-center gap-2 px-8 py-3 rounded-xl bg-ink text-white font-bold shadow-xl disabled:opacity-45 hover:-translate-y-0.5 transition-all"
                      >
                        {submitting ? (
                          <Loader2 className="w-5 h-5 animate-spin text-gold" />
                        ) : (
                          <Check className="w-5 h-5 text-gold" />
                        )}
                        {submitting ? "Processing..." : "Submit & Generate ID"}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <button
                  type="button"
                  onClick={() => setPhase(1)}
                  className="text-sm font-bold text-ink-muted hover:text-gold transition-colors"
                >
                  ← Change section ({data.preferredProgramme})
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const iCls =
  "w-full px-4 py-3 rounded-xl border-2 border-gold/35 bg-white text-ink font-semibold focus:outline-none focus:border-gold focus:ring-4 focus:ring-gold/15 transition-all placeholder:text-ink-muted/50 placeholder:font-normal";

function Field({
  label,
  children,
  full,
}: {
  label: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      {label ? (
        <label className="block text-[11px] font-extrabold text-gold-dark uppercase tracking-widest mb-2">
          {label}
        </label>
      ) : null}
      {children}
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="pb-4 border-b-2 border-gold/15 mb-2">
      <h2 className="font-heading text-2xl font-bold text-ink">{title}</h2>
      <p className="text-sm font-medium text-ink-muted mt-1">{subtitle}</p>
    </div>
  );
}