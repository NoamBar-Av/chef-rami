const copy = {
  he: {
    title: "החוויות שלנו",
    services: [
      "ארוחות שף פרטיות",
      "אירועי גריל ובשרים",
      "מגשי אירוח יוקרתיים",
      "אירועים פרטיים ועסקיים",
      "תפריטים בהתאמה אישית",
      "קייטרינג כשר",
    ],
  },
  en: {
    title: "Our Experiences",
    services: [
      "Private Chef Dining",
      "Grill & Meat Events",
      "Hospitality Platters",
      "Private & Corporate Events",
      "Tailor-Made Menus",
      "Kosher Catering",
    ],
  },
  fr: {
    title: "Nos Expériences",
    services: [
      "Dîners privés avec chef",
      "Événements grillades et viandes",
      "Plateaux de réception",
      "Événements privés et professionnels",
      "Menus sur mesure",
      "Traiteur cacher",
    ],
  },
};

export default function Services({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  return (
    <section className="section testimonials-dark" id="services">
      <div className="site-shell">
        <h2 className="section-title">{t.title}</h2>
        <div className="services-grid mt-8">
          {t.services.map((service) => (
            <article key={service} className="clean-card service-card">
              <p>{service}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
