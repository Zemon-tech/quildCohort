import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://quild.in'),
  title: {
    default: "Quild Cohort 2.0",
    template: "%s | Quild Cohort"
  },
  description: "Step into the future — guided by clarity. Harness disciplined intelligence to build faster, think deeper, and ship with clarity.",
  keywords: ["software engineering", "fellowship", "coding cohort", "system design", "advanced programming", "AI engineering", "developer mentorship"],
  authors: [{ name: "Quild" }],
  creator: "Quild",
  publisher: "Quild",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quild.in",
    title: "Quild Cohort 2.0 | Advanced Engineering Fellowship",
    description: "Step into the future — guided by clarity. Harness disciplined intelligence to build faster, think deeper, and ship with clarity.",
    siteName: "Quild Cohort",
    images: [
      {
        url: "/Hero.png",
        width: 1200,
        height: 630,
        alt: "Quild Cohort 2.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quild Cohort 2.0 | Advanced Engineering Fellowship",
    description: "Step into the future — guided by clarity. Harness disciplined intelligence to build faster, think deeper, and ship with clarity.",
    images: ["/Hero.png"],
    creator: "@quild_in", // Assuming this is the handle, can be updated
  },
  icons: {
    icon: [
      { url: "/light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/dark.svg", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" }, // Standard practice to include
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen w-full bg-black text-zinc-200 overscroll-none`}
      >
        <Toaster position="top-center" theme="dark" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
