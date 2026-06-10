# THE FAMILIES — Tienda online

Tercera propuesta de sitio para **The Families**: un ecommerce clásico al estilo Zara / H&M / Pull&Bear. Fondo blanco, letra negra, navbar navegable, grid de productos, ficha con galería + tallas + descripción, y carrito con checkout.

Opción 3 de 3 (1: landing editorial · 2: museo 3D · 3: este).

## Stack
Next.js 16 · TypeScript · Tailwind v4 · Framer Motion. Todo en español, precios en pesos colombianos (COP).

## Estructura
- `/` Home (hero + categorías + novedades)
- `/novedades` y `/categoria/[id]` listados
- `/producto/[slug]` ficha (galería, tallas, descripción, relacionados)
- Carrito global (context + localStorage) con drawer y checkout demo

```bash
npm install && npm run dev
```
