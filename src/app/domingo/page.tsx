"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

type Node = {
  id: string;
  name: string;
  children?: Node[];
};

const descriptions: Record<string, string> = {
  ".next": "Carpeta generada automáticamente por Next.js que contiene la build del proyecto.",
  "node_modules": "Contiene todas las dependencias instaladas del proyecto.",
  "public": "Archivos estáticos accesibles públicamente.",
  "src": "Carpeta raíz del código fuente.",
  "app": "Contiene las rutas y páginas del App Router.",
  "components": "Componentes reutilizables de la interfaz.",
  "ui": "Componentes visuales reutilizables, como botones.",
  "lib": "Funciones auxiliares (helpers) y lógica compartida.",
  "layout.tsx": "Define la estructura común de la aplicación.",
  "page.tsx": "Archivo principal de una página en una ruta.",
  "globals.css": "Estilos globales de la aplicación.",
  "README.md": "Documentación básica del proyecto.",
  "package.json": "Dependencias y scripts del proyecto.",
  ".gitignore": "Es un archivo que le dice a Git qué archivos o carpetas debe ignorar.",
  "next-env.d.ts": "Archivo generado automáticamente por Next.js para habilitar soporte de TypeScript y autocompletado en el entorno.",
  "next.config.ts": "Archivo de configuración principal de Next.js donde puedes personalizar rutas, imágenes, middleware, etc.",
  "package-lock.json": "Registra las versiones exactas de cada dependencia instalada para asegurar instalaciones consistentes en todos los entornos.",
  "postcss.config.mjs": "Configura PostCSS, un procesador de CSS usado junto con Tailwind o autoprefixer. .mjs indica que usa módulos ES.",
  "tsconfig.json": "Archivo de configuración para TypeScript, define cómo se compila tu código.",
};

const initialTree: Node[] = [
  {
    id: "1",
    name: ".next",
    children: [
      { id: "2", name: "build", children: [{ id: "3", name: "chunks", children: [] }] },
      { id: "4", name: "cache", children: [] },
      { id: "5", name: "server", children: [] },
      { id: "6", name: "static", children: [] },
      { id: "7", name: "types", children: [] },
    ],
  },
  { id: "8", name: "node_modules", children: [] },
  { id: "9", name: "public", children: [{ id: "10", name: "image", children: [] }] },
  {
    id: "11",
    name: "src",
    children: [
      {
        id: "12",
        name: "app",
        children: [
          { id: "13", name: "layout.tsx" },
          { id: "14", name: "page.tsx" },
          { id: "15", name: "globals.css" },
          { id: "16", name: "favicon.ico" },
        ],
      },
      {
        id: "17",
        name: "components",
        children: [
          { id: "18", name: "navbar.tsx" },
          { id: "19", name: "theme-provider.tsx" },
          { id: "20", name: "footer.tsx" },
          {
            id: "21",
            name: "ui",
            children: [{ id: "22", name: "button.tsx" }],
          },
        ],
      },
      { id: "23", name: "lib", children: [{ id: "24", name: "utils.ts" }] },
    ],
  },
  { id: "25", name: ".gitignore" },
  { id: "26", name: "components.json" },
  { id: "27", name: "next-env.d.ts" },
  { id: "28", name: "next.config.ts" },
  { id: "29", name: "README.md" },
  { id: "30", name: "package-lock.json" },
  { id: "31", name: "package.json" },
  { id: "32", name: "postcss.config.mjs" },
  { id: "33", name: "tsconfig.json" },
];

function FolderNode({ node, onSelect }: { node: Node; onSelect: (node: Node) => void }) {
  const isFile = node.children === undefined;
  const icon = isFile ? "📄" : "📁";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, y: 50, scaleY: 2, skewY: 20 }}
      transition={{ duration: 0.6 }}
      className="ml-4 border-l border-gray-400 pl-4 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onSelect(node);
      }}
    >
      {icon} <span className="select-none">{node.name}</span>
      <div>
        {node.children?.map((child) => (
          <FolderNode key={child.id} node={child} onSelect={onSelect} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [selected, setSelected] = useState<Node | null>(null);
  const [showInspector, setShowInspector] = useState(true);
  const [showTree, setShowTree] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 384, height: 300 });
  const resizing = useRef(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .laser-button {
        border: 2px solid transparent;
        font-weight: bold;
        color: #00ffff;
        padding: 0.25rem 0.75rem;
        border-radius: 0.5rem;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: background 0.4s ease-in-out;
      }
      .laser-button::before {
        content: "";
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,255,255,0.3), transparent);
        animation: laser-sweep 2s linear infinite;
      }
      .laser-button:hover::before {
        animation: laser-sweep-hover 0.8s forwards;
      }
      .laser-button:hover {
        background: rgba(0,255,255,0.1);
      }
      @keyframes laser-sweep {
        0% { left: -100%; }
        100% { left: 100%; }
      }
      @keyframes laser-sweep-hover {
        from { left: -100%; }
        to { left: 100%; }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  const toggleTree = () => {
    setShowTree((prev) => !prev);
  };

  const startResize = (e: React.MouseEvent) => {
    resizing.current = true;
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = size.width;
    const startHeight = size.height;

    const onMouseMove = (e: MouseEvent) => {
      if (!resizing.current) return;
      setSize({
        width: Math.max(200, startWidth + (e.clientX - startX)),
        height: Math.max(150, startHeight + (e.clientY - startY)),
      });
    };

    const onMouseUp = () => {
      resizing.current = false;
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  return (
    <main className="relative p-6 pr-[22rem]">
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-2xl font-bold">📂 Árbol de Carpetas de Next.js</h1>
        <button onClick={toggleTree} className="laser-button">
          {showTree ? "Ocultar" : "Mostrar"}
        </button>
      </div>

      <AnimatePresence>
        {showTree && (
          <motion.div
            key="tree"
            initial={{ opacity: 0, scaleY: 0.2 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 2, skewY: 20 }}
            transition={{ duration: 0.6 }}
          >
            {initialTree.map((node) => (
              <FolderNode
                key={node.id}
                node={node}
                onSelect={(node) => {
                  setSelected(node);
                  setShowInspector(true);
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {showInspector && selected && (
        <motion.div
          ref={cardRef}
          drag
          dragMomentum={false}
          className="glow-border fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 cursor-move bg-white border border-gray-300 shadow-2xl p-6 rounded-xl"
          style={{ width: size.width, height: size.height }}
        >
          <button
            onClick={() => setShowInspector(false)}
            className="absolute top-2 right-3 text-gray-600 hover:text-red-500 text-lg font-bold"
          >
            ❌
          </button>
          <h3 className="text-2xl font-bold text-blue-800 mb-3">📘 {selected.name}</h3>
          <p className="text-lg font-semibold text-gray-800">
            {descriptions[selected.name] || "No hay descripción disponible."}
          </p>
          <div
            onMouseDown={startResize}
            className="absolute bottom-0 right-0 w-4 h-4 bg-gray-400 cursor-se-resize rounded-tr-sm"
          ></div>
        </motion.div>
      )}
    </main>
  );
}
