import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-wrap" id="hero">
      <Image
        src="/gallery/chef-pics/macaroon.webp"
        alt="שף פרטי לאירועים יוקרתיים"
        fill
        priority
        className="hero-bg-image"
      />
      <div className="hero-dark-overlay" />
      <div className="hero-smoke" aria-hidden />

      <div className="hero-inner site-shell">
        <div className="hero-content-box">
          <h1 className="hero-main-title">שף רמי</h1>
          <h2 className="hero-main-subtitle">חוויה קולינרית פרטית שנשארת בזיכרון</h2>
          <p className="hero-main-text">
            ארוחות שף פרטיות, אירועי גריל ותפריטים בהתאמה אישית – חוויה שנבנית
            סביב האנשים, האווירה והטעם.
          </p>
          <div className="hero-cta-row">
            <a href="#contact" className="btn btn-primary" aria-label="מעבר לסקשן צור קשר">
              הזמינו אירוע
            </a>
            <a href="#gallery" className="btn btn-secondary light-btn" aria-label="מעבר לסקשן גלריה">
              צפו בגלריה
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
