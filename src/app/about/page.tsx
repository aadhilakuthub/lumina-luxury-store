// src/app/about/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white text-black">
      
      {/* Hero Section */}
      <section
        className="relative flex min-h-[60vh] items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/products/hero-about.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6 text-center text-white"
        >
          <h1 className="mb-4 text-5xl font-semibold">About Lumina</h1>
          <p className="mx-auto max-w-xl text-gray-200">
            Crafting timeless fashion with simplicity, elegance, and precision. Every piece tells a story of luxury, minimalism, and quality.
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="mb-6 text-3xl font-semibold">Our Story</h2>
        <p className="mx-auto max-w-3xl text-gray-700 leading-relaxed">
          Lumina was born from the desire to create clothing that merges sophistication with everyday wear. We focus on timeless silhouettes, the finest materials, and a philosophy that less is truly more.
        </p>
      </section>

      {/* Values / Mission */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 grid gap-12 sm:grid-cols-3 text-center">
          <div>
            <h3 className="mb-2 text-xl font-semibold">Quality</h3>
            <p className="text-gray-600">Meticulous craftsmanship using premium fabrics to ensure lasting luxury.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Sustainability</h3>
            <p className="text-gray-600">Ethical production and eco-conscious practices in every step.</p>
          </div>
          <div>
            <h3 className="mb-2 text-xl font-semibold">Minimalism</h3>
            <p className="text-gray-600">Elegant designs that focus on simplicity and timeless style.</p>
          </div>
        </div>
      </section>

      {/* CTA Button */}
      <section className="text-center py-20">
        <Link href="/collection">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-black px-10 py-4 text-sm text-white shadow-md hover:shadow-lg transition"
          >
            Explore Collection
          </motion.button>
        </Link>
      </section>
      
    </motion.main>
  );
}
