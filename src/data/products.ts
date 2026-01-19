export interface Product {
  id: number;
  slug: string;
  name: string;
  price: string;
  image: string;
  description: string;
}
export const products: Product[] = [
  {
    id: 1,
    name: "Silk Evening Dress",
    price: "$240",
    image: "/products/dress-1.jpg",
    slug: "silk-evening-dress",
    description:
      "A refined silk evening dress designed for timeless elegance and effortless luxury.",
  },
  {
    id: 2,
    name: "Minimal Linen Shirt",
    price: "$120",
    image: "/products/product-2.jpg",
    slug: "minimal-linen-shirt",
    description:
      "Crafted from premium linen, this shirt blends comfort with modern minimalism.",
  },
  {
    id: 3,
    name: "Tailored Wool Coat",
    price: "$320",
    image: "/products/product-3.jpg",
    slug: "tailored-wool-coat",
    description:
      "A structured wool coat with clean lines, designed for a powerful silhouette.",
  },
  {
    id: 4,
    name: "Cashmere Cardigan",
    price: "$280",
    image: "/products/product-4.jpg",
    slug: "cashmere-cardigan",
    description:
      "Soft premium cashmere knit, perfect for layering in understated luxury.",
  },
  {
    id: 5,
    name: "Minimal Linen Trousers",
    price: "$150",
    image: "/products/product-5.jpg",
    slug: "linen-trousers",
    description:
      "Tailored linen trousers offering breathable comfort with a refined finish.",
  },
  {
    id: 6,
    name: "Silk Blouse",
    price: "$180",
    image: "/products/product-6.jpg",
    slug: "silk-blouse",
    description:
      "A fluid silk blouse that elevates everyday wear with quiet elegance.",
  },
  {
    id: 7,
    name: "Tailored Wool Blazer",
    price: "$340",
    image: "/products/product-7.jpg",
    slug: "wool-blazer",
    description:
      "Precision-tailored wool blazer crafted for a strong, modern silhouette.",
  },
  {
    id: 8,
    name: "Cashmere Scarf",
    price: "$90",
    image: "/products/scarf-1.jpg",
    slug: "cashmere-scarf",
    description:
      "Luxuriously soft cashmere scarf designed for warmth and timeless style.",
  },
  {
    id: 9,
    name: "Classic Linen Shirt",
    price: "$110",
    image: "/products/product-9.jpg",
    slug: "linen-shirt",
    description:
      "A classic linen shirt reimagined with clean lines and a modern cut.",
  },
  {
    id: 10,
    name: "Ivory Tailored Blazer",
    price: "$150",
    image: "/products/blazer-1.jpg",
    slug: "ivory-tailored-blazer",
    description:
      "An ivory-toned blazer offering refined tailoring with a minimalist edge.",
  },
  {
    id: 11,
    name: "Midnight Pleated Skirt",
    price: "$90",
    image: "/products/skirt-1.jpg",
    slug: "midnight-pleated-skirt",
    description:
      "Elegant pleated skirt in deep midnight tones for a graceful silhouette.",
  },
  {
    id: 12,
    name: "Emerald Satin Top",
    price: "$70",
    image: "/products/top-1.jpg",
    slug: "emerald-satin-top",
    description:
      "Satin top in emerald hues, balancing bold color with refined simplicity.",
  },
  {
    id: 13,
    name: "Classic Leather Jacket",
    price: "$200",
    image: "/products/jacket-1.jpg",
    slug: "classic-leather-jacket",
    description:
      "A timeless leather jacket crafted for durability, attitude, and elegance.",
  },
  {
    id: 14,
    name: "Vintage Denim Jeans",
    price: "$80",
    image: "/products/jeans-1.jpg",
    slug: "vintage-denim-jeans",
    description:
      "Vintage-inspired denim with a modern fit and premium fabric finish.",
  },
  {
    id: 15,
    name: "Elegant Evening Gown",
    price: "$250",
    image: "/products/gown-1.jpg",
    slug: "elegant-evening-gown",
    description:
      "A flowing evening gown designed for statement moments and refined luxury.",
  },
];
