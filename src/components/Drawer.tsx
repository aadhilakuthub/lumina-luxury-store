// src/components/Drawer.tsx
"use client";

import { ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  side?: "left" | "right";
}

export default function Drawer({ isOpen, onClose, children, side = "right" }: DrawerProps) {
  return (
    <div
      className={`fixed top-0 ${side}-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform ${
        isOpen ? "translate-x-0" : side === "right" ? "translate-x-full" : "-translate-x-full"
      }`}
    >
      <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>×</button>
      <div className="p-6">{children}</div>
    </div>
  );
}
