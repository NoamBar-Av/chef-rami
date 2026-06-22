const copy = {
  he: {
    title: "המלצות",
    items: [
      {
        name: "ליאור, תל אביב",
        text: "היה מדויק מהפרט הראשון ועד האחרון. המטבח הרגיש ברמה של מסעדת שף אצלנו בבית.",
      },
      {
        name: "חן, ראשון לציון",
        text: "אירוע משפחתי קטן שקיבל נוכחות גדולה. טעמים מעולים ושירות רגוע ומקצועי.",
      },
      {
        name: "אופיר, רמת גן",
        text: "רמי בנה לנו תפריט חכם ומדויק לתקציב, ועדיין הכול הרגיש יוקרתי ומושקע.",
      },
    ],
  },
  en: {
    title: "Reviews",
    items: [
      {
        name: "Lior, Tel Aviv",
        text: "Everything was precise from start to finish. It felt like a true chef-level restaurant experience at home.",
      },
      {
        name: "Chen, Rishon LeZion",
        text: "A small family event that felt truly elevated. Excellent flavors and calm, professional service.",
      },
      {
        name: "Ofir, Ramat Gan",
        text: "Rami built us a smart menu for our budget, and everything still felt premium and refined.",
      },
    ],
  },
  fr: {
    title: "Avis",
    items: [
      {
        name: "Lior, Tel Aviv",
        text: "Tout était précis du début à la fin. Nous avons vécu une vraie expérience de chef à domicile.",
      },
      {
        name: "Chen, Rishon LeZion",
        text: "Un petit événement familial transformé en moment d’exception. Saveurs excellentes et service professionnel.",
      },
      {
        name: "Ofir, Ramat Gan",
        text: "Rami a conçu un menu intelligent selon notre budget, tout en gardant une vraie touche haut de gamme.",
      },
    ],
  },
};

export default function Testimonials({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;
  return (
    <section className="section testimonials-dark" id="testimonials">
      <div className="site-shell">
        <h2 className="section-title">{t.title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.items.map((item) => (
            <blockquote key={item.name} className="clean-card testimonial-card">
              <p className="section-text">“{item.text}”</p>
              <footer className="mt-4 text-sm font-semibold text-[#9a7b36]">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
