"use client";

export default function AccountPage() {
  return (
    <main className="px-6 py-10 md:px-12 lg:px-20 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Profile</h2>
          <p>Name: Jane Doe</p>
          <p>Email: jane@example.com</p>
        </div>
        <div className="border p-6 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-2">Orders</h2>
          <p>No orders yet.</p>
        </div>
      </div>
    </main>
  );
}
