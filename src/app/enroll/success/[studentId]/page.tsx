"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Printer, CheckCircle } from "lucide-react";

export default function SuccessPage() {
  const { studentId } = useParams();
  const router = useRouter();
  const decodedId = decodeURIComponent(studentId as string);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const raw = sessionStorage.getItem(`safwatul_enroll_${decodedId}`);
    if (raw) setData(JSON.parse(raw));
  }, [decodedId]);

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 flex justify-center">
      <div className="max-w-2xl w-full">
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex items-center gap-4 mb-8">
          <CheckCircle className="h-10 w-10 text-emerald-500" />
          <div>
            <h2 className="font-bold text-lg">Registration Successful!</h2>
            <p className="text-sm opacity-90">Your application has been recorded. Please save your Student ID.</p>
          </div>
        </div>

        <div id="pdf-content" className="bg-white p-10 rounded-2xl shadow-xl border-t-8 border-[var(--navy)] mb-8">
          <div className="flex justify-between items-start border-b border-slate-200 pb-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 border border-[var(--orange)] rounded-xl flex items-center justify-center p-1">
                <Image src="/safwa.png" alt="Logo" width={48} height={48} />
              </div>
              <div>
                <h1 className="font-[Playfair] font-bold text-xl text-[var(--navy)]">AS SAFWATUL-MALA</h1>
                <p className="text-xs text-[var(--orange)] font-bold tracking-widest uppercase">Official Record</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-500 font-bold uppercase">Student ID</p>
              <p className="font-bold text-lg text-[var(--navy)]">{decodedId}</p>
            </div>
          </div>

          {data ? (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <span className="block text-slate-500 mb-1">Full Name</span>
                  <span className="font-bold text-[var(--navy)] text-lg">{data.fullName}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <span className="block text-slate-500 mb-1">Programme</span>
                  <span className="font-bold text-[var(--navy)]">{data.program}</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-slate-500 py-10">Loading student details...</p>
          )}
        </div>

        <div className="flex gap-4">
          <button onClick={() => window.print()} className="flex-1 bg-[var(--navy)] text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[var(--navy-dark)]">
            <Printer className="h-5 w-5" /> Print Record
          </button>
          <button onClick={() => router.push("/")} className="flex-1 bg-white border border-slate-300 text-[var(--navy)] py-3.5 rounded-xl font-bold hover:bg-slate-50">
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}