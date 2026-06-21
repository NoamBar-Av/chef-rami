const whatsappLink =
  "https://wa.me/972586277079?text=היי%20רמי,%20ראיתי%20את%20האתר%20ואשמח%20לקבל%20פרטים%20על%20אירוע";
const facebookLink = "#";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <div className="site-shell">
        <div className="contact-box">
          <h2 className="section-title">יצירת קשר</h2>
          <p className="mt-3 text-lg font-medium text-zinc-800">טלפון: 058-6277079</p>
          <p className="section-text mt-4">
            יש לכם אירוע בקרוב? אשמח לבנות לכם תפריט שמתאים בדיוק לאווירה,
            לאנשים ולתקציב.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={whatsappLink} className="btn btn-primary" target="_blank" rel="noreferrer">
              ◉ WhatsApp
            </a>
            <a href={facebookLink} className="btn btn-dark" target="_blank" rel="noreferrer">
              ◉ Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
