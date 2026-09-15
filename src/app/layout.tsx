import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import LenisScroll from "../lib/lenis";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter-app",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo-app",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ahmad | Full-Stack Developer",
    template: "%s | Ahmad",
  },
  description:
    "Full-stack developer building high-impact SaaS products, web platforms, and AI-powered experiences.",
  keywords: [
    "Full-stack developer",
    "Next.js developer",
    "SaaS development",
    "Web development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <LenisScroll />
        {children}
        <Script
          src="https://scrapcher.vercel.app/api/widget"
          data-chatbot-id="505e7c119865e387e66e214a92b97af7d212f0ef1556d16b36a2462f579ad6b6"
          data-name="Assistant"
          data-accent="#78AEFF"
          data-background="#f8fafc"
          data-panel="#ffffff"
          data-text="#0f172a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
