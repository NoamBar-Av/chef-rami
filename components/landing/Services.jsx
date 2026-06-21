const services = [
  "ארוחות שף פרטיות",
  "אירועי גריל ובשרים",
  "מגשי אירוח",
  "אירועים קטנים",
  "תפריט מותאם אישית",
];

export default function Services() {
  return (
    <section className="section section-cream" id="services">
      <div className="site-shell">
  <h2 className="section-title">החוויות שלנו</h2>
        <div className="services-grid mt-8">
          {services.map((service) => (
            <article key={service} className="clean-card service-card">
              <p>{service}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
