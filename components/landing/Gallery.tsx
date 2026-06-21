import Image from "next/image";

const galleryItems = Array.from({ length: 12 }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return {
    src: `/gallery/chef-pics/chef-rami-gallery-${num}.webp`,
    alt: `שף רמי - גלריית אירועים ותפריטים, תמונה ${index + 1}`,
  };
});

export default function Gallery() {
  return (
    <section id="gallery" className="section-pad">
      <div className="site-shell">
        <h2 className="section-title">גלריה</h2>
        <div className="gallery-grid mt-8">
          {galleryItems.map((item) => (
            <article key={item.src} className="gallery-card">
              <Image
                src={item.src}
                alt={item.alt}
                width={1200}
                height={900}
                className="gallery-image"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
