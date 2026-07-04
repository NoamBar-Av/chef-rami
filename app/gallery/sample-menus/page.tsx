import type { Metadata } from "next";
import SampleMenusPageClient from "@/components/sample-menus/SampleMenusPageClient.jsx";

export const metadata: Metadata = {
  title: "תפריטים לדוגמא | שף רמי",
  description:
    "תפריטים לדוגמא לארוחות שף פרטיות, אירועי גריל ותפריטי חג – השראה לבניית תפריט מותאם אישית עם שף רמי.",
  alternates: {
    canonical: "https://chef-rami.netlify.app/sample-menus",
  },
};

export default function SampleMenusPage() {
  return <SampleMenusPageClient />;
}
