import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
      <div className="hero-card">
        <p className="mb-3 text-sm font-semibold text-amber-700">מטבח שף פרטי</p>
        <h1 className="mb-4 text-4xl font-bold leading-tight sm:text-5xl">
          ברוכים הבאים למטבח של שף רמי
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-zinc-700">
          ארוחות שף פרטיות, אירוח בוטיק וחוויית טעמים מוקפדת עד הפרט האחרון.
          כל תפריט מותאם אישית לסגנון האירוע שלכם.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link href="/gallery" className="btn btn-primary">
            לצפייה בגלריה
          </Link>
          <Link href="/about" className="btn btn-secondary">
            להכיר את שף רמי
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <article className="feature-card">
          <h2 className="mb-2 text-xl font-semibold">איכות חומרי גלם</h2>
          <p>עבודה עם תוצרת טרייה ועונתית, בדגש על טעם ונראות.</p>
        </article>
        <article className="feature-card">
          <h2 className="mb-2 text-xl font-semibold">התאמה אישית</h2>
          <p>תפריטים גמישים לאירועים פרטיים, עסקיים ומשפחתיים.</p>
        </article>
        <article className="feature-card">
          <h2 className="mb-2 text-xl font-semibold">חוויה מלאה</h2>
          <p>מהמנה הראשונה ועד הקינוח — שירות מקצועי ולבבי.</p>
        </article>
      </div>
    </section>
  );
}
