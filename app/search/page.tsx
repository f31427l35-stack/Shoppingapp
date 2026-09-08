import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = (searchParams.q || "").toLowerCase().trim();
  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : [];

  return (
    <main>
      <Header />
      <div className="container mt-5">
        <h1 className="mb-4 text-xl font-bold">
          {q ? (
            <>
              Search results for "<span className="text-brand">{q}</span>" ({results.length})
            </>
          ) : (
            "Search"
          )}
        </h1>
        {q && results.length === 0 ? (
          <div className="rounded-md bg-white p-10 text-center text-gray-500 shadow-sm">
            No products found. Try a different search term.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {results.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
