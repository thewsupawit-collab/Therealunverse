import type { Metadata, Viewport } from "next";
import { Inter, Fraunces, IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { siteConfig } from "@/lib/site";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-serif",
  display: "swap",
});

const thai = IBM_Plex_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-thai",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0A0807",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "personal trainer",
    "1:1 coaching",
    "เทรนเนอร์ส่วนตัว",
    "โค้ชฟิตเนส",
    "ลดน้ำหนัก",
    "เปลี่ยนหุ่น",
    "mindset coaching",
    "สุขภาพ",
    "transformation",
  ],
  authors: [{ name: siteConfig.coach.fullName }],
  creator: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "th_TH",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`dark ${sans.variable} ${display.variable} ${thai.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          ข้ามไปยังเนื้อหา
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
