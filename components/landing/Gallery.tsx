"use client";

import { motion } from "framer-motion";

const posterStyles = [
  {
    bg: "#F7DF26",
    textColor: "#000",
    traceColor: "#000",
    city: "PARIS",
    event: "MARATHON",
    distance: "42.2 KM",
    time: "3h47",
    style: "Jaune soleil",
  },
  {
    bg: "#1a1a2e",
    textColor: "#FC4C02",
    traceColor: "#FC4C02",
    city: "CHAMONIX",
    event: "UTMB",
    distance: "171 KM",
    time: "28h12",
    style: "Nuit électrique",
  },
  {
    bg: "#0f3460",
    textColor: "#e0e0e0",
    traceColor: "#60a5fa",
    city: "NEW YORK",
    event: "MARATHON",
    distance: "42.2 KM",
    time: "4h12",
    style: "Minuit bleu",
  },
  {
    bg: "#f5f5f0",
    textColor: "#1a1a1a",
    traceColor: "#333",
    city: "BORDEAUX",
    event: "SEMI-MARATHON",
    distance: "21.1 KM",
    time: "1h52",
    style: "Paper blanc",
  },
  {
    bg: "#2d1b69",
    textColor: "#a78bfa",
    traceColor: "#a78bfa",
    city: "SAINTÉ",
    event: "LYON",
    distance: "73 KM",
    time: "10h28",
    style: "Violet nuit",
  },
  {
    bg: "#0d2b0a",
    textColor: "#4ade80",
    traceColor: "#4ade80",
    city: "ANNECY",
    event: "TRAIL",
    distance: "55 KM",
    time: "7h34",
    style: "Forêt sombre",
  },
];

function PosterCard({ poster, index }: { poster: typeof posterStyles[0]; index: number }) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, zIndex: 10 }}
    >
      <div
        className="rounded-xl overflow-hidden poster-shadow"
        style={{ backgroundColor: poster.bg, aspectRatio: "2/3" }}
      >
        {/* Map trace simulation */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <svg viewBox="0 0 100 130" className="w-full h-full opacity-75">
            <path
              d={`M50,115 C35,105 25,88 28,72 C31,56 46,53 50,42 C54,31 57,22 68,24 C79,26 84,43 80,57 C76,71 60,74 54,86 C48,98 52,110 50,115Z`}
              fill="none"
              stroke={poster.traceColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Start/end dot */}
            <circle cx="50" cy="115" r="3.5" fill={poster.traceColor} />
            <circle cx="50" cy="42" r="2" fill={poster.traceColor} opacity="0.5" />
          </svg>
        </div>

        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div
            className="font-heading font-black text-2xl leading-none mb-0.5"
            style={{ color: poster.textColor }}
          >
            {poster.city}
          </div>
          <div
            className="font-heading font-bold text-xs tracking-[0.2em] uppercase opacity-70"
            style={{ color: poster.textColor }}
          >
            {poster.event}
          </div>
          <div
            className="flex justify-between items-center mt-2 text-[10px] opacity-50"
            style={{ color: poster.textColor }}
          >
            <span>{poster.distance}</span>
            <span>{poster.time}</span>
          </div>
        </div>
      </div>

      {/* Style label */}
      <div className="absolute -bottom-7 left-0 right-0 text-center">
        <span className="text-xs text-white/30 font-medium">{poster.style}</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 rounded-xl bg-[#FC4C02]/0 group-hover:bg-[#FC4C02]/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="bg-[#FC4C02] text-white text-xs font-bold px-4 py-2 rounded-full">
          Créer ce style
        </div>
      </div>
    </motion.div>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 bg-[#111] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-px bg-[#FC4C02]" />
            <span className="text-[#FC4C02] text-sm font-semibold tracking-widest uppercase">
              Galerie
            </span>
            <div className="w-8 h-px bg-[#FC4C02]" />
          </motion.div>

          <motion.h2
            className="font-heading font-black text-4xl sm:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Des dizaines de styles,{" "}
            <span className="gradient-text">un seul résultat</span>
            <br />
            <span className="text-white/60 text-3xl font-bold">
              ton parcours, ta personnalité
            </span>
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-white/50 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Du minimaliste au coloré, du vintage au high-tech — il y a forcément
            un style qui te ressemble.
          </motion.p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {posterStyles.map((poster, i) => (
            <PosterCard key={i} poster={poster} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://app.runmemories.com"
            className="inline-flex items-center gap-2 text-[#FC4C02] hover:text-white border border-[#FC4C02]/40 hover:border-[#FC4C02] hover:bg-[#FC4C02] font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            Explorer tous les styles dans l&apos;éditeur
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
