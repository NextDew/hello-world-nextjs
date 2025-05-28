// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Next Journey',
  description: 'A demo project using Next.js and shadcn/ui'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={cn('flex min-h-screen flex-col')}>
        <Navbar />
        <main className="container mx-auto flex-grow px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
