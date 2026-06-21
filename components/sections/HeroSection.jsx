const whatsappLink =
  "https://wa.me/972586277079?text=היי%20רמי,%20ראיתי%20את%20האתר%20ואשמח%20לקבל%20פרטים%20על%20אירוע";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="site-shell hero-grid">
        <div className="hero-content">
          <p className="eyebrow">שף פרטי במרכז · חוויה יוקרתית עם נשמה</p>
          <h1>שף רמי – חוויה קולינרית שנשארת בזיכרון</h1>
          <p className="hero-subtitle">
            ארוחות שף פרטיות, אירועי גריל ותפריטים בהתאמה אישית – אצלכם בבית,
            באירוע או בכל מקום שתבחרו.
          </p>

          <div className="hero-actions">
            <a
              href={whatsappLink}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              הזמינו אירוע בוואטסאפ
            </a>
            <a href="#flavors" className="btn btn-secondary">
              צפו בתפריטים
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <p>🔥 מטבח חי, עשן עדין, וטעמים שעושים שקט בשולחן.</p>
          <p>🥩 גריל מדויק לצד אירוח מוקפד ואלגנטי.</p>
          <p>🍷 תפריט שנבנה סביב האנשים שלכם — לא תבנית מוכנה.</p>
        </div>
      </div>
    </section>
  );
}
