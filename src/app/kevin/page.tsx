'use client';
import { Box, Card, Text } from '@radix-ui/themes';

const cards = [
  { title: 'SEO optimizado', desc: 'SSR y SSG nativos' },
  { title: 'Renderizado híbrido', desc: 'SSR, SSG, ISR, CSR según necesidades' },
  { title: 'Routing automático', desc: 'Basado en estructura de archivos' },
  { title: 'Escalabilidad:', desc: 'Estructura clara para proyectos grandes' },
  { title: 'Ecosistema:', desc: 'Comunidad activa y soporte de Vercel' },
  { title: 'Optimización automática', desc: 'Imágenes, fuentes, división de código' },
];

export default function KevinPage() {
  return (
     <div className="h-[90vh] flex flex-col justify-center items-center bg-gray-50 dark:bg-neutral-900 transition-colors">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-6 mb-2 text-gray-900 dark:text-gray-100">
        Ventajas principales
      </h1>
      <h3 className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 mb-8">
        Next.js ofrece todo lo que necesitas para crear aplicaciones web modernas
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
              <a href="#" className="block p-6 h-full rounded-xl group">
                <Text
                  as="div"
                  size="4"
                  weight="bold"
                  className="mb-2 text-gray-900 dark:text-gray-100 group-hover:text-white dark:group-hover:text-neutral-900 transition-colors"
                >
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
    </div>
  );
}