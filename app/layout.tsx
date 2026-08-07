import { SmoothScroll } from "@/components/smooth-scroll";
import type { Metadata } from "next";
import { LocaleProvider } from "@/lib/i18n";
import "./globals.css";

export const metadata: Metadata = {
  title: "Symmetrica — Центр стоматологічного відновлення | Львів",
  description: "Холістична дентальна імплантація, All-on-4/All-on-6 за 1 день, керамічні вініри, власна лабораторія Symmetrica Tech та ліцензована анестезіологія у Львові. Est. 2013.",
  keywords: ["стоматологія Львів", "імплантація зубів Львів", "All-on-4", "вініри Львів", "лікування зубів уві сні", "Symmetrica"],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Symmetrica — Центр стоматологічного відновлення",
    description: "Комплексне стоматологічне відновлення з гарантією за договором у Львові.",
    type: "website",
    locale: "uk_UA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Playfair+Display:ital,wght@0,500..800;1,500..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      <SmoothScroll /></body>
    </html>
  );
}
