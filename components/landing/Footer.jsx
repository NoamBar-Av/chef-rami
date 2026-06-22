const facebookLink = "https://www.facebook.com/share/176F3mRevv/";

const copy = {
  he: {
    waLabel: "מעבר לוואטסאפ של שף רמי",
    fbLabel: "מעבר לפייסבוק של שף רמי",
    copy: "© כל הזכויות שמורות לשף רמי",
    waMessage: "היי רמי, ראיתי את האתר ואשמח לקבל פרטים על אירוע",
  },
  en: {
    waLabel: "Go to Chef Rami WhatsApp",
    fbLabel: "Go to Chef Rami Facebook",
    copy: "© All rights reserved to Chef Rami",
    waMessage: "Hi Chef Rami, I visited your website and would love details about an event",
  },
  fr: {
    waLabel: "Aller vers le WhatsApp de Chef Rami",
    fbLabel: "Aller vers le Facebook de Chef Rami",
    copy: "© Tous droits réservés à Chef Rami",
    waMessage: "Bonjour Chef Rami, j'ai visité votre site et je souhaite des détails pour un événement",
  },
};

export default function Footer({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  const whatsappLink = `https://wa.me/972586277079?text=${encodeURIComponent(t.waMessage)}`;

  return (
    <footer className="site-footer">
      <div className="site-shell footer-inner">
        <p className="footer-logo">RM</p>
        <p>058-6277079</p>
        <div className="footer-socials">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label={t.waLabel}
          >
            WhatsApp
          </a>
          <a
            href={facebookLink}
            target="_blank"
            rel="noreferrer"
            aria-label={t.fbLabel}
          >
            Facebook
          </a>
        </div>
        <p className="footer-copy">{t.copy}</p>
      </div>
    </footer>
  );
}
