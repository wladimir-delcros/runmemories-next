"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posterStyles = [
  {
    bg: "#F7DF26", textColor: "#000", traceColor: "#000",
    mapColor: "#e8c84a", streetColor: "#c9a832", waterColor: "#b8a028",
    city: "PARIS", event: "MARATHON", distance: "42.2 KM", time: "3h47",
    denivelé: "+284m", style: "Soleil",
    trace: "M50,112 C38,105 28,95 26,82 C24,69 34,62 38,52 C42,42 40,32 48,26 C56,20 66,22 72,32 C78,42 75,55 70,64 C65,73 55,75 54,86 C53,97 55,108 50,112Z",
  },
  {
    bg: "#0f0f1a", textColor: "#FC4C02", traceColor: "#FC4C02",
    mapColor: "#12121f", streetColor: "#1a1a2e", waterColor: "#0d0d18",
    city: "CHAMONIX", event: "UTMB", distance: "171 KM", time: "28h12",
    denivelé: "+10000m", style: "Nuit",
    trace: "M50,115 C40,108 30,98 28,85 C26,72 30,62 36,55 C42,48 48,42 52,34 C56,26 60,18 68,20 C76,22 80,34 78,46 C76,58 68,64 62,72 C56,80 54,90 56,100 C58,110 56,112 50,115Z",
  },
  {
    bg: "#0a1628", textColor: "#60a5fa", traceColor: "#3b82f6",
    mapColor: "#0d1e35", streetColor: "#122540", waterColor: "#0a1020",
    city: "NEW YORK", event: "MARATHON", distance: "42.2 KM", time: "4h12",
    denivelé: "+480m", style: "Minuit",
    trace: "M50,110 C36,103 24,90 26,75 C28,60 42,55 46,44 C50,33 48,24 56,20 C64,16 74,22 76,35 C78,48 70,57 66,68 C62,79 64,92 58,102 C54,108 54,112 50,110Z",
  },
  {
    bg: "#f0ede6", textColor: "#1a1a1a", traceColor: "#222",
    mapColor: "#e8e4da", streetColor: "#d0c9bc", waterColor: "#c8d8e8",
    city: "BORDEAUX", event: "SEMI", distance: "21.1 KM", time: "1h52",
    denivelé: "+125m", style: "Paper",
    trace: "M50,112 C42,106 32,96 32,83 C32,70 44,64 48,54 C52,44 50,34 58,28 C66,22 76,28 78,40 C80,52 72,60 68,70 C64,80 66,94 60,104 C56,110 54,114 50,112Z",
  },
  {
    bg: "#1e0a3c", textColor: "#c084fc", traceColor: "#a855f7",
    mapColor: "#240f48", streetColor: "#2d1359", waterColor: "#180a30",
    city: "SAINTÉ", event: "LYON", distance: "73 KM", time: "10h28",
    denivelé: "+2450m", style: "Violet",
    trace: "M50,114 C40,107 28,96 28,82 C28,68 38,62 42,52 C46,42 44,30 52,24 C60,18 70,22 74,34 C78,46 72,58 66,68 C60,78 58,90 56,102 C54,110 54,116 50,114Z",
  },
  {
    bg: "#071a04", textColor: "#4ade80", traceColor: "#22c55e",
    mapColor: "#091f06", streetColor: "#0d2a09", waterColor: "#062018",
    city: "ANNECY", event: "TRAIL", distance: "55 KM", time: "7h34",
    denivelé: "+3200m", style: "Forêt",
    trace: "M50,113 C38,106 26,94 28,80 C30,66 42,60 46,49 C50,38 48,28 56,22 C64,16 74,20 76,33 C78,46 70,56 64,66 C58,76 58,88 56,100 C54,108 54,115 50,113Z",
  },
];

function MapBackground({ poster }: { poster: typeof posterStyles[0] }) {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice">
      <rect width="100" height="150" fill={poster.mapColor} />
      {/* Fine street grid */}
      {[8,16,24,32,40,48,56,64,72,80,88,96].map(x => (
        <line key={`v${x}`} x1={x} y1="0" x2={x} y2="150" stroke={poster.streetColor} strokeWidth="0.3" opacity="0.8"/>
      ))}
      {[10,20,30,40,50,60,70,80,90,100,110,120,130,140].map(y => (
        <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} stroke={poster.streetColor} strokeWidth="0.3" opacity="0.8"/>
      ))}
      {/* Diagonal roads */}
      <line x1="0" y1="25" x2="55" y2="0" stroke={poster.streetColor} strokeWidth="0.7" opacity="0.9"/>
      <line x1="45" y1="150" x2="100" y2="90" stroke={poster.streetColor} strokeWidth="0.7" opacity="0.9"/>
      <line x1="0" y1="85" x2="100" y2="55" stroke={poster.streetColor} strokeWidth="1" opacity="0.6"/>
      <line x1="20" y1="0" x2="80" y2="150" stroke={poster.streetColor} strokeWidth="0.5" opacity="0.5"/>
      {/* Main roads */}
      <line x1="38" y1="0" x2="38" y2="150" stroke={poster.streetColor} strokeWidth="1.8" opacity="0.9"/>
      <line x1="0" y1="72" x2="100" y2="72" stroke={poster.streetColor} strokeWidth="1.8" opacity="0.9"/>
      <line x1="68" y1="0" x2="68" y2="150" stroke={poster.streetColor} strokeWidth="1.2" opacity="0.7"/>
      <line x1="0" y1="42" x2="100" y2="42" stroke={poster.streetColor} strokeWidth="1.2" opacity="0.7"/>
      {/* Water body */}
      <path d="M0,58 Q25,52 50,60 Q75,68 100,60 L100,76 Q75,84 50,76 Q25,68 0,76 Z" fill={poster.waterColor} opacity="0.5"/>
      {/* Parks/blocks */}
      <rect x="58" y="18" width="22" height="16" rx="1.5" fill={poster.streetColor} opacity="0.35"/>
      <rect x="10" y="88" width="16" height="22" rx="1.5" fill={poster.streetColor} opacity="0.28"/>
      <rect x="72" y="95" width="14" height="18" rx="1.5" fill={poster.streetColor} opacity="0.25"/>
      <rect x="22" y="28" width="10" height="10" rx="1" fill={poster.streetColor} opacity="0.3"/>
    </svg>
  );
}

function PosterCard({ poster, index }: { poster: typeof posterStyles[0]; index: number }) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.04, zIndex: 10 }}
    >
      <Link href="https://app.runmemories.com" target="_blank" rel="noopener noreferrer">
        <div className="rounded-xl overflow-hidden poster-shadow relative" style={{ aspectRatio: "2/3" }}>
          {/* Map background */}
          <MapBackground poster={poster} />

          {/* GPS trace */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ padding: "18% 15% 30%" }}>
            <svg viewBox="0 0 100 130" className="w-full h-full">
              {/* Glow */}
              <path d={poster.trace} fill="none" stroke={poster.traceColor} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.15"/>
              {/* Main trace */}
              <path d={poster.trace} fill="none" stroke={poster.traceColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Start dot */}
              <circle cx="50" cy="112" r="4.5" fill={poster.traceColor} opacity="0.9"/>
              <circle cx="50" cy="112" r="8" fill={poster.traceColor} opacity="0.15"/>
              {/* End dot */}
              <circle cx="50" cy="26" r="2.5" fill={poster.traceColor} opacity="0.6"/>
            </svg>
          </div>

          {/* Bottom text area with gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 p-3 pt-8"
            style={{ background: `linear-gradient(to top, ${poster.bg} 70%, transparent)` }}
          >
            <div className="font-heading font-black text-xl leading-none" style={{ color: poster.textColor }}>
              {poster.city}
            </div>
            <div className="font-heading font-bold text-[9px] tracking-[0.25em] uppercase mt-0.5 opacity-70" style={{ color: poster.textColor }}>
              {poster.event}
            </div>
            <div className="flex justify-between items-center mt-1.5 text-[9px] opacity-50" style={{ color: poster.textColor }}>
              <span>{poster.distance}</span>
              <span>{poster.denivelé}</span>
              <span>{poster.time}</span>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="bg-[#FC4C02] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              Créer ce style →
            </div>
          </div>
        </div>

        {/* Style label */}
        <div className="mt-3 text-center">
          <span className="text-xs text-white/40 font-medium">{poster.style}</span>
        </div>
      </Link>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 bg-[#111] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div className="inline-flex items-center gap-3 mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <div className="w-8 h-px bg-[#FC4C02]" />
            <span className="text-[#FC4C02] text-sm font-semibold tracking-widest uppercase">Galerie</span>
            <div className="w-8 h-px bg-[#FC4C02]" />
          </motion.div>

          <motion.h2
            className="font-heading font-black text-4xl sm:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            Des dizaines de styles,{" "}
            <span className="gradient-text">un seul résultat</span>
            <br />
            <span className="text-white/60 text-3xl font-bold">ton parcours, ta personnalité</span>
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-white/50 text-lg mb-8"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          >
            Du minimaliste au coloré, du vintage au high-tech — clique sur un style pour le créer avec ton GPX.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <Link
              href="https://app.runmemories.com"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#FC4C02] hover:bg-[#d63a00] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 btn-glow"
            >
              Voir tous les styles dans l&apos;éditeur
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {posterStyles.map((poster, i) => (
            <PosterCard key={i} poster={poster} index={i} />
          ))}
        </div>

        {/* Bottom CTA band */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#FC4C02]/10 via-[#FC4C02]/5 to-[#FC4C02]/10 border border-[#FC4C02]/20 rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        >
          <p className="text-white/60 text-sm mb-4">
            Ces styles sont tous disponibles gratuitement dans l&apos;éditeur — sans CB requise
          </p>
          <Link
            href="https://app.runmemories.com"
            target="_blank"
            className="inline-flex items-center gap-3 bg-white text-[#111] font-bold text-base px-8 py-4 rounded-xl hover:bg-[#FC4C02] hover:text-white transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
            </svg>
            Créer mon poster maintenant — gratuit
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
