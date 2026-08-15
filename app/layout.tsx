import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const editorial = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-editorial"
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Luxury Decor Home | Revestimientos Premium",
  description: "Luxury Decor Home, showroom premium de revestimientos, wallpapers y decoración en República Dominicana."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${editorial.variable} ${sans.variable} bg-ivory font-sans text-ink antialiased`}>
        {children}
      </body>
    </html>
  );
}
