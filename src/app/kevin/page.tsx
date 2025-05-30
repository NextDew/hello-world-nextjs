'use client';
import { Box, Card, Text, Callout } from '@radix-ui/themes';
import { Info, Upload, Palette, Hexagon, Globe } from "lucide-react"

const cards = [
  {
    title: 'Node JS',
    desc: 'Entorno de ejecución para JavaScript en el servidor, esencial para proyectos modernos.',
    link: 'https://nodejs.org/es',
    icon: <Hexagon className="inline-block mr-2 w-5 h-5" />
  },
  {
    title: 'Shadcn',
    desc: 'Colección de componentes UI personalizables para React y Next.js, fácil de integrar.',
    link: 'https://ui.shadcn.com/docs/dark-mode/next',
    icon: <Palette className="inline-block mr-2 w-5 h-5" />
  },
  {
    title: 'Vercel',
    desc: 'Plataforma de despliegue optimizada para proyectos Next.js y aplicaciones modernas.',
    link: 'https://vercel.com/',
    icon: <Globe className="inline-block mr-2 w-5 h-5" />
  }
];


const opciones = [
  {
    label: "TypeScript",
    desc: "Tipado fuerte, detección temprana de errores"
  },
  {
    label: "ESLint",
    desc: "Análisis estático de código para calidad y consistencia"
  },
  {
    label: "Tailwind CSS",
    desc: "Framework de utilidades CSS moderno"
  },
  {
    label: "Directorio src/",
    desc: "Organización más limpia separando código de configuración"
  },
  {
    label: "App Router",
    desc: "Sistema de rutas moderno de Next.js"
  },
  {
    label: "Turbopack",
    desc: "Nuevo bundler en Rust, hasta 700x más rápido que Webpack"
  },
  {
    label: "Import alias",
    desc: "Rutas como @/components en lugar de ../../components"
  }
];

export default function KevinPage() {

  return (
    <div className="min-h-screen flex flex-col py-10 items-center bg-gray-50 dark:bg-neutral-900 transition-colors">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900 dark:text-gray-100">
        Instalación y puesta en marcha
      </h1>
      <h3 className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300">
        Crea tu primer proyecto en Next.JS
      </h3>

      <div className="inline-flex items-center my-10  px-6 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:text-gray-200">
        npx create-next-app@latest
      </div>

      <div className="mt-2 px-6 py-4 bg-white dark:bg-neutral-800 rounded-b-lg border border-t-0 border-gray-200 dark:border-neutral-700 text-gray-800 dark:text-gray-100 text-base">
        <Callout.Root
          className="mb-4 border-l-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black flex items-center gap-3 px-4 py-3"
        >
          <Callout.Icon>
            <Upload className="text-white dark:text-black" />
          </Callout.Icon>
          <Callout.Text className="text-base">
            <span className="font-semibold">Comenzará la instalación y el asistente inteligente nos dará algunas opciones.</span>
          </Callout.Text>
        </Callout.Root>
        <ul className="list-disc pl-5 space-y-2">
          {opciones.map((op, idx) => (
            <li key={idx}>
              <b>{op.label}:</b> {op.desc}
            </li>
          ))}
        </ul>
      </div>

      <h3 className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mt-8">
        Enlaces de interés
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full py-8 justify-items-center">
        {cards.map((card, idx) => (
          <Box key={idx} maxWidth="350px" className="w-full">
            <Card
              asChild
              className="h-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 shadow-md transition-all duration-200 rounded-xl
          hover:bg-gray-900 hover:text-white
          dark:hover:bg-white dark:hover:text-neutral-900
          hover:shadow-2xl hover:scale-105"
            >
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 h-full rounded-xl group cursor-pointer"
              >
                <Text
                  as="div"
                  size="4"
                  weight="bold"
                  className="mb-2 text-xl text-gray-900 dark:text-gray-100 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors flex items-center"
                >
                  {card.icon}
                  {card.title}
                </Text>
                <Text
                  as="div"
                  color="gray"
                  size="3"
                  className="text-gray-600 dark:text-gray-300 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors"
                >
                  {card.desc}
                </Text>
              </a>
            </Card>
          </Box>
        ))}
      </div>

      <Callout.Root
        className="mb-4 border-l-4 border-black bg-black text-white dark:border-white dark:bg-white dark:text-black flex items-center gap-3 px-4 py-3"
      >
        <Callout.Icon>
          <Info className="text-white dark:text-black" />
        </Callout.Icon>
        <Callout.Text className="text-base">
          <span className="font-semibold">Requisitos previos:</span> Node y NPM.
        </Callout.Text>
      </Callout.Root>
    </div>
  );
}