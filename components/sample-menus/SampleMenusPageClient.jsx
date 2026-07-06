"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/landing/Navbar.jsx";
import Footer from "@/components/landing/Footer.jsx";
import grillChefImage from "@/app/gallery/sample-menus/grill-chef.png";
import menuPremiumImage from "@/app/gallery/sample-menus/ארוחת שף פרימיום.png";
import grillPremiumImage from "@/app/gallery/sample-menus/גריל פרימיום.png";
import hospitalityImage from "@/app/gallery/sample-menus/מגשי אירוח.png";

const copy = {
  he: {
    pageTitle: "תפריטים לדוגמא",
    intro:
      "אלו דוגמאות להשראה בלבד. כל תפריט נבנה אישית לפי האירוע, מספר האורחים, סגנון האירוח והעדפות קולינריות.",
    note: "* ניתן לבצע התאמות מלאות: כשרות, טבעוני/צמחוני, ילדים, רגישויות ואלרגיות.",
    menusGalleryTitle: "תמונות תפריטים לדוגמא",
  },
  en: {
    pageTitle: "Sample Menus",
    intro:
      "These menus are examples for inspiration. Every event menu is fully customized based on guests, style, and culinary preferences.",
    note: "* Full adjustments available: kosher, vegan/vegetarian, kids, allergies and dietary needs.",
    menusGalleryTitle: "Sample menu photos",
  },
  fr: {
    pageTitle: "Menus Exemples",
    intro:
      "Ces menus sont des inspirations. Chaque menu est personnalisé selon l'événement, le nombre d'invités et les préférences culinaires.",
    note: "* Adaptations complètes possibles : cacher, végétarien/végan, enfants, allergies et besoins alimentaires.",
    menusGalleryTitle: "Photos de menus exemples",
  },
};

export default function SampleMenusPageClient() {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return "he";
    const savedLang = window.localStorage.getItem("chef-rami-lang");
    return savedLang === "he" || savedLang === "en" || savedLang === "fr" ? savedLang : "he";
  });

  useEffect(() => {
    window.localStorage.setItem("chef-rami-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" ? "rtl" : "ltr";
  }, [lang]);

  const t = copy[lang] ?? copy.he;
  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const menuImages = [
    {
      src: grillChefImage,
      alt: lang === "he" ? "תפריט גריל שף" : lang === "fr" ? "Menu grill chef" : "Chef grill menu",
    },
    {
      src: menuPremiumImage,
      alt: lang === "he" ? "ארוחת שף פרימיום" : lang === "fr" ? "Menu chef premium" : "Premium chef menu",
    },
    {
      src: grillPremiumImage,
      alt: lang === "he" ? "גריל פרימיום" : lang === "fr" ? "Grill premium" : "Premium grill",
    },
    {
      src: hospitalityImage,
      alt: lang === "he" ? "מגשי אירוח" : lang === "fr" ? "Plateaux de réception" : "Hospitality platters",
    },
  ];

  return (
    <>
      <div className="header-shell">
        <Navbar lang={lang} setLang={setLang} />
      </div>

      <main className="section section-cream" id="sample-menus-content">
        <div className="site-shell sample-menus-shell">
          <section className="sample-menus-intro-wrap" aria-labelledby="sample-menus-title">
            <h1 id="sample-menus-title" className="section-title">
              {t.pageTitle}
            </h1>
            <p className="section-text sample-menus-intro-text">{t.intro}</p>
            <p className="sample-menu-note">{t.note}</p>
          </section>

          <section className="sample-menus-gallery-wrap" aria-label={t.menusGalleryTitle}>
            <h2 className="section-title">{t.menusGalleryTitle}</h2>
            <div className="sample-menus-images-grid">
              {menuImages.map((image) => (
                <button
                  key={image.alt}
                  type="button"
                  className="sample-menu-image-trigger"
                  onClick={() => setOpenImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={900}
                    className="sample-menu-image"
                  />
                </button>
              ))}
            </div>
          </section>
        </div>
      </main>

      {openImage && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lang === "he" ? "תצוגת תמונה מוגדלת" : lang === "fr" ? "Aperçu agrandi" : "Enlarged image preview"}
        >
          <div className="gallery-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setOpenImage(null)}
              aria-label={lang === "he" ? "סגירת התמונה המוגדלת" : lang === "fr" ? "Fermer l'image agrandie" : "Close enlarged image"}
            >
              ×
            </button>
            <Image
              src={openImage.src}
              alt={openImage.alt}
              width={1400}
              height={1000}
              className="gallery-modal-image"
            />
          </div>
        </div>
      )}

      <Footer lang={lang} />
    </>
  );
}
