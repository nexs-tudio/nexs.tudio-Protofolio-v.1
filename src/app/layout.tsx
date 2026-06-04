import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nexs.tudio";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "nexs.tudio | Software Engineering Studio",
    template: "%s | nexs.tudio",
  },
  description:
    "nexs.tudio builds full-stack web apps, APIs, analytics dashboards, and cloud-ready software for growing teams.",
  openGraph: {
    title: "nexs.tudio | Software Engineering Studio",
    description:
      "Production-focused software for founders and businesses that need reliable systems shipped fast.",
    url: siteUrl,
    siteName: "nexs.tudio",
    images: [
      {
        url: "/assets/nexstudio_cover_centered.png",
        width: 1128,
        height: 191,
        alt: "nexs.tudio software engineering studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "nexs.tudio | Software Engineering Studio",
    description:
      "Full-stack web apps, APIs, dashboards, and cloud-ready systems.",
    images: ["/assets/nexstudio_cover_centered.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
