import Image from "next/image";

const copy = {
  he: {
    imageAlt: "שף פרטי להפקות ואירועים",
    subtitle: "שף פרטי להפקות ואירועים",
    text: "אם אתם מחפשים שף לאירועים פרטיים עם סגנון יוקרתי ואישי, אני בונה לכל אירוע תפריט מדויק של ארוחות שף פרטיות, כולל שף גריל לאירועים ושירות חם ומקצועי עד הפרט האחרון.",
    book: "הזמינו אירוע",
    gallery: "צפו בגלריה",
    bookAria: "מעבר לסקשן צור קשר",
    galleryAria: "מעבר לסקשן גלריה",
  },
  en: {
    imageAlt: "Private Chef for Productions & Events",
    subtitle: "Private Chef for Productions & Events",
    text: "If you're looking for a private chef for intimate events with a warm luxury touch, I create a tailored menu for each gathering, including private chef dinners and premium grill experiences.",
    book: "Book an Event",
    gallery: "View Gallery",
    bookAria: "Go to contact section",
    galleryAria: "Go to gallery section",
  },
  fr: {
    imageAlt: "Chef Privé pour Productions & Événements",
    subtitle: "Chef Privé pour Productions & Événements",
    text: "Si vous recherchez un chef privé pour des événements raffinés et chaleureux, je crée un menu sur mesure pour chaque occasion, y compris des dîners privés et des expériences grill haut de gamme.",
    book: "Réserver un événement",
    gallery: "Voir la galerie",
    bookAria: "Aller à la section contact",
    galleryAria: "Aller à la section galerie",
  },
};

export default function Hero({ lang = "he", bookHref = "#contact", galleryHref = "#gallery" }) {
  const t = copy[lang] ?? copy.he;
  return (
    <section className="hero-wrap" id="hero">
      <Image
        src="/gallery/chef-pics/macaroon.webp"
        alt={t.imageAlt}
        fill
        priority
        className="hero-bg-image"
      />
      <div className="hero-dark-overlay" />
      <div className="hero-smoke" aria-hidden />

      <div className="hero-inner site-shell">
        <div className="hero-content-box">
          <h1 className="hero-main-title">שף רמי</h1>
          <h2 className="hero-main-subtitle">{t.subtitle}</h2>
          <p className="hero-main-text">{t.text}</p>
          <div className="hero-cta-row">
            <a href={bookHref} className="btn btn-primary" aria-label={t.bookAria}>
              {t.book}
            </a>
            <a href={galleryHref} className="btn btn-secondary light-btn" aria-label={t.galleryAria}>
              {t.gallery}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
