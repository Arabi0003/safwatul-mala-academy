import { ReactNode } from "react";

export default function PageHero({ 
  title, 
  subtitle, 
  tag,
  children 
}: { 
  title: string; 
  subtitle?: string; 
  tag?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-20 bg-[var(--navy-dark)] text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy-dark)] via-[var(--navy)] to-[var(--navy-dark)]"></div>
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)`,
        backgroundSize: "28px 28px"
      }}></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {tag && (
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-[var(--orange)] animate-pulse"></span>
            <span className="text-xs font-bold tracking-widest text-[var(--orange-glow)] uppercase">{tag}</span>
          </div>
        )}
        <h1 className="font-[Playfair] text-4xl md:text-6xl font-extrabold leading-tight mb-6">{title}</h1>
        {subtitle && <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
