"use client";

import { motion } from "framer-motion";
import { CounterUp } from "@/components/ui/counter-up";

const testimonials = [
  {
    quote:
      "J'ai fait mon premier marathon à 45 ans. Ce poster est accroché dans mon bureau depuis 2 ans. Chaque fois que je le regarde, je me rappelle de chaque kilomètre.",
    name: "Marie-Claire D.",
    role: "Marathonienne amateur",
    event: "Marathon de Paris 2023",
    rating: 5,
    highlight: "Chaque kilomètre revit",
  },
  {
    quote:
      "Cadeau parfait pour un ami ultra-traileur. Il m'a dit que c'était le meilleur cadeau qu'il ait reçu depuis des années. L'affiche de son UTMB est maintenant la pièce maîtresse de son salon.",
    name: "Thomas B.",
    role: "Coureur trail",
    event: "UTMB 2022 — offert en cadeau",
    rating: 5,
    highlight: "Meilleur cadeau de l'année",
  },
  {
    quote:
      "La qualité d'impression est bluffante. Les couleurs, le détail de la carte... j'ai reçu des compliments de tout le monde. On me demande souvent où j'ai trouvé ça.",
    name: "Lucas M.",
    role: "Semi-marathonien",
    event: "Semi-marathon de Bordeaux",
    rating: 5,
    highlight: "Qualité bluffante",
  },
  {
    quote:
      "Super simple à utiliser. J'ai importé mon GPX depuis Garmin en 30 secondes, personnalisé le poster en 10 minutes, et commandé. Reçu 3 jours après. Parfait.",
    name: "Sophie L.",
    role: "Trailrunner",
    event: "SaintéLyon 2023",
    rating: 5,
    highlight: "Reçu en 3 jours",
  },
  {
    quote:
      "Je suis graphiste et j'ai été impressionné par la qualité du rendu. Le tracé GPX sur la carte est vraiment propre et le résultat final est pro. Je recommande à tout le monde.",
    name: "Antoine R.",
    role: "Graphiste & coureur",
    event: "Marathon de Marseille",
    rating: 5,
    highlight: "Rendu professionnel",
  },
  {
    quote:
      "On était 4 amis à finir notre premier marathon ensemble. On a chacun fait notre poster avec le même parcours mais des couleurs différentes. C'est devenu une tradition après chaque course.",
    name: "Groupe Les 4 Fous",
    role: "Club de course",
    event: "Marathon de Lyon 2023",
    rating: 5,
    highlight: "Une tradition entre amis",
  },
];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="#FC4C02" className="w-4 h-4">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-[#0d0d0d] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FC4C02]/3 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-px bg-[#FC4C02]" />
            <span className="text-[#FC4C02] text-sm font-semibold tracking-widest uppercase">
              Témoignages
            </span>
            <div className="w-8 h-px bg-[#FC4C02]" />
          </motion.div>

          <motion.h2
            className="font-heading font-black text-4xl sm:text-5xl text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Voilà pourquoi{" "}
            <span className="gradient-text">
              <CounterUp end={10000} suffix="+" />
            </span>{" "}
            coureurs
            <br />
            adorent RunMemories
          </motion.h2>

          <motion.div
            className="flex items-center justify-center gap-2 mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <StarRating />
            <span className="text-white/60 font-semibold">4.9/5</span>
            <span className="text-white/30 text-sm">sur 847 avis</span>
          </motion.div>
        </div>

        {/* Testimonials grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-gradient-to-br from-white/[0.06] to-white/[0.01] border border-white/10 rounded-2xl p-6 hover:border-[#FC4C02]/30 hover:from-white/[0.08] transition-all duration-300 card-hover group"
            >
              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <StarRating count={t.rating} />
                <span className="text-xs font-bold text-[#FC4C02] bg-[#FC4C02]/10 px-2.5 py-1 rounded-full">
                  {t.highlight}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-white/70 text-sm leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FC4C02] to-orange-700 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-white/40 text-xs">{t.role}</div>
                  <div className="text-[#FC4C02]/60 text-xs font-medium mt-0.5">{t.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { icon: "🏆", label: "Posters créés", value: 10000, suffix: "+" },
            { icon: "⭐", label: "Note moyenne", value: 4.9, suffix: "/5", decimals: 1 },
            { icon: "🌍", label: "Pays livrés", value: 15, suffix: "+" },
            { icon: "🔄", label: "Clients qui recommandent", value: 96, suffix: "%" },
          ].map((stat, i) => (
            <div key={i} className="text-center bg-white/[0.02] border border-white/5 rounded-xl p-5">
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="font-heading font-black text-2xl text-white">
                <CounterUp
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  duration={2.5}
                />
              </div>
              <div className="text-white/40 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
