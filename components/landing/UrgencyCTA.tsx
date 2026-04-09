"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { MagneticButton } from "@/components/ui/magnetic-button";

export function UrgencyCTA() {
  const t = useTranslations("urgency");
  const guarantees = t.raw("guarantees") as Array<{ icon: string; text: string }>;

  return (
    <section className="relative py-28 bg-[#111] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#FC4C02]/8 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-8 h-px bg-[#FC4C02]" />
          <span className="text-[#FC4C02] text-sm font-semibold tracking-widest uppercase">
            {t("label")}
          </span>
          <div className="w-8 h-px bg-[#FC4C02]" />
        </motion.div>

        <motion.h2
          className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {t("headline")}
          <br />
          <span className="gradient-text">{t("headlineAccent")}</span>
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-white/50 text-lg mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {t("subtitle")}
        </motion.p>

        {/* Guarantees */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {guarantees.map((g, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white/[0.03] border border-white/10 rounded-full px-4 py-2 text-sm text-white/70"
            >
              <span>{g.icon}</span>
              <span>{g.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <MagneticButton>
            <Link
              href="https://app.runmemories.com"
              className="inline-flex items-center gap-3 bg-[#FC4C02] hover:bg-[#d63a00] text-white font-black text-lg px-10 py-5 rounded-xl transition-all duration-200 btn-glow"
            >
              {t("cta")}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </MagneticButton>
        </motion.div>

        <motion.p
          className="text-white/25 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {t("microcopy")}
        </motion.p>
      </div>
    </section>
  );
}
