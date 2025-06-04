import { NextResponse } from 'next/server'

// Simulación de consulta a MongoDB (no requiere conexión real)
async function fakeMongoQuery() {
  // Simula un documento que podrías obtener de una colección
  return {
    _id: '665a1b2c3d4e5f6a7b8c9d0e',
    username: 'usuario_demo',
    email: 'demo@example.com',
    createdAt: '2024-06-01T12:00:00Z',
    role: 'admin',
  }
}

export async function GET() {
  // Simula acceso a una variable de entorno o base de datos
  const secret =
    process.env.MY_SECRET ||
    'Este es un secreto de ejemplo (solo visible en el servidor)'

  // Simula consulta a MongoDB
  const user = await fakeMongoQuery()

  return NextResponse.json({ secret, user })
}
