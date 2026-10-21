'use client';
import React, { use, useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import { useRouter } from 'next/navigation';
import { ShieldCheck, LogOut, LayoutDashboard, UserCircle } from 'lucide-react';

export default function Dashboard({ params }: { params: Promise<{ role: string }> }) {
  const resolvedParams = use(params);
  const roleName = resolvedParams.role.toUpperCase();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <PageHero title="Secure Workspace" subtitle={`Authenticated as ${roleName}`} />
      
      <section className="py-20 px-6 -mt-32 relative z-10">
        <div className="container mx-auto max-w-6xl">
          {/* Main Dashboard Card */}
          <div className="ultra-glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl border-white/60 bg-white/85">
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b-2 border-slate-100">
              <div className="flex items-center gap-6 mb-6 md:mb-0">
                <div className="w-20 h-20 bg-blue-950 rounded-2xl flex items-center justify-center text-amber-400 shadow-xl shadow-blue-900/20 rotate-3">
                  <ShieldCheck size={40} />
                </div>
                <div>
                  <h2 className="text-3xl text-blue-950 font-bold">Welcome Back</h2>
                  <p className="text-slate-500 font-medium flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Encrypted Session Active
                  </p>
                </div>
              </div>

              <button 
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex items-center gap-2 px-6 py-3 bg-red-50 hover:bg-red-500 hover:text-white text-red-600 rounded-xl font-bold transition-all shadow-sm"
              >
                {isLoggingOut ? 'Terminating...' : <><LogOut size={20} /> Secure Logout</>}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Profile Status', icon: <UserCircle size={32}/>, value: roleName, color: 'text-blue-600', bg: 'bg-blue-50' },
                { title: 'System Access', icon: <LayoutDashboard size={32}/>, value: 'Granted', color: 'text-green-600', bg: 'bg-green-50' },
                { title: 'Security Tier', icon: <ShieldCheck size={32}/>, value: 'Level 1 (JWT)', color: 'text-amber-600', bg: 'bg-amber-50' }
              ].map((stat, i) => (
                <div key={i} className={`p-8 rounded-3xl border border-white/40 shadow-lg flex flex-col items-center text-center ${stat.bg} transition-transform hover:-translate-y-1`}>
                  <div className={`mb-4 ${stat.color}`}>{stat.icon}</div>
                  <h3 className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-2">{stat.title}</h3>
                  <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}