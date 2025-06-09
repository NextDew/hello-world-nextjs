// Author: Adan
// This file contains a list of advantages of using Next.js, each with a title, description, and icon.
import { FolderTree, Plug, Globe, Server, Zap, Layers } from 'lucide-react'

const advantages = [
  {
    title: 'Server Side Rendering (SSR)',
    description: 'Renderizado dinámico en cada request para contenido personalizado',
    icon: Server,
    color: 'from-emerald-500 to-green-600',
    iconColor: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    title: 'Static Site Generation (SSG)',
    description: 'Pre-renderizado en build time para máximo rendimiento',
    icon: Globe,
    color: 'from-blue-500 to-cyan-600',
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'Incremental Static Regeneration (ISR)',
    description: 'Regeneración estática bajo demanda sin rebuild completo',
    icon: Layers,
    color: 'from-purple-500 to-violet-600',
    iconColor: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    title: 'Client Side Rendering (CSR)',
    description: 'Renderizado en el cliente para máxima interactividad',
    icon: Zap,
    color: 'from-orange-500 to-red-600',
    iconColor: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    title: 'API Routes',
    description: 'Backend integrado con endpoints serverless nativos',
    icon: Plug,
    color: 'from-indigo-500 to-purple-600',
    iconColor: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
  },
  {
    title: 'App Router',
    description: 'Sistema de routing moderno basado en estructura de archivos',
    icon: FolderTree,
    color: 'from-pink-500 to-rose-600',
    iconColor: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
]

export default advantages
