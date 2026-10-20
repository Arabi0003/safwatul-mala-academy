import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Monitor, Wifi, Calendar } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Online Learning",
  description: "Online Qur'an and Islamic learning options at AS SAFWATUL-MALA ACADEMY for students near and far.",
};

export default function OnlinePage() {
  return (
    <>
      <PageHero label="Learn Anywhere" title="Online Learning" subtitle="Quality Qur'an education that reaches beyond the classroom walls." />
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4 text-brown-light leading-relaxed text-[17px]">
          <p>
            Not every family can attend in person every day. Our online learning
            option is being developed so students can join live sessions,
            access materials, and stay connected with their teachers remotely.
          </p>
          <p>
            Platform details, available courses, schedules, and technical requirements
            will be published here as they are confirmed. We will not advertise
            features that are not ready.
          </p>
        </div>
      </section>
      <section className="py-16 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Monitor, title: "Live Sessions", text: "Real-time classes with your assigned teacher." },
            { icon: Wifi, title: "Flexible Access", text: "Join from home when in-person attendance is difficult." },
            { icon: Calendar, title: "Same Standards", text: "Online students follow the same curriculum and expectations." },
          ].map((i) => (
            <div key={i.title} className="p-7 rounded-2xl bg-white border border-platinum/60 text-center">
              <div className="w-12 h-12 mx-auto rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-4">
                <i.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-bold text-brown-deep mb-2">{i.title}</h3>
              <p className="text-sm text-brown-light">{i.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 bg-white text-center">
        <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold text-brown-deep rounded-full font-bold hover:bg-gold-dark hover:text-white transition-all">
          Ask About Online Options <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </>
  );
}
