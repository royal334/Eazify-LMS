'use client'

import { ClerkProvider } from '@clerk/nextjs'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import DarkModeProvider from './MyComponents/DarkModeProvider'
import CheckLogin from './MyComponents/CheckLogin'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        {/* <CheckLogin /> */}
        <DarkModeProvider />
        {children}
      </QueryClientProvider>
    // </ClerkProvider>
  )
}
