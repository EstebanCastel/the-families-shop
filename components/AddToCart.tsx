"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import type { Product } from "@/lib/catalog";

export default function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const single = product.sizes.length === 1;
  const [size, setSize] = useState<string | null>(single ? product.sizes[0] : null);
  const [err, setErr] = useState(false);

  const onAdd = () => {
    if (!size) { setErr(true); return; }
    add({ slug: product.slug, name: product.name, image: product.gallery[0], price: product.price, size });
  };

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="tnav">Talla</span>
        <button className="text-[12px] text-[var(--muted)] underline underline-offset-2">Guía de tallas</button>
      </div>
      <div className="flex flex-wrap gap-2">
        {product.sizes.map((s) => (
          <button
            key={s}
            onClick={() => { setSize(s); setErr(false); }}
            className={`min-w-12 border px-3 py-2.5 text-[13px] transition-colors ${size === s ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-[var(--line)] hover:border-[var(--ink)]"}`}
          >
            {s}
          </button>
        ))}
      </div>
      {err && <p className="mt-2 text-[12px] text-[var(--sale)]">Selecciona una talla.</p>}

      <button onClick={onAdd} className="mt-5 w-full bg-[var(--ink)] py-4 text-white tnav transition-opacity hover:opacity-85">
        Añadir a la cesta
      </button>
      <button onClick={onAdd} className="mt-2 w-full border border-[var(--ink)] py-4 tnav transition-colors hover:bg-[#f4f4f4]">
        Comprar ahora
      </button>
    </div>
  );
}
