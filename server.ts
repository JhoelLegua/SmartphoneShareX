import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { cellphoneCatalog } from "./src/data.ts";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Habilitar JSON parsing
  app.use(express.json());

  // Pipeline CORS headers simples para pruebas de consumo local
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

  // REST API: Catálogo de Inventario
  app.get("/api/inventario", (req, res) => {
    let results = [...cellphoneCatalog];
    const { marca, search } = req.query;

    if (marca && typeof marca === "string") {
      const targetMarca = marca.trim().toUpperCase();
      results = results.filter((item) => item.Marca === targetMarca);
    }

    if (search && typeof search === "string") {
      const q = search.trim().toLowerCase();
      results = results.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.Modelo.toLowerCase().includes(q) ||
          item.Procesador.toLowerCase().includes(q) ||
          item.Memoria.toLowerCase().includes(q) ||
          item.Sistema_Operativo.toLowerCase().includes(q)
      );
    }

    // Retornamos el catálogo de Celulares homologado para MarketInsight S.A.
    res.json(results);
  });

  // API de salud
  app.get("/api/health", (req, res) => {
    res.json({ status: "online", service: "MarketInsight Inventory API", timestamp: new Date() });
  });

  // Configuración de Vite como middleware en desarrollo
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Servir archivos estáticos construidos en producción
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[MarketInsight] Servidor activo en puerto ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Fallo al iniciar el servidor:", err);
});
