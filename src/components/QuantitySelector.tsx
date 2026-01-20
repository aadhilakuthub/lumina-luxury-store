// src/components/QuantitySelector.tsx
"use client";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({ value, onChange, min = 1, max = 99 }: QuantitySelectorProps) {
  const increment = () => onChange(Math.min(value + 1, max));
  const decrement = () => onChange(Math.max(value - 1, min));

  return (
    <div className="flex items-center gap-2">
      <button onClick={decrement} className="px-2 py-1 border rounded hover:bg-gray-200">-</button>
      <span className="w-6 text-center">{value}</span>
      <button onClick={increment} className="px-2 py-1 border rounded hover:bg-gray-200">+</button>
    </div>
  );
}
