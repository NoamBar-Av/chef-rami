import "./globals.css";

export const metadata = {
  title: "שף רמי | שף פרטי לאירועים"
};

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <a href="#main-content" className="skip-link">
          דלג לתוכן המרכזי
        </a>
        {children}
      </body>
    </html>
  );
}