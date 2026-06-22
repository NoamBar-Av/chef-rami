import Image from "next/image";

const copy = {
  he: {
    title: "מי אני",
    p1: "אני שף פרטי במרכז עם ניסיון של למעלה מ־20 שנה, מתמחה בליווי אירועים פרטיים ועסקיים באווירה מוקפדת, אישית ואלגנטית.",
    p3: "המטבח שלי מבוסס על חומרי גלם איכותיים, ביצוע מדויק וסטנדרט אירוח גבוה שמתאים לכל ארוחת שף בבית או אירוע מיוחד.",
    p4: "השירות ניתן בעברית ובצרפתית שוטפת, עם מענה אישי ונעים לכל אורך הדרך.",
    p5: "כל תפריט נבנה בהתאמה מלאה, כולל כשר רבנות ואפשרות למהדרין לפי הצורך.",
    imageAlt: "שף רמי באירוע פרטי",
    b1: "כשר רבנות",
    b2: "אופציה למהדרין",
    b3: "עברית",
    b4: "צרפתית",
  },
  en: {
    title: "About",
    p1: "I am a private chef in central Israel with over 20 years of experience, specializing in elegant and personalized private and business events.",
    p3: "My cuisine is built on premium ingredients, precise execution, and a high hospitality standard for in-home chef dinners and special events.",
    p4: "Service is available in Hebrew and fluent French, with personal and attentive communication throughout.",
    p5: "Every menu is tailor-made, including Rabbanut kosher and optional Mehadrin on request.",
    imageAlt: "Chef Rami at a private event",
    b1: "Rabbanut Kosher",
    b2: "Mehadrin Option",
    b3: "Hebrew",
    b4: "French",
  },
  fr: {
    title: "À propos",
    p1: "Je suis un chef privé au centre d’Israël avec plus de 20 ans d’expérience, spécialisé dans les événements privés et professionnels raffinés.",
    p3: "Ma cuisine repose sur des produits de qualité, une exécution précise et un service haut de gamme pour vos dîners privés à domicile.",
    p4: "Le service est proposé en hébreu et en français courant, avec un accompagnement attentif du début à la fin.",
    p5: "Chaque menu est personnalisé, avec cacherout Rabbanut et option Mehadrin selon vos besoins.",
    imageAlt: "Chef Rami lors d’un événement privé",
    b1: "Cacher Rabbanut",
    b2: "Option Mehadrin",
    b3: "Hébreu",
    b4: "Français",
  },
};

export default function About({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  return (
    <section className="section" id="about">
      <div className="site-shell grid gap-8 md:grid-cols-2 md:items-center">
        <div className="about-photo-wrap">
          <Image
            src="/gallery/chef-pics/chef-photo.jpg"
            alt={t.imageAlt}
            width={1100}
            height={900}
            className="about-photo"
          />
        </div>
        <div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-text mt-4">{t.p1}</p>
          <p className="section-text mt-4">{t.p3}</p>
          <p className="section-text mt-4">{t.p4}</p>
          <p className="section-text mt-4">{t.p5}</p>

          <div className="badge-row mt-6">
            <span className="about-badge">{t.b1}</span>
            <span className="about-badge">{t.b2}</span>
            <span className="about-badge">{t.b3}</span>
            <span className="about-badge">{t.b4}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
