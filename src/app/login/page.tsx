"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", form);
    setSubmitted(true);
    setForm({ email: "", password: "" });
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex min-h-screen">
      {/* Hero Image */}
      <div className="hidden md:flex w-1/2 relative">
        <Image src="/products/hero-luxury.jpg" alt="Luxury fashion" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6 bg-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-md w-full space-y-8">
          {/* Logo */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="flex justify-center">
            <Image src="/products/LUMINA Watermark.png" alt="Lumina Logo" width={140} height={70} className="drop-shadow-lg" />
          </motion.div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-black tracking-tight">Sign in to Lumina</h1>
            <p className="mt-2 text-gray-500 text-lg">Enter your email and password to continue</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm" />
            <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm" />
            <motion.button type="submit" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 shadow-md transition">
              Sign In
            </motion.button>
            {submitted && <p className="text-green-600 mt-2 text-center">Login submitted!</p>}
          </form>

          {/* Optional Links */}
          <p className="text-center text-gray-500 text-sm mt-4">
            Don’t have an account?{" "}
            <a href="#" className="text-black font-medium hover:underline">Sign Up</a>
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
}
