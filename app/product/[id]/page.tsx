import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import AddToCartPanel from "@/components/AddToCartPanel";
import { getProductById, getRelatedProducts, products, categories } from "@/lib/products";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(Number(params.id));
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const category = categories.find((c) => c.slug === product.category);

  return (
    <main>
      <Header />
      <div className="container mt-5">
        <div className="mb-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-brand">Home</Link> /{" "}
          {category && (
            <>
              <Link href={`/category/${category.slug}`} className="hover:text-brand">
                {category.name}
              </Link>{" "}
              /{" "}
            </>
          )}
          <span className="text-ink">{product.name}</span>
        </div>

        <div className="grid gap-6 rounded-md bg-white p-4 shadow-sm md:grid-cols-2">
          <div className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-md bg-gray-100">
            {product.discount && (
              <span className="absolute right-3 top-3 z-10 rounded bg-sale px-2 py-1 text-xs font-bold text-white">
                -{product.discount}%
              </span>
            )}
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-500">{product.brand}</p>
            <h1 className="mt-1 text-2xl font-bold text-ink">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="text-brand">{"★".repeat(Math.round(product.rating))}</span>
              <span className="text-gray-500">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-black text-ink">KSh {product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="text-base text-gray-400 line-through">
                  KSh {product.oldPrice.toLocaleString()}
                </span>
              )}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">{product.description}</p>

            {product.express && (
              <span className="mt-4 inline-block rounded bg-brand/10 px-3 py-1 text-xs font-bold uppercase text-brand">
                Express Delivery Available
              </span>
            )}

            <div className="mt-6 space-y-2 rounded-md border border-gray-100 bg-gray-50 p-4 text-sm text-gray-600">
              <p>✔ Pay on delivery available</p>
              <p>✔ Free returns within 7 days</p>
              <p>✔ Secure payment via M-Pesa, Visa &amp; Mastercard</p>
            </div>

            <AddToCartPanel product={product} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-xl font-bold">You May Also Like</h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
}
