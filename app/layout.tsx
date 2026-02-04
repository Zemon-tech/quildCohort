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
  title: "Quild Cohort",
  description: "Step into the future — guided by clarity.",
  icons: {
    icon: [
      { url: "/light.svg", media: "(prefers-color-scheme: light)" },
      { url: "/dark.svg", media: "(prefers-color-scheme: dark)" },
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
