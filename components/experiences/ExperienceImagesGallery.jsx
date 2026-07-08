"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const modalLabels = {
  he: {
    dialog: "תצוגת תמונה מוגדלת",
    close: "סגירת התמונה המוגדלת",
    open: "פתח תמונה מוגדלת",
  },
  en: {
    dialog: "Enlarged image preview",
    close: "Close enlarged image",
    open: "Open enlarged image",
  },
  fr: {
    dialog: "Aperçu agrandi",
    close: "Fermer l'image agrandie",
    open: "Ouvrir l'image agrandie",
  },
};

const getImageSrc = (image) => (typeof image === "string" ? image : image.src);

/**
 * @typedef {Object} ExperienceImagesGalleryProps
 * @property {Array<string | import("next/image").StaticImageData>} [images]
 * @property {string} [title]
 * @property {"he" | "en" | "fr"} [lang]
 */

/** @param {ExperienceImagesGalleryProps} props */
export default function ExperienceImagesGallery({ images, title = "", lang = "he" }) {
  const [openImage, setOpenImage] = useState(null);
  const labels = modalLabels[lang] ?? modalLabels.he;

  const galleryItems = useMemo(() => {
    const imageList = Array.isArray(images) ? images : [];
    return imageList.slice(0, 4).map((image, index) => ({
      src: getImageSrc(image),
      alt: `${title} - תמונה ${index + 1}`,
      key: `${index}-${getImageSrc(image)}`,
    }));
  }, [images, title]);

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
      <div className="experience-images-grid">
        {galleryItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className="experience-image-trigger"
            onClick={() => setOpenImage(item)}
            aria-label={`${labels.open}: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={1200}
              className="experience-image"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {openImage && (
        <div
          className="gallery-modal-backdrop"
          onClick={() => setOpenImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={labels.dialog}
        >
          <div className="gallery-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setOpenImage(null)}
              aria-label={labels.close}
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