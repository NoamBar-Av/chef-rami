"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
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
    previous: "לתמונות הקודמות",
    next: "לתמונות הבאות",
    carouselLabel: "גלריית תמונות ראשית",
  },
  en: {
    eyebrow: "Gallery",
    description:
      "A curated selection of moments from private events, chef dinners, and refined hospitality with precision and passion.",
    openImage: "Open enlarged image",
    dialog: "Enlarged gallery preview",
    previous: "Previous images",
    next: "Next images",
    carouselLabel: "Main photo gallery",
  },
  fr: {
    eyebrow: "Galerie",
    description:
      "Une sélection de moments d'événements privés, de dîners de chef et d'un accueil soigné, entre précision et passion.",
    openImage: "Ouvrir l'image agrandie",
    dialog: "Aperçu agrandi de la galerie",
    previous: "Images précédentes",
    next: "Images suivantes",
    carouselLabel: "Galerie photo principale",
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
  const viewportRef = useRef(null);
  const [canGoPrev, setCanGoPrev] = useState(false);
  const [canGoNext, setCanGoNext] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);

  const filteredItems = galleryItems;

  const getVisibleCards = useCallback(() => {
    if (typeof window === "undefined") {
      return 4;
    }

    if (window.innerWidth <= 560) {
      return 1;
    }

    if (window.innerWidth <= 1100) {
      return 3;
    }

    return 4;
  }, []);

  const getScrollStep = useCallback((viewport, cardsToShow = getVisibleCards()) => {
    const firstCard = viewport?.querySelector(".gallery-item");
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.getBoundingClientRect().width : 0;
    const viewportStyles = window.getComputedStyle(viewport);
    const gap = Number.parseFloat(viewportStyles.gap || viewportStyles.columnGap || "0") || 0;

    return (cardWidth + gap) * cardsToShow;
  }, [getVisibleCards]);

  const pageCount = Math.ceil(filteredItems.length / visibleCards);

  useEffect(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return undefined;
    }

    const updateScrollState = () => {
      const cardsToShow = getVisibleCards();
      const scrollStep = getScrollStep(viewport, cardsToShow);
      const maxScrollLeft = Math.max(0, viewport.scrollWidth - viewport.clientWidth);

      setVisibleCards(cardsToShow);
      setCanGoPrev(viewport.scrollLeft > 4);
      setCanGoNext(viewport.scrollLeft < maxScrollLeft - 4);

      if (scrollStep > 0) {
        const nextPage = Math.round(viewport.scrollLeft / scrollStep);
        setActivePage(Math.max(0, Math.min(nextPage, Math.ceil(filteredItems.length / cardsToShow) - 1)));
      } else {
        setActivePage(0);
      }
    };

    const animationFrame = window.requestAnimationFrame(updateScrollState);
    viewport.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    let resizeObserver;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(updateScrollState);
      resizeObserver.observe(viewport);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      viewport.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      resizeObserver?.disconnect();
    };
  }, [filteredItems.length, getScrollStep, getVisibleCards]);

  const scrollByCards = (direction) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const scrollAmount = Math.max(getScrollStep(viewport), viewport.clientWidth * 0.8);

    viewport.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToPage = (pageIndex) => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const scrollAmount = getScrollStep(viewport);

    viewport.scrollTo({
      left: pageIndex * scrollAmount,
      behavior: "smooth",
    });
  };

  const handleViewportKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByCards(-1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByCards(1);
    }
  };

  return (
    <>
      <section id="gallery" className="gallery-section home-section" dir={lang === "he" ? "rtl" : "ltr"}>
        <div className="gallery-header">
          <span className="gallery-eyebrow">{t.eyebrow}</span>
          <div className="gallery-divider" />
          <p>{t.description}</p>
        </div>

        <div className="gallery-carousel" aria-label={t.carouselLabel}>
          <button
            type="button"
            className="gallery-nav gallery-nav-prev"
            aria-label={t.previous}
            onClick={() => scrollByCards(-1)}
            disabled={!canGoPrev}
          >
            <span aria-hidden>←</span>
          </button>

          <div
            ref={viewportRef}
            className="gallery-grid"
            tabIndex={0}
            onKeyDown={handleViewportKeyDown}
            dir="ltr"
          >
            {filteredItems.map((item, index) => (
              <article
                key={`${item.src.src}-${index}`}
                className="gallery-item"
              >
                <Image
                  src={item.src}
                  alt={item.alt[lang] ?? item.alt.he}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 560px) 86vw, (max-width: 1100px) 33vw, 25vw"
                  className="gallery-image"
                />
              </article>
            ))}
          </div>

          <button
            type="button"
            className="gallery-nav gallery-nav-next"
            aria-label={t.next}
            onClick={() => scrollByCards(1)}
            disabled={!canGoNext}
          >
            <span aria-hidden>→</span>
          </button>
        </div>

        {pageCount > 1 ? (
          <div className="gallery-pagination" aria-label={t.carouselLabel}>
            {Array.from({ length: pageCount }, (_, index) => {
              const isActive = index === activePage;

              return (
                <button
                  key={`gallery-page-${index}`}
                  type="button"
                  className={`gallery-dot ${isActive ? "is-active" : ""}`}
                  aria-label={`${t.carouselLabel} ${index + 1}`}
                  aria-pressed={isActive}
                  onClick={() => scrollToPage(index)}
                >
                  <span className="sr-only">{index + 1}</span>
                </button>
              );
            })}
          </div>
        ) : null}
      </section>
    </>
  );
}
