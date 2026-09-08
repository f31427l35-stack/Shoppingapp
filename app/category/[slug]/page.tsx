import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/lib/products";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const items = getProductsByCategory(params.slug);

  return (
    <main>
      <Header />
      <div className="container mt-5">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand">Home</Link> / {category.name}
        </div>
        <div className="flex gap-4">
          <aside className="hidden w-[240px] shrink-0 rounded-md bg-white p-4 shadow-sm lg:block">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
              All Categories
            </h2>
            <nav className="space-y-1">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className={`flex items-center gap-3 rounded-md px-2 py-2 text-sm hover:bg-gray-50 ${
                    c.slug === params.slug ? "bg-brand/10 font-bold text-brand" : ""
                  }`}
                >
                  <span className="text-lg">{c.icon}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </nav>
          </aside>
          <div className="min-w-0 flex-1">
            <div className="mb-4 flex items-center justify-between rounded-md bg-white p-4 shadow-sm">
              <h1 className="text-xl font-bold">
                {category.icon} {category.name}
              </h1>
              <span className="text-sm text-gray-500">{items.length} products</span>
            </div>
            {items.length === 0 ? (
              <div className="rounded-md bg-white p-10 text-center text-gray-500 shadow-sm">
                No products in this category yet. Check back soon!
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
