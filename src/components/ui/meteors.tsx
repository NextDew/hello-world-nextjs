'use client'
// Author: Adan
// This component creates a meteor shower effect using CSS animations and React hooks.
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import React, { useMemo } from 'react'

export const Meteors = ({
  number,
  className,
}: {
  number?: number
  className?: string
}) => {
  const meteorData = useMemo(() => {
    const meteorCount = number || 20
    return new Array(meteorCount).fill(true).map((_, idx) => {
      const seed1 = (idx * 123.456) % 1
      const seed2 = (idx * 789.012) % 1

      return {
        position: idx * (800 / meteorCount) - 400,
        delay: seed1 * 5,
        duration: 5 + seed2 * 5,
      }
    })
  }, [number])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      {meteorData.map((meteor, idx) => (
        <span
          key={'meteor' + idx}
          className={cn(
            'animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
            className
          )}
          style={{
            top: '-40px',
            left: meteor.position + 'px',
            animationDelay: meteor.delay + 's',
            animationDuration: meteor.duration + 's',
          }}></span>
      ))}
    </motion.div>
  )
}
