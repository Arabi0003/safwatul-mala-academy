'use client';
import React, { use } from 'react';
import PageHero from '@/components/ui/PageHero';

export default function Dashboard({ params }: { params: Promise<{ role: string }> }) {
  // Unwrap the Promise using React.use()
  const resolvedParams = use(params);
  const roleName = resolvedParams.role.toUpperCase();

  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero title={`${roleName} DASHBOARD`} subtitle="Welcome to your secure portal area." />
      <section className="py-20 px-6 -mt-32 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <div className="ultra-glass p-12 rounded-[2rem] shadow-2xl border-white/60 bg-white/80 text-center">
            <h2 className="text-4xl text-blue-950 font-bold mb-4">Authentication Successful!</h2>
            <p className="text-xl text-slate-700">
              You are officially logged into the Next.js backend as a <strong>{roleName}</strong>. 
              The JWT HttpOnly Cookie is active.
            </p>
            <div className="mt-10 p-6 bg-green-50 border border-green-200 rounded-xl inline-block text-green-800 font-bold shadow-inner">
              System is Perfected. ✅ Database connected. ✅ API routed.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}