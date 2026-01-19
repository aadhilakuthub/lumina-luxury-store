"use client";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";

export default function CollectionPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white min-h-screen px-6 py-10 md:px-12 lg:px-20"
    >
      {/* Optional Hero */}
      <section className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Collection</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Explore our full range of minimal luxury pieces crafted with precision and elegance.
        </p>
      </section>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
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
    </motion.main>
  );
}
