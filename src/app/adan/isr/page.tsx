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
import { RotateCcw, Timer } from 'lucide-react'

function getCurrentSlot() {
  const now = new Date()
  const seconds =
    now.getUTCHours() * 3600 + now.getUTCMinutes() * 60 + now.getUTCSeconds()
  return Math.floor(seconds / 15)
}

function getGenerationTime(slot: number) {
  const slotStartTime = slot * 15 * 1000
  const baseTime = new Date('2025-01-01T00:00:00Z').getTime()
  const generationTime = new Date(baseTime + slotStartTime)

  return (
    generationTime.toLocaleString('es-ES', {
      timeZone: 'UTC',
      hour12: false,
    }) + ' UTC'
  )
}

async function fetchPokemon() {
  const slot = getCurrentSlot()
  const pokemonId = (slot % 151) + 1
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  if (!res.ok) throw new Error('Failed to fetch Pokémon')
  return {
    pokemon: await res.json(),
    slot,
    generationTime: getGenerationTime(slot),
  }
}

export const revalidate = 15 // ISR: revalidate for every 15 seconds

export default async function ISRPage() {
  const { pokemon, slot, generationTime } = await fetchPokemon()

  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4'>
      <div className='flex items-center gap-3 mb-4'>
        <RotateCcw className='h-8 w-8 text-purple-500' />
        <h1 className='text-4xl md:text-5xl font-bold text-center text-foreground'>
          Incremental Static Regeneration (ISR)
        </h1>
      </div>

      <Card className='max-w-2xl mb-8 border-border/50 bg-muted/30'>
        <CardContent className='pt-4'>
          <div className='flex items-start gap-3'>
            <Timer className='h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0' />
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Esta página se genera de forma estática, pero se{' '}
              <strong className='text-foreground'>
                regenera automáticamente cada 15 segundos
              </strong>
              . El Pokémon mostrado cambiará después de ese tiempo, demostrando la
              regeneración incremental de Next.js.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className='w-full max-w-md border-border/50 bg-card'>
        <CardHeader className='text-center pb-4'>
          <div className='flex justify-center mb-4'>
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
          </div>
          <CardTitle className='text-2xl capitalize text-foreground'>
            {pokemon.name}
          </CardTitle>
          <CardDescription>
            <Badge variant='secondary'>ID: {pokemon.id}</Badge>
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-4 pt-0'>
          <div className='flex gap-2 flex-wrap justify-center'>
            {pokemon.types.map((t: any) => (
              <Badge
                key={t.type.name}
                className='bg-gradient-to-r from-purple-400 to-blue-400 text-white shadow hover:from-purple-500 hover:to-blue-500 transition-colors'>
                {t.type.name}
              </Badge>
            ))}
          </div>

          <Separator />

          <div className='text-center space-y-2'>
            <p className='text-sm text-muted-foreground'>
              <Timer className='inline h-4 w-4 mr-1' />
              Slot actual: <Badge variant='outline'>{slot}</Badge>
            </p>
            <p className='text-sm text-muted-foreground'>
              Generado: <Badge variant='outline'>{generationTime}</Badge>
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className='mt-10 max-w-xl border-border/50 bg-card'>
        <CardHeader className='pb-4'>
          <CardTitle className='text-lg text-foreground'>
            ¿Cómo funciona ISR?
          </CardTitle>
        </CardHeader>
        <CardContent className='space-y-4 pt-0'>
          <p className='text-sm text-muted-foreground leading-relaxed'>
            Al visitar esta página, Next.js sirve una versión estática. Después de 15
            segundos, la próxima visita disparará una nueva generación de la página
            con un Pokémon diferente.
          </p>

          <Separator />

          <div>
            <h4 className='font-semibold mb-2 text-foreground'>Comprobación:</h4>
            <p className='text-sm text-muted-foreground leading-relaxed'>
              Al recargar varias veces se ve el mismo Pokémon y la misma hora de
              generación. Esperando 15 segundos y recargando aparece uno nuevo con
              una nueva hora de generación.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
