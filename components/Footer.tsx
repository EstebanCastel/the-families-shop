import Link from "next/link";
import { categories } from "@/lib/catalog";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--line)] bg-white">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="tnav mb-4">Tienda</p>
          <ul className="space-y-2 text-[13px] text-[var(--muted)]">
            <li><Link href="/novedades" className="hover:text-[var(--ink)]">Novedades</Link></li>
            {categories.map((c) => <li key={c.id}><Link href={`/categoria/${c.id}`} className="hover:text-[var(--ink)]">{c.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <p className="tnav mb-4">Ayuda</p>
          <ul className="space-y-2 text-[13px] text-[var(--muted)]">
            <li>Envíos y entregas</li><li>Cambios y devoluciones</li><li>Guía de tallas</li><li>Contacto</li>
          </ul>
        </div>
        <div>
          <p className="tnav mb-4">The Families</p>
          <ul className="space-y-2 text-[13px] text-[var(--muted)]">
            <li>Nuestra historia</li>
            <li><a href="https://www.instagram.com/t.families/" target="_blank" rel="noreferrer" className="hover:text-[var(--ink)]">Instagram</a></li>
            <li>Sostenibilidad</li>
          </ul>
        </div>
        <div>
          <p className="tnav mb-4">Newsletter</p>
          <p className="mb-3 text-[13px] text-[var(--muted)]">Suscríbete y recibe novedades del archivo.</p>
          <form className="flex border-b border-[var(--ink)]">
            <input type="email" placeholder="Correo electrónico" className="w-full bg-transparent py-2 text-[13px] outline-none" />
            <button className="tnav">Enviar</button>
          </form>
        </div>
      </div>
      <div className="border-t border-[var(--line)] px-4 py-5 text-center text-[11px] text-[var(--muted)] md:px-8">
        © 2026 The Families · Bogotá, Colombia · Precios en pesos colombianos (COP)
      </div>
    </footer>
  );
}
