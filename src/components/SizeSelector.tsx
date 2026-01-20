// src/components/SizeSelector.tsx
"use client";

import { useState } from "react";

interface SizeSelectorProps {
  sizes: string[];
  onSelect?: (size: string) => void;
}

export default function SizeSelector({ sizes, onSelect }: SizeSelectorProps) {
  const [selected, setSelected] = useState("");

  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          className={`px-3 py-1 border rounded hover:bg-black hover:text-white transition ${
            selected === size ? "bg-black text-white" : "bg-white text-gray-900"
          }`}
          onClick={() => {
            setSelected(size);
            onSelect?.(size);
          }}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
