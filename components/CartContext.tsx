"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartLine = { slug: string; name: string; image: string; price: number; size: string; qty: number };

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (l: Omit<CartLine, "qty">, qty?: number) => void;
  setQty: (slug: string, size: string, delta: number) => void;
  remove: (slug: string, size: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "tf-shop-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) setLines(JSON.parse(raw)); } catch {}
  }, []);
  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(lines)); } catch {}
  }, [lines]);

  const add: CartCtx["add"] = (l, qty = 1) => {
    setLines((prev) => {
      const i = prev.findIndex((x) => x.slug === l.slug && x.size === l.size);
      if (i >= 0) { const copy = [...prev]; copy[i] = { ...copy[i], qty: copy[i].qty + qty }; return copy; }
      return [...prev, { ...l, qty }];
    });
    setOpen(true);
  };
  const setQty: CartCtx["setQty"] = (slug, size, delta) =>
    setLines((prev) => prev.flatMap((x) => (x.slug === slug && x.size === size ? (x.qty + delta <= 0 ? [] : [{ ...x, qty: x.qty + delta }]) : [x])));
  const remove: CartCtx["remove"] = (slug, size) => setLines((prev) => prev.filter((x) => !(x.slug === slug && x.size === size)));
  const clear = () => setLines([]);

  const count = lines.reduce((s, l) => s + l.qty, 0);
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);

  const value = useMemo(() => ({ lines, count, subtotal, open, setOpen, add, setQty, remove, clear }), [lines, count, subtotal, open]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart fuera de CartProvider");
  return c;
};
