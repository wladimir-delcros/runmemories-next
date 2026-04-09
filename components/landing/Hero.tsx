"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { MagneticButton } from "@/components/ui/magnetic-button";

const stats = [
  { value: "10 000+", label: "posters créés" },
  { value: "4.9/5", label: "satisfaction client" },
  { value: "48h", label: "délai d'impression" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#111] grain pt-20">
      <GradientMesh variant="hero" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8 text-sm text-white/70 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-[#FC4C02] animate-pulse" />
          Nouveau — Connexion Strava en 1 clic
          <span className="text-[#FC4C02] font-medium">→</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="text-white block">Immortalisez</span>
          <span className="block relative">
            <span className="gradient-text">chaque exploit</span>
          </span>
          <span className="text-white/80 block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-1">
            en oeuvre d&apos;art
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-white/60 text-lg sm:text-xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Importez votre tracé GPX depuis Strava, personnalisez votre poster avec
          des dizaines de styles, et recevez une impression haute qualité chez vous.
          Marathon, trail, ultra — chaque course mérite son cadre.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <MagneticButton>
            <Link
              href="https://app.runmemories.com"
              className="inline-flex items-center gap-3 bg-[#FC4C02] hover:bg-[#d63a00] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 btn-glow"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
              </svg>
              Créer mon poster gratuit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </MagneticButton>

          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-base px-6 py-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-sm"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <circle cx="12" cy="12" r="10" />
              <path d="M10 8l6 4-6 4V8z" fill="currentColor" stroke="none" />
            </svg>
            Voir comment ça marche
          </Link>
        </motion.div>

        {/* Micro-copy */}
        <motion.p
          className="text-white/30 text-sm mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Sans CB requise · Visualisation instantanée · Impression 48h
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading font-black text-3xl text-white mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Poster mockup preview */}
        <motion.div
          className="relative mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Floating glow under mockup */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-[#FC4C02]/20 blur-3xl rounded-full" />

          {/* Poster grid mockup */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mx-auto max-w-3xl">
            {[
              { bg: "#F7DF26", mapBg: "#e8cc70", textColor: "#000", traceColor: "#000", streetColor: "#c9a832", waterColor: "#b8a028", title: "PARIS", subtitle: "MARATHON", distance: "42.2 KM", denivelé: "+284m", time: "3:47:22", rotate: -2, trace: "M50,105 C38,98 28,88 26,75 C24,62 34,55 38,45 C42,35 40,25 48,19 C56,13 66,15 72,25 C78,35 75,48 70,57 C65,66 55,68 54,79 C53,90 55,101 50,105Z" },
              { bg: "#0f0f1a", mapBg: "#12121f", textColor: "#FC4C02", traceColor: "#FC4C02", streetColor: "#1a1a2e", waterColor: "#0d0d18", title: "TRAIL", subtitle: "DES ALPES", distance: "80 KM", denivelé: "+4200m", time: "12:34", rotate: 0, featured: true, trace: "M50,108 C40,101 30,91 28,78 C26,65 30,55 36,48 C42,41 48,35 52,27 C56,19 60,11 68,13 C76,15 80,27 78,39 C76,51 68,57 62,65 C56,73 54,83 56,93 C58,103 56,105 50,108Z" },
              { bg: "#1e0a3c", mapBg: "#240f48", textColor: "#c084fc", traceColor: "#a855f7", streetColor: "#2d1359", waterColor: "#180a30", title: "NEW YORK", subtitle: "MARATHON", distance: "42.2 KM", denivelé: "+480m", time: "4:12:08", rotate: 2, trace: "M50,107 C36,100 24,88 26,73 C28,58 42,53 46,42 C50,31 48,22 56,16 C64,10 74,14 76,27 C78,40 70,49 64,59 C58,69 58,81 56,93 C54,101 54,108 50,107Z" },
            ].map((poster, i) => (
              <motion.div
                key={i}
                className={`relative rounded-lg overflow-hidden poster-shadow ${poster.featured ? "scale-105 z-10" : "opacity-90"}`}
                style={{ rotate: poster.rotate, aspectRatio: "2/3" }}
                whileHover={{ scale: poster.featured ? 1.08 : 1.03, rotate: 0, zIndex: 20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Map background */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 150" preserveAspectRatio="xMidYMid slice">
                  <rect width="100" height="150" fill={poster.mapBg}/>
                  {[8,16,24,32,40,48,56,64,72,80,88,96].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="150" stroke={poster.streetColor} strokeWidth="0.3" opacity="0.8"/>)}
                  {[10,20,30,40,50,60,70,80,90,100,110,120,130,140].map(y => <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} stroke={poster.streetColor} strokeWidth="0.3" opacity="0.8"/>)}
                  <line x1="0" y1="25" x2="55" y2="0" stroke={poster.streetColor} strokeWidth="0.7" opacity="0.9"/>
                  <line x1="0" y1="85" x2="100" y2="55" stroke={poster.streetColor} strokeWidth="1" opacity="0.6"/>
                  <line x1="38" y1="0" x2="38" y2="150" stroke={poster.streetColor} strokeWidth="1.8" opacity="0.9"/>
                  <line x1="0" y1="72" x2="100" y2="72" stroke={poster.streetColor} strokeWidth="1.8" opacity="0.9"/>
                  <path d={`M0,58 Q25,52 50,60 Q75,68 100,60 L100,76 Q75,84 50,76 Q25,68 0,76 Z`} fill={poster.waterColor} opacity="0.4"/>
                  <rect x="58" y="18" width="22" height="16" rx="1.5" fill={poster.streetColor} opacity="0.35"/>
                  <rect x="10" y="88" width="16" height="22" rx="1.5" fill={poster.streetColor} opacity="0.28"/>
                </svg>

                {/* GPS trace */}
                <div className="absolute inset-0" style={{ padding: "15% 12% 28%" }}>
                  <svg viewBox="0 0 100 130" className="w-full h-full">
                    <path d={poster.trace} fill="none" stroke={poster.traceColor} strokeWidth="7" strokeLinecap="round" opacity="0.15"/>
                    <path d={poster.trace} fill="none" stroke={poster.traceColor} strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="50" cy="105" r="4.5" fill={poster.traceColor}/>
                    <circle cx="50" cy="105" r="8" fill={poster.traceColor} opacity="0.15"/>
                    <circle cx="50" cy="19" r="2.5" fill={poster.traceColor} opacity="0.6"/>
                  </svg>
                </div>

                {/* Bottom text */}
                <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: `linear-gradient(to top, ${poster.bg} 65%, transparent)` }}>
                  <div className="font-heading font-black text-base leading-none" style={{ color: poster.textColor }}>{poster.title}</div>
                  <div className="font-heading text-[9px] font-bold tracking-[0.25em] uppercase mt-0.5 opacity-70" style={{ color: poster.textColor }}>{poster.subtitle}</div>
                  <div className="flex justify-between text-[8px] mt-1.5 opacity-55" style={{ color: poster.textColor }}>
                    <span>{poster.distance}</span>
                    <span>{poster.denivelé}</span>
                    <span>{poster.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Label below */}
          <p className="text-center text-white/30 text-xs mt-6">
            Apercu de quelques créations RunMemories — personnalisables à l&apos;infini
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/40 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
