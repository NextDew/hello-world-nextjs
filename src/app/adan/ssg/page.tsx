// Author: Adan
import Image from 'next/image'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Globe, Hammer } from 'lucide-react'

async function fetchPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/25', {
    cache: 'force-cache',
  }) // Pikachu
  if (!res.ok) throw new Error('Failed to fetch Pokémon')
  return res.json()
}

export const dynamic = 'force-static' // SSG: solo se genera en build

export default async function SSGPage() {
  const pokemon = await fetchPokemon()

  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4'>
      <div className='w-full max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <Globe className='w-8 h-8 text-blue-500' />
            <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
              Static Site Generation (SSG)
            </h1>
          </div>
          <p className='text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-6'>
            Esta página se genera <b>una sola vez en build</b> y se sirve igual para
            todos los usuarios. El Pokémon mostrado es siempre el mismo (Pikachu),
            demostrando que los datos se obtienen y renderizan una vez y luego se
            sirven de forma estática.
          </p>
          <Badge variant='outline' className='mb-8'>
            <Hammer className='w-4 h-4 mr-1' />
            Generado en build time
          </Badge>
        </div>

        <Card className='w-full max-w-md mx-auto mb-8 border-border/50 bg-card'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-center flex items-center justify-center gap-2'>
              <Globe className='w-5 h-5 text-blue-500' />
              Pokémon Estático
            </CardTitle>
            <CardDescription className='text-center'>
              Pre-generado durante el build (siempre Pikachu)
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col items-center gap-4 pt-0'>
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
                  className='bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow hover:from-yellow-500 hover:to-orange-500 transition-colors'>
                  {t.type.name}
                </Badge>
              ))}
            </div>
            <p className='text-muted-foreground text-sm'>
              <b>ID:</b> {pokemon.id}
            </p>
          </CardContent>
        </Card>

        <div className='max-w-2xl mx-auto space-y-4'>
          <Card className='border-border/50 bg-muted/30'>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Globe className='h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0' />
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  <strong className='text-foreground'>¿Cómo funciona?</strong> Al
                  ejecutar{' '}
                  <span className='font-mono text-sm bg-muted px-1.5 py-0.5 rounded border'>
                    next build
                  </span>
                  , Next.js obtiene los datos y genera el HTML final de esta página.
                  Después, ese HTML se sirve a todos los usuarios, sin necesidad de
                  volver a consultar la API.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator className='my-6' />

          <Card className='border-border/50 bg-muted/30'>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <Hammer className='h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0' />
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  <strong className='text-foreground'>Comprobación:</strong> Para
                  cambiar el contenido es necesario modificar el código y volver a
                  hacer{' '}
                  <span className='font-mono text-sm bg-muted px-1.5 py-0.5 rounded border'>
                    next build
                  </span>
                  . El contenido solo cambia tras un nuevo build.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
