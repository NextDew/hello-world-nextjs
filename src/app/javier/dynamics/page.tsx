"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function DynamicsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-rose-100 to-red-300 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl"
      >
        <Card className="bg-white/90 dark:bg-slate-900 border border-border/40 shadow-xl rounded-2xl">
          <CardHeader className="flex items-center gap-2 pb-2">
            <Layers className="text-red-600" />
            <CardTitle className="text-2xl text-red-800 dark:text-red-300 font-bold">
              Complejidad en aplicaciones grandes
            </CardTitle>
            <Badge variant="outline" className="ml-auto">
              Arquitectura
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              A medida que el proyecto crece, la organización de rutas,
              componentes y estados se vuelve más desafiante. El mantenimiento
              puede volverse complicado si no se establece una arquitectura
              sólida desde el inicio.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
