import Link from "next/link";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden bg-brown-deep">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.15)_0%,transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.5'%3E%3Cpath d='M40 0L80 40L40 80L0 40Z'/%3E%3Cpath d='M40 10L70 40L40 70L10 40Z'/%3E%3C/g%3E%3C/svg%3E")` }} />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-gold/40" />
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-medium">{label}</p>
          <div className="w-8 h-[1px] bg-gold/40" />
        </div>
        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-silver-light/70 text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
