"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white text-black min-h-screen">
      {/* Hero */}
      <section className="relative flex items-center justify-center min-h-[40vh] bg-cover bg-center" style={{ backgroundImage: "url('/products/hero-contact.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Get in Touch</h1>
          <p className="mt-4 text-gray-200 max-w-xl mx-auto">
            We'd love to hear from you. Send us a message or reach out through the info below.
          </p>
        </motion.div>
      </section>

      {/* Form + Info */}
      <section className="mx-auto max-w-4xl px-6 py-20 grid gap-16 md:grid-cols-2">
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition" />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition" />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} required rows={5} className="border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition" />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} type="submit" className="rounded-full bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 shadow-md transition">
            Send Message
          </motion.button>
          {submitted && <p className="text-green-600 mt-2">Thank you! Your message has been sent.</p>}
        </form>

        {/* Info */}
        <div className="flex flex-col gap-6 text-gray-700">
          <h2 className="text-2xl font-semibold">Contact Info</h2>
          <p>Email: contact@lumina.com</p>
          <p>Phone: +94 76 811 6643</p>
          <p>Address: Colombo, Sri Lanka</p>
          <h3 className="text-xl font-semibold mt-6">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/adla_0220_" target="_blank" rel="noreferrer" className="hover:text-black transition">Instagram</a>
            <a href="https://www.behance.net/aadhilakuthub" target="_blank" rel="noreferrer" className="hover:text-black transition">Behance</a>
            <a href="https://www.linkedin.com/in/aadhilakuthub" target="_blank" rel="noreferrer" className="hover:text-black transition">LinkedIn</a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
