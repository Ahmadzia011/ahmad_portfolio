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
    default: "Ahmad Zia | Full-Stack Developer",
    template: "%s | Ahmad Zia",
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
            data-chatbot-id="62922f395cd5a790b879b04d3a4ee595cb60e39d89945cf84ffb7ecbe57c9ad9"
            data-name="Ahmad's Assistant"
            data-accent="#181818"
            data-background="#f8fafc"
            data-panel="#ffffff"
            data-text="#0f172a"
            strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
