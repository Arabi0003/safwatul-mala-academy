'use client'

import { usePathname } from 'next/navigation'
import { Suspense } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hide = pathname.startsWith('/portal') || pathname.startsWith('/dashboard')

  return (
    <>
      {!hide && (
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
      )}
      {children}
      {!hide && <Footer />}
    </>
  )
}