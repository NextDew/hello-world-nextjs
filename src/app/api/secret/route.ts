import { NextResponse } from 'next/server'

// Simulate a MongoDB query
async function fakeMongoQuery() {
  return {
    _id: '665a1b2c3d4e5f6a7b8c9d0e',
    username: 'usuario_demo',
    email: 'demo@example.com',
    createdAt: '2024-06-01T12:00:00Z',
    role: 'admin',
  }
}
// API endpoint to return a secret and a user object
// This endpoint is only accessible on the server side, not exposed to the client
// It simulates a MongoDB query to fetch a user object
// and returns a secret value along with the user data
export async function GET() {
  const secret =
    process.env.MY_SECRET ||
    'Este es un secreto de ejemplo (solo visible en el servidor)'

  const user = await fakeMongoQuery()

  return NextResponse.json({ secret, user })
}
