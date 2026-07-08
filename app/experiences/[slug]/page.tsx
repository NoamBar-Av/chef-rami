import type { Metadata } from "next";
import type { ComponentType } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/landing/Navbar.jsx";
import Footer from "@/components/landing/Footer.jsx";
import ExperienceImagesGallery from "@/components/experiences/ExperienceImagesGallery.jsx";
import { experiences, getExperienceBySlug } from "@/lib/experiences/data";

const NavbarView = Navbar as ComponentType<{ lang?: string; setLang?: (value: unknown) => void }>;

type ExperiencePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: ExperiencePageProps): Promise<Metadata> {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    return {
      title: "חוויה לא נמצאה | שף רמי",
    };
  }

  return {
    title: `${experience.title.he} | שף רמי`,
    description: experience.descriptionHe[0],
    alternates: {
      canonical: `https://chef-rami.netlify.app/experiences/${experience.slug}`,
    },
  };
}

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return (
    <>
      <div className="header-shell">
        <NavbarView lang="he" />
      </div>

      <main className="section section-cream" id="experience-content">
        <div className="site-shell experience-shell">
          <section className="reviews-form-wrap" aria-labelledby="experience-title">
            <p className="experience-back-link-wrap">
              <Link href="/#services" className="experience-back-link">
                ← חזרה לחוויות שלנו
              </Link>
            </p>

            <h1 id="experience-title" className="section-title">
              {experience.title.he}
            </h1>

            <div className="experience-copy">
              {experience.descriptionHe.map((paragraph) => (
                <p key={paragraph} className="section-text">
                  {paragraph}
                </p>
              ))}
            </div>

            <ul className="experience-highlights" aria-label={`נקודות מרכזיות עבור ${experience.title.he}`}>
              {experience.highlightsHe.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </section>

          <section className="reviews-blog-list" aria-label={`גלריית אירועים עבור ${experience.title.he}`}>
            <h2 className="section-title">תמונות מאירועים</h2>
            <ExperienceImagesGallery images={experience.images} title={experience.title.he} lang="he" />
          </section>
        </div>
      </main>

      <Footer lang="he" />
    </>
  );
}
