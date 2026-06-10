import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { byCategory, categories, categoryLabel, type CategoryId } from "@/lib/catalog";

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  return { title: categoryLabel(id as CategoryId) };
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!categories.some((c) => c.id === id)) notFound();
  const items = byCategory(id as CategoryId);

  return (
    <div className="mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12">
      <nav className="mb-4 text-[12px] text-neutral-500">
        <Link href="/" className="hover:text-black">Inicio</Link> / <span className="text-black">{categoryLabel(id as CategoryId)}</span>
      </nav>
      <div className="mb-6 flex items-end justify-between border-b border-neutral-200 pb-4">
        <h1 className="text-2xl font-semibold upper">{categoryLabel(id as CategoryId)}</h1>
        <span className="tnav text-neutral-500">{items.length} artículos</span>
      </div>
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
        {items.map((p, i) => <ProductCard key={p.slug} p={p} priority={i < 4} />)}
      </div>
    </div>
  );
}
