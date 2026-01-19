"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { motion } from "framer-motion";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`}>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-white"
      >
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.price}</p>
        </div>
      </motion.div>
    </Link>
  );
}
