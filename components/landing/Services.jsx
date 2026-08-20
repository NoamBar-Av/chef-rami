"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import privateImage from "@/app/gallery/expirience/private.png";
import grillImage from "@/app/gallery/expirience/grill.png";
import plattersImage from "@/app/gallery/expirience/platters.png";
import businessImage from "@/app/gallery/expirience/buisness.png";

const copy = {
  he: {
    title: "החוויות שלנו",
    discover: "גלו עוד",
    carouselLabel: "גלריית חוויות במובייל",
    carouselDotsLabel: "אינדיקטורים לגלילת החוויות",
    carouselDotLabel: "מעבר לכרטיס:",
    items: [
      {
        slug: "private-chef-dining",
        title: "ארוחות שף פרטיות",
        description: "חוויה אינטימית עם תפריט מותאם אישית, שירות מלא והגשה אלגנטית עד הבית.",
        image: privateImage,
      },
      {
        slug: "grill-meat-events",
        title: "אירועי גריל ובשרים",
        description: "נתחים מובחרים, צלייה מדויקת ואירוח עשיר שנבנה לאירועים עם נוכחות מרשימה.",
        image: grillImage,
      },
      {
        slug: "platters",
        title: "מגשי אירוח ",
        description: "מגשים מעוצבים שמדגישים טעם, צבע ואסתטיקה לחוויית אירוח מוקפדת ויוקרתית.",
        image: plattersImage,
      },
      {
        slug: "private-corporate-events",
        title: "אירועי חברה",
        description: "חוויה קולינרית מדויקת לאירועים, עם סטנדרט פרימיום ותשומת לב לפרטים.",
        image: businessImage,
      },
    ],
  },
  en: {
    title: "Our Experiences",
    discover: "Discover more",
    carouselLabel: "Mobile experiences gallery",
    carouselDotsLabel: "Experience carousel indicators",
    carouselDotLabel: "Go to card:",
    items: [
      {
        slug: "private-chef-dining",
        title: "Private Chef Dining",
        description: "An intimate tailored menu with refined service and elegant in-home presentation.",
        image: privateImage,
      },
      {
        slug: "grill-meat-events",
        title: "Grill & Meat Events",
        description: "Prime cuts, precise grilling, and a rich hosting atmosphere crafted for impact.",
        image: grillImage,
      },
      {
        slug: "platters",
        title: "Luxury Hospitality Platters",
        description: "Beautifully designed platters balancing flavor, color, and premium presentation.",
        image: plattersImage,
      },
      {
        slug: "private-corporate-events",
        title: "Corporate Events",
        description: "High-end culinary execution for business gatherings, launches, and executive hosting.",
        image: businessImage,
      },
    ],
  },
  fr: {
    title: "Nos Expériences",
    discover: "Découvrir",
    carouselLabel: "Galerie mobile des expériences",
    carouselDotsLabel: "Indicateurs du carrousel des expériences",
    carouselDotLabel: "Aller à la carte :",
    items: [
      {
        slug: "private-chef-dining",
        title: "Dîners privés avec chef",
        description: "Une expérience intime avec menu sur mesure, service raffiné et présentation élégante.",
        image: privateImage,
      },
      {
        slug: "grill-meat-events",
        title: "Événements grillades",
        description: "Des pièces premium et une cuisson précise pour une réception marquante.",
        image: grillImage,
      },
      {
        slug: "platters",
        title: "Plateaux de réception",
        description: "Des plateaux soigneusement composés, alliant goût, couleur et esthétique haut de gamme.",
        image: plattersImage,
      },
      {
        slug: "private-corporate-events",
        title: "Événements professionnels",
        description: "Un accompagnement culinaire précis pour événements d’entreprise et lancements.",
        image: businessImage,
      },
    ],
  },
};

export default function Services({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const grid = gridRef.current;

    if (!grid) {
      return undefined;
    }

    const getCards = () => Array.from(grid.querySelectorAll(".service-portfolio-card"));

    const updateActiveIndex = () => {
      if (!window.matchMedia("(max-width: 768px)").matches) {
        setActiveIndex(0);
        return;
      }

      const cards = getCards();

      if (!cards.length) {
        setActiveIndex(0);
        return;
      }

      const currentScroll = grid.scrollLeft;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const distance = Math.abs(card.offsetLeft - currentScroll);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveIndex();
    grid.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      grid.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [lang, t.items.length]);

  const scrollToCard = (index) => {
    const grid = gridRef.current;

    if (!grid) {
      return;
    }

    const cards = grid.querySelectorAll(".service-portfolio-card");
    const targetCard = cards[index];

    if (!targetCard) {
      return;
    }

    grid.scrollTo({
      left: targetCard.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  return (
    <section className="section services-portfolio home-section" id="services">
      <div className="site-shell services-shell">
        <h2 className="section-title">{t.title}</h2>

        <div ref={gridRef} className="services-portfolio-grid" aria-label={t.carouselLabel}>
          {t.items.map((service) => (
            <Link
              key={service.slug}
              href={`/experiences/${service.slug}`}
              className="service-portfolio-card"
              aria-label={`מעבר לעמוד חוויה: ${service.title}`}
            >
              <div className="service-portfolio-image-wrap">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={900}
                  className="service-portfolio-image"
                />
              </div>

              <div className="service-portfolio-content">
                <h3>{service.title}</h3>
                <span className="service-portfolio-separator" aria-hidden />
                <p>{service.description}</p>
                <span className="service-portfolio-link">
                  {t.discover} <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-portfolio-dots" aria-label={t.carouselDotsLabel}>
          {t.items.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              className={`services-portfolio-dot${activeIndex === index ? " is-active" : ""}`}
              aria-label={`${t.carouselDotLabel} ${service.title}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
