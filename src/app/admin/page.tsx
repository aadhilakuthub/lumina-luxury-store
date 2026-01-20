"use client";

import { products } from "@/data/products";

export default function AdminPage() {
  return (
    <main className="px-6 py-10 md:px-12 lg:px-20 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <h2 className="text-xl font-semibold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {products.map(p => (
          <div key={p.id} className="border p-4 rounded-lg shadow-sm">
            <p className="font-medium">{p.name}</p>
            <p className="text-gray-600">{p.price}</p>
            <button className="mt-2 px-3 py-1 bg-black text-white rounded hover:bg-gray-800 transition">Edit</button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <div className="border p-4 rounded-lg shadow-sm">
        <p>No orders yet.</p>
      </div>
    </main>
  );
}
