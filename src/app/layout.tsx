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
      <LenisScroll><body className="min-h-full flex flex-col">{children}
      
      <script 
        src="https://scrapcher.vercel.app/api/widget" 
        data-chatbot-id="62922f395cd5a790b879b04d3a4ee595cb60e39d89945cf84ffb7ecbe57c9ad9"
        data-name="Assistant"
        data-accent="#181818"
        data-background="#f8fafc"
        data-panel="#ffffff"
        data-text="#0f172a"
        async>
      </script>
        
      </body></LenisScroll>
    </html>
  );
}
