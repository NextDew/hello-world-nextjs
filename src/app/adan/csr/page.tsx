'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { Zap, Clock } from 'lucide-react'

export default function CSRPage() {
  const [pokemon, setPokemon] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 151) + 1
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data)
        setLoading(false)
      })
  }, [])

  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4'>
      <div className='w-full max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-2 mb-4'>
            <Zap className='w-8 h-8 text-orange-500' />
            <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
              Client Side Rendering (CSR)
            </h1>
          </div>
          <p className='text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-6'>
            Esta página se renderiza <b>exclusivamente en el cliente</b>. El Pokémon
            mostrado se obtiene usando <code>fetch</code> y <code>useEffect</code>{' '}
            después de que la página se ha cargado en el navegador.
          </p>
          <Badge variant='outline' className='mb-8'>
            <Clock className='w-4 h-4 mr-1' />
            Renderizado en tiempo real
          </Badge>
        </div>

        <Card className='w-full max-w-md mx-auto mb-8 border-border/50 bg-card'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-center flex items-center justify-center gap-2'>
              <Zap className='w-5 h-5 text-orange-500' />
              Pokémon Dinámico
            </CardTitle>
            <CardDescription className='text-center'>
              Datos obtenidos y renderizados en el navegador
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col items-center gap-4 min-h-[200px] justify-center pt-0'>
            {loading && (
              <div className='flex flex-col items-center gap-4 w-full'>
                <Skeleton className='h-32 w-32 rounded-xl' />
                <Skeleton className='h-8 w-24' />
                <div className='flex gap-2'>
                  <Skeleton className='h-6 w-16' />
                  <Skeleton className='h-6 w-16' />
                </div>
                <Skeleton className='h-4 w-20' />
              </div>
            )}
            {pokemon && (
              <>
                <Image
                  src={
                    pokemon.sprites.other['official-artwork'].front_default ||
                    pokemon.sprites.front_default
                  }
                  alt={pokemon.name}
                  width={128}
                  height={128}
                  className='rounded-xl border-4 border-primary shadow-lg bg-card'
                  priority
                />
                <h2 className='text-2xl font-semibold text-foreground capitalize'>
                  {pokemon.name}
                </h2>
                <div className='flex gap-2 flex-wrap justify-center'>
                  {pokemon.types.map((t: any) => (
                    <Badge
                      key={t.type.name}
                      className='bg-gradient-to-r from-orange-400 to-red-400 text-white shadow hover:from-orange-500 hover:to-red-500'>
                      {t.type.name}
                    </Badge>
                  ))}
                </div>
                <p className='text-muted-foreground text-sm'>
                  <b>ID:</b> {pokemon.id}
                </p>
              </>
            )}
          </CardContent>
        </Card>

        <div className='max-w-2xl mx-auto space-y-4'>
          <Card className='border-border/50 bg-muted/30'>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Zap className='h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0' />
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  <strong className='text-foreground'>¿Cómo funciona?</strong> El
                  HTML inicial no contiene datos del Pokémon. El contenido se obtiene
                  y renderiza{' '}
                  <strong className='text-foreground'>solo en el navegador</strong>{' '}
                  usando React.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className='border-border/50 bg-muted/30'>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Clock className='h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0' />
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  <strong className='text-foreground'>Comprobación:</strong> Al
                  recargar (F5) aparece un Pokémon diferente cada vez, pero si se
                  inspecciona el HTML inicial, no se ven los datos hasta que React
                  los carga.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
