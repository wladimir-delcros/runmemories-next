"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { GradientMesh } from "@/components/ui/gradient-mesh";

const featureIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
  <svg key="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
    <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Features() {
  const t = useTranslations("features");
  const items = t.raw("items") as Array<{ title: string; desc: string; tag: string }>;

  return (
    <section id="features" className="relative py-28 bg-[#111] overflow-hidden">
      <GradientMesh variant="section" />
      <div className="absolute top-0 left-0 right-0 section-divider" />

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
            className="font-heading font-black text-4xl sm:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("headline")}{" "}
            <span className="gradient-text">{t("headlineAccent")}</span>
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

        {/* Feature grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((feat, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-[#FC4C02]/40 hover:from-[#FC4C02]/[0.06] hover:to-white/[0.02] transition-all duration-300 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FC4C02]/10 border border-[#FC4C02]/20 flex items-center justify-center text-[#FC4C02] flex-shrink-0 group-hover:bg-[#FC4C02]/20 transition-colors">
                  {featureIcons[i]}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-heading font-bold text-white text-sm">{feat.title}</h3>
                    <span className="text-[10px] font-semibold text-[#FC4C02] bg-[#FC4C02]/10 px-2 py-0.5 rounded-full">
                      {feat.tag}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Editor preview teaser */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-[#0d0d0d] border border-white/10 rounded-2xl p-2 overflow-hidden">
            <div className="bg-[#222] rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-2 text-white/30 text-xs">RunMemories Editor</span>
              </div>
              <div className="flex gap-4">
                <div className="w-16 space-y-2 flex-shrink-0">
                  {["GPX", "Map", "Style", "Text", "Design", "Export"].map((tab) => (
                    <div key={tab} className="bg-white/5 rounded px-2 py-1.5 text-[9px] text-white/30 text-center">
                      {tab}
                    </div>
                  ))}
                </div>
                <div className="flex-1 bg-[#1a1a2e] rounded-lg aspect-[4/3] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 200 250" className="w-32 opacity-60">
                      <polyline
                        points="100,220 70,200 50,170 55,145 85,115 100,100 115,85 120,70 135,72 150,95 155,115 130,140 120,160 110,180 115,205 100,220"
                        fill="none"
                        stroke="#FC4C02"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="100" cy="220" r="4" fill="#FC4C02" />
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                    <div className="text-white font-black text-lg opacity-70">PARIS</div>
                    <div className="text-white/40 text-xs tracking-widest">MARATHON</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
