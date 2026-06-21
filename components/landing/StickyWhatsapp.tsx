const whatsappLink =
  "https://wa.me/972586277079?text=היי%20רמי,%20ראיתי%20את%20האתר%20ואשמח%20לקבל%20פרטים%20על%20אירוע";

export default function StickyWhatsapp() {
  return (
    <a
      href={whatsappLink}
      className="sticky-wa"
      target="_blank"
      rel="noreferrer"
      aria-label="דברו עם שף רמי בוואטסאפ"
    >
      ◉ וואטסאפ
    </a>
  );
}
