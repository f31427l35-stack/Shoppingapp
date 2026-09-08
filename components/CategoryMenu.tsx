import Link from "next/link";
import { categories } from "@/lib/products";

export default function CategoryMenu() {
  return (
    <aside className="hidden w-[240px] shrink-0 rounded-md bg-white shadow-sm lg:block">
      <h2 className="border-b px-4 py-3 text-sm font-bold uppercase tracking-wide text-gray-500">
        Categories
      </h2>
      <nav>
        {categories.map((c) => (
          <Link
            href={`/category/${c.slug}`}
            key={c.slug}
            className="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-50 hover:text-brand"
          >
            <span className="text-lg">{c.icon}</span>
            <span>{c.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
