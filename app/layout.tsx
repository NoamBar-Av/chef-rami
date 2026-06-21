import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "שף רמי | חוויה קולינרית",
  description: "שף רמי - אירוח פרטי, תפריטים מותאמים אישית ואהבה לאוכל טוב.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="border-b border-black/10 bg-white/90 backdrop-blur-sm">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold text-amber-700">
              שף רמי
            </Link>
            <div className="flex items-center gap-5 text-sm font-medium sm:text-base">
              <Link href="/" className="nav-link">
                בית
              </Link>
              <Link href="/gallery" className="nav-link">
                גלריה
              </Link>
              <Link href="/about" className="nav-link">
                אודות
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-black/10 py-4 text-center text-sm text-zinc-600">
          כל הזכויות שמורות © שף רמי
        </footer>
      </body>
    </html>
  );
}
