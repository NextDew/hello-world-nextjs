// Author: Adan
'use client'

import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import {
  FolderTree,
  FileText,
  LayoutDashboard,
  ArrowRight,
  Info,
} from 'lucide-react'
import { useState } from 'react'

type TreeViewProps = {
  nodes: TreeNode[]
  onSelect: (node: TreeNode) => void
  selected: TreeNode | null
}

function TreeView({ nodes, onSelect, selected }: TreeViewProps) {
  return nodes.map((node, idx) => (
    <div key={node.name + idx} className='pl-2'>
      <div
        className={`flex items-center gap-2 cursor-pointer py-1 rounded ${
          selected === node ? 'bg-teal-500/10' : ''
        }`}
        onClick={() => node.content && onSelect(node)}>
        <node.icon
          className={`w-4 h-4 ${
            node.dynamic || node.name.startsWith('[')
              ? 'text-yellow-500 dark:text-yellow-400'
              : 'text-teal-500'
          }`}
        />
        <span
          className={`font-mono text-xs ${
            node.dynamic || node.name.startsWith('[')
              ? 'text-yellow-600 dark:text-yellow-300 font-bold'
              : ''
          }`}>
          {node.name}
        </span>
        {node.content && <ArrowRight className='w-3 h-3 text-muted-foreground' />}
      </div>
      {node.children && (
        <div className='pl-4 border-l border-muted-foreground/20 ml-2'>
          <TreeView nodes={node.children} onSelect={onSelect} selected={selected} />
        </div>
      )}
    </div>
  ))
}

type PagesTreeViewProps = {
  nodes: TreeNode[]
  onSelect: (node: TreeNode) => void
  selected: TreeNode | null
}

function PagesTreeView({ nodes, onSelect, selected }: PagesTreeViewProps) {
  return nodes.map((node, idx) => (
    <div key={node.name + idx} className='pl-2'>
      <div
        className={`flex items-center gap-2 cursor-pointer py-1 rounded ${
          selected === node ? 'bg-pink-200 dark:bg-pink-900/30' : ''
        }`}
        onClick={() => node.content && onSelect(node)}>
        <node.icon className='w-4 h-4 text-pink-600 dark:text-pink-400' />
        <span className='font-mono text-xs'>{node.name}</span>
        {node.content && <ArrowRight className='w-3 h-3 text-muted-foreground' />}
      </div>
      {node.children && (
        <div className='pl-4 border-l border-muted-foreground/20 ml-2'>
          <PagesTreeView
            nodes={node.children}
            onSelect={onSelect}
            selected={selected}
          />
        </div>
      )}
    </div>
  ))
}

type SimulatedRouteInfoProps = {
  selected: TreeNode | null
}

function SimulatedRouteInfo({ selected }: SimulatedRouteInfoProps) {
  if (!selected) return null
  if (selected.type !== 'page') return null
  let route = ''
  if (selected.content?.includes('listado general')) route = '/pokemon'
  else if (selected.content?.includes('detalle de un Pokémon')) route = '/pokemon/25'
  else if (selected.content?.includes('favoritos')) route = '/pokemon/favorites'
  else if (selected.content?.includes('principal: contenido de la ruta /'))
    route = '/'
  return (
    <div className='text-xs text-blue-600 dark:text-blue-400'>
      Ruta simulada: <span className='font-mono'>{route}</span>
    </div>
  )
}

interface TreeNode {
  name: string
  icon: React.ElementType
  type?: 'layout' | 'page' | 'api'
  content?: string
  children?: TreeNode[]
  dynamic?: boolean
}

// Structure for the App Router
const structure: TreeNode[] = [
  {
    name: 'app',
    icon: FolderTree,
    children: [
      {
        name: 'layout.tsx',
        icon: LayoutDashboard,
        type: 'layout',
        content:
          'Layout raíz: define el shell general de la app (navbar, theme, etc.)',
      },
      {
        name: 'page.tsx',
        icon: FileText,
        type: 'page',
        content: 'Página principal: contenido de la ruta /',
      },
      {
        name: 'pokemon',
        icon: FolderTree,
        children: [
          {
            name: 'layout.tsx',
            icon: LayoutDashboard,
            type: 'layout',
            content: 'Layout anidado: añade barra lateral solo en /pokemon/*',
          },
          {
            name: 'page.tsx',
            icon: FileText,
            type: 'page',
            content: 'Página de Pokémon: listado general en /pokemon',
          },
          {
            name: '[id]',
            icon: FolderTree,
            dynamic: true,
            children: [
              {
                name: 'page.tsx',
                icon: FileText,
                type: 'page',
                content: 'Página dinámica: detalle de un Pokémon en /pokemon/:id',
              },
            ],
          },
          {
            name: 'favorites',
            icon: FolderTree,
            children: [
              {
                name: 'page.tsx',
                icon: FileText,
                type: 'page',
                content:
                  'Página de favoritos: muestra los Pokémon favoritos en /pokemon/favorites',
              },
            ],
          },
        ],
      },
    ],
  },
]

//  Basic structure for pages in the App Router
const pagesStructure: TreeNode[] = [
  {
    name: 'pages',
    icon: FolderTree,
    children: [
      {
        name: 'index.tsx',
        icon: FileText,
        type: 'page',
        content: 'Página principal: contenido de la ruta /',
      },
      {
        name: 'about.tsx',
        icon: FileText,
        type: 'page',
        content: 'Página About: contenido de /about',
      },
      {
        name: 'contact.tsx',
        icon: FileText,
        type: 'page',
        content: 'Página Contact: contenido de /contact',
      },
      {
        name: 'blog',
        icon: FolderTree,
        children: [
          {
            name: '[id].tsx',
            icon: FileText,
            type: 'page',
            content: 'Página dinámica: contenido de /blog/:id',
          },
        ],
      },
      {
        name: 'api',
        icon: FolderTree,
        children: [
          {
            name: 'hello.ts',
            icon: FileText,
            type: 'api',
            content: 'API Route: endpoint /api/hello',
          },
        ],
      },
    ],
  },
]

export default function AppRouterDemoPage() {
  const [selected, setSelected] = useState<TreeNode | null>(null)
  const [selectedPages, setSelectedPages] = useState<TreeNode | null>(null)

  return (
    <main className='min-h-screen bg-background flex flex-col items-center py-12 px-4'>
      <h1 className='text-4xl md:text-5xl font-bold text-center mb-4 text-foreground'>
        App Router: Routing moderno en Next.js
      </h1>
      <p className='text-lg text-center text-muted-foreground max-w-2xl mb-4'>
        El <b>App Router</b> permite crear rutas, layouts y páginas anidadas usando
        la estructura de carpetas. Cada carpeta puede tener su propio{' '}
        <code>layout.tsx</code> y <code>page.tsx</code>, permitiendo layouts anidados
        y componentes de servidor o cliente.
      </p>
      <div className='w-full max-w-2xl mx-auto mb-8'>
        <Card className='p-4 bg-teal-500/10 border-teal-500 border shadow-lg hover:shadow-xl transition-shadow'>
          <div className='flex items-start gap-3'>
            <div className='flex-shrink-0 mt-0.5'>
              <Info className='w-5 h-5 text-teal-600' />
            </div>
            <div className='flex-1 text-sm text-teal-600 dark:text-teal-400'>
              <span>
                Todas las páginas de ventajas en <code>/adan/...</code> están hechas
                usando el <b>App Router</b> de Next.js.
                <br />
                Cada ejemplo (SSR, SSG, ISR, CSR, API Routes, App Router) es una
                página real creada con este sistema moderno de rutas y layouts
                anidados.
              </span>
            </div>
          </div>
        </Card>
      </div>
      <section className='flex flex-col md:flex-row gap-8 w-full max-w-4xl items-start justify-center'>
        <Card className='w-full max-w-xs p-4 bg-background border-teal-500 border-2 shadow-lg hover:shadow-xl transition-shadow'>
          <div className='font-semibold mb-2 text-teal-500'>
            Estructura de carpetas (App Router)
          </div>
          <div className='text-xs text-muted-foreground mb-2'>
            Click en un archivo para ver su función
          </div>
          <TreeView nodes={structure} onSelect={setSelected} selected={selected} />
        </Card>
        <Card className='flex-1 min-h-[200px] p-6 flex flex-col items-center justify-center bg-background border-teal-500 border-2 shadow-lg hover:shadow-xl transition-shadow'>
          {!selected && (
            <div className='text-muted-foreground text-sm text-center'>
              Seleccionar un archivo para ver su función y cómo afecta el layout o la
              ruta.
            </div>
          )}
          {selected && (
            <>
              <div className='flex items-center gap-2 mb-2'>
                <selected.icon className='w-5 h-5 text-teal-500' />
                <span className='font-mono text-base'>{selected.name}</span>
              </div>
              <div className='text-foreground text-center mb-2'>
                {selected.content}
              </div>
              {selected.type === 'layout' && (
                <div className='text-xs text-teal-500/80'>
                  Este archivo define un layout persistente para todas las rutas
                  hijas.
                </div>
              )}
              <SimulatedRouteInfo selected={selected} />

              {selected.name === 'layout.tsx' &&
                selected.content?.includes('Layout anidado') && (
                  <div className='mt-6 w-full max-w-md mx-auto'>
                    <Card className='p-0 overflow-hidden border-blue-300 dark:border-blue-800 relative'>
                      <PokemonNav
                        borderColor='border-blue-400 dark:border-blue-600'
                        labelColor='text-blue-500 dark:text-blue-300'
                        labelBg='bg-blue-100/80 dark:bg-blue-900/60'
                        borderClass='border-blue-300 dark:border-blue-800'
                        labelText='Zona Layout (Navegación)'
                      />

                      <main className='p-6 bg-background flex flex-col justify-center items-center relative min-h-[180px]'>
                        <div className='text-blue-900 dark:text-blue-100 font-semibold mb-2 text-sm'>
                          Este es el layout anidado de Pokémon.
                        </div>
                        <div className='text-xs text-muted-foreground mb-2'>
                          Aquí se ve la barra de navegación y el contenido de la ruta
                          seleccionada.
                        </div>
                        <div
                          className='absolute right-2 top-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-[10px] text-blue-600 dark:text-blue-200 font-bold rounded border border-blue-300 dark:border-blue-700 pointer-events-none'
                          style={{ zIndex: 2 }}>
                          Zona Page
                        </div>
                        <div
                          className='absolute inset-0 border-2 border-dashed border-blue-200 dark:border-blue-700 rounded pointer-events-none'
                          style={{ zIndex: 1 }}></div>
                      </main>
                    </Card>
                  </div>
                )}
              {selected.name === 'page.tsx' &&
                selected.content?.includes('Pokémon: listado general') && (
                  <div className='mt-6 w-full max-w-md mx-auto'>
                    <Card className='p-0 overflow-hidden border-blue-300 dark:border-blue-800 relative'>
                      <PokemonNav
                        borderColor='border-blue-400 dark:border-blue-600'
                        labelColor='text-blue-500 dark:text-blue-300'
                        labelBg='bg-blue-100/80 dark:bg-blue-900/60'
                        borderClass='border-blue-300 dark:border-blue-800'
                        labelText='Zona Layout (Navegación)'
                      />

                      <main className='p-6 bg-background flex flex-col justify-center items-center relative min-h-[180px]'>
                        <h2 className='text-2xl font-bold mb-2 text-blue-700 dark:text-blue-200'>
                          Listado de Pokémon
                        </h2>
                        <p className='mb-4 text-muted-foreground'>
                          Esta es la página principal de la sección Pokémon. Aquí se
                          puede mostrar una lista de Pokémon, buscar, filtrar, etc.
                        </p>
                        <div className='grid grid-cols-3 gap-4 mb-2'>
                          <div className='flex flex-col items-center'>
                            <Image
                              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
                              alt='Pikachu'
                              width={48}
                              height={48}
                              className='mb-1'
                            />
                            <span className='text-xs text-foreground font-semibold'>
                              Pikachu
                            </span>
                          </div>
                          <div className='flex flex-col items-center'>
                            <Image
                              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                              alt='Bulbasaur'
                              width={48}
                              height={48}
                              className='mb-1'
                            />
                            <span className='text-xs text-foreground font-semibold'>
                              Bulbasaur
                            </span>
                          </div>
                          <div className='flex flex-col items-center'>
                            <Image
                              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
                              alt='Charmander'
                              width={48}
                              height={48}
                              className='mb-1'
                            />
                            <span className='text-xs text-foreground font-semibold'>
                              Charmander
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-col gap-2 items-center'>
                          <span className='text-blue-600'>
                            Ver detalle de Pikachu (ID 25)
                          </span>
                          <span className='text-blue-600'>Ir a favoritos</span>
                        </div>
                        <div
                          className='absolute right-2 top-2 px-2 py-0.5 bg-blue-100 dark:bg-blue-900 text-[10px] text-blue-600 dark:text-blue-200 font-bold rounded border border-blue-300 dark:border-blue-700 pointer-events-none'
                          style={{ zIndex: 2 }}>
                          Zona Page
                        </div>
                        <div
                          className='absolute inset-0 border-2 border-dashed border-blue-200 dark:border-blue-700 rounded pointer-events-none'
                          style={{ zIndex: 1 }}></div>
                      </main>
                    </Card>
                  </div>
                )}
              {selected.name === 'page.tsx' &&
                selected.content?.includes('detalle de un Pokémon') && (
                  <div className='mt-6 w-full max-w-md mx-auto'>
                    <Card className='p-0 overflow-hidden border-yellow-400 dark:border-yellow-600 relative'>
                      <PokemonNav
                        borderColor='border-yellow-400 dark:border-yellow-600'
                        labelColor='text-yellow-600 dark:text-yellow-300'
                        labelBg='bg-yellow-100/80 dark:bg-yellow-900/60'
                        borderClass='border-yellow-400 dark:border-yellow-600'
                        labelText='Zona Layout (Navegación)'
                      />

                      <main className='p-6 bg-background flex flex-col justify-center items-center relative min-h-[180px]'>
                        <h2 className='text-2xl font-bold mb-2 text-yellow-600 dark:text-yellow-300'>
                          Detalle de Pokémon: Pikachu
                        </h2>
                        <Image
                          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
                          alt='Pikachu'
                          width={80}
                          height={80}
                          className='mx-auto mb-4'
                        />
                        <div className='text-lg font-semibold text-foreground'>
                          ID: 25
                        </div>
                        <div className='text-md text-muted-foreground'>
                          Nombre: Pikachu
                        </div>
                        <div className='mt-4 text-xs text-muted-foreground/80'>
                          (En una app real, aquí se mostraría la info del Pokémon
                          consultando la API)
                        </div>
                        <div
                          className='absolute right-2 top-2 px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900 text-[10px] text-yellow-600 dark:text-yellow-300 font-bold rounded border border-yellow-400 dark:border-yellow-600 pointer-events-none'
                          style={{ zIndex: 2 }}>
                          Zona Page
                        </div>
                        <div
                          className='absolute inset-0 border-2 border-dashed border-yellow-200 dark:border-yellow-700 rounded pointer-events-none'
                          style={{ zIndex: 1 }}></div>
                      </main>
                    </Card>
                  </div>
                )}
              {selected.name === 'page.tsx' &&
                selected.content?.includes('favoritos') && (
                  <div className='mt-6 w-full max-w-md mx-auto'>
                    <Card className='p-0 overflow-hidden border-pink-400 dark:border-pink-600 relative'>
                      <PokemonNav
                        borderColor='border-pink-400 dark:border-pink-600'
                        labelColor='text-pink-600 dark:text-pink-300'
                        labelBg='bg-pink-100/80 dark:bg-pink-900/60'
                        borderClass='border-pink-400 dark:border-pink-600'
                        labelText='Zona Layout (Navegación)'
                      />

                      <main className='p-6 bg-background flex flex-col justify-center items-center relative min-h-[180px]'>
                        <h2 className='text-2xl font-bold mb-2 text-pink-600 dark:text-pink-300'>
                          Pokémon Favoritos
                        </h2>
                        <p className='mb-4 text-muted-foreground'>
                          Aquí se mostrarían los Pokémon que el usuario ha marcado
                          como favoritos.
                        </p>
                        <div className='flex flex-wrap gap-4 justify-center items-center mt-4'>
                          <div className='flex flex-col items-center'>
                            <Image
                              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
                              alt='Pikachu'
                              width={48}
                              height={48}
                              className='mb-1'
                            />
                            <span className='text-xs text-foreground font-semibold'>
                              Pikachu
                            </span>
                          </div>
                          <div className='flex flex-col items-center'>
                            <Image
                              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
                              alt='Bulbasaur'
                              width={48}
                              height={48}
                              className='mb-1'
                            />
                            <span className='text-xs text-foreground font-semibold'>
                              Bulbasaur
                            </span>
                          </div>
                          <div className='flex flex-col items-center'>
                            <Image
                              src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png'
                              alt='Charmander'
                              width={48}
                              height={48}
                              className='mb-1'
                            />
                            <span className='text-xs text-foreground font-semibold'>
                              Charmander
                            </span>
                          </div>
                        </div>
                        <span className='text-pink-600 block mt-4'>
                          Volver al listado
                        </span>
                        <div
                          className='absolute right-2 top-2 px-2 py-0.5 bg-pink-100 dark:bg-pink-900 text-[10px] text-pink-600 dark:text-pink-300 font-bold rounded border border-pink-400 dark:border-pink-600 pointer-events-none'
                          style={{ zIndex: 2 }}>
                          Zona Page
                        </div>
                        <div
                          className='absolute inset-0 border-2 border-dashed border-pink-200 dark:border-pink-700 rounded-l-xl pointer-events-none'
                          style={{ zIndex: 1 }}></div>
                      </main>
                    </Card>
                  </div>
                )}
            </>
          )}
        </Card>
      </section>
      <Accordion type='single' collapsible className='w-full max-w-2xl mt-10'>
        <AccordionItem value='1'>
          <AccordionTrigger>¿Diferencias con Pages Router?</AccordionTrigger>
          <AccordionContent>
            <ul className='list-disc pl-6 text-sm text-muted-foreground'>
              <li>Layouts anidados y persistentes por carpeta.</li>
              <li>Soporte nativo para Server y Client Components.</li>
              <li>Routing basado en archivos, no en rutas explícitas.</li>
              <li>Mejor manejo de loading, error y templates.</li>
              <li>Mayor flexibilidad y organización del código.</li>
            </ul>
            <div className='mt-6 grid md:grid-cols-2 gap-6'>
              <Card className='p-4 bg-background border-pink-500 border-2 shadow-lg hover:shadow-xl transition-shadow'>
                <div className='font-semibold text-pink-600 dark:text-pink-400 mb-2'>
                  Estructura clásica (Pages Router)
                </div>
                <div className='text-xs text-muted-foreground mb-2'>
                  Haz click en un archivo para ver su función
                </div>
                <PagesTreeView
                  nodes={pagesStructure}
                  onSelect={setSelectedPages}
                  selected={selectedPages}
                />
              </Card>
              <Card className='flex-1 min-h-[120px] p-4 flex flex-col items-center justify-center bg-background border-pink-500 border-2 shadow-lg hover:shadow-xl transition-shadow'>
                {!selectedPages && (
                  <div className='text-muted-foreground text-xs text-center'>
                    Seleccionar un archivo para ver su función.
                  </div>
                )}
                {selectedPages && (
                  <>
                    <div className='flex items-center gap-2 mb-2'>
                      <selectedPages.icon className='w-5 h-5 text-pink-600 dark:text-pink-400' />
                      <span className='font-mono text-base'>
                        {selectedPages.name}
                      </span>
                    </div>
                    <div className='text-foreground text-center mb-2'>
                      {selectedPages.content}
                    </div>
                    {selectedPages.type === 'api' && (
                      <div className='text-xs text-pink-600 dark:text-pink-400'>
                        Este archivo define un endpoint de API.
                      </div>
                    )}
                    {selectedPages.type === 'page' && (
                      <div className='text-xs text-pink-600 dark:text-pink-400'>
                        Este archivo define el contenido de la ruta correspondiente.
                      </div>
                    )}
                  </>
                )}
              </Card>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='2'>
          <AccordionTrigger>¿Qué ventajas aporta?</AccordionTrigger>
          <AccordionContent>
            <ul className='list-disc pl-6 text-sm text-muted-foreground'>
              <li>Layouts reutilizables y composición fácil.</li>
              <li>Mejor rendimiento y experiencia de usuario.</li>
              <li>Separación clara entre lógica de servidor y cliente.</li>
              <li>Escalabilidad para proyectos grandes.</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  )
}

type PokemonNavProps = {
  borderColor: string
  labelColor: string
  labelBg: string
  borderClass: string
  labelText: string
}

function PokemonNav({
  borderColor,
  labelColor,
  labelBg,
  borderClass,
  labelText,
}: PokemonNavProps) {
  return (
    <nav
      className={`flex items-center gap-6 px-6 py-3 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-950 border-b-2 ${borderClass} relative`}>
      <span className='font-bold text-blue-700 dark:text-blue-200 text-sm'>
        Pokémon App
      </span>
      <span className='text-blue-800 dark:text-blue-100 text-xs cursor-pointer hover:underline'>
        Listado
      </span>
      <span className='text-blue-800 dark:text-blue-100 text-xs cursor-pointer hover:underline'>
        Favoritos
      </span>
      <div
        className={`absolute left-0 top-0 w-full h-full pointer-events-none border-2 border-dashed ${borderColor} rounded-b-xl`}
        style={{ zIndex: 1 }}></div>
      <div
        className={`absolute left-0 top-0 w-full text-center text-[10px] ${labelColor} font-bold ${labelBg} py-0.5`}
        style={{ zIndex: 2 }}>
        {labelText}
      </div>
    </nav>
  )
}
