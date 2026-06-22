"use client";

import { useState } from "react";

const copy = {
  he: {
    title: "שאלות נפוצות",
    items: [
      {
        q: "כמה עולה שף פרטי?",
        a: "המחיר נקבע לפי סוג האירוע, מספר הסועדים, סגנון התפריט והיקף השירות. אחרי שיחה קצרה תקבלו הצעה מדויקת שמותאמת במיוחד לאירוע שלכם.",
      },
      {
        q: "האם ניתן להזמין אירועים קטנים?",
        a: "כן. אפשר להזמין גם אירועים אינטימיים בבית, כולל ארוחת שף בבית, אירועי בוטיק ואירוח מצומצם למשפחה וחברים.",
      },
      {
        q: "יש תפריט כשר?",
        a: "בהחלט. כל תפריט יכול להיות כשר רבנות, עם אפשרות למהדרין בהתאם לדרישות האירוע והאורחים.",
      },
      {
        q: "באילו אזורים אתה עובד?",
        a: "אני מעניק שירות כשף פרטי ברחובות, שף פרטי תל אביב ובכל ערי המרכז, עם הגעה נוחה וגמישה לפי מיקום האירוע.",
      },
    ],
  },
  en: {
    title: "FAQ",
    items: [
      {
        q: "How much does a private chef cost?",
        a: "Pricing depends on event type, number of guests, menu style, and service scope. After a short call, you'll receive a precise custom quote.",
      },
      {
        q: "Can I book small events?",
        a: "Absolutely. You can book intimate in-home events, including private chef meals and boutique hosting for family and friends.",
      },
      {
        q: "Do you offer kosher menus?",
        a: "Yes. Menus can be prepared as Rabbanut kosher, with an optional Mehadrin level according to your event needs.",
      },
      {
        q: "Which areas do you serve?",
        a: "I serve Rehovot, Tel Aviv, and the wider central Israel region with flexible arrival based on your event location.",
      },
    ],
  },
  fr: {
    title: "Questions fréquentes",
    items: [
      {
        q: "Quel est le tarif d’un chef privé ?",
        a: "Le tarif dépend du type d’événement, du nombre d’invités, du style de menu et du niveau de service. Après un échange rapide, vous recevez une proposition précise.",
      },
      {
        q: "Peut-on réserver pour de petits événements ?",
        a: "Oui, bien sûr. Il est possible de réserver pour des événements intimes à domicile, y compris des dîners privés et des réceptions boutique.",
      },
      {
        q: "Proposez-vous des menus cacher ?",
        a: "Oui. Les menus peuvent être cacher Rabbanut, avec option Mehadrin selon vos besoins.",
      },
      {
        q: "Dans quelles zones intervenez-vous ?",
        a: "J’interviens à Rehovot, Tel Aviv et dans toute la région du centre d’Israël avec une grande flexibilité.",
      },
    ],
  },
};

export default function FAQ({ lang = "he" }) {
  const [openIndex, setOpenIndex] = useState(0);
  const t = copy[lang] ?? copy.he;

  return (
    <section id="faq" className="section section-cream">
      <div className="site-shell">
        <h2 className="section-title">{t.title}</h2>

        <div className="faq-list">
          {t.items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <article key={item.q} className={`faq-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-q"
                  id={buttonId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span>{item.q}</span>
                  <span className="faq-sign">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="faq-a" id={panelId} role="region" aria-labelledby={buttonId}>
                    {item.a}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
