import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";

interface PortalShellProps {
  title: string;
  role: string;
  description: string;
}

export default function PortalShell({ title, role, description }: PortalShellProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brown-deep via-[#2a1a12] to-brown-deep pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.1)_0%,transparent_50%)]" />
      <div className="relative max-w-lg mx-auto px-4 text-center">
        <div className="glass rounded-3xl p-10 sm:p-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center mb-6">
            <Construction className="w-8 h-8 text-gold" />
          </div>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium mb-3">{role} Portal</p>
          <h1 className="font-heading text-3xl font-bold text-white mb-4">{title}</h1>
          <p className="text-white/50 leading-relaxed mb-2">{description}</p>
          <p className="text-sm text-gold-light/40 mb-8">
            Secure login and dashboard features will be activated when the backend is connected.
            No fake login is provided.
          </p>
          <div className="space-y-3">
            <Link href="/portal" className="flex items-center justify-center gap-2 w-full py-3 border-2 border-gold/40 text-gold rounded-full font-semibold hover:bg-gold/10 transition-all">
              All Portals
            </Link>
            <Link href="/" className="flex items-center justify-center gap-2 w-full py-3 text-white/40 hover:text-gold transition-colors text-sm">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
