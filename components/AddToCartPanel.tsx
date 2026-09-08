"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function AddToCartPanel({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  function handleAdd() {
    addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleBuyNow() {
    addItem(product, qty);
    router.push("/cart");
  }

  return (
    <div className="mt-6 flex items-center gap-3">
      <div className="flex items-center rounded-md border border-gray-200">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-3 py-2 text-lg font-bold hover:bg-gray-50"
        >
          −
        </button>
        <span className="w-10 text-center text-sm font-semibold">{qty}</span>
        <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 text-lg font-bold hover:bg-gray-50">
          +
        </button>
      </div>
      <button
        onClick={handleAdd}
        className="flex-1 rounded-md bg-brand py-3 font-bold text-white hover:bg-brand-dark"
      >
        {added ? "Added ✓" : "Add to Cart"}
      </button>
      <button
        onClick={handleBuyNow}
        className="flex-1 rounded-md bg-ink py-3 font-bold text-white hover:bg-black"
      >
        Buy Now
      </button>
    </div>
  );
}
