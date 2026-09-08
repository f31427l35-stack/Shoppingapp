"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, updateQty, removeItem, subtotal, clearCart } = useCart();

  return (
    <main>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4 text-2xl font-bold">My Cart</h1>

        {items.length === 0 ? (
          <div className="rounded-md bg-white p-12 text-center shadow-sm">
            <p className="mb-4 text-gray-500">Your cart is empty.</p>
            <Link href="/" className="inline-block rounded-md bg-brand px-6 py-3 font-bold text-white hover:bg-brand-dark">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3 md:col-span-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 rounded-md bg-white p-4 shadow-sm">
                  <Link href={`/product/${item.id}`} className="h-20 w-20 shrink-0 overflow-hidden rounded bg-gray-100">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <Link href={`/product/${item.id}`} className="line-clamp-2 text-sm font-medium text-ink hover:text-brand">
                      {item.name}
                    </Link>
                    <div className="mt-1 font-bold">KSh {item.price.toLocaleString()}</div>
                  </div>
                  <div className="flex items-center rounded-md border border-gray-200">
                    <button
                      onClick={() => updateQty(item.id, item.qty - 1)}
                      className="px-3 py-1.5 font-bold hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, item.qty + 1)}
                      className="px-3 py-1.5 font-bold hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-sm font-semibold text-sale hover:underline">
                    Remove
                  </button>
                </div>
              ))}
              <button onClick={clearCart} className="text-sm font-semibold text-gray-500 hover:text-sale">
                Clear cart
              </button>
            </div>

            <div className="h-fit rounded-md bg-white p-5 shadow-sm">
              <h2 className="mb-3 text-lg font-bold">Order Summary</h2>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>KSh {subtotal.toLocaleString()}</span>
              </div>
              <div className="mt-1 flex justify-between text-sm text-gray-600">
                <span>Delivery</span>
                <span className="text-brand">Calculated at checkout</span>
              </div>
              <div className="mt-3 flex justify-between border-t pt-3 text-base font-bold">
                <span>Total</span>
                <span>KSh {subtotal.toLocaleString()}</span>
              </div>
              <Link
                href="/checkout"
                className="mt-4 block rounded-md bg-brand py-3 text-center font-bold text-white hover:bg-brand-dark"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
