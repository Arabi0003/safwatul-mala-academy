'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, UserCircle } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';
import Image from 'next/image';

export default function StaffPortal() {
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState('teacher');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero 
        title="Student Portal" 
        subtitle="Secure access for students to view grades, assignments, and curriculum."
      />

      <section className="py-20 px-6 -mt-32 relative z-10">
        <div className="container mx-auto max-w-lg">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="ultra-glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-white/60 bg-white/80 relative overflow-hidden"
          >
            {/* Background Watermark Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
              <Image src="/safwa.png" alt="watermark" width={400} height={400} className="object-cover" />
            </div>

            <div className="relative z-10">
              {/* Top Centered Logo */}
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-amber-500 overflow-hidden relative">
                  <Image src="/safwa.png" alt="Academy Logo" fill className="object-cover p-1" />
                </div>
              </div>

              <h2 className="text-blue-950 text-center mb-2 text-3xl">Student Login</h2>
              <p className="text-slate-600 font-medium text-center mb-8">
                Enter your Student ID to access your dashboard.
              </p>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2 ml-1 uppercase tracking-wider">Portal Role</label>
                  <input type="text" placeholder="ASM/2024/0000" className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-slate-200 focus:border-amber-500 outline-none transition-all text-lg shadow-inner text-slate-900 placeholder:text-slate-400 font-medium relative z-10" disabled value="STUDENT" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2 ml-1 uppercase tracking-wider">ID / Email</label>
                  <input 
                    type="text" 
                    placeholder="Enter your credential..."
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-slate-200 focus:border-amber-500 outline-none transition-all text-lg shadow-inner text-slate-900 placeholder:text-slate-400 font-medium relative z-10"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-blue-950 mb-2 ml-1 uppercase tracking-wider">Password</label>
                  <input 
                    type="password" 
                    placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-slate-200 focus:border-amber-500 outline-none transition-all text-lg shadow-inner text-slate-900 placeholder:text-slate-400 font-medium relative z-10"
                    required
                  />
                </div>

                <div className="flex justify-end relative z-10">
                  <button type="button" className="text-amber-600 font-bold hover:underline text-sm hover:text-amber-700">Forgot Password?</button>
                </div>

                <button 
                  disabled={isLoading}
                  className={`w-full text-white font-bold py-5 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-3 group text-xl relative z-10 ${
                    role === 'superadmin' ? 'bg-slate-900 hover:bg-slate-800 shadow-slate-900/30' : 'bg-blue-950 hover:bg-amber-600 shadow-blue-900/20'
                  }`}
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Sign In Securely <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}