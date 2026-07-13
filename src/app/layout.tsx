import type { Metadata, Viewport } from "next";
import { Merriweather } from "next/font/google";
import { Navbar } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LoadingScreen, ScrollProgress, BackToTop } from "@/components/layout";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Rev. Victor Ifeanyi Anaele — Remnant Christian Network",
    template: "%s | Rev. Victor Anaele",
  },
  description:
    "Official website of Reverend Victor Ifeanyi Anaele, Resident Pastor of Remnant Christian Network (RCN) Uyo Apostolic Center. Ministry, sermons, conferences, and partnerships.",
  keywords: [
    "Rev Victor Anaele",
    "Remnant Christian Network",
    "RCN Uyo",
    "Apostolic Center",
    "sermons",
    "ministry",
    "conferences",
  ],
  authors: [{ name: "Rev. Victor Ifeanyi Anaele" }],
  openGraph: {
    title: "Rev. Victor Ifeanyi Anaele — Remnant Christian Network",
    description:
      "Official website of Reverend Victor Ifeanyi Anaele. Apostolic ministry, sermons, conferences, and partnerships.",
    type: "website",
    locale: "en_US",
    siteName: "Rev. Victor Anaele Ministry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rev. Victor Ifeanyi Anaele",
    description:
      "Resident Pastor, Remnant Christian Network (RCN) Uyo Apostolic Center.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} h-full`}>
      <body className="noise min-h-full flex flex-col">
        {/* Loading Screen */}
        <LoadingScreen />
        
        {/* Scroll Progress */}
        <ScrollProgress />

        {/* Skip to main content — WCAG AA */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="flex-1 relative">
          {children}
        </main>

        {/* Back to top button */}
        <BackToTop />

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
