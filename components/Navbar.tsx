"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "@/lib/catalog";
import { useCart } from "./CartContext";

const NAV = [{ href: "/novedades", label: "Novedades" }, ...categories.map((c) => ({ href: `/categoria/${c.id}`, label: c.label }))];

export default function Navbar() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="bg-black py-2 text-center text-[11px] tracking-[0.14em] text-white upper">
        Envío gratis en compras superiores a $300.000 · Devoluciones en 30 días
      </div>
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 md:h-16 md:px-8">
          <button className="tnav md:hidden" onClick={() => setMenu(true)} aria-label="Menú">Menú</button>

          <ul className="hidden items-center gap-7 md:flex">
            {NAV.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={`tnav transition-opacity hover:opacity-60 ${pathname === l.href ? "underline underline-offset-4" : ""}`}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <Link href="/" className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2" aria-label="The Families">
            <Image src="/logo/logo.png" alt="The Families" width={28} height={28} className="h-7 w-7" />
            <span className="hidden text-[15px] font-semibold tracking-[0.3em] upper sm:inline">The&nbsp;Families</span>
          </Link>

          <div className="flex items-center gap-5">
            <Link href="/novedades" className="tnav hidden transition-opacity hover:opacity-60 md:inline">Buscar</Link>
            <button onClick={() => setOpen(true)} className="tnav flex items-center gap-1.5" aria-label="Carrito">
              Cesta
              <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-black px-1 text-[10px] text-white">{count}</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Menú móvil */}
      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-50 bg-white md:hidden" initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}>
            <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-4">
              <span className="tnav">Menú</span>
              <button className="tnav" onClick={() => setMenu(false)}>Cerrar</button>
            </div>
            <ul className="px-4 py-3">
              {NAV.map((l) => (
                <li key={l.href} className="border-b border-neutral-200">
                  <Link href={l.href} onClick={() => setMenu(false)} className="block py-4 text-lg upper">{l.label}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
