const copy = {
  he: {
    title: "החוויות שלנו",
    services: [
      "ארוחות שף פרטיות",
      "שף לאירועים פרטיים",
      "ארוחת שף בבית",
      "שף גריל לאירועים",
      "שף כשר לאירועים",
    ],
  },
  en: {
    title: "Our Experiences",
    services: [
      "Private Chef Dining",
      "Chef for Private Events",
      "In-Home Chef Meal",
      "Grill Chef for Events",
      "Kosher Chef for Events",
    ],
  },
  fr: {
    title: "Nos Expériences",
    services: [
      "Dîners privés avec chef",
      "Chef pour événements privés",
      "Repas de chef à domicile",
      "Chef grill pour événements",
      "Chef cacher pour événements",
    ],
  },
};

export default function Services({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  return (
    <section className="section section-cream" id="services">
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
