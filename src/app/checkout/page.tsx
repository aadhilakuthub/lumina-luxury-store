"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, products, updateQuantity } = useCart();

  // Calculate total price
  const getTotal = () =>
    cart.reduce((sum, item) => {
      const product = products.find((p) => p.id === item.id);
      return (
        sum +
        (product
          ? parseFloat(product.price.slice(1)) * item.quantity
          : 0)
      );
    }, 0);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="px-6 py-10 md:px-12 lg:px-20 bg-white min-h-screen"
    >
      <h1 className="mb-8 text-3xl font-bold text-gray-900">Checkout</h1>

      {/* Cart Items */}
      <div className="grid grid-cols-1 gap-6 mb-12">
        {cart.map((item) => {
          const product = products.find((p) => p.id === item.id)!;

          return (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-lg transition"
            >
              <div className="relative w-24 h-32 flex-shrink-0">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>

              <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 mt-1">{product.price}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition"
                >
                  -
                </button>

                <span className="w-6 text-center">{item.quantity}</span>

                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="rounded-full bg-gray-200 w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Billing Information */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Billing Information
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input className="border border-gray-300 rounded-lg p-3" placeholder="Full Name" />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="Email Address" />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="Address" />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="City" />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="Postal Code" />
          <input className="border border-gray-300 rounded-lg p-3" placeholder="Country" />
        </form>
      </div>

      {/* Total */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <span className="text-xl font-bold">
          Total: ${getTotal().toFixed(2)}
        </span>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 shadow-md transition"
        >
          Place Order
        </motion.button>
      </div>
    </motion.main>
  );
}
