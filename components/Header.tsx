"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { categories } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const { count } = useCart();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search.trim())}`);
    }
  }

  return (
    <>
      <div className="bg-ink text-white text-xs">
        <div className="container flex min-h-9 items-center justify-between">
          <span className="truncate">Welcome to ShopZone — deals on electronics, fashion &amp; more</span>
          <div className="hidden gap-5 sm:flex">
            <Link href="/help" className="hover:text-brand">Help Center</Link>
            <Link href="/sell" className="hover:text-brand">Sell on ShopZone</Link>
            <Link href="/orders" className="hover:text-brand">Track Order</Link>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container flex min-h-[68px] items-center gap-3 py-2">
          <Link href="/" className="shrink-0 text-2xl font-black tracking-tight text-ink">
            SHOP<span className="text-brand">ZONE</span>
          </Link>

          <div className="relative hidden lg:block">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-11 items-center gap-2 rounded-md border border-gray-200 bg-white px-4 text-sm font-semibold text-ink hover:bg-gray-50"
            >
              <span>☰</span> All Categories
            </button>
            {menuOpen && (
              <div
                className="absolute left-0 top-full z-50 w-[260px] rounded-md border bg-white py-2 shadow-xl"
                onMouseLeave={() => setMenuOpen(false)}
              >
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/category/${c.slug}`}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="text-lg">{c.icon}</span>
                    <span>{c.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={handleSearch} className="relative flex flex-1">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, brands and categories..."
              className="h-11 w-full rounded-l-md border border-r-0 border-gray-200 bg-white px-4 text-sm outline-none focus:border-brand"
            />
            <button type="submit" className="h-11 rounded-r-md bg-brand px-5 font-bold text-white hover:bg-brand-dark">
              Search
            </button>
          </form>

          <div className="hidden items-center gap-5 md:flex">
            <Link href="/account" className="text-sm font-semibold text-ink hover:text-brand">
              <div className="text-center leading-tight">
                <div>👤</div>
                <div>Account</div>
              </div>
            </Link>
            <Link href="/orders" className="text-sm font-semibold text-ink hover:text-brand">
              <div className="text-center leading-tight">
                <div>📦</div>
                <div>Orders</div>
              </div>
            </Link>
            <Link href="/cart" className="relative flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 font-bold text-white hover:bg-black">
              <span>🛒</span>
              <span className="hidden sm:inline">Cart</span>
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-sale text-[11px] font-bold text-white">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>
          </div>
        </div>
        <div className="hidden border-t border-gray-100 lg:block">
          <div className="container flex items-center gap-6 overflow-x-auto py-2 text-sm font-medium text-gray-700">
            {categories.slice(0, 8).map((c) => (
              <Link key={c.slug} href={`/category/${c.slug}`} className="whitespace-nowrap hover:text-brand">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
