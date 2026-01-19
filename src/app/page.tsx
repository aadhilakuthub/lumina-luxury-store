"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  const featuredProducts = products.slice(0, 3); // first 3 featured

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-black"
    >
      {/* Hero Section */}
      <section
        className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/products/hero-luxury.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-2xl px-6 text-center text-white"
        >
          <h1 className="mb-6 text-5xl md:text-6xl font-semibold tracking-tight">
            Minimal. Modern. Luxury.
          </h1>
          <p className="mb-10 text-lg text-gray-200">
            Timeless fashion crafted with precision, restraint, and elegance.
          </p>
          <Link href="/shop">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full bg-white px-10 py-4 text-sm font-medium text-black shadow-md hover:shadow-xl transition"
            >
              Shop Collection
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-32">
        <h2 className="mb-12 text-2xl font-semibold text-center md:text-left">
          Featured Collection
        </h2>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}
