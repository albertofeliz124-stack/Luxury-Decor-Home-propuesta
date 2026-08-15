import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxury Decor Home | Revestimientos Premium",
  description: "Luxury Decor Home, showroom premium de revestimientos, wallpapers y decoración en República Dominicana."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-ivory font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
