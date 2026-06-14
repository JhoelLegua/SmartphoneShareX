import React, { useState, useMemo } from "react";
import { 
  Database, 
  Layers, 
  Terminal, 
  Copy, 
  Check, 
  Search, 
  Smartphone, 
  Cpu, 
  ExternalLink, 
  Info,
  Sliders,
  DollarSign,
  Layers3,
  CalendarDays,
  Hammer,
  FileCode,
  Shield,
  Activity,
  Wifi,
  Camera,
  Zap,
  RefreshCw,
  Clock,
  BookOpen
} from "lucide-react";
import { cellphoneCatalog, CellphoneProduct } from "./data";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("TODAS");
  const [copiedAll, setCopiedAll] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"explorer" | "raw" | "openapi">("explorer");
  const [selectedCell, setSelectedCell] = useState<CellphoneProduct | null>(cellphoneCatalog[0]);

  const brands = useMemo(() => {
    const list = new Set(cellphoneCatalog.map(item => item.Marca));
    return ["TODAS", ...Array.from(list)];
  }, []);

  const filteredCells = useMemo(() => {
    return cellphoneCatalog.filter(item => {
      const matchSearch = 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Modelo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Procesador.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Color.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Memoria.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.Sistema_Operativo.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchBrand = selectedBrand === "TODAS" || item.Marca === selectedBrand;
      return matchSearch && matchBrand;
    });
  }, [searchTerm, selectedBrand]);

  const copyToClipboard = (text: string, type: "all" | string) => {
    navigator.clipboard.writeText(text);
    if (type === "all") {
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
    } else {
      setCopiedId(type);
      setTimeout(() => setCopiedId(null), 1500);
    }
  };

  const formattedJsonAll = useMemo(() => {
    return JSON.stringify(cellphoneCatalog, null, 2);
  }, []);

  // Compute stats for MarketInsight
  const avgPrice = useMemo(() => {
    const total = cellphoneCatalog.reduce((sum, item) => {
      const parsed = parseFloat(item.price.replace(/[^0-9.]/g, ""));
      return sum + (isNaN(parsed) ? 0 : parsed);
    }, 0);
    return (total / cellphoneCatalog.length).toFixed(2);
  }, []);

  const topBrand = useMemo(() => {
    const counts: Record<string, number> = {};
    let max = 0;
    let mostCommon = "APPLE";
    cellphoneCatalog.forEach(item => {
      counts[item.Marca] = (counts[item.Marca] || 0) + 1;
      if (counts[item.Marca] > max) {
        max = counts[item.Marca];
        mostCommon = item.Marca;
      }
    });
    return mostCommon;
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#E2E8F0] font-sans antialiased flex flex-col" id="main-container">
      {/* Top Corporate Navigation Bar */}
      <nav className="h-16 border-b border-[#1F2937] bg-[#0F1117] flex items-center justify-between px-4 sm:px-8 shrink-0 animate-fadeIn" id="app-header">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-tr from-blue-700 to-indigo-500 rounded flex items-center justify-center font-extrabold text-white text-base tracking-tight shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-blue-500/20">
            MI
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight uppercase text-white">MarketInsight S.A.</span>
            <span className="text-[10px] text-blue-400 font-mono tracking-wider">v3.0.0-PRO / ENTERPRISE SCRA_REP</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="flex items-center gap-2 bg-[#121620] border border-[#1F2937] py-1 px-2.5 rounded">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">GATEWAY: ONLINE</span>
          </div>
          <div className="hidden sm:block h-8 w-[1px] bg-[#1F2937]"></div>
          <div className="flex gap-2">
            <a
              href="/openapi.json"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-[#1F2937] hover:bg-slate-700 border border-[#374151] rounded text-xs transition-all font-mono font-medium flex items-center gap-1.5 text-slate-300"
              id="openapi-schema-link"
            >
              <FileCode className="h-3.5 w-3.5 text-blue-400" />
              <span>openapi.json</span>
            </a>
            <a
              href="/api/inventario"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 border border-blue-500 rounded text-xs transition-all font-mono font-medium flex items-center gap-1.5 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              id="live-endpoint-link"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>REST ENDPOINT</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Workspace with Sidebar Specs Dashboard + Core Display */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden relative">
        
        {/* Dynamic Spec Inspector & Sidebar Controls */}
        <aside className="w-full md:w-80 border-b md:border-b-0 md:border-r border-[#1F2937] bg-[#0D0F13] p-5 flex flex-col gap-5 overflow-y-auto shrink-0" id="sidebar-specs">
          <div>
            <div className="flex items-center gap-1.5 mb-1.5">
              <Terminal className="h-3.5 w-3.5 text-blue-500" />
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">OpenAPI Specs Endpoint</label>
            </div>
            <div className="p-3 bg-[#08090C] border border-[#1F2937] rounded-lg font-mono text-[11px] text-blue-300 break-all leading-relaxed">
              <span className="text-amber-500">GET</span> /api/inventario
              <div className="text-[9px] text-slate-500 mt-1">Accept: application/json</div>
            </div>
          </div>

          {/* Selected Device Deep Specifications Inspector */}
          <div className="flex-1 flex flex-col" id="deep-inspector-container">
            <div className="flex items-center justify-between pb-2 border-b border-[#1F2937] mb-3">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <Smartphone className="h-4 w-4 text-blue-400" />
                Especificaciones de Datos
              </span>
              <span className="text-[9px] bg-blue-900/40 text-blue-300 border border-blue-500/30 px-1.5 py-0.5 rounded font-mono uppercase tracking-wide">
                Inspector
              </span>
            </div>

            {selectedCell ? (
              <div className="space-y-3.5 text-xs">
                <div>
                  <h4 className="text-white font-bold leading-tight">{selectedCell.title}</h4>
                  <p className="text-[11px] text-blue-400 font-mono mt-0.5 font-bold uppercase tracking-wider">{selectedCell.Marca} • {selectedCell.Modelo}</p>
                </div>

                <div className="p-3 bg-[#08090C] border border-[#1F2937] rounded-lg space-y-2.5 font-mono text-[11px]">
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase">Sistema Operativo</span>
                    <span className="text-slate-200">{selectedCell.Sistema_Operativo}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase">Cámara</span>
                    <span className="text-slate-200 text-[10px] leading-tight flex items-start gap-1">
                      <Camera className="h-3 w-3 text-amber-500 mt-0.5 shrink-0" />
                      <span>{selectedCell.Camara}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase">Resolución</span>
                    <span className="text-slate-200 text-[10px]">{selectedCell.Resolucion}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase">Conectividad Scraped</span>
                    <span className="text-slate-200 text-[10px] flex items-center gap-1">
                      <Wifi className="h-3 w-3 text-blue-400 shrink-0" />
                      <span>{selectedCell.Conectividad}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase">Sensores</span>
                    <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                      <Activity className="h-3 w-3 text-emerald-550 shrink-0" />
                      <span>{selectedCell.Sensores}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase">Redes / Bandas</span>
                    <span className="text-amber-400 text-[10px] flex items-center gap-1">
                      <Zap className="h-3 w-3 text-amber-550 shrink-0" />
                      <span>{selectedCell.Redes}</span>
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase">Video</span>
                    <span className="text-[#A78BFA] text-[10px] flex items-center gap-1">
                      <RefreshCw className="h-3 w-3 text-[#A78BFA] shrink-0" />
                      <span>{selectedCell.Video}</span>
                    </span>
                  </div>
                </div>

                <div className="space-y-1 font-mono text-[11px]">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Garantía:</span>
                    <span className="text-slate-300 font-bold">{selectedCell.Garantia}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Masa Física:</span>
                    <span className="text-slate-300">{selectedCell.Peso}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Dimensiones:</span>
                    <span className="text-slate-300 text-[10px]">{selectedCell.Dimensiones}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-4 border border-dashed border-[#1F2937] rounded-lg text-slate-500 text-center text-xs self-center">
                <Info className="h-5 w-5 mb-1.5 text-slate-400" />
                <span>Haz clic en cualquier fila para inspeccionar metadatos enriquecidos.</span>
              </div>
            )}
          </div>

          <div className="hidden md:block mt-auto pb-2">
            <div className="p-3.5 rounded-lg bg-gradient-to-br from-[#161a23] to-[#0A0B0E] border border-[#1F2937]">
              <p className="text-[10px] text-slate-500 uppercase mb-1.5 font-bold tracking-tight flex items-center gap-1">
                <Clock className="h-3.5 w-3.5 text-blue-500" />
                Pipeline Integration
              </p>
              <p className="text-[10px] text-slate-400 font-mono leading-normal">
                Ubicación del esquema: <span className="text-blue-400 font-bold">/public/openapi.json</span>
              </p>
            </div>
          </div>
        </aside>

        {/* Core Main Workspace Tabulation Panel */}
        <section className="flex-1 flex flex-col p-4 sm:p-7 overflow-y-auto">
          
          {/* Metrics Panel */}
          <header className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6" id="metrics-panel">
            <div className="p-4 border border-[#1F2937] bg-[#0F1117] rounded-lg relative overflow-hidden group hover:border-[#3b82f6]/40 transition">
              <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest mb-1">Registros Cargados</p>
              <p className="text-3xl font-mono text-white font-bold">{cellphoneCatalog.length}</p>
              <div className="absolute right-2.5 bottom-2.5 font-mono text-[9px] text-[#334155] select-none uppercase tracking-widest font-extrabold group-hover:text-blue-500/20 transition-colors">LIMIT_20</div>
            </div>
            <div className="p-4 border border-[#1F2937] bg-[#0F1117] rounded-lg relative overflow-hidden group hover:border-[#3b82f6]/40 transition">
              <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest mb-1">Especificaciones/Campo</p>
              <p className="text-3xl font-mono text-blue-400 font-bold">22</p>
              <div className="absolute right-2.5 bottom-2.5 font-mono text-[9px] text-[#334155] select-none uppercase tracking-widest font-extrabold group-hover:text-blue-500/20 transition-colors">ROBUST_DATA</div>
            </div>
            <div className="p-4 border border-[#1F2937] bg-[#0F1117] rounded-lg relative overflow-hidden group hover:border-[#3b82f6]/40 transition">
              <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest mb-1">Top Marca Distribución</p>
              <p className="text-3xl font-mono text-white font-bold">{topBrand}</p>
              <div className="absolute right-2.5 bottom-2.5 font-mono text-[9px] text-[#334155] select-none uppercase tracking-widest group-hover:text-blue-500/20 transition-colors">DOMINANT</div>
            </div>
            <div className="p-4 border border-[#1F2937] bg-[#0F1117] rounded-lg relative overflow-hidden group hover:border-[#3b82f6]/40 transition">
              <p className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest mb-1">OpenAPI 3.0 Doc</p>
              <p className="text-3xl font-mono text-emerald-400 italic font-bold">READY</p>
              <div className="absolute right-2.5 bottom-2.5 font-mono text-[9px] text-[#334155] select-none uppercase tracking-widest group-hover:text-emerald-500/20 transition-colors">VALIDATED</div>
            </div>
          </header>

          {/* Tab Selector Hub for Explorer vs Raw vs OpenAPI Specifications */}
          <div className="bg-[#0F1117] border border-[#1F2937] rounded-xl flex flex-col overflow-hidden mb-6">
            <div className="p-4 border-b border-[#1F2937] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#08090C]">
              
              {/* Tabs Switcher Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={() => setActiveTab("explorer")}
                  className={`text-xs font-bold font-mono pb-2 px-1 border-b-2 transition flex items-center gap-1.5 ${
                    activeTab === "explorer"
                      ? "text-blue-400 border-blue-500"
                      : "text-slate-500 border-transparent hover:text-slate-300"
                  }`}
                  id="tab-explorer-btn"
                >
                  <Smartphone className="h-3.5 w-3.5 text-blue-500" />
                  EXPLORADOR_DE_DATOS
                </button>
                <button
                  onClick={() => setActiveTab("openapi")}
                  className={`text-xs font-bold font-mono pb-2 px-1 border-b-2 transition flex items-center gap-1.5 ${
                    activeTab === "openapi"
                      ? "text-blue-400 border-blue-500"
                      : "text-slate-500 border-transparent hover:text-slate-400"
                  }`}
                  id="tab-openapi-btn"
                >
                  <BookOpen className="h-3.5 w-3.5 text-amber-500" />
                  OPENAPI_SCHEMA_REF
                </button>
                <button
                  onClick={() => setActiveTab("raw")}
                  className={`text-xs font-bold font-mono pb-2 px-1 border-b-2 transition flex items-center gap-1.5 ${
                    activeTab === "raw"
                      ? "text-blue-400 border-blue-500"
                      : "text-slate-500 border-transparent hover:text-slate-300"
                  }`}
                  id="tab-raw-btn"
                >
                  <Terminal className="h-3.5 w-3.5 text-slate-400" />
                  RAW_CATALOG_JSON
                </button>
              </div>

              {/* Action buttons copy */}
              {activeTab !== "openapi" && (
                <button
                  onClick={() => copyToClipboard(formattedJsonAll, "all")}
                  className="text-[10px] font-mono text-slate-300 bg-[#1A1D23] hover:bg-blue-600 px-3.5 py-1.5 rounded transition-all flex items-center gap-1.5 border border-[#374151] self-start sm:self-auto"
                  id="copy-json-btn"
                >
                  {copiedAll ? (
                    <>
                      <Check className="h-3 w-3 text-green-400" />
                      <span>COPIED_CATALOG_OK</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 text-slate-400" />
                      <span>COPIAR_JSON_COMPLETO</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Filtering suite is only shown for explorer/raw tabs */}
            {activeTab !== "openapi" && (
              <div className="p-4 border-b border-[#1F2937] bg-[#0E1116] flex flex-col lg:flex-row gap-4 justify-between items-stretch lg:items-center">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    placeholder="Filtrar por modelo, procesador, memoria, color, sistema operativo..."
                    className="w-full pl-9 pr-4 py-2 border border-[#1F2937] bg-[#08090C] rounded-lg text-sm text-[#E2E8F0] placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 pl-1 font-mono">
                    <Sliders className="h-4 w-4 text-blue-400" />
                    Marca:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {brands.map((b) => (
                      <button
                        key={b}
                        onClick={() => setSelectedBrand(b)}
                        className={`px-2.5 py-1 rounded text-xs font-semibold font-mono transition ${
                          selectedBrand === b
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-[#1A1D23] text-slate-300 hover:bg-[#2A303B]"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab view contents switcher */}
            <AnimatePresence mode="wait">
              {activeTab === "explorer" ? (
                <motion.div
                  key="explorer-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="p-1 overflow-x-auto"
                >
                  <table className="w-full text-left border-collapse font-mono text-xs">
                    <thead>
                      <tr className="border-b border-[#1F2937] text-slate-400 font-bold uppercase tracking-wider bg-[#0D0F13]">
                        <th className="py-3.5 px-4">TÍTULO COMERCIAL / MARCA</th>
                        <th className="py-3.5 px-4">MODELO & COLOR</th>
                        <th className="py-3.5 px-4">PROCESADOR & SCREEN</th>
                        <th className="py-3.5 px-4">MEMORIA / RAM</th>
                        <th className="py-3.5 px-4">SISTEMA OPERATIVO & CÁMARA</th>
                        <th className="py-3.5 px-4">BATERÍA, RESISTENCIA & CARGA</th>
                        <th className="py-3.5 px-4 text-right text-blue-300">PRECIO</th>
                        <th className="py-3.5 px-4 text-center">ACCIONES</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#1F2937] bg-[#0A0D11]">
                      {filteredCells.length > 0 ? (
                        filteredCells.map((cel, idx) => {
                          const isSelected = selectedCell?.Modelo === cel.Modelo;
                          return (
                            <tr 
                              key={idx} 
                              onClick={() => setSelectedCell(cel)}
                              className={`cursor-pointer transition duration-150 ${
                                isSelected ? "bg-[#1E293B]/70 hover:bg-[#1E293B]" : "hover:bg-[#12161F]/60"
                              }`}
                            >
                              <td className="py-3 px-4">
                                <div className="text-slate-100 font-bold leading-tight">{cel.title}</div>
                                <div className="text-blue-400 text-[10px] font-bold mt-1 uppercase tracking-wider flex items-center gap-1.5">
                                  <span className="px-1.5 py-0.5 bg-blue-950/40 text-blue-300 rounded border border-blue-900/30 font-semibold">{cel.Marca}</span>
                                </div>
                              </td>
                              <td className="py-3 px-4">
                                <div className="text-slate-200 font-semibold">{cel.Modelo}</div>
                                <div className="text-slate-400 text-[10px]">{cel.Color}</div>
                              </td>
                              <td className="py-3 px-4 whitespace-nowrap">
                                <div className="text-slate-200 flex items-center gap-1">
                                  <Cpu className="h-3 w-3 text-blue-400" />
                                  <span>{cel.Procesador}</span>
                                </div>
                                <div className="text-slate-400 text-[10px]">{cel.Pantalla}</div>
                              </td>
                              <td className="py-3 px-4">
                                <span className="text-slate-350 text-[11px] font-mono whitespace-nowrap">{cel.Memoria}</span>
                              </td>
                              <td className="py-3 px-4 text-slate-300">
                                <div className="truncate max-w-[170px] text-slate-200 text-[11px]" title={cel.Sistema_Operativo}>{cel.Sistema_Operativo}</div>
                                <div className="text-slate-450 text-[10px] flex items-center gap-0.5" title={cel.Camara}>
                                  <Camera className="h-2.5 w-2.5 text-amber-500" />
                                  <span className="truncate max-w-[150px]">{cel.Camara}</span>
                                </div>
                              </td>
                              <td className="py-3 px-4 text-slate-400 text-[11px]">
                                <div className="flex items-center gap-1">🔋 {cel.Bateria}</div>
                                <div className="text-[10px] text-slate-500 truncate max-w-[180px]">{cel.Sensores}</div>
                              </td>
                              <td className="py-3 px-4 text-right">
                                <span className="text-blue-400 font-bold text-sm whitespace-nowrap">{cel.price}</span>
                                <div className="text-[9px] text-emerald-400">{cel.quotes}</div>
                              </td>
                              <td className="py-3 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                                <div className="flex gap-1.5 justify-center">
                                  <a 
                                    href={cel.url} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    className="p-1.5 rounded bg-[#1C202A] hover:bg-blue-600/80 text-slate-350 hover:text-white transition"
                                    title="Ver link ficticio de Scraping"
                                  >
                                    <ExternalLink className="h-3.5 w-3.5" />
                                  </a>
                                  <button
                                    onClick={() => copyToClipboard(JSON.stringify(cel, null, 2), cel.Modelo)}
                                    className="p-1.5 rounded bg-[#1C202A] hover:bg-blue-600 text-slate-310 hover:text-white transition"
                                    title="Copiar JSON del Celular"
                                  >
                                    {copiedId === cel.Modelo ? (
                                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                                    ) : (
                                      <Copy className="h-3.5 w-3.5" />
                                    )}
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={8} className="py-16 text-center text-slate-500 font-sans">
                            Ningún dispositivo celular coincide con la consulta o los filtros aplicados.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                  <div className="p-3 bg-[#0D1015] border-t border-[#1F2937] text-[11px] text-slate-400 flex items-center justify-between">
                    <span>* Haz clic en cualquier fila de la lista para cargar sus metadatos específicos en el panel de inspector izquierdo.</span>
                    <span className="font-semibold text-blue-400">Total: {filteredCells.length} Celulares</span>
                  </div>
                </motion.div>
              ) : activeTab === "openapi" ? (
                <motion.div
                  key="openapi-spec-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="p-6 bg-[#090B0F] space-y-6"
                >
                  <div className="border-l-4 border-amber-500 pl-4 py-1">
                    <h3 className="text-base font-bold text-white font-mono uppercase tracking-wider">MarketInsight S.A. - OpenAPI Specifications Blueprint</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      El siguiente esquema describe de forma robusta e institucional los campos homologados devueltos por el scraper empresarial. 
                      Ubicación estática disponible en <code className="text-blue-400 font-mono font-bold bg-[#1A1D23] px-1 py-0.5 rounded">/openapi.json</code>.
                    </p>
                  </div>

                  {/* REST endpoints list */}
                  <div className="space-y-4 font-mono text-xs">
                    <div className="bg-[#121620] border border-[#1F2937] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-blue-600 text-white font-bold rounded text-[10px]">GET</span>
                        <span className="text-white font-bold font-mono text-xs">/api/inventario</span>
                        <span className="text-slate-500 ml-auto text-[10px]">Returns Array of CellphoneProduct</span>
                      </div>
                      <p className="text-slate-400 text-[11px] mb-3">Obtiene la lista completa de celulares con especificaciones técnicas detalladas y precios ficticios homogeneizados.</p>
                      
                      <div className="border-t border-[#1F2937] pt-3 space-y-2">
                        <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Query Parameters:</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                          <div className="flex items-start gap-1 p-2 bg-[#08090C] border border-[#1F2937] rounded">
                            <span className="text-blue-400">marca</span>
                            <span className="text-slate-500">(string)</span>
                            <span className="text-slate-450">- Filtra las marcas. Opciones: APPLE, SAMSUNG, MOTOROLA, XIAOMI, ONEPLUS</span>
                          </div>
                          <div className="flex items-start gap-1 p-2 bg-[#08090C] border border-[#1F2937] rounded">
                            <span className="text-blue-400">search</span>
                            <span className="text-slate-500">(string)</span>
                            <span className="text-slate-450">- Fuzzy matching de texto para búsquedas en procesador, modelo o rasgos.</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#121620] border border-[#1F2937] rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-1 bg-emerald-600 text-white font-bold rounded text-[10px]">GET</span>
                        <span className="text-white font-bold font-mono text-xs">/api/health</span>
                        <span className="text-slate-550 ml-auto text-[10px]">Health Check</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">Devuelve el estatus actual de disponibilidad de la API para sistemas de balanceadores de carga.</p>
                    </div>

                    {/* Highly rich field mapping definitions */}
                    <div className="bg-[#0C0E14] border border-[#1F2937] rounded-xl p-5">
                      <h4 className="text-slate-200 font-bold uppercase tracking-wider mb-4 pb-2 border-b border-[#1F2937] flex items-center justify-between">
                        <span>Schema Model: `CellphoneProduct` (Robust mapping parameters)</span>
                        <span className="text-[10px] text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 font-mono">22 DEFINED FIELDS</span>
                      </h4>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-3.5 text-[11px] leading-relaxed">
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">title</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Nombre comercial completo formateado bajo el formato Scraper homologado.</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">price</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Monto actual estructurado con conversión de moneda e indicadores (ej. "1,199.00 USD").</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">quotes</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Representa la viabilidad de financiamiento directo ("en 3 cuotas de..." o "Sin cuotas").</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Marca</span> <span className="text-slate-500">enum</span></div>
                          <p className="text-slate-400">Fabricante en mayúscula estricta: SAMSUNG, APPLE, MOTOROLA, XIAOMI, ONEPLUS.</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Modelo</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Identificador comercial simplificado de la línea de equipo (ej. "Edge 50 Pro").</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Sistema_Operativo</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Sistema operativo del teléfono, incluyendo versión nativa o capa de personalización.</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Camara_Principal</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Estructura de megapíxeles, lentes traseros, estabilización OIS y marcas de óptica (ej: Leica, Hasselblad).</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Conectividad</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Estándares inalámbricos soportados, antenas 5G, Wi-Fi 7, radio FM y puertos físicos.</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Resistencia_Agua</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Grado de estanqueidad o clasificación contra polvos y líquidos (ej: IP68, IP54).</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Carga_Rapida</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Velocidad de carga máxima por cable, soporte inalámbrico, carga reversible y estándares.</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Nfc</span> <span className="text-slate-500">boolean</span></div>
                          <p className="text-slate-400">Flag booleano que indica presencia o ausencia física de antena NFC para pagos electrónicos.</p>
                        </div>
                        <div className="flex flex-col p-2 bg-[#121620]/40 border border-[#1F2937] rounded">
                          <div className="flex justify-between font-bold mb-1"><span className="text-blue-400">Tasa_Refresco</span> <span className="text-slate-500">string</span></div>
                          <p className="text-slate-400">Frecuencia de actualización en Hertz de la pantalla del terminal (ej: "120 Hz LTPO").</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="raw-json-view"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="p-4 bg-[#08090C] overflow-hidden relative"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#0A0B0E] border-r border-[#1F2937] flex flex-col items-center pt-6 text-slate-600 font-mono text-[11px] select-none">
                    {Array.from({ length: 24 }, (_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>
                  <pre className="pl-10 max-h-[600px] overflow-y-auto text-[#CE9178] font-mono text-[11px] leading-relaxed">
                    <code>
                      <span className="text-white">[</span><br />
                      {filteredCells.map((cel, idx) => (
                        <div key={idx} className="pl-4">
                          <span className="text-[#374151]">{"{"}</span><br />
                          <span className="pl-4 text-[#9CDCFE]">"title"</span>: <span className="text-[#CE9178]">"{cel.title}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"price"</span>: <span className="text-[#CE9178]">"{cel.price}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"quotes"</span>: <span className="text-[#CE9178]">"{cel.quotes}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"url"</span>: <span className="text-[#CE9178]">"{cel.url}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Marca"</span>: <span className="text-[#CE9178]">"{cel.Marca}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Modelo"</span>: <span className="text-[#CE9178]">"{cel.Modelo}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Color"</span>: <span className="text-[#CE9178]">"{cel.Color}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Pantalla"</span>: <span className="text-[#CE9178]">"{cel.Pantalla}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Resolucion"</span>: <span className="text-[#CE9178]">"{cel.Resolucion}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Procesador"</span>: <span className="text-[#CE9178]">"{cel.Procesador}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Memoria"</span>: <span className="text-[#CE9178]">"{cel.Memoria}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Bateria"</span>: <span className="text-[#CE9178]">"{cel.Bateria}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Dimensiones"</span>: <span className="text-[#CE9178]">"{cel.Dimensiones}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Peso"</span>: <span className="text-[#CE9178]">"{cel.Peso}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Garantia"</span>: <span className="text-[#CE9178]">"{cel.Garantia}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Sistema_Operativo"</span>: <span className="text-[#CE9178]">"{cel.Sistema_Operativo}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Camara"</span>: <span className="text-[#CE9178]">"{cel.Camara}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Conectividad"</span>: <span className="text-[#CE9178]">"{cel.Conectividad}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Sensores"</span>: <span className="text-[#CE9178]">"{cel.Sensores}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Video"</span>: <span className="text-[#CE9178]">"{cel.Video}"</span>,<br />
                          <span className="pl-4 text-[#9CDCFE]">"Redes"</span>: <span className="text-[#CE9178]">"{cel.Redes}"</span><br />
                          <span className="text-[#374151]">{"}"}</span>{idx < filteredCells.length - 1 ? "," : ""}<br />
                        </div>
                      ))}
                      <span className="text-white">]</span>
                    </code>
                  </pre>
                  <div className="bg-gradient-to-t from-[#08090C] to-transparent h-16 absolute bottom-0 left-10 right-0 flex items-end justify-center pb-2 pointer-events-none">
                    <span className="text-[10px] text-slate-400 font-bold bg-[#1A1D23] px-3.5 py-1.5 rounded uppercase tracking-wider border border-[#1F2937]">
                      Mostrando {filteredCells.length} de {cellphoneCatalog.length} celulares
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer corporate stats */}
          <footer className="mt-auto pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 font-mono tracking-wider uppercase border-t border-[#1F2937]" id="footer-block">
            <p>© 2026 MarketInsight S.A. Pipeline: TIENDA_AMIGA_HOMOLOGATED_v3.0</p>
            <p>Active Schema: OpenAPI v3.0.3 | Content Type: application/json</p>
          </footer>

        </section>
      </div>
    </div>
  );
}
