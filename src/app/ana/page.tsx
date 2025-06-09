"use client";

import { useState } from "react";
import CardList from "../../components/CardList";
import CardModal from "../../components/CardModal";

const cards = [
  {
    icon: "🧰",
    title: "¿Qué es un Framework?",
    content:
      `Un framework es un conjunto de herramientas, librerías y reglas que proporcionan una estructura predefinida para desarrollar aplicaciones.\n
      En lugar de comenzar desde cero, el framework ofrece una base sólida, con componentes reutilizables y convenciones bien definidas, lo que facilita y acelera el desarrollo.\n
      Esta estructura no solo ahorra tiempo, sino que también ayuda a mantener el código más organizado, coherente y escalable.`,
  },
  {
    icon: "⚙️",
    title: "Ventajas de Usar un Framework",
    content:
      `1. Ahorro de tiempo y esfuerzo: 
      Los frameworks incluyen diferentes funcionalidades ya resueltas.\n 
      2. Mantenimiento: 
      Código más limpio, ordenado y fácil de escalar.\n
      3. Comunidad: 
      Fácil encontrar soluciones, muchos recursos, actualizaciones frecuentes.\n
      4. Seguridad: 
      Mejores prácticas incorporadas desde el inicio.\n 
      5. Estandarización y buenas prácticas: 
      Los frameworks populares ya aplican las últimas tendencias del desarrollo web.`,
  },
  {
    icon: "🚀",
    title: "Introducción rápida a Next.js",
    content:
      `Next.js es un framework de desarrollo web basado en React que permite crear aplicaciones rápidas, modernas y escalables, tanto del lado del cliente como del servidor (híbrido).\n
      Está desarrollado por Vercel y se ha consolidado como una de las herramientas más potentes para construir sitios web con rendimiento optimizado desde el inicio.\n      
      Ofrece varias funcionalidades destacadas como SSR, CSR y SSG.`,
  },
  {
    icon: "📈",
    title: "Popularidad de Next.js",
    content:
      `Next.js se ha posicionado como uno de los frameworks más utilizados y confiables en el desarrollo web moderno.\n
      Lo utilizan grandes compañias como Netflix, Nike, Notion, TikTok y más.\n
      Vercel realiza actualizaciones constantes, e integra nuevas funcionalidades constantemente.\n
      Tiene una gran comunidad, con miles de desarrolladores que contribuyen y comparten recursos, librerías y soluciones específicas y es altamente demandado en el mercado laboral.`,
  },
  {
    icon: "🌐",
    title: "Ecosistema Actual",
    content:
      `En el entorno actual, las aplicaciones web deben ser rápidas, seguras, escalables y fáciles de mantener. Next.js responde a estas exigencias al integrar características modernas como:\n
      ✅	Renderizado híbrido (SSR, SSG)
      ✅	Enrutamiento automático
      ✅ Desarrollo fullstack en un solo entorno
      ✅Optimización de rendimiento y SEO desde el inicio`,
  },
  {
    icon: "📚",
    title: "Curva de aprendizaje",
    content:
      `Con experiencia en React:
      1-2 semanas para lo básico, 3-4 semanas para funciones avanzadas de Next.js.\n

      Sin experiencia previa:
      Primero aprender JavaScript y React, lo que puede llevar varios meses.\n

      Recursos recomendados:
      Documentación oficial de Next.js, tutoriales interactivos, cursos en Platzi o Udemy y proyectos pequeños para practicar.`,
  },
];

export default function AnaPage() {
  const [selectedCard, setSelectedCard] = useState<null | number>(null);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        ¿Por qué elegir un framework?
      </h1>
      <CardList cards={cards} onSelect={setSelectedCard} />
      {selectedCard !== null && (
        <CardModal
          card={cards[selectedCard]}
          onClose={() => setSelectedCard(null)}
        />
      )}
    </div>
  )
}