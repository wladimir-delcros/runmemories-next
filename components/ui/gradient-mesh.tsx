"use client";

import { motion } from "framer-motion";

interface GradientMeshProps {
  className?: string;
  variant?: "hero" | "section" | "subtle";
}

export function GradientMesh({ className = "", variant = "hero" }: GradientMeshProps) {
  if (variant === "hero") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        {/* Top center orange glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#FC4C02]/20 blur-[120px] animate-glow" />
        {/* Bottom left blue-ish accent */}
        <div
          className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-orange-900/15 blur-[100px] animate-glow"
          style={{ animationDelay: "1s" }}
        />
        {/* Top right warm glow */}
        <div
          className="absolute top-20 -right-20 w-60 h-60 rounded-full bg-[#FC4C02]/10 blur-[80px] animate-glow"
          style={{ animationDelay: "2s" }}
        />
        {/* Radial gradient from top */}
        <div className="absolute inset-0 hero-glow opacity-80" />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#FC4C02]/10 blur-[100px]"
        />
      </div>
    );
  }

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#FC4C02]/8 blur-[80px]" />
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-orange-900/10 blur-[60px]" />
    </div>
  );
}
