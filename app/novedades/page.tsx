import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/catalog";

export const metadata: Metadata = { title: "Novedades", description: "Lo último de THE FAMILIES." };

export default function Novedades() {
  const ordered = [...products].sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12">
      <div className="mb-6 flex items-end justify-between border-b border-[var(--line)] pb-4">
        <h1 className="text-2xl font-semibold upper">Novedades</h1>
        <span className="tnav text-[var(--muted)]">{ordered.length} artículos</span>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
        {ordered.map((p, i) => <ProductCard key={p.slug} p={p} priority={i < 4} />)}
      </div>
    </div>
  );
}
