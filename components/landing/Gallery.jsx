"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import chefWork01 from "@/app/gallery/chef-pics/unnamed (1).png";
import chefWork02 from "@/app/gallery/chef-pics/WhatsApp Image 2026-07-12 at 09.54.24 (1).jpeg";
import chefWork03 from "@/app/gallery/chef-pics/unnamed.png";
import dessert01 from "@/app/gallery/chef-pics/macaroon.webp";
import chefPortrait from "@/app/gallery/chef-pics/ChatGPT Image Jul 8, 2026, 01_40_08 PM.png";
import chefPic19 from "@/app/gallery/chef-pics/unnamed (19).webp";
import chefPic20 from "@/app/gallery/chef-pics/unnamed (20).webp";
import chefPic21 from "@/app/gallery/chef-pics/unnamed (21).webp";
import chefPic22 from "@/app/gallery/chef-pics/unnamed (22).webp";
import chefPic23 from "@/app/gallery/chef-pics/unnamed (23).png";
import chefPic24 from "@/app/gallery/chef-pics/unnamed (24).png";
import chefPic25 from "@/app/gallery/chef-pics/unnamed (25).webp";

const copy = {
  he: {
    eyebrow: "גלריה",
    description:
      "מהמטבח ועד השולחן – רגעים נבחרים מהאירועים שלנו",
    openImage: "פתח תמונה מוגדלת",
    dialog: "תצוגת גלריה מוגדלת",
  },
  en: {
    eyebrow: "Gallery",
    description:
      "A curated selection of moments from private events, chef dinners, and refined hospitality with precision and passion.",
    openImage: "Open enlarged image",
    dialog: "Enlarged gallery preview",
  },
  fr: {
    eyebrow: "Galerie",
    description:
      "Une sélection de moments d'événements privés, de dîners de chef et d'un accueil soigné, entre précision et passion.",
    openImage: "Ouvrir l'image agrandie",
    dialog: "Aperçu agrandi de la galerie",
  },
};

const galleryItems = [
  {
    src: chefPortrait,
    categories: ["chef", "events"],
    alt: {
      he: "שף רמי מכין מנה באירוע פרטי",
      en: "Chef Rami preparing a plated dish at a private event",
      fr: "Le chef Rami prépare une assiette lors d'un événement privé",
    },
  },
  {
    src: chefPic24,
    categories: ["grill", "events"],
    alt: {
      he: "שולחן גריל עשיר לאירוח חוץ",
      en: "Rich grill table setup for outdoor hosting",
      fr: "Table de grillades généreuse pour réception en extérieur",
    },
  },
  {
    src: chefPic23,
    categories: ["events", "dishes"],
    alt: {
      he: "הגשה אלגנטית באירוע עסקי",
      en: "Elegant plating during a corporate event",
      fr: "Présentation élégante lors d'un événement professionnel",
    },
  },
  {
    src: chefPic22,
    categories: ["platters", "dishes"],
    alt: {
      he: "מגשי אירוח עשירים עם מגוון מנות",
      en: "Hospitality platters with a rich variety of dishes",
      fr: "Plateaux de réception riches avec une grande variété de mets",
    },
  },
  {
    src: chefWork01,
    categories: ["chef", "dishes"],
    alt: {
      he: "שף רמי בעבודה במטבח פתוח",
      en: "Chef Rami working in an open kitchen setup",
      fr: "Le chef Rami en pleine préparation dans une cuisine ouverte",
    },
  },
  {
    src: chefPic21,
    categories: ["dishes", "events"],
    alt: {
      he: "מנת בשר בהגשה אישית",
      en: "Personal plated meat course",
      fr: "Plat de viande servi à l'assiette",
    },
  },
  {
    src: dessert01,
    categories: ["desserts", "dishes"],
    alt: {
      he: "קינוח מקרון בהגשה מוקפדת",
      en: "Refined macaron dessert presentation",
      fr: "Dessert macaron servi avec finesse",
    },
  },
  {
    src: chefPic20,
    categories: ["grill", "events"],
    alt: {
      he: "עמדת גריל חיה באירוע",
      en: "Live grill station during an event",
      fr: "Stand de grillades en direct pendant l'événement",
    },
  },
  {
    src: chefPic19,
    categories: ["platters", "events"],
    alt: {
      he: "מגשי אירוח עם קישים וברוסקטות",
      en: "Hospitality platters with quiches and bruschettas",
      fr: "Plateaux de réception avec quiches et bruschettas",
    },
  },
  {
    src: chefWork02,
    categories: ["chef", "dishes"],
    alt: {
      he: "דיוק בפרטים בהכנת מנה",
      en: "Fine detail and precision in dish preparation",
      fr: "Précision et souci du détail dans la préparation du plat",
    },
  },
  {
    src: chefPic25,
    categories: ["events", "dishes"],
    alt: {
      he: "אירוע עסקי עם חוויית אירוח מוקפדת",
      en: "Corporate event with refined hospitality experience",
      fr: "Événement professionnel avec une expérience de réception soignée",
    },
  },
  {
    src: chefWork03,
    categories: ["dishes", "events"],
    alt: {
      he: "שולחן אירוח עשיר לאירוע פרטי",
      en: "Rich hosting table for a private event",
      fr: "Table d'accueil généreuse pour un événement privé",
    },
  },
];

export default function Gallery({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  const [openImageIndex, setOpenImageIndex] = useState(null);

  const filteredItems = galleryItems;

  const openImage = openImageIndex !== null ? filteredItems[openImageIndex] : null;

  const closeLightbox = () => setOpenImageIndex(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
      if (openImageIndex !== null && event.key === "ArrowRight") {
        setOpenImageIndex((prev) => (prev === null ? 0 : (prev + 1) % filteredItems.length));
      }
      if (openImageIndex !== null && event.key === "ArrowLeft") {
        setOpenImageIndex((prev) =>
          prev === null ? 0 : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openImageIndex, filteredItems.length]);

  useEffect(() => {
    if (openImageIndex !== null) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
    document.body.style.overflow = "";
    return undefined;
  }, [openImageIndex]);

  return (
    <>
      <section id="gallery" className="gallery-section home-section" dir={lang === "he" ? "rtl" : "ltr"}>
        <div className="gallery-header">
          <span className="gallery-eyebrow">{t.eyebrow}</span>
          <div className="gallery-divider" />
          <p>{t.description}</p>
        </div>

        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <article
              key={`${item.src.src}-${index}`}
              className="gallery-item"
              role="button"
              tabIndex={0}
              onClick={() => setOpenImageIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setOpenImageIndex(index);
                }
              }}
              aria-label={`${t.openImage}: ${item.alt[lang] ?? item.alt.he}`}
            >
                <Image
                  src={item.src}
                  alt={item.alt[lang] ?? item.alt.he}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 560px) 100vw, (max-width: 800px) 50vw, (max-width: 1100px) 33vw, 24vw"
                  className="gallery-image"
                />
            </article>
          ))}
        </div>
      </section>

      {openImage && (
        <div
          className="gallery-modal-backdrop"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={t.dialog}
        >
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={openImage.src}
              alt={openImage.alt[lang] ?? openImage.alt.he}
              sizes="90vw"
              className="gallery-modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
