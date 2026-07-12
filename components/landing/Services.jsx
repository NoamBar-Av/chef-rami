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

  return (
    <section className="section services-portfolio" id="services">
      <div className="site-shell services-shell">
        <h2 className="section-title">{t.title}</h2>

        <div className="services-portfolio-grid">
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
      </div>
    </section>
  );
}
