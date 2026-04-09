"use client";

import { motion } from "framer-motion";

const integrations = [
  { name: "Strava", icon: "🏃", color: "#FC4C02" },
  { name: "Garmin", icon: "⌚", color: "#00B8F1" },
  { name: "Apple Watch", icon: "⌚", color: "#1D1D1F" },
  { name: "GPX", icon: "📍", color: "#4CAF50" },
  { name: "KML", icon: "🗺️", color: "#FF5722" },
  { name: "Polar", icon: "❄️", color: "#D01012" },
  { name: "Suunto", icon: "🔵", color: "#1E3A5F" },
];

const customers = [
  "10 000+ coureurs",
  "Paris Marathon",
  "MAS de la forêt",
  "SaintéLyon",
  "UTMB",
  "Marathon de New York",
  "Trail des Alpes",
  "Spartathlon",
];

export function LogoCloud() {
  const doubledIntegrations = [...integrations, ...integrations];

  return (
    <section className="py-16 bg-[#0d0d0d] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          className="text-center text-white/40 text-sm font-medium tracking-widest uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Compatible avec toutes vos plateformes favorites
        </motion.p>
      </div>

      {/* Integrations marquee */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />
        <div className="flex overflow-hidden">
          <div className="marquee-wrapper flex gap-6 items-center">
            {doubledIntegrations.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 bg-white/5 border border-white/10 rounded-full px-5 py-2.5 whitespace-nowrap flex-shrink-0 hover:border-[#FC4C02]/40 transition-colors cursor-default"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-white/80 font-medium text-sm">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer events marquee (reverse) */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0d0d0d] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0d0d0d] to-transparent z-10" />
        <div className="flex overflow-hidden">
          <div
            className="flex gap-6 items-center"
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee 20s linear infinite reverse",
            }}
          >
            {[...customers, ...customers].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-white/30 whitespace-nowrap flex-shrink-0 text-sm font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FC4C02]/50" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
