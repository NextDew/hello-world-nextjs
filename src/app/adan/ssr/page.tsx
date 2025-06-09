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
import { Server, RefreshCw } from 'lucide-react'

// SSR Demo
async function fetchRandomPokemon() {
  const randomId = Math.floor(Math.random() * 1025) + 1
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('Failed to fetch Pokémon')
  return res.json()
}

export const dynamic = 'force-dynamic' // Ensure SSR on every request

export default async function SSRPage() {
  const pokemon = await fetchRandomPokemon()

  return (
    <main className='min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4'>
      <div className='w-full max-w-4xl mx-auto'>
        <div className='text-center mb-8'>
          <div className='flex items-center justify-center gap-3 mb-4'>
            <Server className='w-8 h-8 text-emerald-500' />
            <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
              Server Side Rendering (SSR)
            </h1>
          </div>
          <p className='text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-6'>
            Esta página se renderiza en el servidor <b>en cada request</b>. El
            Pokémon mostrado abajo es generado aleatoriamente en cada recarga. Al
            recargar la página, aparece un Pokémon diferente, demostrando que los
            datos se obtienen y renderizan en el servidor antes de enviarse al
            navegador.
          </p>
          <Badge variant='outline' className='mb-8'>
            <RefreshCw className='w-4 h-4 mr-1' />
            Renderizado en cada request
          </Badge>
        </div>

        <Card className='w-full max-w-md mx-auto mb-8 border-border/50 bg-card'>
          <CardHeader className='pb-4'>
            <CardTitle className='text-center flex items-center justify-center gap-2'>
              <Server className='w-5 h-5 text-emerald-500' />
              Pokémon del Servidor
            </CardTitle>
            <CardDescription className='text-center'>
              Datos pre-renderizados desde el servidor
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
                  className='bg-gradient-to-r from-emerald-400 to-blue-500 text-white shadow hover:from-emerald-500 hover:to-blue-600 transition-colors'>
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
                <Server className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  <strong className='text-foreground'>¿Cómo funciona?</strong> Al
                  visitar esta página, Next.js ejecuta el código en el servidor,
                  obtiene los datos y genera el HTML final antes de enviarlo al
                  navegador. Es ideal para contenido dinámico, personalizado o que
                  depende de datos en tiempo real.
                </p>
              </div>
            </CardContent>
          </Card>

          <Separator className='my-6' />

          <Card className='border-border/50 bg-muted/30'>
            <CardContent className='pt-4'>
              <div className='flex items-start gap-3'>
                <RefreshCw className='h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0' />
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  <strong className='text-foreground'>Comprobación:</strong> Al
                  recargar la página cambia el Pokémon. Si se inspecciona el HTML,
                  los datos ya están presentes antes de que el navegador ejecute
                  JavaScript.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
