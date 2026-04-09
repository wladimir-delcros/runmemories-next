"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function SkepticCTA() {
  const t = useTranslations("skeptic");
  const faqs = t.raw("faqs") as Array<{ q: string; a: string }>;

  return (
    <section className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: skeptic pitch */}
          <div>
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
            </motion.div>

            <motion.h2
              className="font-heading font-black text-4xl sm:text-5xl text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t("headline")}{" "}
              <span className="gradient-text">{t("headlineAccent")}</span>
            </motion.h2>

            <motion.p
              className="text-white/60 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {t("subtitle")}
            </motion.p>

            {/* Alternative CTAs */}
            <motion.div
              className="space-y-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link
                href="https://app.runmemories.com"
                className="flex items-center gap-4 bg-white/[0.03] border border-white/10 hover:border-[#FC4C02]/30 rounded-xl p-4 group transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FC4C02]/10 border border-[#FC4C02]/20 flex items-center justify-center text-[#FC4C02] group-hover:bg-[#FC4C02]/20 transition-colors flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                    <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm group-hover:text-[#FC4C02] transition-colors">
                    {t("importGpx")}
                  </div>
                  <div className="text-white/40 text-xs">{t("importGpxSub")}</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white/20 group-hover:text-[#FC4C02] ml-auto transition-colors">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>

              <Link
                href="https://app.runmemories.com"
                className="flex items-center gap-4 bg-white/[0.03] border border-white/10 hover:border-[#FC4C02]/30 rounded-xl p-4 group transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-900/20 border border-orange-900/30 flex items-center justify-center text-orange-400 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M15.643 3.143C13.921 1.427 11.566 0.5 9.14 0.5c-4.78 0-8.64 3.86-8.64 8.64 0 1.52.4 3.01 1.16 4.32l-1.23 4.5 4.61-1.21c1.26.69 2.69 1.05 4.1 1.05 4.78 0 8.64-3.86 8.64-8.64 0-2.31-.9-4.48-2.53-6.11z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm group-hover:text-[#FC4C02] transition-colors">
                    {t("strava")}
                  </div>
                  <div className="text-white/40 text-xs">{t("stravaSub")}</div>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-white/20 group-hover:text-[#FC4C02] ml-auto transition-colors">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              className="flex items-center gap-3 text-white/30 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-green-400">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {t("trust")}
            </motion.div>
          </div>

          {/* Right: FAQ */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-lg text-white/60 mb-6 uppercase tracking-wider text-sm">
              {t("faqTitle")}
            </h3>
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white/[0.03] border border-white/8 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer text-white font-medium text-sm hover:text-[#FC4C02] transition-colors list-none">
                  {faq.q}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 flex-shrink-0 ml-3 group-open:rotate-180 transition-transform">
                    <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
