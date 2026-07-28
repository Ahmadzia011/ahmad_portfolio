import type { Metadata } from "next";
import { Inter, Archivo } from "next/font/google";
import "./globals.css";
import LenisScroll from "../lib/lenis";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmad",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable} h-full antialiased`}>
      <LenisScroll><body className="min-h-full flex flex-col">{children}</body></LenisScroll>
    </html>
  );
}
