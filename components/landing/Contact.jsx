const facebookLink = "https://www.facebook.com/share/176F3mRevv/";

const copy = {
  he: {
    title: "מחפשים שף פרטי במרכז לאירוע הקרוב?",
    text: "נשמח לתכנן יחד תפריט מדויק לאירוע פרטי, משפחתי או עסקי עם חוויית אירוח חמה, יוקרתית ובלתי נשכחת.",
    waLabel: "שליחת הודעה בוואטסאפ לשף רמי",
    fbLabel: "מעבר לעמוד הפייסבוק של שף רמי",
    waText: "✦ WhatsApp",
    fbText: "✦ Facebook",
    waMessage: "היי רמי, ראיתי את האתר ואשמח לקבל פרטים על אירוע",
  },
  en: {
    title: "Looking for a Private Chef in Central Israel?",
    text: "Let's plan a tailored menu together for your private, family, or business event with warm and premium hospitality.",
    waLabel: "Send WhatsApp message to Chef Rami",
    fbLabel: "Go to Chef Rami Facebook page",
    waText: "✦ WhatsApp",
    fbText: "✦ Facebook",
    waMessage: "Hi Chef Rami, I visited your website and would love details about an event",
  },
  fr: {
    title: "Vous cherchez un chef privé au centre d’Israël ?",
    text: "Planifions ensemble un menu sur mesure pour votre événement privé, familial ou professionnel, avec une expérience chaleureuse et haut de gamme.",
    waLabel: "Envoyer un message WhatsApp à Chef Rami",
    fbLabel: "Accéder à la page Facebook de Chef Rami",
    waText: "✦ WhatsApp",
    fbText: "✦ Facebook",
    waMessage: "Bonjour Chef Rami, j'ai visité votre site et je souhaite des détails pour un événement",
  },
};

export default function Contact({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  const whatsappLink = `https://wa.me/972586277079?text=${encodeURIComponent(t.waMessage)}`;

  return (
    <section id="contact" className="section contact-cta">
      <div className="site-shell">
        <div className="contact-box">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-text mt-4">{t.text}</p>
          <p className="mt-4 text-lg font-medium text-zinc-100">058-6277079</p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              aria-label={t.waLabel}
            >
              {t.waText}
            </a>
            <a
              href={facebookLink}
              className="btn btn-dark"
              target="_blank"
              rel="noreferrer"
              aria-label={t.fbLabel}
            >
              {t.fbText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
