// src/components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        {/* Logo & Brand */}
        <div className="flex flex-col items-start gap-4">
          <Link href="/">
            <Image
              src="/products/pictorial.png"
              alt="Lumina Logo"
              width={140}
              height={60}
              className="object-contain"
            />
          </Link>
          <p className="text-sm text-gray-500 max-w-xs">
            Lumina is a luxury minimal fashion brand, delivering timeless style with elegance and precision.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-black transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-black transition">
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-black">Quick Links</h3>
          <Link href="/collection" className="hover:text-black transition">Collection</Link>
          <Link href="/about" className="hover:text-black transition">About</Link>
          <Link href="/contact" className="hover:text-black transition">Contact</Link>
          <Link href="/login" className="hover:text-black transition">Login</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-black">Contact</h3>
          <p>Email: support@lumina.com</p>
          <p>Phone: +94 76 811 6643</p>
          <p>Sri Lanka</p>
        </div>
      </div>

      <div className="border-t border-gray-200 text-gray-500 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Lumina. All rights reserved.
      </div>
    </footer>
  );
}
