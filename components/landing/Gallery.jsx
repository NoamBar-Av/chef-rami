"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const galleryItems = Array.from({ length: 12 }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return {
    src: `/gallery/chef-pics/chef-rami-gallery-${num}.webp`,
    alt: `שף רמי - גלריית אירועים ותפריטים, תמונה ${index + 1}`,
  };
});

export default function Gallery() {
  const [openImage, setOpenImage] = useState(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <section id="gallery" className="section">
        <div className="site-shell">
          <h2 className="section-title">גלריה</h2>
          <div className="gallery-grid mt-8">
            {galleryItems.map((item) => (
              <button
                key={item.src}
                type="button"
                className="gallery-card"
                onClick={() => setOpenImage(item)}
                aria-label={`פתח תמונה מוגדלת: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={1200}
                  height={900}
                  className="gallery-image"
                />
                <div className="gallery-overlay" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {openImage && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="תצוגת תמונה מוגדלת"
        >
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setOpenImage(null)}
              aria-label="סגירת התמונה המוגדלת"
            >
              ×
            </button>
            <Image
              src={openImage.src}
              alt={openImage.alt}
              width={1400}
              height={1000}
              className="gallery-modal-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
