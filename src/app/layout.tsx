import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppShell from "@/components/layout/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://safwatulmalaacademy.online'),
  title: "AS SAFWATUL-MALA ACADEMY | Qur'an, Arabic & Academic Excellence | Abuja, Nigeria",
  description: "Premier Islamic education academy in Abuja, Nigeria offering Qur'anic memorization, Arabic language, and modern academic subjects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${playfair.variable} antialiased bg-emerald-50 text-emerald-900`}>
        <AppShell>
          <Navbar />
          {children}
          <Footer />
        </AppShell>
      </body>
    </html>
  );
}