// src/components/Toast.tsx
"use client";

import { useEffect } from "react";

interface ToastProps {
  message: string;
  show: boolean;
  duration?: number;
  onClose: () => void;
}

export default function Toast({ message, show, duration = 3000, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white px-4 py-2 rounded shadow-lg animate-fade-in">
      {message}
    </div>
  );
}
