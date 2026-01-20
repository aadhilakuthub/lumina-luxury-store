// src/components/ProductImageGallery.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryProps {
  images: string[];
}

export default function ProductImageGallery({ images }: GalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto">
        {images.map((img, i) => (
          <div
            key={i}
            className={`cursor-pointer border ${i === selected ? "border-black" : "border-gray-200"} rounded`}
            onClick={() => setSelected(i)}
          >
            <Image src={img} alt={`Thumbnail ${i}`} width={60} height={60} className="object-cover" />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div className="flex-1 relative h-96 w-full">
        <Image src={images[selected]} alt="Product Image" fill className="object-cover rounded-lg" />
      </div>
    </div>
  );
}
