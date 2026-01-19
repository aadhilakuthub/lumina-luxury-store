"use client";

// src/app/shop/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { use } from "react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);

  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white px-6 py-10 text-black md:px-12 lg:px-20"
    >
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-gray-500">
        <Link href="/" className="hover:underline">Home</Link> /{" "}
        <Link href="/shop" className="hover:underline">Collection</Link> /{" "}
        <span className="text-gray-700">{product.name}</span>
      </nav>

      <div className="flex flex-col gap-10 md:flex-row">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-lg md:w-1/2"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center md:w-1/2"
        >
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            {product.name}
          </h1>

          <p className="mb-6 leading-relaxed text-gray-600">
            {product.description}
          </p>

          <p className="mb-8 text-2xl font-semibold">
            {product.price}
          </p>

          <button className="rounded-full bg-black px-8 py-3 text-sm text-white shadow-md transition hover:bg-gray-800">
            Add to Cart
          </button>

          <Link
            href="/shop"
            className="mt-6 inline-block text-sm text-gray-500 hover:underline"
          >
            ← Back to Collection
          </Link>
        </motion.div>
      </div>

      {/* Recommended Products */}
      <section className="mt-20">
        <h2 className="mb-6 text-2xl font-semibold">
          You might also like
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((p) => (
              <Link key={p.id} href={`/shop/${p.slug}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer overflow-hidden rounded-xl border border-gray-200 bg-white"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>

                  <div className="p-3">
                    <h3 className="text-sm font-medium">{p.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{p.price}</p>
                  </div>
                </motion.div>
              </Link>
            ))}
        </div>
      </section>
    </motion.main>
  );
}
