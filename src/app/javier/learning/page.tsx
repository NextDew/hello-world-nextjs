'use client'
// Author: Javier

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Book } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LearningPage() {
  return (
    <main className='min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-sky-100 to-blue-200 dark:from-slate-900 dark:to-slate-800'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className='w-full max-w-3xl'>
        <Card className='bg-white/90 dark:bg-slate-900 border border-border/40 shadow-xl rounded-2xl'>
          <CardHeader className='flex items-center gap-2 pb-2'>
            <Book className='text-blue-600' />
            <CardTitle className='text-2xl text-blue-800 dark:text-blue-300 font-bold'>
              Curva de aprendizaje
            </CardTitle>
            <Badge variant='outline' className='ml-auto'>
              Aprendizaje
            </Badge>
          </CardHeader>
          <CardContent>
            <p className='text-lg leading-relaxed text-slate-700 dark:text-slate-200'>
              Next.js incorpora conceptos avanzados como routing híbrido y server
              rendering, lo cual puede dificultar el aprendizaje para quienes se
              inician en React. Se requiere una buena base de JavaScript moderno y
              comprensión de backend.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}
