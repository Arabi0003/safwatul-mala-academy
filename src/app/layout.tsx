import type { Metadata } from 'next'
import './globals.css'
import ConditionalShell from '@/components/layout/ConditionalShell'
import SmartChat from '@/components/chat/SmartChat'

export const metadata: Metadata = {
  title: 'Safwatulmala Academy',
  description: 'Excellence in Islamic Education',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[#010d09] text-white antialiased">
        <ConditionalShell>{children}</ConditionalShell>
        <SmartChat />
      </body>
    </html>
  )
}