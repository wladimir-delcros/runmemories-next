"use client";

import { motion } from "framer-motion";
import { CounterUp } from "@/components/ui/counter-up";

const costs = [
  {
    stat: 52,
    suffix: "h",
    label: "d'entraînement en moyenne pour un marathon",
    context: "52h de ta vie pour une médaille qui finit dans un tiroir ?",
  },
  {
    stat: 847,
    suffix: "",
    label: "photos de courses dans ton téléphone",
    context: "Que tu ne regardes jamais. Que tu n'as jamais encadrées.",
  },
  {
    stat: 3,
    suffix: " fois",
    label: "fois",
    context: "Tu remets à plus tard depuis combien de temps d'encadrer ton exploit ?",
  },
];

export function CostOfInaction() {
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
              Le coût de l&apos;inaction
            </span>
            <div className="w-8 h-px bg-[#FC4C02]" />
          </motion.div>

          <motion.h2
            className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Combien ça te coûte de{" "}
            <span className="gradient-text">ne rien faire</span> ?
          </motion.h2>

          <motion.p
            className="max-w-xl mx-auto text-white/50 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Chaque course qui passe est une mémoire qui s&apos;efface.
            Les souvenirs flous. Les chiffres oubliés. L&apos;émotion qui s&apos;estompe.
          </motion.p>
        </div>

        {/* Big stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              number: 52,
              suffix: "h",
              label: "d'entraînement moyen",
              desc: "52 heures de ta vie pour finir un marathon. Tu mérites mieux qu'une photo floue comme souvenir.",
            },
            {
              number: 847,
              suffix: "",
              label: "photos running dans ton téléphone",
              desc: "Empilées avec tes selfies du dimanche. Jamais regardées. Jamais encadrées. Jamais célébrées.",
            },
            {
              number: 35,
              suffix: "€",
              label: "prix d'un poster RunMemories",
              desc: "Pour immortaliser 52h d'effort. Soit 0,67€ de l'heure d'entraînement investi.",
            },
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
                <CounterUp
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2}
                />
              </div>
              <div className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote / punchline */}
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
              &ldquo;Tes concurrents ont déjà leur poster encadré au mur.
              <span className="gradient-text"> Et toi ?</span>&rdquo;
            </blockquote>
            <p className="text-white/40 text-sm">
              Pendant que tu lis ça, 12 coureurs commandent leur poster RunMemories.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
