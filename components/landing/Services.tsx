const services = [
  "ארוחות שף פרטיות",
  "אירועי גריל ובשרים",
  "מגשי אירוח",
  "אירועים קטנים בבית",
  "תפריטים בהתאמה אישית",
];

export default function Services() {
  return (
    <section className="section-pad section-cream">
      <div className="site-shell">
        <h2 className="section-title">מה אני מציע</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service} className="clean-card">
              <p>{service}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
