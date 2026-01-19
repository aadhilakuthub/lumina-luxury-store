"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/products/LUMINA logo.png"
            alt="Lumina Logo"
            width={140}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <Link href="/collection" className="text-sm hover:text-gray-500">Collection</Link>
          <Link href="/about" className="text-sm hover:text-gray-500">About</Link>
          <Link href="/contact" className="text-sm hover:text-gray-500">Contact</Link>
        </div>

        {/* Actions + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <button className="text-sm hover:text-gray-500">Login</button>
          </Link>
          <Link href="/cart">
            <button className="rounded-full bg-black px-5 py-2 text-sm text-white hover:bg-gray-800 transition">
              Cart
            </button>
          </Link>

          {/* Hamburger Icon for Mobile */}
          <button
            className="md:hidden ml-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          <Link href="/collection" onClick={() => setOpen(false)}>Collection</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}