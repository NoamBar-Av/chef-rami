import heroImage from "@/app/gallery/hero/meat.png";

const copy = {
  he: {
    badge: "חוויה קולינרית בהתאמה אישית",
    headingLine1: "שף פרטי",
    headingLine2: "לאירועים בלתי נשכחים",
    text: "שף רמי יוצר חוויות קולינריות ייחודיות לאירועים פרטיים, אירועי חברה, שולחנות שוק, מגשי אירוח ודוכני אוכל, עם חומרי גלם איכותיים, שירות אישי וירידה לפרטים הקטנים.",
    imageAlt: "מנה יוקרתית בצילום מקצועי",
    book: "הזמינו אירוע",
    gallery: "צפו בגלריה",
    bookAria: "מעבר לסקשן צור קשר",
    galleryAria: "מעבר לסקשן גלריה",
  },
  en: {
    badge: "Tailored Culinary Experience",
    headingLine1: "Private Chef",
    headingLine2: "for Unforgettable Events",
    text: "Tailor-made menus, precise service, and a calm premium presence that turns every gathering into an elegant, memorable experience.",
    imageAlt: "Fine dining dish in professional food photography",
    book: "Book an Event",
    gallery: "View Gallery",
    bookAria: "Go to contact section",
    galleryAria: "Go to gallery section",
  },
  fr: {
    badge: "Expérience culinaire sur mesure",
    headingLine1: "Chef Privé",
    headingLine2: "pour des événements inoubliables",
    text: "Menus personnalisés, service précis et présence discrète pour offrir une expérience élégante, chaleureuse et mémorable.",
    imageAlt: "Plat gastronomique en photographie culinaire professionnelle",
    book: "Réserver un événement",
    gallery: "Voir la galerie",
    bookAria: "Aller à la section contact",
    galleryAria: "Aller à la section galerie",
  },
};

export default function Hero({ lang = "he", bookHref = "#contact", galleryHref = "#gallery" }) {
  const t = copy[lang] ?? copy.he;

  return (
    <section className="hero-section" id="hero">
      <div
        className="hero-image"
        role="img"
        aria-label={t.imageAlt}
        style={{ backgroundImage: `url(${heroImage.src})` }}
      />

      <div className="hero-content">

        <h1>
          <span>{t.headingLine1}</span>
          <span>{t.headingLine2}</span>
        </h1>

        <p>{t.text}</p>

        <div className="hero-actions">
          <a href={bookHref} aria-label={t.bookAria}>
            {t.book}
          </a>
          <a href={galleryHref} aria-label={t.galleryAria}>
            {t.gallery}
          </a>
        </div>
      </div>
    </section>
  );
}
