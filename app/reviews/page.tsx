import type { Metadata } from "next";
import type { ComponentType } from "react";
import ReviewsPageClient from "@/components/reviews/ReviewsPageClient.jsx";
import { listReviews } from "@/lib/reviews/repository";
import { hasSupabaseServerEnv } from "@/lib/env";

type ReviewItem = {
  id: string;
  name: string;
  event_type: string;
  review_text: string;
  created_at: string;
  status: string;
  image_urls?: string[];
};

const ReviewsClient = ReviewsPageClient as ComponentType<{ initialReviews: ReviewItem[] }>;

export const metadata: Metadata = {
  title: "לקוחות ממליצים על שף רמי | שף פרטי במרכז",
  description:
    "המלצות של לקוחות על שף רמי – שף פרטי במרכז לאירועים, ארוחות שף, אירועי גריל ותפריטים כשרים בהתאמה אישית.",
  alternates: {
    canonical: "https://chef-rami.netlify.app/reviews",
  },
  openGraph: {
    title: "לקוחות ממליצים על שף רמי | שף פרטי במרכז",
    description:
      "ביקורות לקוחות אמיתיות על ארוחות שף פרטיות, אירועי גריל ותפריטים כשרים של שף רמי במרכז.",
    url: "https://chef-rami.netlify.app/reviews",
    siteName: "שף רמי",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://chef-rami.netlify.app/gallery/chef-pics/macaroon.webp",
        width: 1200,
        height: 630,
        alt: "ביקורות לקוחות על שף רמי",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function ReviewsPage() {
  let approvedReviews: ReviewItem[] = [];

  if (hasSupabaseServerEnv()) {
    try {
      const allReviews = (await listReviews({
        limit: 100,
        ascending: false,
      })) as unknown as ReviewItem[];
      approvedReviews = allReviews.filter((review) => review.status === "approved");
    } catch (error) {
      console.error("Failed to load approved reviews for /reviews", error);
    }
  } else {
    console.warn("Supabase env vars are missing. Rendering /reviews without SSR reviews data.");
  }

  const aggregateSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "שף רמי",
    url: "https://chef-rami.netlify.app/reviews",
    review: approvedReviews.slice(0, 5).map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewBody: review.review_text,
      datePublished: review.created_at,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateSchema) }}
      />
      <ReviewsClient initialReviews={approvedReviews} />
    </>
  );
}
