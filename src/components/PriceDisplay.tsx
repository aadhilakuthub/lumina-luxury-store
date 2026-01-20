// src/components/PriceDisplay.tsx
interface PriceDisplayProps {
  price: string | number;
  discount?: string | number;
}

export default function PriceDisplay({ price, discount }: PriceDisplayProps) {
  return (
    <div className="flex items-center gap-2">
      {discount ? <span className="text-gray-400 line-through">${discount}</span> : null}
      <span className="font-semibold text-lg">${price}</span>
    </div>
  );
}
