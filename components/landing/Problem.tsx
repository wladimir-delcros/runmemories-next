"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { GradientMesh } from "@/components/ui/gradient-mesh";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function Problem() {
  const t = useTranslations("problem");
  const pains = t.raw("pains") as Array<{ icon: string; title: string; desc: string }>;

  return (
    <section className="relative py-24 bg-[#111] overflow-hidden">
      <GradientMesh variant="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-8 h-px bg-[#FC4C02]" />
          <span className="text-[#FC4C02] text-sm font-semibold tracking-widest uppercase">
            {t("label")}
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
              <span className="gradient-text">{t("headline")}</span>
            </motion.h2>

            <motion.p
              className="text-white/60 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("subtitle")}
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
                  {t("cta")}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </MagneticButton>
              <p className="text-white/30 text-sm mt-3">{t("microcopy")}</p>
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
