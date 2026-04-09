"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { MagneticButton } from "@/components/ui/magnetic-button";

const pains = [
  {
    icon: "📸",
    title: "Les photos de course s'accumulent dans ton téléphone",
    desc: "Des centaines de photos floues, jamais regardées, jamais partagées. Ton marathon de 4h mérite mieux qu'une photo de portail.",
  },
  {
    icon: "🏅",
    title: "La médaille ramasse la poussière dans un tiroir",
    desc: "Tu l'as rangée après la course. Elle ne raconte pas l'histoire — les 3 mois d'entraînement, la douleur au km 38, la fierté à l'arrivée.",
  },
  {
    icon: "💭",
    title: "Tu veux partager ta perf, mais les screenshots Strava, c'est moche",
    desc: "Un screenshot d'app ne rend pas justice à ce que tu as accompli. Ce n'est pas ça qui accrochera ton regard chaque matin.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 bg-[#111] overflow-hidden">
      <GradientMesh variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-px bg-[#FC4C02]" />
          <span className="text-[#FC4C02] text-sm font-semibold tracking-widest uppercase">
            Le problème
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline */}
          <div>
            <motion.h2
              className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Honnêtement —{" "}
              <span className="gradient-text">
                est-ce vraiment comme ça
              </span>{" "}
              que tu veux garder tes courses en mémoire ?
            </motion.h2>

            <motion.p
              className="text-white/60 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tu t&apos;es entraîné pendant des mois. Tu as souffert. Tu as
              fini. Ce moment mérite d&apos;être célébré — pas oublié dans
              les profondeurs de ton téléphone.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MagneticButton>
                <Link
                  href="https://app.runmemories.com"
                  className="inline-flex items-center gap-2 bg-[#FC4C02] hover:bg-[#d63a00] text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 btn-glow"
                >
                  Changer ça maintenant
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </MagneticButton>
              <p className="text-white/30 text-sm mt-3">
                Visualisation gratuite, sans CB requise
              </p>
            </motion.div>
          </div>

          {/* Right: pain points */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {pains.map((pain, i) => (
              <motion.div
                key={i}
                className="bg-white/[0.03] border border-white/8 rounded-xl p-5 hover:border-[#FC4C02]/20 transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{pain.icon}</span>
                  <div>
                    <h3 className="font-heading font-bold text-white text-sm mb-2 group-hover:text-[#FC4C02]/90 transition-colors">
                      {pain.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{pain.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
