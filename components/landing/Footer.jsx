const whatsappLink =
  "https://wa.me/972586277079?text=היי%20רמי,%20ראיתי%20את%20האתר%20ואשמח%20לקבל%20פרטים%20על%20אירוע";
const facebookLink = "https://www.facebook.com/share/176F3mRevv/";

export default function Footer() {
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
            aria-label="מעבר לוואטסאפ של שף רמי"
          >
            WhatsApp
          </a>
          <a
            href={facebookLink}
            target="_blank"
            rel="noreferrer"
            aria-label="מעבר לפייסבוק של שף רמי"
          >
            Facebook
          </a>
        </div>
        <p className="footer-copy">© כל הזכויות שמורות לשף רמי</p>
      </div>
    </footer>
  );
}
