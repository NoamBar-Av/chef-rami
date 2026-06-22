"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const copy = {
  he: {
    brandSub: "חוויה קולינרית פרטית",
    navLabel: "ניווט ראשי",
    links: [
      { href: "#about", label: "אודות" },
      { href: "#services", label: "חוויות" },
      { href: "#gallery", label: "גלריה" },
      { href: "#testimonials", label: "המלצות" },
      { href: "#contact", label: "צור קשר" },
    ],
    logoAria: "לוגו שף רמי",
  },
  en: {
    brandSub: "Private Culinary Experience",
    navLabel: "Main Navigation",
    links: [
      { href: "#about", label: "About" },
      { href: "#services", label: "Experiences" },
      { href: "#gallery", label: "Gallery" },
      { href: "#testimonials", label: "Reviews" },
      { href: "#contact", label: "Contact" },
    ],
    logoAria: "Chef Rami logo",
  },
  fr: {
    brandSub: "Expérience Culinaire Privée",
    navLabel: "Navigation principale",
    links: [
      { href: "#about", label: "À propos" },
      { href: "#services", label: "Expériences" },
      { href: "#gallery", label: "Galerie" },
      { href: "#testimonials", label: "Avis" },
      { href: "#contact", label: "Contact" },
    ],
    logoAria: "Logo Chef Rami",
  },
};

export default function Navbar({ lang = "he", setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = copy[lang] ?? copy.he;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`top-nav ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-shell top-nav-inner">
        <div className="brand-lockup" aria-label={t.logoAria}>
          <Image
            src="/rami-chef.png"
            alt={t.logoAria}
            width={44}
            height={44}
            className="brand-logo"
          />
          <span className="brand-texts">
            <strong>שף רמי</strong>
            <small>{t.brandSub}</small>
          </span>
        </div>

        <nav className="top-nav-links" aria-label={t.navLabel}>
          {t.links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="lang-switch" role="group" aria-label="Language switcher">
          {[
            { code: "he", label: "HEB" },
            { code: "en", label: "EN" },
            { code: "fr", label: "FR" },
          ].map((item) => (
            <button
              key={item.code}
              type="button"
              className={`lang-btn ${lang === item.code ? "active" : ""}`}
              onClick={() => setLang?.(item.code)}
            >
              {item.label}
            </button>
          ))}
        </div>

      </div>
    </header>
  );
}
