"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "./CartContext";
import { formatCOP } from "@/lib/catalog";

export default function CartDrawer() {
  const { lines, subtotal, open, setOpen, setQty, remove, clear } = useCart();
  const [done, setDone] = useState(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-50 bg-black/30" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-full w-[min(100vw,420px)] flex-col bg-white"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-4">
              <span className="tnav">Tu cesta ({lines.reduce((s, l) => s + l.qty, 0)})</span>
              <button className="tnav text-[var(--muted)] hover:text-[var(--ink)]" onClick={() => setOpen(false)}>Cerrar</button>
            </div>

            {done ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <p className="text-xl font-semibold">¡Gracias por tu compra!</p>
                <p className="mt-3 text-[var(--muted)]">Recibirás un correo con el detalle. (Demostración)</p>
                <button onClick={() => { clear(); setDone(false); setOpen(false); }} className="mt-8 bg-[var(--ink)] px-8 py-3 text-white tnav">Seguir comprando</button>
              </div>
            ) : lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
                <p className="text-[var(--muted)]">Tu cesta está vacía.</p>
                <button onClick={() => setOpen(false)} className="mt-6 border border-[var(--ink)] px-8 py-3 tnav hover:bg-[var(--ink)] hover:text-white">Ver productos</button>
              </div>
            ) : (
              <>
                <div className="hide-scroll flex-1 overflow-y-auto px-5">
                  {lines.map((l) => (
                    <div key={l.slug + l.size} className="flex gap-4 border-b border-[var(--line)] py-4">
                      <Link href={`/producto/${l.slug}`} onClick={() => setOpen(false)} className="relative h-28 w-22 shrink-0 overflow-hidden bg-[#f4f4f4]" style={{ width: 88 }}>
                        <Image src={l.image} alt={l.name} fill sizes="88px" className="object-cover" />
                      </Link>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex justify-between gap-2">
                          <h3 className="text-[13px] font-medium leading-snug">{l.name}</h3>
                          <button onClick={() => remove(l.slug, l.size)} className="shrink-0 text-[11px] text-[var(--muted)] underline">Quitar</button>
                        </div>
                        <span className="mt-0.5 text-[12px] text-[var(--muted)]">Talla {l.size}</span>
                        <div className="mt-auto flex items-center justify-between">
                          <div className="flex items-center border border-[var(--line)]">
                            <button onClick={() => setQty(l.slug, l.size, -1)} className="px-2.5 py-1 hover:bg-[#f4f4f4]">−</button>
                            <span className="min-w-6 text-center text-[13px]">{l.qty}</span>
                            <button onClick={() => setQty(l.slug, l.size, 1)} className="px-2.5 py-1 hover:bg-[#f4f4f4]">+</button>
                          </div>
                          <span className="text-[13px] font-medium">{formatCOP(l.price * l.qty)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-[var(--line)] px-5 py-5">
                  <div className="flex items-center justify-between">
                    <span className="tnav">Subtotal</span>
                    <span className="text-base font-semibold">{formatCOP(subtotal)}</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[var(--muted)]">Impuestos incluidos. Envío calculado al pagar.</p>
                  <button onClick={() => setDone(true)} className="mt-4 w-full bg-[var(--ink)] py-4 text-white tnav transition-opacity hover:opacity-85">Tramitar pedido</button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
