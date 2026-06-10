import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: { default: "THE FAMILIES — Tienda online", template: "%s · THE FAMILIES" },
  description: "Tienda online de THE FAMILIES. Abrigos, tejidos, pantalones y accesorios. Envíos a toda Colombia, precios en pesos colombianos.",
  openGraph: { title: "THE FAMILIES — Tienda online", locale: "es_CO", type: "website" },
  icons: { icon: "/logo/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
