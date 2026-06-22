import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chef-rami.co.il"),
  title: "שף פרטי במרכז | שף רמי - שף לאירועים, ארוחות שף פרטיות וגריל כשר",
  description:
    "שף רמי הוא שף פרטי במרכז עם מעל 20 שנות ניסיון, מתמחה בארוחות שף פרטיות, שף לאירועים פרטיים ועסקיים, שף גריל לאירועים ותפריטים כשרים בהשגחת רבנות עם אופציה למהדרין ברחובות, תל אביב וכל אזור המרכז.",
  keywords: [
    "שף פרטי",
    "שף פרטי במרכז",
    "שף לאירועים",
    "ארוחות שף פרטיות",
    "שף גריל לאירועים",
    "שף כשר",
    "שף פרטי ברחובות",
    "שף פרטי תל אביב",
  ],
  alternates: {
    canonical: "https://chef-rami.netlify.app",
  },
  openGraph: {
    title: "שף פרטי במרכז | שף רמי - שף לאירועים וגריל כשר",
    description:
      "שף פרטי במרכז עם 20+ שנות ניסיון: ארוחות שף פרטיות, אירועי גריל ובשרים, תפריט כשר רבנות ואופציה למהדרין לאירועים פרטיים ועסקיים.",
  url: "https://chef-rami.netlify.app",
    siteName: "שף רמי",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: "https://chef-rami.netlify.app/gallery/chef-pics/macaroon.webp",
        width: 1200,
        height: 630,
        alt: "שף רמי - שף פרטי במרכז לאירועים וארוחות שף פרטיות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "שף פרטי במרכז | שף רמי",
    description:
      "שף פרטי לאירועים במרכז הארץ, ארוחות שף פרטיות, גריל ובשרים, כשר רבנות עם אופציה למהדרין.",
    images: ["https://chef-rami.netlify.app/gallery/chef-pics/macaroon.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const chefRamiJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "שף רמי",
  telephone: "058-6277079",
  url: "https://www.chef-rami.co.il",
  image: "https://www.chef-rami.co.il/gallery/chef-pics/macaroon.webp",
  description:
    "שף פרטי במרכז עם מעל 20 שנות ניסיון לאירועים פרטיים ועסקיים, ארוחות שף פרטיות, גריל ובשרים, כשר רבנות עם אופציה למהדרין.",
  areaServed: {
    "@type": "Place",
    name: "מרכז הארץ, ישראל",
  },
  servesCuisine: ["Chef", "Private Dining", "Grill", "Kosher"],
  availableLanguage: ["Hebrew", "French"],
  priceRange: "₪₪₪",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(chefRamiJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
