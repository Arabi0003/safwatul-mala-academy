import React from 'react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { LayoutDashboard, Users, BookOpen, Settings, Bell, Search, ShieldCheck } from 'lucide-react';
import LogoutButton from '@/components/dashboard/LogoutButton';
import Image from 'next/image';

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  // Securely decode JWT on the server to get user details for the UI
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token')?.value;
  let user = { name: 'Authorized User', role: 'USER' };

  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET || 'fallback_secret_key_2025');
      const { payload } = await jwtVerify(token, secret);
      user = payload as { name: string; role: string };
    } catch (e) {}
  }

  return (
    <div className="min-h-screen bg-emerald-50 flex overflow-hidden font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-emerald-950 text-white flex-shrink-0 flex flex-col hidden md:flex h-screen fixed z-20 border-r border-emerald-900 shadow-2xl">
        <div className="h-24 flex items-center px-8 border-b border-white/10 gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1 shadow-lg shadow-teal-500/20">
            <Image src="/safwa.png" alt="Logo" width={40} height={40} className="object-cover" />
          </div>
          <div>
            <h1 className="font-serif font-bold text-lg leading-tight tracking-tight">AS SAFWATUL-MALA</h1>
            <p className="text-[10px] uppercase tracking-widest text-teal-400 font-bold">Workspace</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-8 px-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 px-4">Main Menu</div>
          
          <Link href={`/dashboard/${user.role.toLowerCase()}`} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-teal-500 text-white shadow-lg shadow-teal-500/20 font-bold transition-transform hover:translate-x-1">
            <LayoutDashboard size={20} /> Overview
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all font-semibold">
            <Users size={20} /> Directory
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all font-semibold">
            <BookOpen size={20} /> Academics
          </Link>
          <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-all font-semibold">
            <Settings size={20} /> Settings
          </Link>
        </nav>

        <div className="p-4 border-t border-white/10 bg-black/20">
          <LogoutButton />
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 md:ml-72 flex flex-col h-screen overflow-hidden relative">
        
        {/* TOP HEADER */}
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-emerald-200 flex items-center justify-between px-8 z-10 sticky top-0 shadow-sm">
          <div className="flex items-center gap-4 w-96 relative">
            <Search className="absolute left-4 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search students, classes, or records..." 
              className="w-full bg-emerald-100 py-2.5 pl-12 pr-4 rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 transition-shadow"
            />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-emerald-950 transition-colors">
              <Bell size={24} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-8 w-px bg-emerald-200"></div>
            <div className="flex items-center gap-3 text-right">
              <div className="hidden md:block">
                <p className="text-sm font-bold text-emerald-900">{user.name}</p>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider">{user.role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-950 font-bold border-2 border-white shadow-md">
                <ShieldCheck size={20} />
              </div>
            </div>
          </div>
        </header>

        {/* SCROLLABLE PAGE CONTENT */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
}
