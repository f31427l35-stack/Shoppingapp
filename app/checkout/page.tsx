"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);

  function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  }

  if (placed) {
    return (
      <main>
        <Header />
        <div className="container mt-10 max-w-lg text-center">
          <div className="rounded-md bg-white p-10 shadow-sm">
            <div className="mb-3 text-5xl">✅</div>
            <h1 className="text-2xl font-bold">Order Placed!</h1>
            <p className="mt-2 text-gray-500">
              Thanks for shopping with ShopZone. You'll receive a confirmation shortly.
            </p>
            <Link href="/" className="mt-6 inline-block rounded-md bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main>
        <Header />
        <div className="container mt-10 max-w-lg text-center">
          <div className="rounded-md bg-white p-10 shadow-sm">
            <p className="text-gray-500">Your cart is empty.</p>
            <Link href="/" className="mt-4 inline-block rounded-md bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4 text-2xl font-bold">Checkout</h1>
        <form onSubmit={handlePlaceOrder} className="grid gap-6 md:grid-cols-3">
          <div className="space-y-4 md:col-span-2">
            <div className="rounded-md bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-bold">Delivery Details</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <input required placeholder="Full Name" className="rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand" />
                <input required placeholder="Phone Number" className="rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand" />
                <input required placeholder="Delivery Address" className="rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand sm:col-span-2" />
                <input placeholder="City / Town" className="rounded-md border border-gray-200 px-3 py-2 text-sm outline-none focus:border-brand sm:col-span-2" />
              </div>
            </div>
            <div className="rounded-md bg-white p-5 shadow-sm">
              <h2 className="mb-3 font-bold">Payment Method</h2>
              <div className="space-y-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" defaultChecked /> M-Pesa
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" /> Card (Visa / Mastercard)
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" /> Cash on Delivery
                </label>
              </div>
            </div>
          </div>

          <div className="h-fit rounded-md bg-white p-5 shadow-sm">
            <h2 className="mb-3 text-lg font-bold">Order Summary</h2>
            {items.map((item) => (
              <div key={item.id} className="mb-2 flex justify-between text-sm text-gray-600">
                <span className="line-clamp-1">{item.name} × {item.qty}</span>
                <span>KSh {(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))}
            <div className="mt-3 flex justify-between border-t pt-3 text-base font-bold">
              <span>Total</span>
              <span>KSh {subtotal.toLocaleString()}</span>
            </div>
            <button type="submit" className="mt-4 w-full rounded-md bg-brand py-3 font-bold text-white hover:bg-brand-dark">
              Place Order
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}
