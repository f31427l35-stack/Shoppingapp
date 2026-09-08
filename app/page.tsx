import Header from "@/components/Header";
import CategoryMenu from "@/components/CategoryMenu";
import HeroBanner from "@/components/HeroBanner";
import TopCategoriesRow from "@/components/TopCategoriesRow";
import FlashSale from "@/components/FlashSale";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container mt-5">
        <div className="flex gap-4">
          <CategoryMenu />
          <div className="min-w-0 flex-1">
            <HeroBanner />
          </div>
        </div>
      </div>
      <TopCategoriesRow />
      <FlashSale />
      <section className="container mt-7">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold">Recommended For You</h2>
          <span className="text-sm font-bold text-brand">SEE ALL →</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
