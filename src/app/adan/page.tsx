'use client'

// Author: Adan

import { useState, useMemo, useCallback, lazy, Suspense } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import advantages from '@/utils/advantages'
import {
  ANIMATION_CONFIG,
  getCategoryFromTitle,
  generateSlug,
} from '@/utils/animation-config'
import { useAdvantageAnimations } from '@/hooks/useAdvantageAnimations'
import Image from 'next/image'
import { Black_Ops_One } from 'next/font/google'

const blackOpsOne = Black_Ops_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Impact', 'Arial Black', 'sans-serif'],
})

const GlowingEffect = lazy(() =>
  import('@/components/ui/glowing-effect').then((m) => ({
    default: m.GlowingEffect,
  }))
)
const Meteors = lazy(() =>
  import('@/components/ui/meteors').then((m) => ({ default: m.Meteors }))
)

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function AdanPage() {
  const [animationsComplete, setAnimationsComplete] = useState(false)

  const {
    refs: { containerRef, titleRef, contentRef, cardsRef, scrollIndicatorRef },
    cleanup,
    setupInitialAnimations,
    setupScrollWheel,
    createMainTimeline,
    setupCardInteractions,
  } = useAdvantageAnimations()

  const handleCardInteraction = useCallback(
    (card: HTMLElement, isEnter: boolean) => {
      gsap.to(card, {
        scale: isEnter ? ANIMATION_CONFIG.CARD_HOVER_SCALE : 1,
        y: isEnter ? -ANIMATION_CONFIG.CARD_HOVER_Y : 0,
        duration: ANIMATION_CONFIG.CARD_HOVER_DURATION,
        ease: ANIMATION_CONFIG.CARD_EASE,
        overwrite: 'auto',
      })
    },
    []
  )

  const handleCardInteractionsComplete = useCallback(() => {
    setAnimationsComplete(true)
  }, [])

  useGSAP(
    () => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches

      setupInitialAnimations(prefersReducedMotion)
      setupScrollWheel()

      const mainTimeline = createMainTimeline()

      mainTimeline
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 0,
            y: -10,
            duration: 0.5,
            ease: 'power2.out',
          },
          0
        )
        .to(titleRef.current, {
          scale: ANIMATION_CONFIG.ZOOM_SCALE,
          opacity: 0,
          duration: ANIMATION_CONFIG.ZOOM_DURATION,
          ease: ANIMATION_CONFIG.ZOOM_EASE,
        })
        .fromTo(
          contentRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION_CONFIG.CONTENT_DURATION,
            ease: ANIMATION_CONFIG.CONTENT_EASE,
          },
          '-=0.3'
        )

      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(cardsRef.current.filter(Boolean), {
            y: 0,
            opacity: 1,
            scale: 1,
            pointerEvents: 'auto',
            duration: ANIMATION_CONFIG.STAGGER_DURATION,
            stagger: ANIMATION_CONFIG.STAGGER_CONFIG,
            ease: ANIMATION_CONFIG.STAGGER_EASE,
            onComplete: () => {
              const setupInteractions = setupCardInteractions(handleCardInteraction)
              setupInteractions()
              handleCardInteractionsComplete()
            },
          })
        },
      })

      return cleanup
    },
    { scope: containerRef }
  )

  return (
    <div
      ref={containerRef}
      className='min-h-screen bg-white dark:bg-black relative overflow-hidden'>
      <section className='h-screen flex items-center justify-center'>
        <div className='flex flex-col items-center'>
          <h1
            ref={titleRef}
            className={`${blackOpsOne.className} text-5xl md:text-7xl text-center font-bold text-gray-900 dark:text-white px-4 leading-tight`}
            style={{
              willChange: 'transform, opacity',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
            }}>
            VENTAJAS
            <br />
            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
              NEXT.JS
            </span>
          </h1>
          <div
            ref={scrollIndicatorRef}
            className='mt-12 flex flex-col items-center text-gray-600 dark:text-white/60'
            style={{ willChange: 'transform, opacity' }}>
            <p className='text-sm mb-4 animate-pulse'>Desplazarse para explorar</p>
            <div className='w-6 h-10 border-2 border-gray-400/30 dark:border-white/30 rounded-full flex justify-center'>
              <div className='scroll-wheel w-1 h-3 bg-gray-500/60 dark:bg-white/60 rounded-full mt-2'></div>
            </div>
          </div>
        </div>
      </section>
      <div
        ref={contentRef}
        className='absolute inset-0 bg-white dark:bg-gray-900 mt-10'
        style={{ opacity: 0 }}>
        <div className='container mx-auto py-16 px-4'>
          <div className='flex items-end justify-center gap-4 mb-12'>
            <h2 className='text-3xl md:text-5xl font-medium text-center text-gray-900 dark:text-white'>
              El verdadero potencial de
            </h2>{' '}
            <Image
              src='/next.svg'
              alt='Next.js Logo'
              width={96}
              height={96}
              className='dark:invert mb-2'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {advantages.map((advantage, index) => (
              <AdvantageCard
                key={advantage.title}
                {...advantage}
                cardRef={(el) => (cardsRef.current[index] = el)}
                isInteractive={animationsComplete}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface AdvantageCardProps {
  icon: React.ElementType
  title: string
  description: string
  color: string
  iconColor: string
  bgColor: string
  cardRef?: (el: HTMLDivElement | null) => void
  isInteractive?: boolean
}

function AdvantageCard({
  icon: IconComponent,
  title,
  description,
  color,
  iconColor,
  bgColor,
  cardRef,
  isInteractive = false,
}: AdvantageCardProps) {
  const slug = useMemo(() => generateSlug(title), [title])
  const category = useMemo(() => getCategoryFromTitle(title), [title])
  const cardClasses = useMemo(
    () =>
      `group relative p-6 rounded-2xl border border-border/50 ${bgColor} backdrop-blur-sm hover:border-primary/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 ${
        isInteractive ? 'cursor-pointer' : 'cursor-default'
      }`,
    [bgColor, isInteractive]
  )

  const iconClasses = useMemo(() => {
    return `${iconColor} group-hover:text-primary transition-all duration-300`
  }, [iconColor])

  const gradientClasses = useMemo(
    () =>
      `absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`,
    [color]
  )

  return (
    <div
      ref={cardRef}
      className={cardClasses}
      style={{ perspective: '1000px', willChange: 'transform, opacity' }}
      role='button'
      tabIndex={0}
      aria-label={`Ver detalles de ${title}`}>
      {/* Glowing effect */}
      <Suspense
        fallback={
          <div className='absolute inset-0 rounded-2xl border border-primary/20' />
        }>
        <GlowingEffect
          blur={0}
          borderWidth={2}
          spread={60}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.01}
        />
      </Suspense>

      {/* Meteors effect  */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-2xl'>
        <Suspense fallback={null}>
          <Meteors
            number={10}
            className='bg-gradient-to-r from-blue-400 to-purple-500 shadow-[0_0_0_1px_rgba(255,255,255,0.1)]'
          />
        </Suspense>
      </div>

      {/* Background gradient on hover */}
      <div className={gradientClasses} />

      <div className='relative z-10'>
        {/* Header with icon, badge and tooltip button */}
        <div className='flex items-start justify-between mb-4'>
          <div className='flex items-center gap-3'>
            <div className='card-icon inline-block'>
              <IconComponent size={32} className={iconClasses} />
            </div>
            <Badge variant='secondary' className='text-xs'>
              {category}
            </Badge>
          </div>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                size='sm'
                className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-8 w-8 p-0'
                asChild>
                <Link href={`/adan/${slug}`} prefetch={false}>
                  <ExternalLink size={16} />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Ver detalles de {title}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Card content */}
        <div className='card-content'>
          <h3 className='text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300'>
            {title}
          </h3>
          <p className='text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 mb-4'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
