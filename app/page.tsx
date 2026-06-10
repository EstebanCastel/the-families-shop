import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { categories, newArrivals, products } from "@/lib/catalog";

export default function Home() {
  const featured = newArrivals.length ? newArrivals : products.slice(0, 8);
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[72vh] min-h-[460px] w-full overflow-hidden bg-[#f4f4f4]">
        <Image src="/looks/look-01.jpg" alt="Colección" fill priority sizes="100vw" className="object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center text-white">
          <p className="tnav mb-3 text-white/80">Capítulo 01 — Santos del Hogar</p>
          <h1 className="text-4xl font-semibold upper md:text-6xl">Nueva colección</h1>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/novedades" className="bg-white px-8 py-3 text-black tnav transition-colors hover:bg-black hover:text-white">Comprar</Link>
            <Link href="/categoria/abrigos" className="border border-white px-8 py-3 tnav transition-colors hover:bg-white hover:text-black">Abrigos</Link>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="mx-auto max-w-[1400px] px-4 py-10 md:px-8 md:py-14">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((c, i) => (
            <Link key={c.id} href={`/categoria/${c.id}`} className="group relative aspect-[3/4] overflow-hidden bg-[#f4f4f4]">
              <Image src={products.find((p) => p.category === c.id)?.gallery[0] ?? "/looks/look-04.jpg"} alt={c.label} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/30 to-transparent p-4">
                <span className="text-white tnav text-[15px]">{c.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Novedades */}
      <section className="mx-auto max-w-[1400px] px-4 pb-6 md:px-8">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-xl font-semibold upper md:text-2xl">Novedades</h2>
          <Link href="/novedades" className="tnav text-neutral-500 hover:text-black">Ver todo</Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-5">
          {featured.map((p, i) => <ProductCard key={p.slug} p={p} priority={i < 4} />)}
        </div>
      </section>
    </div>
  );
}
