"use client";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, className = "", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-full bg-black px-10 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-gray-900 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
