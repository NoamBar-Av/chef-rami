const dishes = [
  { name: "פילה דג ים", description: "על קרם כרובית וצ'ימיצ'ורי עשבים" },
  { name: "ריזוטו פטריות", description: "אורז ארבוריו, פרמזן ושמן כמהין" },
  { name: "נתח בקר צרוב", description: "עם ירקות שורש וציר מצומצם" },
  { name: "ניוקי ביתי", description: "ברוטב חמאה חומה ומרווה טרייה" },
  { name: "טרטר סלמון", description: "אבוקדו, ליים ושבבי שקדים" },
  { name: "קינוח שוקולד", description: "מוס שוקולד מריר ופירות יער" },
];

export default function GalleryPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <h1 className="mb-3 text-3xl font-bold sm:text-4xl">גלריה</h1>
      <p className="mb-8 text-zinc-700">
        טעימה קטנה ממנות הדגל של שף רמי — שילוב של דיוק, יצירתיות ואהבה לאוכל.
      </p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dishes.map((dish) => (
          <article key={dish.name} className="dish-card">
            <div className="dish-image" aria-hidden>
              🍽️
            </div>
            <h2 className="mt-4 text-xl font-semibold">{dish.name}</h2>
            <p className="mt-2 text-sm text-zinc-700">{dish.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}