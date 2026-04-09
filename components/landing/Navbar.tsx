"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { MagneticButton } from "@/components/ui/magnetic-button";

const locales = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "es", label: "ES", flag: "🇪🇸" },
  { code: "it", label: "IT", flag: "🇮🇹" },
];

function LocaleSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const currentLocale = locales.find((l) =>
    pathname === `/${l.code}` || pathname.startsWith(`/${l.code}/`)
  ) ?? locales[0];

  const switchLocale = (code: string) => {
    setOpen(false);
    const segments = pathname.split("/").filter(Boolean);
    const isLocalePrefix = locales.some((l) => l.code !== "fr" && segments[0] === l.code);
    const rest = isLocalePrefix ? segments.slice(1) : segments;
    const newPath = code === "fr" ? `/${rest.join("/")}` : `/${code}${rest.length ? `/${rest.join("/")}` : ""}`;
    router.push(newPath || "/");
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-xs font-semibold text-white/50 hover:text-white transition-colors px-2 py-1 rounded-lg border border-white/10 hover:border-white/20"
      >
        <span>{currentLocale.flag}</span>
        <span>{currentLocale.label}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
          <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-xl z-50 min-w-[100px]"
          >
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => switchLocale(l.code)}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-white/5 transition-colors ${
                  currentLocale.code === l.code ? "text-[#FC4C02]" : "text-white/70"
                }`}
              >
                <span>{l.flag}</span>
                <span className="font-medium">{l.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("features"), href: "#features" },
    { label: t("howItWorks"), href: "#how-it-works" },
    { label: t("gallery"), href: "#gallery" },
    { label: t("testimonials"), href: "#testimonials" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-[#FC4C02] flex items-center justify-center shadow-lg shadow-[#FC4C02]/30">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z" />
              </svg>
            </div>
            <span className="font-heading font-black text-lg tracking-tight text-white group-hover:text-[#FC4C02] transition-colors">
              RUNMEMORIES
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + locale switcher */}
          <div className="hidden md:flex items-center gap-3">
            <LocaleSwitcher />
            <Link
              href="https://app.runmemories.com"
              className="text-sm text-white/70 hover:text-white transition-colors font-medium"
            >
              {t("login")}
            </Link>
            <MagneticButton>
              <Link
                href="https://app.runmemories.com"
                className="inline-flex items-center gap-2 bg-[#FC4C02] hover:bg-[#d63a00] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 btn-glow"
              >
                {t("cta")}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#111]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-white py-2 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center justify-between mt-1">
                <LocaleSwitcher />
                <Link
                  href="https://app.runmemories.com"
                  onClick={() => setMobileOpen(false)}
                  className="bg-[#FC4C02] hover:bg-[#d63a00] text-white font-semibold py-2.5 px-5 rounded-lg transition-colors"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
