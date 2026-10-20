import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/layout/Loader";
import JsonLd from "@/components/seo/JsonLd";
import SmartChat from "@/components/chat/SmartChat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://safwatulmalaacademy.online"),
  title: {
    default: "AS SAFWATUL-MALA ACADEMY — Qur'an & Islamic Education",
    template: "%s | Safwatul Mala Academy",
  },
  description:
    "An Islamic academy in Abuja, Nigeria focused on Qur'an education, Arabic language, and Islamic studies for all ages.",
  keywords: [
    "Qur'an learning Abuja",
    "Islamic school Nigeria",
    "Arabic classes Abuja",
    "Huruf",
    "online Qur'an classes",
    "Safwatul Mala",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://safwatulmalaacademy.online",
    siteName: "AS SAFWATUL-MALA ACADEMY",
    title: "AS SAFWATUL-MALA ACADEMY",
    description:
      "Premium Islamic education in Abuja, Nigeria. Qur'an, Arabic, and Islamic studies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AS SAFWATUL-MALA ACADEMY",
    description:
      "Qur'an-centred Islamic education in Abuja, Nigeria.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://safwatulmalaacademy.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <JsonLd />
        <Loader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SmartChat />
      </body>
    </html>
  );
}
