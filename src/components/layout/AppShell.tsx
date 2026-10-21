'use client';

import React from 'react';
import SplashLoader from '@/components/ui/SplashLoader';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return <SplashLoader duration={4500}>{children}</SplashLoader>;
}