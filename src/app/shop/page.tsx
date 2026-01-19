"use client";

import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function Shop() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white text-black"
    >
      {/* Shop Hero */}
      <section
        className="relative flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/products/hero-shop.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 text-center"
        >
          <h1 className="mb-4 text-4xl md:text-5xl font-semibold text-white">
            Explore the Collection
          </h1>
          <p className="mx-auto max-w-xl text-gray-200">
            Minimal luxury designed for timeless elegance.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-12 text-2xl font-semibold text-center md:text-left">
          All Products
        </h2>
        <motion.div
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.03 }}
              className="transition-shadow hover:shadow-xl"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.main>
  );
}
