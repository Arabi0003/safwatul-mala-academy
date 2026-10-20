"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Check, ShieldCheck, ArrowRight, User, BookOpen, GraduationCap, Users } from "lucide-react";

export default function EnrollPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ fullName: "", dob: "", phone: "", previousSchool: "", program: "" });

  const startForm = (prog: string) => { setFormData({ ...formData, program: prog }); setStep(2); };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    const mockId = `ASM/${new Date().getFullYear()}/${Math.floor(1000 + Math.random() * 9000)}`;
    sessionStorage.setItem(`safwatul_enroll_${mockId}`, JSON.stringify(formData));
    router.push(`/enroll/success/${mockId}`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="bg-[var(--navy-dark)] p-8 text-center text-white relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-dark)] to-[var(--navy)]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border-2 border-[var(--orange)] mb-4">
              <Image src="/safwa.png" alt="Logo" width={48} height={48} className="object-contain" />
            </div>
            <h1 className="font-[Playfair] text-3xl font-bold">Online Admission</h1>
            <p className="text-[var(--orange-glow)] text-sm font-semibold tracking-widest uppercase mt-2">Registration Form</p>
          </div>
        </div>

        <div className="p-8">
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-[var(--navy)] flex items-center gap-2"><ShieldCheck className="text-[var(--orange)]" /> Terms & Privacy</h2>
              <p className="text-slate-600 text-sm">By proceeding, you agree to uphold the Islamic Adab (etiquette) of the Academy, provide truthful information, and consent to our data privacy policy for educational purposes.</p>
              <button onClick={() => setStep(1)} className="w-full bg-[var(--orange)] hover:bg-[var(--orange-soft)] text-white font-bold py-3.5 rounded-xl transition shadow-md">Accept & Continue</button>
            </div>
          )}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[var(--navy)] mb-6 text-center">Select Programme</h2>
              {["Full-Time Hifz & Academics", "Evening Qur'an & Arabic", "Weekend Madrasah", "Online/Remote Learning"].map((prog) => (
                <button key={prog} onClick={() => startForm(prog)} className="w-full flex items-center justify-between p-4 border border-slate-200 rounded-xl hover:border-[var(--sky)] hover:bg-[var(--sky-light)] transition text-left text-[var(--navy)] font-bold">
                  {prog} <ArrowRight className="h-5 w-5 text-[var(--orange)]" />
                </button>
              ))}
            </div>
          )}
          {step === 2 && (
            <form onSubmit={submitForm} className="space-y-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                <p className="text-xs text-slate-500 uppercase font-bold">Selected Programme</p>
                <p className="text-[var(--navy)] font-bold">{formData.program}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-[var(--navy)] mb-1">Student Full Name</label>
                  <input required type="text" onChange={(e)=>setFormData({...formData, fullName: e.target.value})} className="w-full p-3 rounded-xl border border-slate-300 focus:border-[var(--sky)] focus:ring-1 focus:ring-[var(--sky)] outline-none" placeholder="e.g. Abdullah Ahmad" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--navy)] mb-1">Date of Birth</label>
                  <input required type="date" onChange={(e)=>setFormData({...formData, dob: e.target.value})} className="w-full p-3 rounded-xl border border-slate-300 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[var(--navy)] mb-1">Guardian Phone Number</label>
                  <input required type="tel" onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="w-full p-3 rounded-xl border border-slate-300 outline-none" />
                </div>
              </div>
              <button type="submit" className="w-full bg-[var(--navy)] hover:bg-[var(--navy-dark)] text-white font-bold py-4 rounded-xl transition shadow-md flex items-center justify-center gap-2">
                Submit Registration <Check className="h-5 w-5 text-[var(--orange)]" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
