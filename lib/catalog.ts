export type Product = {
  slug: string;
  name: string;
  price: number; // COP
  category: CategoryId;
  color: string;
  sizes: string[];
  gallery: string[];
  description: string;
  composition: string[];
  isNew?: boolean;
};

export type CategoryId = "abrigos" | "tejidos" | "pantalones" | "accesorios";

export const categories: { id: CategoryId; label: string }[] = [
  { id: "abrigos", label: "Abrigos" },
  { id: "tejidos", label: "Tejidos" },
  { id: "pantalones", label: "Pantalones" },
  { id: "accesorios", label: "Accesorios" },
];

export const categoryLabel = (id: CategoryId) => categories.find((c) => c.id === id)?.label ?? id;

const L = (n: number) => `/looks/look-${String(n).padStart(2, "0")}.jpg`;
const CLOTHES = ["XS", "S", "M", "L", "XL"];
const ONE = ["Única"];

export const products: Product[] = [
  { slug: "parka-sudario-piel", name: "Parka Sudario de Piel", price: 1680000, category: "abrigos", color: "Negro", sizes: CLOTHES, gallery: [L(1), L(21), L(15)], description: "Parka oversize de borrego sintético armado a mano, con forro de satín y apliques de cruz. Una prenda construida como una reliquia.", composition: ["Exterior: borrego sintético", "Forro: satín 100% poliéster", "Herraje: níquel oxidado"], isNew: true },
  { slug: "arnes-cuero-tachas", name: "Arnés de Cuero con Tachas", price: 990000, category: "abrigos", color: "Negro", sizes: CLOTHES, gallery: [L(15), L(1), L(21)], description: "Arnés en cuero curtido vegetal con ojales colocados a mano y fuelle de satín esmeralda.", composition: ["Cuero curtido vegetal", "Forro: satín", "Herraje a mano"] },
  { slug: "abrigo-largo-lana", name: "Abrigo Largo de Lana", price: 1290000, category: "abrigos", color: "Gris", sizes: CLOTHES, gallery: [L(33), L(11), L(5)], description: "Abrigo recto de lana recuperada, corte largo y hombros marcados.", composition: ["Lana recuperada", "Forro: viscosa"], isNew: true },
  { slug: "chaqueta-acolchada", name: "Chaqueta Acolchada Fam", price: 740000, category: "abrigos", color: "Beige", sizes: CLOTHES, gallery: [L(39), L(4), L(9)], description: "Chaqueta acolchada con parches de cuadros y leopardo. Detalle de letras Fam 23.", composition: ["Exterior: nylon reciclado", "Relleno: guata reciclada"] },

  { slug: "varsity-fam-23", name: "Varsity Fam 23", price: 820000, category: "tejidos", color: "Pardo", sizes: CLOTHES, gallery: [L(44), L(4), L(19)], description: "Chaqueta varsity en lana pata de gallo recuperada con letras de fieltro y estampado flock de leopardo.", composition: ["Lana pata de gallo", "Apliques de fieltro"], isNew: true },
  { slug: "sudadera-cruz", name: "Sudadera Cruz Verde", price: 420000, category: "tejidos", color: "Negro", sizes: CLOTHES, gallery: [L(11), L(21), L(1)], description: "Sudadera de algodón pesado con apliques de cruz esmeralda.", composition: ["Algodón 100%", "Apliques bordados"] },
  { slug: "tejido-ribete", name: "Top Acanalado Negro", price: 280000, category: "tejidos", color: "Negro", sizes: CLOTHES, gallery: [L(21), L(15), L(1)], description: "Top de canalé ajustado, base de cualquier look del archivo.", composition: ["Algodón acanalado", "Elastano 5%"] },
  { slug: "hoodie-leopardo", name: "Hoodie Leopardo", price: 480000, category: "tejidos", color: "Pardo", sizes: CLOTHES, gallery: [L(9), L(4), L(44)], description: "Hoodie pata de gallo con paneles de leopardo y herraje utilitario.", composition: ["Mezcla de algodón", "Paneles flock"] },

  { slug: "denim-tartan", name: "Denim Tartán Recuperado", price: 740000, category: "pantalones", color: "Índigo", sizes: CLOTHES, gallery: [L(23), L(14), L(9)], description: "Jean ancho en denim índigo vintage con parches de tartán y costura de cadeneta.", composition: ["Denim 100% algodón", "Parches de tartán"], isNew: true },
  { slug: "cargo-patchwork", name: "Cargo Patchwork", price: 790000, category: "pantalones", color: "Pardo", sizes: CLOTHES, gallery: [L(9), L(4), L(14)], description: "Pantalón cargo en pata de gallo recuperada con paneles de leopardo en rodillas.", composition: ["Pata de gallo", "Herraje utilitario"] },
  { slug: "short-track-families", name: "Short Track Families", price: 530000, category: "pantalones", color: "Índigo", sizes: CLOTHES, gallery: [L(23), L(8), L(31)], description: "Short largo en denim lavado a la piedra con franja de tartán tipo racing.", composition: ["Denim lavado", "Logo de cadeneta"] },
  { slug: "pantalon-sastre", name: "Pantalón Sastre Roto", price: 620000, category: "pantalones", color: "Negro", sizes: CLOTHES, gallery: [L(40), L(33), L(15)], description: "Pantalón de sastrería deconstruida, corte recto con acabados deshilachados.", composition: ["Lana fría", "Forro parcial"] },

  { slug: "mascara-leopardo", name: "Máscara Trapper Leopardo", price: 450000, category: "accesorios", color: "Naranja", sizes: ONE, gallery: [L(34), L(29), L(38)], description: "Máscara-gorro en piel sintética de leopardo con panel facial tratado y botones vintage.", composition: ["Piel sintética", "Botones vintage"], isNew: true },
  { slug: "balaclava-cruz", name: "Balaclava Cruz Verde", price: 320000, category: "accesorios", color: "Negro", sizes: ONE, gallery: [L(21), L(1), L(11)], description: "Balaclava de algodón acanalado con aplique de cruz esmeralda y velo con flecos.", composition: ["Algodón acanalado", "Aplique de cruz"] },
  { slug: "collar-cruz", name: "Collar Cruz Plata", price: 290000, category: "accesorios", color: "Plata", sizes: ONE, gallery: [L(1), L(15), L(21)], description: "Collar de cadena tipo cuerda con dije de cruz gótica.", composition: ["Aleación plateada", "Acabado pulido"] },
  { slug: "botas-plaid", name: "Botas Forradas Plaid", price: 690000, category: "accesorios", color: "Camel", sizes: ["36", "37", "38", "39", "40", "41", "42"], gallery: [L(9), L(23), L(14)], description: "Botas de trabajo con polainas de cuadros y forro térmico.", composition: ["Cuero y textil", "Suela de goma"] },
];

export const formatCOP = (n: number) => "$" + n.toLocaleString("es-CO");

export const newArrivals = products.filter((p) => p.isNew);
export const byCategory = (id: CategoryId) => products.filter((p) => p.category === id);
export const findProduct = (slug: string) => products.find((p) => p.slug === slug);
export const related = (p: Product) => products.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 4);
