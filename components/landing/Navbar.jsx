"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "חוויות" },
  { href: "#gallery", label: "גלריה" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#contact", label: "צור קשר" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`top-nav ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="site-shell top-nav-inner">
        <div className="brand-lockup" aria-label="לוגו שף רמי">
          <Image
            src="/rami-chef.png"
            alt="לוגו שף רמי"
            width={44}
            height={44}
            className="brand-logo"
          />
          <span className="brand-texts">
            <strong>שף רמי</strong>
            <small>חוויה קולינרית פרטית</small>
          </span>
        </div>

        <nav className="top-nav-links" aria-label="ניווט ראשי">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

      </div>
    </header>
  );
}
