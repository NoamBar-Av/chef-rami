import Image from "next/image";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="site-shell grid gap-8 md:grid-cols-2 md:items-center">
        <div className="about-photo-wrap">
          <Image
            src="/gallery/chef-pics/chef-photo.jpg"
            alt="שף רמי באירוע פרטי"
            width={1100}
            height={900}
            className="about-photo"
          />
        </div>
        <div>
          <h2 className="section-title">מי אני</h2>
          <p className="section-text mt-4">שף פרטי ואיש אירועים עם ניסיון של למעלה מ־20 שנה בעולם הקולינריה והאירוח.</p>
          <p className="section-text mt-4">האש, הקצב, הדיוק והתשוקה ליצירה הפכו עבורי לדרך חיים.</p>
          <p className="section-text mt-4">לאורך השנים צברתי ניסיון עשיר לצד מיטב השפים ובאירועים מכל הסוגים.</p>
          <p className="section-text mt-4">אני מתמחה בבניית תפריט ייחודי ומדויק לכל אירוע.</p>

          <div className="badge-row mt-6">
            <span className="about-badge">כשר רבנות</span>
            <span className="about-badge">אופציה למהדרין</span>
            <span className="about-badge">עברית</span>
            <span className="about-badge">צרפתית</span>
          </div>
        </div>
      </div>
    </section>
  );
}
