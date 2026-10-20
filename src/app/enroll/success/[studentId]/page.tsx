"use client";

import { useEffect, useState, useRef, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Printer, Check, Loader2 } from "lucide-react";
import { academy } from "@/config/academy";

export default function SuccessPage({ params }: { params: Promise<{ studentId: string }> }) {
  const { studentId } = use(params);
  const [enrollment, setEnrollment] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const decodedId = decodeURIComponent(studentId);
    const saved = sessionStorage.getItem(`safwatul_enrollment_${decodedId}`);
    if (saved) setEnrollment(JSON.parse(saved));
    setLoading(false);
  }, [studentId]);

  const downloadPDF = async () => {
    if (!printRef.current) return;
    setDownloading(true);
    try {
      const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const canvas = await html2canvas(printRef.current, { scale: 2, backgroundColor: "#ffffff" });
      const pdf = new jsPDF("p", "mm", "a4");
      const w = pdf.internal.pageSize.getWidth();
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, (canvas.height * w) / canvas.width);
      pdf.save(`${enrollment.studentId.replace(/\//g, "-")}-record.pdf`);
    } catch {
      alert("Error generating PDF.");
    }
    setDownloading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-ivory flex justify-center items-center">
        <Loader2 className="w-8 h-8 animate-spin text-gold" />
      </div>
    );
  }

  if (!enrollment) {
    return (
      <div className="min-h-screen bg-ivory flex justify-center items-center">
        <p className="text-red-600 font-bold">Record not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory pt-28 pb-20 selection:bg-gold selection:text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex w-20 h-20 rounded-2xl bg-white border-2 border-gold shadow-xl shadow-gold/20 items-center justify-center mb-4">
            <Check className="w-10 h-10 text-gold" strokeWidth={3} />
          </div>
          <h1 className="font-heading text-4xl font-bold text-ink mb-2">Alhamdulillah</h1>
          <p className="text-ink-muted font-semibold">Your Student ID has been generated successfully.</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-gold/30 p-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xs text-gold-dark uppercase font-extrabold tracking-widest">Student ID</p>
            <p className="font-heading text-3xl font-bold text-ink tracking-wide">{enrollment.studentId}</p>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={downloadPDF}
              className="flex items-center gap-2 px-6 py-3 bg-gold text-white rounded-xl text-sm font-bold hover:opacity-95 shadow-md"
            >
              {downloading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
              Download PDF
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="flex items-center gap-2 px-6 py-3 border-2 border-gold/50 text-gold-dark rounded-xl text-sm font-bold hover:bg-gold hover:text-white transition-colors"
            >
              <Printer className="w-4 h-4" /> Print
            </button>
          </div>
        </div>

        <div
          ref={printRef}
          className="bg-white border-[3px] border-gold/40 shadow-2xl relative overflow-hidden"
          style={{ aspectRatio: "1 / 1.414" }}
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
            <div className="relative w-[75%] h-[75%]">
              <Image src="/safwa.png" alt="" fill className="object-contain" />
            </div>
          </div>

          <div className="h-4 bg-gold" />

          <div className="p-10 relative">
            <div className="flex items-start justify-between pb-6 border-b-4 border-double border-gold/30 mb-8">
              <div className="w-24 h-24 relative shrink-0 rounded-2xl border-2 border-gold p-1.5 overflow-hidden bg-white">
                <Image src="/safwa.png" alt="Logo" fill className="object-contain p-1" />
              </div>
              <div className="text-center flex-1 px-4">
                <h2 className="font-heading text-2xl font-bold text-ink uppercase">AS SAFWATUL-MALA ACADEMY</h2>
                <p className="text-xs font-bold text-gold-dark mt-1 uppercase tracking-widest">{academy.location}</p>
                <div className="mt-3 inline-block px-4 py-1 rounded-full bg-gold/10 border border-gold/30 text-[10px] font-extrabold text-ink uppercase tracking-widest">
                  Official Student Record
                </div>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gold-dark uppercase font-extrabold tracking-widest">Student ID</p>
                <p className="font-bold text-ink text-lg">{enrollment.studentId}</p>
                <p className="text-[10px] text-gold-dark mt-2 font-extrabold uppercase tracking-widest">Date Issued</p>
                <p className="text-xs text-ink font-bold">{new Date(enrollment.createdAt).toLocaleDateString()}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <h3 className="text-sm font-extrabold text-gold-dark uppercase tracking-widest mb-4 border-b-2 border-gold/20 pb-1">
                  Personal Details
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Full Name</span>
                    <span className="font-bold text-ink">{enrollment.fullName}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Date of Birth</span>
                    <span className="font-bold text-ink">{enrollment.dateOfBirth}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Gender</span>
                    <span className="font-bold text-ink">{enrollment.gender}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Address</span>
                    <span className="font-bold text-ink">{enrollment.address}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-extrabold text-gold-dark uppercase tracking-widest mb-4 border-b-2 border-gold/20 pb-1">
                  Academy Program
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Chosen Track</span>
                    <span className="font-bold text-ink">{enrollment.preferredProgramme}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Assessed Level</span>
                    <span className="font-bold text-ink">{enrollment.quranLevel}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Memorized Portion</span>
                    <span className="font-bold text-ink">{enrollment.memorizedPortion || "None"}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Reads Arabic</span>
                    <span className="font-bold text-ink">{enrollment.canReadArabic ? "Yes" : "No"}</span>
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <h3 className="text-sm font-extrabold text-gold-dark uppercase tracking-widest mb-4 border-b-2 border-gold/20 pb-1">
                  Guardian &amp; Emergency Contact
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Guardian Name</span>
                    <span className="font-bold text-ink">
                      {enrollment.guardianName} ({enrollment.guardianRelation})
                    </span>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Guardian Phone</span>
                    <span className="font-bold text-ink">{enrollment.guardianPhone}</span>
                  </div>
                  <div>
                    <span className="text-ink-muted text-[10px] uppercase font-bold block">Emergency Contact</span>
                    <span className="font-bold text-ink">{enrollment.emergencyContact}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end border-t-4 border-double border-gold/30 pt-4">
              <div>
                <p className="text-[10px] text-gold-dark uppercase tracking-widest font-extrabold">Status</p>
                <p className="font-bold text-ink tracking-widest">PENDING REVIEW</p>
              </div>
              <div className="text-right">
                <div className="w-40 border-b-2 border-gold h-6 mb-2" />
                <p className="text-[10px] text-gold-dark uppercase tracking-widest font-extrabold">
                  Registrar Signature &amp; Stamp
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gold" />
        </div>

        <div className="text-center mt-8">
          <Link href="/" className="text-gold-dark hover:text-ink text-sm font-bold transition-colors">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}