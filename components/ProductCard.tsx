import Link from "next/link";
import Image from "next/image";
import { formatCOP, type Product } from "@/lib/catalog";

export default function ProductCard({ p, priority }: { p: Product; priority?: boolean }) {
  return (
    <Link href={`/producto/${p.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f4f4f4]">
        <Image src={p.gallery[0]} alt={p.name} fill sizes="(max-width:768px) 50vw, 25vw" priority={priority} className="object-cover transition-opacity duration-500 group-hover:opacity-0" />
        {p.gallery[1] && (
          <Image src={p.gallery[1]} alt={`${p.name} alterna`} fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        )}
        {p.isNew && <span className="absolute left-2 top-2 bg-white px-2 py-0.5 text-[10px] tracking-wider upper">Nuevo</span>}
      </div>
      <div className="mt-2.5">
        <h3 className="text-[13px] leading-snug">{p.name}</h3>
        <div className="mt-0.5 flex items-center justify-between">
          <span className="text-[13px] text-[var(--muted)]">{p.color}</span>
          <span className="text-[13px] font-medium">{formatCOP(p.price)}</span>
        </div>
      </div>
    </Link>
  );
}
