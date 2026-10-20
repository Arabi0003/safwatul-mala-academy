import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "News, Articles & Resources",
  description: "Educational articles, academy news, and Qur'an learning resources from AS SAFWATUL-MALA ACADEMY.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero label="Resources" title="News & Articles" subtitle="Updates from the academy and educational reading for students and parents." />
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="p-12 rounded-2xl border-2 border-dashed border-gold-light/40 bg-gold-pale/20">
            <p className="text-brown-light text-[17px] leading-relaxed mb-2">
              Articles and news posts will be published here.
            </p>
            <p className="text-sm text-brown-muted">
              This section is ready for content. The academy can add educational
              articles, event reports, and learning resources at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
