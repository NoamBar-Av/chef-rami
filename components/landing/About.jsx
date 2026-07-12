import Image from "next/image";
import aboutChefImage from "@/app/gallery/about/aboutChef.jpeg";

const copy = {
  he: {
    title: "מי אני",
    p1: "אני שף רמי, שף פרטי עם למעלה מ־20 שנות ניסיון, המתמחה ביצירת חוויות קולינריות בהתאמה אישית לאירועים. מבחינתי, אוכל הוא הרבה יותר מארוחה – הוא הדרך לחבר בין אנשים וליצור רגעים שנשארים בזיכרון.",
    p2: "אני מגיע לכל מקום שבו מתקיים האירוע – בבית, בווילה, במשרד או בכל לוקיישן שתבחרו – ומביא איתי את חוויית המסעדה, עם תפריט שנבנה במיוחד עבורכם, בישול במקום והגשה מוקפדת.",
    p3: "השירות ניתן בעברית, באנגלית ובצרפתית, כדי שתוכלו ליהנות מחוויה קולינרית מקצועית, אישית ובלתי נשכחת.",
    p4: "",
    p5: "",
    imageAlt: "שף רמי באירוע פרטי",
    b1: "כשר רבנות",
    b2: "אופציה למהדרין",
    b3: "עברית",
    b4: "צרפתית",
    b5: "אנגלית",
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
    b5: "English",
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
    b5: "Anglais",
  },
};

export default function About({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  return (
    <section className="section home-section" id="about">
  <div className="site-shell grid gap-8 md:grid-cols-2 md:items-stretch">
        <div className="about-photo-wrap">
          <Image
            src={aboutChefImage}
            alt={t.imageAlt}
            width={1100}
            height={900}
            className="about-photo"
          />
        </div>
        <div>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-text mt-4">{t.p1}</p>
          {t.p2 ? <p className="section-text mt-4">{t.p2}</p> : null}
          {t.p3 ? <p className="section-text mt-4">{t.p3}</p> : null}
          {t.p4 ? <p className="section-text mt-4">{t.p4}</p> : null}
          {t.p5 ? <p className="section-text mt-4">{t.p5}</p> : null}

          <div className="badge-row mt-6">
            <span className="about-badge">{t.b1}</span>
            <span className="about-badge">{t.b2}</span>
            <span className="about-badge">{t.b3}</span>
            <span className="about-badge">{t.b4}</span>
            {t.b5 ? <span className="about-badge">{t.b5}</span> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
