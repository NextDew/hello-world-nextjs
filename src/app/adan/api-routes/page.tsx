// Author: Adan
'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'
import { Server } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default function APIRoutesPage() {
  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4'>
      <div className='text-center space-y-6 mb-8'>
        <div className='flex items-center justify-center gap-3 mb-4'>
          <Server className='h-8 w-8 text-green-500' />
          <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
            API Routes
          </h1>
        </div>
        <Card className='max-w-2xl border-border/50 bg-muted/30'>
          <CardContent className='pt-4'>
            <div className='flex items-start gap-3'>
              <Server className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
              <CardDescription className='text-lg text-muted-foreground'>
                Las API Routes en Next.js permiten crear endpoints backend
                directamente en el proyecto. Este ejemplo real muestra una ruta API
                personalizada que devuelve un Pokémon aleatorio:
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className='border-border/50 bg-card w-full max-w-md'>
        <CardContent className='pt-4 pb-4 flex flex-col items-center gap-5'>
          <APIDemo />
          <Separator className='w-full' />
          <SecretDemo />
        </CardContent>
      </Card>
      <div className='mt-10 text-center max-w-xl mx-auto space-y-4'>
        <Card className='border-border/50 bg-muted/30'>
          <CardContent className='pt-4'>
            <div className='flex items-start gap-3'>
              <Server className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
              <div className='space-y-1'>
                <h4 className='font-semibold text-foreground'>¿Cómo funciona?</h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  Al visitar la ruta{' '}
                  <code className='bg-primary/20 px-1 py-0.5 rounded text-xs font-mono'>
                    /api/pokemon
                  </code>
                  , Next.js ejecuta el código del endpoint en el servidor y devuelve
                  un Pokémon aleatorio en formato JSON. Se puede consumir desde el
                  frontend o desde herramientas como Postman.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className='border-border/50 bg-muted/30'>
          <CardContent className='pt-4'>
            <div className='flex items-start gap-3'>
              <Server className='h-5 w-5 text-green-500 mt-0.5 flex-shrink-0' />
              <div className='space-y-1'>
                <h4 className='font-semibold text-foreground'>Comprobación</h4>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  Al hacer click en el botón se obtiene un Pokémon aleatorio usando
                  la API Route propia.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function APIDemo() {
  const [pokemon, setPokemon] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchPokemon = async () => {
    setLoading(true)
    setError(null)
    setPokemon(null)
    try {
      const res = await fetch('/api/pokemon')
      if (!res.ok) throw new Error('Error al obtener el Pokémon')
      const data = await res.json()
      setPokemon(data)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex flex-col items-center gap-4 w-full'>
      <Button
        onClick={fetchPokemon}
        className='w-full max-w-xs font-semibold'
        disabled={loading}
        size='lg'>
        {loading ? 'Cargando...' : 'Obtener Pokémon aleatorio'}
      </Button>
      {error && (
        <Card className='w-full max-w-xs border-destructive bg-destructive/10'>
          <CardContent className='pt-4'>
            <p className='text-sm text-destructive text-center'>{error}</p>
          </CardContent>
        </Card>
      )}
      {loading && (
        <Card className='w-full max-w-xs border-border/50 bg-card flex flex-col items-center gap-2 p-3'>
          <Skeleton className='h-24 w-24 rounded-xl' />
          <Skeleton className='h-6 w-20 rounded' />
          <div className='flex gap-2'>
            <Skeleton className='h-5 w-12 rounded-full' />
            <Skeleton className='h-5 w-12 rounded-full' />
          </div>
          <Skeleton className='h-4 w-16 rounded' />
        </Card>
      )}
      {pokemon && !loading && (
        <Card className='w-full max-w-xs border-border/50 bg-card'>
          <CardContent className='flex flex-col items-center gap-2 p-3'>
            <Image
              src={
                pokemon.sprites.other['official-artwork'].front_default ||
                pokemon.sprites.front_default
              }
              alt={pokemon.name}
              width={96}
              height={96}
              className='rounded-xl border-2 border-primary shadow-lg bg-card'
            />
            <CardTitle className='capitalize text-lg text-foreground'>
              {pokemon.name}
            </CardTitle>
            <div className='flex gap-2 flex-wrap justify-center'>
              {pokemon.types.map((t: any) => (
                <Tooltip key={t.type.name}>
                  <TooltipTrigger asChild>
                    <Badge className='bg-gradient-to-r from-indigo-400 to-purple-400 text-white shadow hover:from-indigo-500 hover:to-purple-500'>
                      {t.type.name}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>Tipo: {t.type.name}</TooltipContent>
                </Tooltip>
              ))}
            </div>
            <Separator className='w-full' />
            <CardDescription className='text-muted-foreground text-xs'>
              <span className='font-semibold'>ID:</span> {pokemon.id}
            </CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

function SecretDemo() {
  const [secret, setSecret] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<any>(null)

  const fetchSecret = async () => {
    setLoading(true)
    setError(null)
    setSecret(null)
    setUser(null)
    try {
      const res = await fetch('/api/secret')
      if (!res.ok) throw new Error('Error al obtener el secreto')
      const data = await res.json()
      setSecret(data.secret)
      setUser(data.user)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className='w-full max-w-xs border-border/50 bg-card'>
      <CardHeader className='pb-2 pt-3 px-3'>
        <CardTitle className='text-base text-foreground text-center'>
          Acceso a datos privados del servidor
        </CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center gap-2 p-3 pt-0'>
        <Button
          onClick={fetchSecret}
          className='w-full font-semibold'
          disabled={loading}
          size='sm'>
          {loading ? 'Cargando...' : 'Obtener secreto del servidor'}
        </Button>
        {error && (
          <Card className='w-full border-destructive bg-destructive/10'>
            <CardContent className='pt-4'>
              <p className='text-sm text-destructive text-center'>{error}</p>
            </CardContent>
          </Card>
        )}
        {loading && (
          <div className='w-full space-y-2'>
            <Skeleton className='h-8 w-full' />
            <Skeleton className='h-20 w-full' />
          </div>
        )}
        {secret && !loading && (
          <Card className='w-full border-border/50 bg-muted/30'>
            <CardContent className='pt-4'>
              <p className='text-xs text-center text-muted-foreground'>{secret}</p>
            </CardContent>
          </Card>
        )}
        {user && !loading && (
          <Card className='w-full border-border/50 bg-muted/30'>
            <CardHeader className='pb-1 pt-2 px-2'>
              <CardTitle className='text-xs font-bold text-foreground'>
                Ejemplo de usuario desde "MongoDB":
              </CardTitle>
            </CardHeader>
            <CardContent className='pt-0 px-2 pb-2 space-y-1 text-xs text-muted-foreground'>
              <div>
                <span className='font-semibold'>ID:</span> {user._id}
              </div>
              <div>
                <span className='font-semibold'>Usuario:</span> {user.username}
              </div>
              <div>
                <span className='font-semibold'>Email:</span> {user.email}
              </div>
              <div>
                <span className='font-semibold'>Rol:</span> {user.role}
              </div>
              <div>
                <span className='font-semibold'>Creado:</span>{' '}
                {new Date(user.createdAt).toLocaleString()}
              </div>
            </CardContent>
          </Card>
        )}
        <Separator className='w-full' />
        <CardDescription className='text-xs text-center text-muted-foreground'>
          Este endpoint solo puede accederse desde el servidor y puede devolver datos
          sensibles, como variables de entorno o resultados de una base de datos.
        </CardDescription>
      </CardContent>
    </Card>
  )
}
