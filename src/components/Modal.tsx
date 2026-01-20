// src/components/Modal.tsx
"use client";

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
