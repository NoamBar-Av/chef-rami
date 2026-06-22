"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const titleByLang = {
  he: "גלריה",
  en: "Gallery",
  fr: "Galerie",
};

const galleryItemsByLang = (lang) => Array.from({ length: 12 }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  const altByLang = {
    he: `שף רמי - גלריית אירועים ותפריטים, תמונה ${index + 1}`,
    en: `Chef Rami - events and private dining gallery, image ${index + 1}`,
    fr: `Chef Rami - galerie d'événements et de dîners privés, image ${index + 1}`,
  };
  return {
    src: `/gallery/chef-pics/chef-rami-gallery-${num}.webp`,
    alt: altByLang[lang] ?? altByLang.he,
  };
});

export default function Gallery({ lang = "he" }) {
  const [openImage, setOpenImage] = useState(null);
  const galleryItems = galleryItemsByLang(lang);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section id="gallery" className="section">
        <div className="site-shell">
          <h2 className="section-title">{titleByLang[lang] ?? titleByLang.he}</h2>
          <div className="gallery-grid mt-8">
            {galleryItems.map((item) => (
              <button
                key={item.src}
                type="button"
                className="gallery-card"
                onClick={() => setOpenImage(item)}
                aria-label={lang === "he" ? `פתח תמונה מוגדלת: ${item.alt}` : lang === "fr" ? `Ouvrir l'image agrandie : ${item.alt}` : `Open enlarged image: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="gallery-image"
                />
                <div className="gallery-overlay" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {openImage && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lang === "he" ? "תצוגת תמונה מוגדלת" : lang === "fr" ? "Aperçu agrandi" : "Enlarged image preview"}
        >
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
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
    </>
  );
}
