import type { Metadata } from "next";
import { Fraunces, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenMirror — Share your screen. Instantly.",
  description:
    "OpenMirror streams your phone display to any browser over Wi-Fi — no cables, no accounts, no friction.",
  keywords: [
    "screen sharing", "Android", "browser", "Wi-Fi", "local network",
    "open source", "presentation", "mirror", "no install",
  ],
  authors: [{ name: "OpenMirror" }],
  openGraph: {
    title: "OpenMirror — Your phone screen. In your browser. Instantly.",
    description:
      "Share your Android screen to any browser over local Wi-Fi. No install on the viewer side. Just a link.",
    type: "website",
    locale: "en_US",
    siteName: "OpenMirror",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenMirror — Your phone screen. In your browser. Instantly.",
    description:
      "Share your Android screen to any browser over local Wi-Fi. No install, no cable, no friction.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
      className={`${fraunces.variable} ${dmSans.variable} ${dmMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased selection:bg-[#0F1A0F] selection:text-[#EBF0EB]">
        {children}
      </body>
    </html>
  );
}
