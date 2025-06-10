'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Framework', href: '/ana' },
  { name: 'Ventajas', href: '/adan' },
  { name: 'Desventajas', href: '/javier' },
  { name: 'Comparativa', href: '/mario' },
  { name: 'Instalación', href: '/kevin' },
  { name: 'Scafolding', href: '/domingo' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className='sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md shadow-lg'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4'>
        {/* Logo Section */}
        <Link
          href='/'
          className='group flex items-center gap-3 transition-all duration-300 hover:scale-105'
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className='relative'>
            <div className='absolute inset-0 rounded-xl bg-primary/20 blur-sm group-hover:bg-primary/30 transition-all duration-300'></div>
            <Image
              className='dark:invert'
              src='/nextjs.svg'
              alt='Nextjs logomark'
              width={26}
              height={26}
            />
          </div>
          <span className='text-xl font-bold text-foreground'>
            Next Journey
          </span>
        </Link>

        {/* Navigation Section */}
        <nav className='hidden md:block'>
          <ul className='flex items-center gap-2'>
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105',
                      'cursor-pointer',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    )}
                  >
                    {isActive && (
                      <div className='absolute inset-0 rounded-full bg-primary/20 blur-sm'></div>
                    )}
                    <span className='relative z-10'>{item.name}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Right Section: Theme Toggle + Mobile Menu */}
        <div className='flex items-center gap-3'>
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle mobile menu'
              className={cn(
                'transition-all duration-300',
                'cursor-pointer',
                isMobileMenuOpen && 'bg-accent'
              )}
            >
              {isMobileMenuOpen ? (
                <X className='h-4 w-4' />
              ) : (
                <Menu className='h-4 w-4' />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden border-t bg-background/95 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden',
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className='px-6 py-4'>
          <ul className='space-y-2'>
            {navItems.map((item, index) => {
              const isActive = pathname === item.href
              return (
                <li
                  key={item.name}
                  className={cn(
                    'transition-all duration-300 ease-out',
                    isMobileMenuOpen
                      ? 'translate-x-0 opacity-100'
                      : 'translate-x-4 opacity-0'
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen
                      ? `${index * 50}ms`
                      : '0ms',
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300',
                      'hover:scale-[1.02] active:scale-[0.98]',
                      'cursor-pointer',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    )}
                  >
                    <div className='flex items-center justify-between'>
                      <span>{item.name}</span>
                      {isActive && (
                        <div className='w-2 h-2 bg-primary-foreground rounded-full animate-pulse' />
                      )}
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Footer */}
          <div className='mt-6 pt-4 border-t border-border/50'>
            <div className='flex items-center justify-between text-xs text-muted-foreground'>
              <span>Next Journey</span>
              <span>{navItems.length} páginas</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant='outline' size='icon' disabled />
  }

  return (
    <Button
      variant='outline'
      size='icon'
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label='Toggle theme'
      className={cn(
        'cursor-pointer',
        'hover:scale-110 hover:shadow-md',
        'transition-all duration-300 ease-in-out',
        'hover:bg-accent/80',
        'active:scale-95',
        'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'group'
      )}
    >
      <Sun
        className={cn(
          'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-500',
          'dark:-rotate-90 dark:scale-0',
          'text-yellow-500 group-hover:text-yellow-600',
          'drop-shadow-sm'
        )}
      />
      <Moon
        className={cn(
          'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-500',
          'dark:rotate-0 dark:scale-100',
          'text-slate-700 dark:text-blue-400 group-hover:dark:text-blue-300',
          'drop-shadow-sm'
        )}
      />
    </Button>
  )
}
