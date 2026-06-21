"use client";

import { useState } from "react";

const items = [
  {
    q: "כמה עולה שף פרטי?",
    a: "המחיר נקבע לפי סוג האירוע, מספר הסועדים, סגנון התפריט והיקף השירות. אחרי שיחה קצרה תקבלו הצעה מסודרת ומדויקת.",
  },
  {
    q: "האם ניתן להזמין אירועים קטנים?",
    a: "כן. ניתן להזמין גם אירועים אינטימיים בבית, כולל אירוח מצומצם למשפחה וחברים.",
  },
  {
    q: "יש תפריט כשר?",
    a: "בהחלט. קיימות אפשרויות כשרות בהתאם לצרכים, כולל פתרונות מותאמים ברמת הגלם והאירוח.",
  },
  {
    q: "כמה זמן מראש מזמינים?",
    a: "מומלץ להזמין מוקדם ככל האפשר, במיוחד בסופי שבוע וחגים. יחד עם זאת, נבדוק תמיד זמינות גם בהתראה קצרה.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section section-cream">
      <div className="site-shell">
        <h2 className="section-title">שאלות נפוצות</h2>

        <div className="faq-list">
          {items.map((item, index) => {
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
