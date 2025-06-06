"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gauge } from "lucide-react";
import { motion } from "framer-motion";

export default function PerformancePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-yellow-100 to-yellow-300 dark:from-slate-900 dark:to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-3xl"
      >
        <Card className="bg-white/90 dark:bg-slate-900 border border-border/40 shadow-xl rounded-2xl">
          <CardHeader className="flex items-center gap-2 pb-2">
            <Gauge className="text-yellow-600" />
            <CardTitle className="text-2xl text-yellow-800 dark:text-yellow-300 font-bold">
              Desempeño en ciertas situaciones
            </CardTitle>
            <Badge variant="outline" className="ml-auto">
              Rendimiento
            </Badge>
          </CardHeader>
          <CardContent>
            <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-200">
              Aunque Next.js optimiza el rendimiento por defecto, una mala
              configuración del renderizado o el mal uso de caché puede afectar
              negativamente. El conocimiento técnico del framework es clave para
              evitar cuellos de botella.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
