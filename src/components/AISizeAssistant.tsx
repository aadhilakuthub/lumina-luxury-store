"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/Modal";

interface AISizeAssistantProps {
  open: boolean;
  onClose: () => void;
}

export default function AISizeAssistant({ open, onClose }: AISizeAssistantProps) {
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;

    setLoading(true);
    setResult(null);

    // Fake AI thinking
    const timer = setTimeout(() => {
      setLoading(false);
      setResult("Based on your height and fit preference, we recommend size M.");
    }, 2000);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <Modal isOpen={open} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">AI Size Assistant</h2>

      {loading && (
        <p className="text-gray-500 animate-pulse">
          Analyzing body type & style preference…
        </p>
      )}

      {result && (
        <div className="space-y-3">
          <p className="text-gray-800">{result}</p>
          <button
            onClick={onClose}
            className="mt-4 w-full rounded-full bg-black py-2 text-white hover:bg-gray-800 transition"
          >
            Apply Size
          </button>
        </div>
      )}
    </Modal>
  );
}
