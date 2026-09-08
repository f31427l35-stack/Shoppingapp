"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { products } from "@/lib/products";

function getMidnight() {
  const d = new Date();
  d.setHours(24, 0, 0, 0);
  return d;
}

export default function FlashSale() {
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    const update = () => setRemaining(Math.max(0, getMidnight().getTime() - Date.now()));
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  const hours = Math.floor(remaining / 3_600_000);
  const minutes = Math.floor((remaining % 3_600_000) / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");

  const flashProducts = products.filter((p) => p.discount && p.discount >= 25).slice(0, 5);

  return (
    <section className="container mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-t-md bg-ink px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <span className="text-xl">⚡</span>
          <h2 className="text-lg font-bold">Flash Sale</h2>
          <div className="ml-2 flex items-center gap-1 font-mono text-sm">
            <span className="rounded bg-brand px-2 py-1 font-bold">{pad(hours)}</span>:
            <span className="rounded bg-brand px-2 py-1 font-bold">{pad(minutes)}</span>:
            <span className="rounded bg-brand px-2 py-1 font-bold">{pad(seconds)}</span>
          </div>
        </div>
        <Link href="/category/electronics" className="text-sm font-bold text-brand hover:text-white">
          SEE ALL →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 bg-white p-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {flashProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
