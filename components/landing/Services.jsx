import Link from "next/link";
import { experiences } from "@/lib/experiences/data";

const copy = {
  he: {
    title: "החוויות שלנו",
  },
  en: {
    title: "Our Experiences",
  },
  fr: {
    title: "Nos Expériences",
  },
};

export default function Services({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  return (
    <section className="section testimonials-dark" id="services">
      <div className="site-shell">
        <h2 className="section-title">{t.title}</h2>
        <div className="services-grid mt-8">
          {experiences.map((service) => (
            <Link
              key={service.slug}
              href={`/experiences/${service.slug}`}
              className="clean-card service-card service-card-link"
              aria-label={`מעבר לעמוד חוויה: ${service.title[lang] ?? service.title.he}`}
            >
              <p>{service.title[lang] ?? service.title.he}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
