"use client"
import { ArrowRight, BookText } from "lucide-react"
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen py-8 flex flex-col justify-center items-center bg-white dark:bg-neutral-900">
      <div className="w-full max-w-4xl">
        <section className="w-full text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 mb-4 dark:bg-neutral-800 dark:text-gray-200">
            React Framework
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-400">
            Next.js
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
            El framework de React para producción que te permite crear aplicaciones web rápidas, escalables y
            optimizadas para SEO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="https://nextjs.org/docs/app/getting-started/installation" target="_blank">
              <button className="inline-flex items-center justify-center px-8 py-6 text-lg font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors cursor-pointer dark:bg-white dark:text-black dark:hover:bg-gray-200 dark:hover:text-black">
                Comenzar ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </Link>

            <Link href="https://nextjs.org/" target="_blank">
              <button className="inline-flex items-center justify-center px-8 py-6 text-lg font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer dark:bg-black dark:text-white dark:border-gray-700 dark:hover:bg-gray-900 dark:hover:text-white">
                <BookText className="mr-2 h-5 w-5" />
                Ver documentación
              </button>
            </Link>

          </div>
        </section>

        <section className="w-full text-center mt-16 bg-gray-900 text-white rounded-xl py-12 px-4 dark:bg-white dark:text-gray-900">
          <h4 className="text-2xl md:text-3xl font-bold mb-6">¿Quieres saber más sobre Next.js?</h4>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="https://www.youtube.com/watch?v=2jxc8DMzt0I&list=PLV8x_i1fqBw1VR86y4C72xMGJ8ifjBwJ6" target="_blank">
              <img
                src="https://img.youtube.com/vi/2jxc8DMzt0I/hqdefault.jpg"
                className="w-64 h-36 object-cover border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors cursor-pointer dark:border-gray-900 dark:hover:bg-gray-100"
                alt="Video Midu"
              />
            </Link>

            <Link href="https://www.youtube.com/watch?v=tVBb79WLScc" target="_blank">
              <img
                src="https://img.youtube.com/vi/tVBb79WLScc/hqdefault.jpg"
                className="w-64 h-36 object-cover border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors cursor-pointer dark:border-gray-900 dark:hover:bg-gray-100"
                alt="Video Fact"
              />
            </Link>

            <Link href="https://www.youtube.com/watch?v=Sklc_fQBmcs" target="_blank">
              <img
                src="https://img.youtube.com/vi/Sklc_fQBmcs/hqdefault.jpg"
                className="w-64 h-36 object-cover border border-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors cursor-pointer dark:border-gray-900 dark:hover:bg-gray-100"
                alt="Video Next Beginner"
              />
            </Link>

          </div>
        </section>
      </div>
    </div>
  );
}