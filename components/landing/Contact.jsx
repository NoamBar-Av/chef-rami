const whatsappLink =
  "https://wa.me/972586277079?text=היי%20רמי,%20ראיתי%20את%20האתר%20ואשמח%20לקבל%20פרטים%20על%20אירוע";
const facebookLink = "https://www.facebook.com/share/176F3mRevv/";

export default function Contact() {
  return (
    <section id="contact" className="section contact-cta">
      <div className="site-shell">
        <div className="contact-box">
          <h2 className="section-title">יש לכם אירוע בקרוב?</h2>
          <p className="section-text mt-4">
            בואו נבנה יחד חוויה קולינרית שתישאר בזיכרון.
          </p>
          <p className="mt-4 text-lg font-medium text-zinc-100">058-6277079</p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              aria-label="שליחת הודעה בוואטסאפ לשף רמי"
            >
              ✦ WhatsApp
            </a>
            <a
              href={facebookLink}
              className="btn btn-dark"
              target="_blank"
              rel="noreferrer"
              aria-label="מעבר לעמוד הפייסבוק של שף רמי"
            >
              ✦ Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
