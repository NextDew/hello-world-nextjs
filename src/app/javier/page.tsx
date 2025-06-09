// Author: Javier
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Book, Gauge, Layers } from 'lucide-react'

export default function JavierPage() {
  const cards = [
    {
      title: 'Curva de aprendizaje',
      description:
        'Next.js tiene una curva de aprendizaje pronunciada para quienes se inician en React.',
      icon: <Book className='h-6 w-6 text-blue-600' />,
      href: '/javier/learning',
      bg: 'bg-gradient-to-b from-sky-100 to-blue-200',
      badge: 'Aprendizaje',
    },
    {
      title: 'Desempeño en ciertas situaciones',
      description: 'Si se configura mal, Next.js puede afectar el rendimiento.',
      icon: <Gauge className='h-6 w-6 text-yellow-600' />,
      href: '/javier/performance',
      bg: 'bg-gradient-to-b from-yellow-100 to-yellow-300',
      badge: 'Rendimiento',
    },
    {
      title: 'Complejidad en aplicaciones grandes',
      description:
        'A medida que crecen, las apps pueden volverse difíciles de mantener sin buena arquitectura.',
      icon: <Layers className='h-6 w-6 text-red-600' />,
      href: '/javier/dynamics',
      bg: 'bg-gradient-to-b from-rose-100 to-red-300',
      badge: 'Arquitectura',
    },
  ]

  return (
    <main className='min-h-screen py-16 px-6 bg-background'>
      <div className='max-w-5xl mx-auto space-y-6'>
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className='text-4xl font-bold text-center text-foreground'>
          Desventajas de Next.js
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='text-center text-muted-foreground max-w-2xl mx-auto'>
          Aunque Next.js ofrece grandes ventajas, también existen algunas
          consideraciones importantes que debes tener en cuenta.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
              <Link href={card.href}>
                <Card className={`h-full ${card.bg} border-border/40`}>
                  <CardContent className='p-6 space-y-4'>
                    <div className='flex items-center justify-between'>
                      {card.icon}
                      <Badge variant='outline'>{card.badge}</Badge>
                    </div>
                    <CardTitle className='text-xl font-bold text-foreground'>
                      {card.title}
                    </CardTitle>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  )
}
