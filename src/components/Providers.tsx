'use client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import DarkModeProvider from './MyComponents/DarkModeProvider'


export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        {/* <CheckLogin /> */}
        <DarkModeProvider />
        {children}
        <ReactQueryDevtools
        
        />
      </QueryClientProvider>
    // </ClerkProvider>
  )
}
