// Author: Adan
// This file contains a custom hook for managing animations in the Advantage section of a web application.
import { useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ANIMATION_CONFIG } from '@/utils/animation-config'

export function useAdvantageAnimations() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const listeners = useRef<
    { element: HTMLElement; type: string; fn: EventListener }[]
  >([])

  const cleanup = useCallback(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    listeners.current.forEach(({ element, type, fn }) => {
      element.removeEventListener(type, fn)
    })
    listeners.current = []
  }, [])

  const setupInitialAnimations = useCallback((prefersReducedMotion: boolean) => {
    gsap.set([titleRef.current, contentRef.current], {
      opacity: 1,
      transformOrigin: 'center center',
      willChange: 'transform, opacity',
    })

    gsap.set(cardsRef.current.filter(Boolean), {
      opacity: 0,
      y: prefersReducedMotion ? 0 : ANIMATION_CONFIG.INITIAL_Y,
      scale: prefersReducedMotion ? 1 : ANIMATION_CONFIG.INITIAL_SCALE,
      willChange: 'transform, opacity',
      pointerEvents: 'none',
    })

    gsap.set(scrollIndicatorRef.current, {
      opacity: 1,
      willChange: 'transform, opacity',
    })
  }, [])

  const setupScrollWheel = useCallback(() => {
    const scrollWheel = scrollIndicatorRef.current?.querySelector('.scroll-wheel')
    if (scrollWheel) {
      gsap.to(scrollWheel, {
        y: 8,
        duration: 1.5,
        ease: 'power2.inOut',
        repeat: -1,
        yoyo: true,
      })
    }
  }, [])

  const createMainTimeline = useCallback(() => {
    return gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        ...ANIMATION_CONFIG.SCROLL_TRIGGER,
      },
    })
  }, [])

  const setupCardInteractions = useCallback(
    (handleCardInteraction: (card: HTMLElement, isEnter: boolean) => void) => {
      return () => {
        cardsRef.current.forEach((card) => {
          if (card) {
            card.style.cursor = 'pointer'

            const enterHandler = () => handleCardInteraction(card, true)
            const leaveHandler = () => handleCardInteraction(card, false)

            card.addEventListener('mouseenter', enterHandler, { passive: true })
            card.addEventListener('mouseleave', leaveHandler, { passive: true })

            listeners.current.push(
              { element: card, type: 'mouseenter', fn: enterHandler },
              { element: card, type: 'mouseleave', fn: leaveHandler }
            )
          }
        })
      }
    },
    []
  )

  return {
    refs: {
      containerRef,
      titleRef,
      contentRef,
      cardsRef,
      scrollIndicatorRef,
    },
    cleanup,
    setupInitialAnimations,
    setupScrollWheel,
    createMainTimeline,
    setupCardInteractions,
  }
}
