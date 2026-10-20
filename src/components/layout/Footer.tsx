"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ExternalLink,
  FileText,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const quickLinks = [
  { label: "About the Academy", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Online Learning", href: "/online-learning" },
  { label: "Calendar & Announcements", href: "/calendar" },
  { label: "News & Resources", href: "/news" },
  { label: "Contact", href: "/contact" },
];

const programmes = [
  { label: "Qur'an Studies", href: "/quran-studies" },
  { label: "Huruf and Arabic", href: "/huruf-and-arabic" },
  { label: "Islamic Studies", href: "/islamic-studies" },
  { label: "Other Academic Subjects", href: "/academic-subjects" },
  { label: "Teachers & Learning Approach", href: "/teachers" },
];

const terms = [
  "Families and learners are expected to show adab, respect, honesty, and discipline.",
  "Application details must be truthful and submitted by the learner or lawful guardian.",
  "Academy materials, portal access, and private information must not be misused or shared without permission.",
  "Admission, class placement, timing, and any payment information are confirmed only through official academy communication.",
];

const socials = [
  { label: "Facebook", href: "#", mark: "f" },
  { label: "Instagram", href: "#", mark: "ig" },
  { label: "YouTube", href: "#", mark: "yt" },
  { label: "WhatsApp", href: "#", mark: "wa" },
];

export function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="relative overflow-hidden border-t border-[#f6cf72]/70 bg-white text-zinc-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#f97316]/12 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-[#d4af37]/16 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-[#fff3c4]/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#f6cf72]/80 bg-white/80 shadow-[0_24px_80px_rgba(212,175,55,0.18)] backdrop-blur-xl">
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f6cf72] bg-[#fff8df] px-4 py-2 text-sm font-semibold text-[#b77900]">
                <Sparkles className="h-4 w-4" />
                Qur'an-centred learning with amanah
              </div>

              <h2 className="max-w-2xl font-serif text-3xl font-semibold leading-tight text-zinc-950 sm:text-4xl">
                AS SAFWATUL-MALA ACADEMY
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
                A premium Islamic learning environment in Abuja, focused on Qur'an,
                Arabic, Islamic studies, and strong academic growth with discipline,
                sincerity, and care.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/enroll"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f97316] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-[#ea580c]"
                >
                  Begin Enrollment
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#d4af37] bg-white px-5 py-3 text-sm font-bold text-[#b77900] transition hover:-translate-y-0.5 hover:bg-[#fff8df]"
                >
                  Contact the Academy
                  <Mail className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[#f6cf72]/80 bg-gradient-to-br from-white via-[#fffaf0] to-[#fff1c2] p-5">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f97316] text-white shadow-lg shadow-orange-500/20">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-zinc-950">
                    Terms & Conditions
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-700">
                    Use of the academy website, enrollment forms, learning information,
                    and future portals must follow Islamic manners, honesty, privacy,
                    and responsible conduct.
                  </p>

                  <Link
                    href="/terms-and-conditions"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f97316] hover:text-[#b77900]"
                  >
                    Read full terms
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {terms.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-700">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d4af37]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl border border-[#f6cf72] bg-white shadow-lg shadow-[#d4af37]/10">
                <BookOpen className="h-6 w-6 text-[#f97316]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#b77900]">Safwatul Mala</p>
                <p className="text-lg font-bold text-zinc-950">Academy</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-zinc-700">
              Building learners with Qur'an, Arabic, Islamic values, and academic
              confidence in Abuja, Nigeria.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-[#f6cf72] bg-white text-xs font-black uppercase text-[#f97316] transition hover:-translate-y-0.5 hover:bg-[#fff8df] hover:text-[#b77900]"
                >
                  {social.mark}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-zinc-950">
              <FileText className="h-5 w-5 text-[#f97316]" />
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-700 transition hover:text-[#f97316]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-zinc-950">
              <GraduationCap className="h-5 w-5 text-[#f97316]" />
              Programmes
            </h3>

            <ul className="space-y-3">
              {programmes.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-zinc-700 transition hover:text-[#f97316]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-zinc-950">
              <HeartHandshake className="h-5 w-5 text-[#f97316]" />
              Contact
            </h3>

            <ul className="space-y-4 text-sm leading-6 text-zinc-700">
              <li className="flex gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f97316]" />
                <span>Abuja, Nigeria</span>
              </li>

              <li className="flex gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-[#f97316]" />
                <a href="tel:+2349059860897" className="hover:text-[#f97316]">
                  +234 905 986 0897
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#f97316]" />
                <div className="space-y-1">
                  <a
                    href="mailto:info@safwatulmalaacademy.com"
                    className="block hover:text-[#f97316]"
                  >
                    info@safwatulmalaacademy.com
                  </a>
                  <a
                    href="mailto:safwatulmalaacademy@gmail.com"
                    className="block hover:text-[#f97316]"
                  >
                    safwatulmalaacademy@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#f6cf72]/80 pt-6 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>
            © {year || "2026"} AS SAFWATUL-MALA ACADEMY. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/terms-and-conditions" className="font-semibold hover:text-[#f97316]">
              Terms & Conditions
            </Link>

            <Link href="/enroll" className="font-semibold hover:text-[#f97316]">
              Enrollment
            </Link>

            <a
              href="https://www.yalerima.com.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#b77900] hover:text-[#f97316]"
            >
              Powered by Yalerima Technologies Limited
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
