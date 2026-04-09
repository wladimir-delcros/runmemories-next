"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CounterUp } from "@/components/ui/counter-up";

export function CostOfInaction() {
  const t = useTranslations("costOfInaction");

  return (
    <section className="relative py-28 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FC4C02]/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
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
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("headline")} <span className="gradient-text">{t("headlineAccent")}</span> ?
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-white/50 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Big stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { number: 52, suffix: "h", labelKey: "stat1Label", descKey: "stat1Desc" },
            { number: 847, suffix: "", labelKey: "stat2Label", descKey: "stat2Desc" },
            { number: 9, suffix: "€", labelKey: "stat3Label", descKey: "stat3Desc" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 text-center hover:border-[#FC4C02]/20 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="font-heading font-black text-5xl sm:text-6xl text-[#FC4C02] mb-2">
                <CounterUp end={stat.number} suffix={stat.suffix} duration={2} />
              </div>
              <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
                {t(stat.labelKey)}
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{t(stat.descKey)}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#FC4C02]/10 via-[#FC4C02]/5 to-[#FC4C02]/10 border border-[#FC4C02]/20 rounded-2xl p-8">
            <div className="text-4xl mb-4">🏃‍♂️</div>
            <blockquote className="font-heading font-black text-2xl sm:text-3xl text-white leading-tight mb-4">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>
            <p className="text-white/40 text-sm">{t("quoteFootnote")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
