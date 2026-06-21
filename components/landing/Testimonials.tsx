const testimonials = [
  {
    name: "עדי, רחובות",
    text: "רמי יצר לנו ערב שקט, טעים ומדויק. השירות היה מקצועי והאוכל ברמה גבוהה מאוד.",
  },
  {
    name: "נועה, תל אביב",
    text: "חיפשנו אירוח יוקרתי ולא מתאמץ – בדיוק מה שקיבלנו. כל מנה הייתה מוקפדת ומרשימה.",
  },
  {
    name: "דני, ראשון לציון",
    text: "אירוע קטן בבית שהרגיש כמו מסעדת שף פרטית. יחס אישי ואווירה נהדרת.",
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad section-cream">
      <div className="site-shell">
        <h2 className="section-title">המלצות</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="clean-card">
              <p className="section-text">“{item.text}”</p>
              <footer className="mt-4 text-sm font-semibold text-[#9a7b36]">{item.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
