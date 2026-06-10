import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import ProductCard from "@/components/ProductCard";
import { products, findProduct, related, formatCOP, categoryLabel } from "@/lib/catalog";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = findProduct(slug);
  if (!p) return {};
  return { title: p.name, description: p.description, openGraph: { images: [{ url: p.gallery[0] }] } };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = findProduct(slug);
  if (!p) notFound();
  const rel = related(p);

  return (
    <div className="mx-auto max-w-[1400px] px-0 md:px-8 md:py-6">
      <nav className="px-4 py-3 text-[12px] text-neutral-500 md:px-0">
        <Link href="/" className="hover:text-black">Inicio</Link> / <Link href={`/categoria/${p.category}`} className="hover:text-black">{categoryLabel(p.category)}</Link> / <span className="text-black">{p.name}</span>
      </nav>

      <div className="md:grid md:grid-cols-[1.6fr_1fr] md:gap-10">
        {/* Galería */}
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
          {p.gallery.map((src, i) => (
            <div key={src} className={`relative aspect-[3/4] bg-[#f4f4f4] ${i === 0 ? "sm:col-span-2" : ""}`}>
              <Image src={src} alt={`${p.name} ${i + 1}`} fill priority={i === 0} sizes="(max-width:768px) 100vw, 60vw" className="object-cover" />
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="px-4 pb-10 pt-6 md:px-0 md:pt-2">
          <div className="md:sticky md:top-24">
            <p className="tnav mb-2 text-neutral-500">{categoryLabel(p.category)}</p>
            <h1 className="text-xl font-medium md:text-2xl">{p.name}</h1>
            <p className="mt-2 text-lg">{formatCOP(p.price)}</p>
            <p className="mt-1 text-[13px] text-neutral-500">Color: {p.color}</p>

            <div className="mt-7">
              <AddToCart product={p} />
            </div>

            <p className="mt-5 text-[12px] text-neutral-500">Envío gratis desde $300.000 · Devoluciones en 30 días · Hecho a pedido en 2–4 semanas</p>

            <div className="mt-8 border-t border-neutral-200">
              <details className="border-b border-neutral-200" open>
                <summary className="cursor-pointer list-none py-4 tnav">Descripción</summary>
                <p className="pb-5 text-[13px] leading-relaxed text-[#444]">{p.description}</p>
              </details>
              <details className="border-b border-neutral-200">
                <summary className="cursor-pointer list-none py-4 tnav">Composición y cuidados</summary>
                <ul className="pb-5 text-[13px] leading-relaxed text-[#444]">
                  {p.composition.map((c) => <li key={c}>· {c}</li>)}
                  <li className="mt-2 text-neutral-500">Lavar a mano en frío. Secar en plano.</li>
                </ul>
              </details>
              <details className="border-b border-neutral-200">
                <summary className="cursor-pointer list-none py-4 tnav">Envíos y devoluciones</summary>
                <p className="pb-5 text-[13px] leading-relaxed text-[#444]">Envíos a toda Colombia (2–6 días hábiles). Cambios y devoluciones gratuitos dentro de 30 días. Cada pieza llega con su ficha de archivo.</p>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Relacionados */}
      {rel.length > 0 && (
        <section className="px-4 pt-10 md:px-0">
          <h2 className="mb-6 text-lg font-semibold upper">También te puede gustar</h2>
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
            {rel.map((r) => <ProductCard key={r.slug} p={r} />)}
          </div>
        </section>
      )}
    </div>
  );
}
