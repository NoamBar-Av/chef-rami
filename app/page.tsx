import Link from "next/link";

const galleryItems = [
  {
    title: "פילה סלמון צרוב",
    subtitle: "קרם שומר, עשבי תיבול ושמן לימון",
    icon: "🐟",
  },
  {
    title: "ריזוטו כמהין",
    subtitle: "פרמזן מיושן, פטריות יער ומרווה",
    icon: "🍄",
  },
  {
    title: "אסאדו בבישול איטי",
    subtitle: "ירקות שורש וציר יין אדום",
    icon: "🥩",
  },
  {
    title: "ניוקי עננים",
    subtitle: "חמאה חומה, אגוזים וגבינת עזים",
    icon: "🥔",
  },
  {
    title: "טרטר דג ים",
    subtitle: "אבוקדו, צ'ילי עדין וסומאק",
    icon: "🍋",
  },
  {
    title: "פבלובה שוקולד לבן",
    subtitle: "פירות יער טריים ונגיעת וניל",
    icon: "🍓",
  },
];

const testimonials = [
  {
    name: "עדי ויונתן",
    text: "שף רמי הפך את יום ההולדת שלנו לאירוע מושלם. כל מנה הייתה מדויקת ומרגשת.",
  },
  {
    name: "קרן, מנהלת משרד",
    text: "הזמנו ערב שף לצוות וקיבלנו חוויה ברמה של מסעדת שף אצלנו במשרד.",
  },
  {
    name: "משפחת כהן",
    text: "השירות, האסתטיקה והטעמים — פשוט וואו. ממליצים מכל הלב.",
  },
];

export default function Home() {
  return (
    <>
      <section id="hero" className="hero-shell">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
          <div className="hero-content">
            <p className="hero-kicker">שף פרטי לאירועים בלתי נשכחים</p>
            <h1 className="hero-title">שף רמי — חוויית אירוח עם חתימה קולינרית</h1>
            <p className="hero-text">
              תפריטי שף בהתאמה אישית, חומרי גלם מעולים והגשה מוקפדת שמייצרת
              אווירה של מסעדת בוטיק אצלכם בבית או באירוע.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#booking" className="btn btn-primary">
                להזמנת אירוע
              </a>
              <a href="#gallery" className="btn btn-secondary">
                לראות מנות
              </a>
            </div>
          </div>

          <div className="hero-highlight">
            <p className="text-sm font-semibold text-amber-700">השירותים שלנו</p>
            <ul className="mt-4 space-y-3 text-zinc-700">
              <li>• ארוחות שף פרטיות בבית</li>
              <li>• אירועים משפחתיים ועסקיים</li>
              <li>• תפריטים כשרים/צמחוניים בהתאמה</li>
              <li>• חוויית אירוח מלאה כולל הגשה</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="gallery" className="section-wrap">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="section-title">גלריה</h2>
          <p className="section-subtitle">מבחר מנות מהאירועים האחרונים של שף רמי.</p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article key={item.title} className="dish-card">
                <div className="dish-image" aria-hidden>
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-700">{item.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section-wrap section-muted">
        <div className="mx-auto w-full max-w-6xl px-6">
          <h2 className="section-title">המלצות</h2>
          <p className="section-subtitle">מה לקוחות מספרים אחרי ערב שף עם רמי.</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="feature-card">
                <p className="leading-7 text-zinc-700">“{item.text}”</p>
                <footer className="mt-4 text-sm font-semibold text-amber-700">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="section-wrap">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="booking-card">
            <div>
              <h2 className="section-title">הזמנה</h2>
              <p className="section-subtitle">
                מלאו פרטים ונחזור אליכם לבניית תפריט מושלם לאירוע.
              </p>
            </div>

            <form className="mt-6 grid gap-4 sm:grid-cols-2">
              <input className="form-input" placeholder="שם מלא" />
              <input className="form-input" placeholder="טלפון" />
              <input className="form-input sm:col-span-2" placeholder="אימייל" />
              <textarea
                className="form-input sm:col-span-2"
                rows={4}
                placeholder="ספרו לנו על האירוע (תאריך, כמות אורחים, סגנון)"
              />
              <button type="button" className="btn btn-primary w-fit">
                שליחת בקשה
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="about" className="section-wrap pb-20">
        <div className="mx-auto w-full max-w-4xl px-6">
          <h2 className="section-title">פרטים עליו</h2>
          <div className="feature-card mt-5 space-y-4 leading-8 text-zinc-800">
            <p>
              שף רמי מביא ניסיון של שנים במטבח המקומי והבינלאומי, עם תשוקה אמיתית
              לאירוח אישי וחם.
            </p>
            <p>
              הגישה שלו משלבת בין דיוק מקצועי לבין יצירתיות, ומבוססת על חומרי גלם
              טריים, איזון טעמים והגשה מרשימה.
            </p>
            <p>
              מתאים לארוחות אינטימיות, חגיגות משפחתיות, ואירועי בוטיק שמבקשים לתת
              לאורחים חוויה קולינרית ברמה גבוהה.
            </p>
            <div className="pt-2">
              <Link href="/about" className="btn btn-secondary">
                לעמוד אודות המלא
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
