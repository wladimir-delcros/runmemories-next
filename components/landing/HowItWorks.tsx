"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MagneticButton } from "@/components/ui/magnetic-button";

const steps = [
  {
    number: "01",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Importe ton activité",
    desc: "Connecte Strava en 1 clic ou importe un fichier GPX/KML depuis Garmin, Apple Watch, Polar ou Suunto. Ton tracé apparaît instantanément sur la carte.",
    detail: "Si tu te demandes si ton format est compatible — oui, presque tous les appareils GPS sont supportés.",
  },
  {
    number: "02",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Personnalise ton poster",
    desc: "Choisis parmi des dizaines de styles de carte (satellite, terrain, minimaliste, aquarelle...), ajuste couleurs, typographie, layout. Ajoute ton nom, ta distance, ton temps.",
    detail: "Chaque réglage se met à jour en temps réel — tu vois exactement ce que tu vas recevoir.",
  },
  {
    number: "03",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Commande et reçois",
    desc: "Paiement sécurisé via Stripe. Impression haute résolution sur papier premium. Livraison suivie sous 48–72h. Retours gratuits sous 30 jours.",
    detail: "La plupart des clients reçoivent leur poster avant de s'en souvenir — c'est dire la rapidité.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      {/* Top border */}
      <div className="section-divider absolute top-0 left-0 right-0" />
      {/* Bottom border */}
      <div className="section-divider absolute bottom-0 left-0 right-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-px bg-[#FC4C02]" />
            <span className="text-[#FC4C02] text-sm font-semibold tracking-widest uppercase">
              Comment ça marche
            </span>
            <div className="w-8 h-px bg-[#FC4C02]" />
          </motion.div>

          <motion.h2
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ton poster en{" "}
            <span className="gradient-text">3 étapes</span>
            <br />
            <span className="text-white/60 text-3xl sm:text-4xl font-bold">
              en moins de 5 minutes
            </span>
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-white/50 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Obtiens un poster de ta course sans aucune compétence technique.
            L&apos;éditeur fait tout le travail.
          </motion.p>
        </div>

        {/* Steps */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {steps.map((step, i) => (
            <motion.div key={i} variants={item}>
              <div className="relative bg-white/[0.03] border border-white/8 rounded-2xl p-7 h-full hover:border-[#FC4C02]/30 transition-all duration-300 card-hover group">
                {/* Step number */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#FC4C02]/10 border border-[#FC4C02]/20 flex items-center justify-center text-[#FC4C02] group-hover:bg-[#FC4C02]/20 transition-colors">
                    {step.icon}
                  </div>
                  <span className="font-heading font-black text-5xl text-white/5 leading-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  {step.desc}
                </p>

                {/* Objection handler */}
                <div className="bg-white/[0.03] border border-white/5 rounded-lg px-4 py-3">
                  <p className="text-white/35 text-xs leading-relaxed italic">
                    ℹ {step.detail}
                  </p>
                </div>

                {/* Connector (not on last) */}
                {i < 2 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-8 h-8 rounded-full bg-[#0d0d0d] border border-white/10 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-[#FC4C02]">
                        <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <MagneticButton>
            <Link
              href="https://app.runmemories.com"
              className="inline-flex items-center gap-3 bg-[#FC4C02] hover:bg-[#d63a00] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 btn-glow"
            >
              Commencer maintenant — c&apos;est gratuit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </MagneticButton>
          <p className="text-white/30 text-sm mt-3">
            Ou{" "}
            <Link href="#gallery" className="text-white/50 hover:text-white underline underline-offset-2 transition-colors">
              regarde la galerie de posters
            </Link>{" "}
            d&apos;abord
          </p>
        </motion.div>
      </div>
    </section>
  );
}
