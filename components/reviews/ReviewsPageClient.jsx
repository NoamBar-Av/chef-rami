"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/landing/Navbar.jsx";
import Hero from "@/components/landing/Hero.jsx";
import Footer from "@/components/landing/Footer.jsx";

function formatDate(dateString) {
  try {
    return new Date(dateString).toLocaleDateString("he-IL", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}

export default function ReviewsPageClient({ initialReviews = [] }) {
  const [lang, setLang] = useState("he");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [reviews, setReviews] = useState(initialReviews);

  const [form, setForm] = useState({
    name: "",
    event_type: "",
    review_text: "",
    images: [],
  });

  const whatsappHref = useMemo(() => {
    const msg = "היי רמי, ראיתי את הביקורות באתר ואשמח לקבל פרטים על אירוע";
    return `https://wa.me/972586277079?text=${encodeURIComponent(msg)}`;
  }, []);

  const onFieldChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onImagesChange = (event) => {
    const files = Array.from(event.target.files ?? []).slice(0, 4);
    setForm((prev) => ({ ...prev, images: files }));
  };

  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const body = new FormData();
      body.append("name", form.name);
      body.append("event_type", form.event_type);
      body.append("review_text", form.review_text);
      form.images.forEach((file) => body.append("images", file));

      const endpoints = ["/review-submit", "/api/reviews/submit"];
      let data = null;
      let ok = false;
      let lastError = "שליחה נכשלה, נסה שוב";

      for (const endpoint of endpoints) {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body,
        });

        const raw = await response.text();
        let parsed = null;
        try {
          parsed = raw ? JSON.parse(raw) : null;
        } catch {
          lastError = "השרת החזיר תשובה לא תקינה. רענן את הדף ונסה שוב.";
          continue;
        }

        if (!response.ok) {
          lastError = parsed?.error || "שליחה נכשלה, נסה שוב";
          continue;
        }

        data = parsed;
        ok = true;
        break;
      }

      if (!ok) {
        throw new Error(lastError);
      }

  setSubmitMessage("הביקורת נשלחה בהצלחה ופורסמה באתר. תודה רבה!");
      setForm({
        name: "",
        event_type: "",
        review_text: "",
        images: [],
      });

      if (data?.review) {
        setReviews((prev) => [data.review, ...prev]);
      }
    } catch (error) {
      setSubmitMessage(error.message || "אירעה תקלה בשליחת הביקורת");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="header-shell">
        <Navbar lang={lang} setLang={setLang} />
      </div>
      <Hero lang={lang} bookHref="/#contact" galleryHref="/gallery" />

      <main className="section section-cream" id="reviews-content">
        <div className="site-shell reviews-shell">
          <section className="reviews-form-wrap" aria-labelledby="reviews-form-title">
            <h2 id="reviews-form-title" className="section-title">הוספת ביקורת</h2>
            <p className="section-text reviews-form-intro">
              נשמח לשמוע על החוויה שלכם. ניתן לצרף עד 4 תמונות מהאירוע, והביקורת תופיע מיד אחרי השליחה.
            </p>

            <div className="reviews-form" role="form" aria-label="טופס הוספת ביקורת">
              <label className="reviews-field">
                <span>שם מלא *</span>
                <input name="name" value={form.name} onChange={onFieldChange} required />
              </label>

              <label className="reviews-field">
                <span>סוג אירוע *</span>
                <input name="event_type" value={form.event_type} onChange={onFieldChange} required />
              </label>

              <label className="reviews-field">
                <span>הביקורת שלך *</span>
                <textarea
                  name="review_text"
                  rows={5}
                  value={form.review_text}
                  onChange={onFieldChange}
                  required
                />
              </label>

              <label className="reviews-field">
                <span>תמונות מהאירוע (עד 4)</span>
                <input type="file" accept="image/*" multiple onChange={onImagesChange} />
              </label>

              <button className="btn btn-primary" type="button" disabled={isSubmitting} onClick={onSubmit}>
                {isSubmitting ? "שולח..." : "שליחת ביקורת"}
              </button>

              {submitMessage ? <p className="reviews-submit-message">{submitMessage}</p> : null}
            </div>
          </section>

          <section id="contact" className="reviews-cta-strip" aria-label="יצירת קשר מהירה">
            <Link href="/#contact" className="btn btn-secondary">ליצירת קשר</Link>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn btn-dark">WhatsApp</a>
          </section>

          <section className="reviews-blog-list" aria-labelledby="approved-reviews-title">
            <h2 id="approved-reviews-title" className="section-title">ביקורות לקוחות</h2>
            <div className="reviews-blog-grid">
              {reviews.length === 0 ? (
                <p className="section-text">עדיין אין ביקורות להצגה.</p>
              ) : (
                reviews.map((review) => (
                  <article key={review.id} className="reviews-blog-card">
                    <header className="reviews-blog-head">
                      <h3>{review.name}</h3>
                      <p>{review.event_type}</p>
                      <p className="reviews-date">{formatDate(review.created_at)}</p>
                    </header>
                    <p className="section-text">{review.review_text}</p>

                    {Array.isArray(review.image_urls) && review.image_urls.length > 0 ? (
                      <div className="reviews-images-grid">
                        {review.image_urls.map((url, imageIndex) => (
                          <Image
                            key={`${review.id}-img-${imageIndex}`}
                            src={url}
                            alt={`תמונת ביקורת של ${review.name} מתוך אירוע ${review.event_type} - תמונה ${imageIndex + 1}`}
                            width={900}
                            height={700}
                            loading="lazy"
                          />
                        ))}
                      </div>
                    ) : null}
                  </article>
                ))
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer lang={lang} />
    </>
  );
}
