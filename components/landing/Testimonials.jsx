"use client";

import Image from "next/image";
import motiImage from "@/app/gallery/recomendations/moti.png";
import nirImage from "@/app/gallery/recomendations/nir.png";
import nisanImage from "@/app/gallery/recomendations/nisan.png";
import nitzanImage from "@/app/gallery/recomendations/nitzan.png";

const copy = {
  he: {
    title: "המלצות",
  },
  en: {
    title: "Reviews",
  },
  fr: {
    title: "Avis",
  },
};

const recommendationImages = [
  { src: motiImage, alt: "המלצה מ-מוטי" },
  { src: nirImage, alt: "המלצה מ-ניר" },
  { src: nisanImage, alt: "המלצה מ-ניסן" },
  { src: nitzanImage, alt: "המלצה מ-ניצן" },
];

export default function Testimonials({ lang = "he" }) {
  const t = copy[lang] ?? copy.he;

  return (
    <section className="section testimonials-dark" id="testimonials">
      <div className="site-shell">
        <h2 className="section-title">{t.title}</h2>
        <div className="mt-8 testimonials-images-grid">
          {recommendationImages.map((image) => (
            <article key={image.alt} className="testimonial-image-card">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={1500}
                className="testimonial-image"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
