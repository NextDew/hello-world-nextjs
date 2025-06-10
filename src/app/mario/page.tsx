// Author: Mario

export default function MarioPage() {
  return (
    <div className="prose max-w-none mx-auto bg-white dark:bg-gray-900 dark:text-gray-100 p-6 rounded-lg shadow-md">
      <h1 className="mb-4 border-b-2 pb-2">🧩 Comparativa de Frameworks y Librerías Frontend</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-300 dark:border-gray-700 mb-8">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 border dark:border-gray-700">Característica</th>
              <th className="px-4 py-2 border dark:border-gray-700">Next.js</th>
              <th className="px-4 py-2 border dark:border-gray-700">React</th>
              <th className="px-4 py-2 border dark:border-gray-700">Vue</th>
              <th className="px-4 py-2 border dark:border-gray-700">Angular</th>
              <th className="px-4 py-2 border dark:border-gray-700">Svelte</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border dark:border-gray-700">Tipo</td>
              <td className="px-4 py-2 border dark:border-gray-700">Framework React</td>
              <td className="px-4 py-2 border dark:border-gray-700">Biblioteca UI</td>
              <td className="px-4 py-2 border dark:border-gray-700">Framework progresivo</td>
              <td className="px-4 py-2 border dark:border-gray-700">Framework completo</td>
              <td className="px-4 py-2 border dark:border-gray-700">Compilador</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800/50">
              <td className="px-4 py-2 border dark:border-gray-700">SSR/SSG</td>
              <td className="px-4 py-2 border dark:border-gray-700">✅ Nativo</td>
              <td className="px-4 py-2 border dark:border-gray-700">✗ Manual</td>
              <td className="px-4 py-2 border dark:border-gray-700">✗ Manual</td>
              <td className="px-4 py-2 border dark:border-gray-700">✅ Nativo</td>
              <td className="px-4 py-2 border dark:border-gray-700">✅ SvelteKit</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border dark:border-gray-700">Routing</td>
              <td className="px-4 py-2 border dark:border-gray-700">📁 Automático</td>
              <td className="px-4 py-2 border dark:border-gray-700">🔧 Manual</td>
              <td className="px-4 py-2 border dark:border-gray-700">🔧 Vue Router</td>
              <td className="px-4 py-2 border dark:border-gray-700">✅ Integrado</td>
              <td className="px-4 py-2 border dark:border-gray-700">📁 SvelteKit</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800/50">
              <td className="px-4 py-2 border dark:border-gray-700">Curva de aprendizaje</td>
              <td className="px-4 py-2 border dark:border-gray-700">🟠 Media</td>
              <td className="px-4 py-2 border dark:border-gray-700">🟠 Media</td>
              <td className="px-4 py-2 border dark:border-gray-700">🟢 Baja</td>
              <td className="px-4 py-2 border dark:border-gray-700">🔴 Alta</td>
              <td className="px-4 py-2 border dark:border-gray-700">🟢 Baja</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border dark:border-gray-700">Bundle</td>
              <td className="px-4 py-2 border dark:border-gray-700">⚡ Optimizado</td>
              <td className="px-4 py-2 border dark:border-gray-700">🟢 Pequeño</td>
              <td className="px-4 py-2 border dark:border-gray-700">🟢 Pequeño</td>
              <td className="px-4 py-2 border dark:border-gray-700">🔴 Grande</td>
              <td className="px-4 py-2 border dark:border-gray-700">🟢 Muy pequeño</td>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800/50">
              <td className="px-4 py-2 border dark:border-gray-700">Casos de uso</td>
              <td className="px-4 py-2 border dark:border-gray-700">Web apps, SEO</td>
              <td className="px-4 py-2 border dark:border-gray-700">SPAs flexibles</td>
              <td className="px-4 py-2 border dark:border-gray-700">Proyectos rápidos</td>
              <td className="px-4 py-2 border dark:border-gray-700">Apps empresariales</td>
              <td className="px-4 py-2 border dark:border-gray-700">Apps rápidas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr className="my-8 border-gray-300 dark:border-gray-700" />

      <h2 className="mt-8 mb-2 text-2xl font-bold">Leyenda</h2>
      <h3 className="mt-6 mb-1 text-xl font-semibold">¿Qué es Framework React?</h3>
      <p>
        React es una herramienta para crear páginas web.<br />
        Te ayuda a hacer sitios que se vean bonitos, funcionen rápido y cambien sin tener que recargar toda la página.<br />
        Imagina que una página web está hecha de bloques (como LEGO).<br />
        Cada bloque puede ser: un botón, un menú, una imagen o un formulario.<br />
        Con React, tú creas esos bloques (llamados <b>componentes</b>) y los juntas para formar toda la página.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">¿Qué es Biblioteca UI?</h3>
      <p>
        Una biblioteca UI es como una caja de herramientas visuales.<br />
        En lugar de construir cada pieza tú mismo, tomas los componentes que necesitas para construir tu aplicación más rápido y con mejor diseño.<br />
        Estas bibliotecas ya incluyen diseño, funcionalidad y estilos, por lo que no es necesario crearlos desde cero.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">¿Qué es Framework progresivo?</h3>
      <p>
        Un framework progresivo es una herramienta que permite crear aplicaciones web de forma incremental, adaptándose a las necesidades del proyecto.<br />
        Puedes empezar con funcionalidades básicas y añadir características más avanzadas (como enrutamiento, gestión de estado, SSR, etc.) conforme la aplicación crece.<br />
        Vue es un ejemplo de framework progresivo porque puedes usarlo desde mejorar una página HTML con componentes interactivos, hasta construir aplicaciones web complejas de una sola página.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">¿Qué es Framework completo?</h3>
      <p>
        Un framework completo es una herramienta de desarrollo que incluye todo lo necesario para construir una aplicación desde cero.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">¿Qué es Compilador?</h3>
      <p>
        Un compilador es un programa que traduce el código fuente (como JavaScript o TypeScript) a un lenguaje que la máquina pueda entender (como código optimizado o binario).<br />
        Esto permite que el código funcione correctamente en el navegador o sistema donde se ejecuta.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h2 className="mt-8 mb-2 text-2xl font-bold">SSR y SSG</h2>
      <h3 className="mt-6 mb-1 text-xl font-semibold">SSR – Server-Side Rendering (Renderizado del lado del servidor)</h3>
      <ul className="list-disc ml-6">
        <li className="my-4">La página se genera en el servidor cada vez que alguien la visita.</li>
        <li className="my-4">El servidor prepara el contenido y lo manda listo al navegador.</li>
        <li className="my-4">Útil si el contenido cambia seguido (ejemplo: noticias, redes sociales).</li>
        <li className="my-4">Ejemplo: cada vez que alguien entra a la página, el servidor muestra la información más reciente.</li>
      </ul>
      <h3 className="mt-6 mb-1 text-xl font-semibold">SSG – Static Site Generation (Generación de sitio estático)</h3>
      <ul className="list-disc ml-6">
        <li className="my-4">La página se genera una sola vez al crear el sitio (por ejemplo, al publicarlo).</li>
        <li className="my-4">Se guarda como un archivo HTML listo para mostrar.</li>
        <li className="my-4">Muy rápido porque no se necesita crear la página en cada visita.</li>
        <li className="my-4">Ideal para blogs, portafolios o páginas con contenido que no cambia mucho.</li>
      </ul>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">¿Qué es Bundle?</h3>
      <p>
        Un <b>bundle</b> es como una maleta donde metes todo lo que necesitas para tu viaje (tu código, estilos, imágenes).<br />
        En vez de llevar muchas maletas pequeñas (archivos separados), llevas una sola que el navegador puede abrir rápido y fácil.<br />
        Por ejemplo, tu proyecto puede tener 100 archivos, pero el bundler genera algo así:
      </p>
      <h2 className="mt-8 mb-2 text-2xl font-bold">🎯 ¿Cuándo elegir cada uno?</h2>
      <h3 className="mt-6 mb-1 text-xl font-semibold">🟦 Next.js</h3>
      <p>
        ✅ <b>Ideal para:</b> Aplicaciones web modernas que requieren SEO optimizado, renderizado del lado servidor (SSR/SSG) y alta escalabilidad.<br />
        📌 <b>Úsalo si:</b> Quieres un framework basado en React que facilite el rendimiento, la generación de páginas estáticas y dinámicas, sin complicarte con configuraciones complejas.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">⚛️ React</h3>
      <p>
        ✅ <b>Ideal para:</b> SPAs (aplicaciones de una sola página) complejas donde necesitas control total sobre la arquitectura y el ciclo de vida del frontend.<br />
        📌 <b>Úsalo si:</b> Prefieres máxima flexibilidad y estás dispuesto a configurar manualmente aspectos como el routing o el SSR.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">🟢 Vue</h3>
      <p>
        ✅ <b>Ideal para:</b> Proyectos con equipos pequeños, MVPs o desarrollos rápidos que requieren simplicidad y estructura clara.<br />
        📌 <b>Úsalo si:</b> Buscas una curva de aprendizaje suave, buena organización y una comunidad activa sin tanta complejidad.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">🟥 Angular</h3>
      <p>
        ✅ <b>Ideal para:</b> Aplicaciones empresariales grandes que necesitan robustez, escalabilidad y una arquitectura estricta y bien definida.<br />
        📌 <b>Úsalo si:</b> Trabajas con un equipo numeroso familiarizado con TypeScript y prefieres un enfoque integral y estructurado desde el inicio.
      </p>
      <hr className="my-6 border-gray-300 dark:border-gray-700" />
      <h3 className="mt-6 mb-1 text-xl font-semibold">🟠 Svelte</h3>
      <p>
        ✅ <b>Ideal para:</b> Aplicaciones ultra rápidas con bundles muy pequeños donde el rendimiento y la eficiencia son prioritarios.<br />
        📌 <b>Úsalo si:</b> Quieres simplicidad, velocidad y un código final optimizado con el menor peso posible.
      </p>
      <h2 className="mt-8 mb-2 text-2xl font-bold">💡 ¿Por qué Next.js es mejor?</h2>
      <h2 className="mt-8 mb-2 text-2xl font-bold">🚀 ¿Por qué Next.js es mejor que el resto?</h2>
      <p>
        Next.js combina lo mejor de React con un conjunto de características avanzadas que lo hacen destacar frente a otras librerías y frameworks. Aquí te dejo razones de peso para elegir Next.js:
      </p>
      <ol className="list-decimal ml-6">
        <li className="my-4">
          <b>Renderizado híbrido y flexible (SSR + SSG + ISR)</b><br />
          Next.js ofrece soporte nativo para:<br />
          <ul className="list-disc ml-6">
            <li className="my-4"><b>SSR (Server-Side Rendering):</b> Genera páginas en el servidor por visita, ideal para contenido dinámico y SEO.</li>
            <li className="my-4"><b>SSG (Static Site Generation):</b> Genera páginas estáticas en build time para máxima velocidad.</li>
            <li className="my-4"><b>ISR (Incremental Static Regeneration):</b> Permite actualizar páginas estáticas después de desplegar el sitio, combinando velocidad y frescura.</li>
          </ul>
          Esta flexibilidad no la tienen muchos frameworks, lo que permite adaptar la estrategia según el proyecto.
        </li>
        <li className="my-4">
          <b>Routing automático y sencillo</b><br />
          Con Next.js no tienes que configurar rutas manualmente. Solo creas archivos en la carpeta <code>/pages</code> y Next.js automáticamente crea las rutas correspondientes, ahorrándote mucho tiempo y evitando errores.
        </li>
        <li className="my-4">
          <b>Optimización automática del rendimiento</b><br />
          Next.js incluye optimizaciones como:
          <ul className="list-disc ml-6">
            <li className="my-4">División automática de código (code splitting).</li>
            <li className="my-4">Optimización de imágenes integrada con el componente <code>&lt;Image&gt;</code>.</li>
            <li className="my-4">Prefetching automático de páginas para navegación instantánea.</li>
          </ul>
          Esto mejora la experiencia del usuario sin que tengas que configurarlo.
        </li>
        <li className="my-4">
          <b>Mejor soporte para SEO</b><br />
          Gracias a SSR y SSG, las páginas entregan contenido pre-renderizado, lo que los motores de búsqueda indexan mejor que las SPAs tradicionales. Esto es fundamental para proyectos que necesitan visibilidad y tráfico orgánico.
        </li>
        <li className="my-4">
          <b>Amplio ecosistema y compatibilidad con React</b><br />
          Next.js está construido sobre React, así que aprovecha todo su ecosistema y herramientas. Además, se integra fácilmente con librerías populares de React para estado, estilos, datos, etc.
        </li>
        <li className="my-4">
          <b>Desarrollo fullstack sencillo</b><br />
          Next.js permite crear API routes dentro del mismo proyecto, facilitando desarrollar backend y frontend juntos sin cambiar de stack o configurar servidores aparte.
        </li>
        <li className="my-4">
          <b>Gran comunidad y soporte empresarial</b><br />
          Next.js es mantenido por Vercel, con una comunidad activa y creciente.
        </li>
      </ol>
      <p>
        Por eso, cuando buscas crear aplicaciones web modernas y sostenibles, <b>Next.js</b> suele ser la mejor opción.
      </p>
    </div>
  )
}