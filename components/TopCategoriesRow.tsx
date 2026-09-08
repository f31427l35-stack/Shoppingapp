import Link from "next/link";
import { categories } from "@/lib/products";

export default function TopCategoriesRow() {
  return (
    <section className="container mt-6">
      <div className="grid grid-cols-3 gap-3 rounded-md bg-white p-4 shadow-sm sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="flex flex-col items-center gap-2 rounded-md p-2 text-center hover:bg-gray-50"
          >
            <span className="text-2xl">{c.icon}</span>
            <span className="line-clamp-2 text-[11px] font-medium leading-tight text-gray-700">{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
