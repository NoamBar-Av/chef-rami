const testimonials = [
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
];

export default function Testimonials() {
  return (
    <section className="section testimonials-dark" id="testimonials">
      <div className="site-shell">
        <h2 className="section-title">המלצות</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
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
