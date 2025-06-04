import { NextResponse } from 'next/server'

export async function GET() {
  const randomId = Math.floor(Math.random() * 151) + 1
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
  if (!res.ok) {
    return NextResponse.json(
      { error: 'No se pudo obtener el Pokémon' },
      { status: 500 }
    )
  }
  const data = await res.json()
  return NextResponse.json(data)
}
