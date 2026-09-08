"use client";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group relative overflow-hidden rounded-md bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/product/${product.id}`}>
        <div className="relative flex h-[210px] items-center justify-center overflow-hidden bg-gray-100">
          {product.discount && (
            <span className="absolute right-2 top-2 z-10 rounded bg-sale px-2 py-1 text-xs font-bold text-white">
              -{product.discount}%
            </span>
          )}
          {product.express && (
            <span className="absolute left-2 top-2 z-10 rounded bg-brand px-2 py-1 text-[10px] font-bold uppercase text-white">
              Express
            </span>
          )}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-3 pb-0">
          <h3 className="line-clamp-2 min-h-[40px] text-sm font-medium text-ink">{product.name}</h3>
          <div className="mt-2">
            <span className="text-lg font-bold">KSh {product.price.toLocaleString()}</span>
            {product.oldPrice && (
              <span className="ml-2 text-xs text-gray-400 line-through">
                KSh {product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>
          <div className="mt-1 text-sm">
            <span className="text-brand">{"★".repeat(Math.round(product.rating))}</span>
            <span className="ml-1 text-gray-400">
              {product.rating.toFixed(1)} ({product.reviews})
            </span>
          </div>
        </div>
      </Link>
      <div className="p-3 pt-3">
        <button
          onClick={() => addItem(product)}
          className="w-full rounded bg-brand py-2 text-sm font-bold text-white hover:bg-brand-dark"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
