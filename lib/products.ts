export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  discount?: number;
  category: string;
  brand: string;
  express?: boolean;
  description?: string;
};

export const categories = [
  { icon: "📱", name: "Phones & Tablets", slug: "phones-tablets" },
  { icon: "💻", name: "Computing", slug: "computing" },
  { icon: "🎧", name: "Electronics", slug: "electronics" },
  { icon: "👕", name: "Fashion", slug: "fashion" },
  { icon: "🏠", name: "Home & Office", slug: "home-office" },
  { icon: "💄", name: "Health & Beauty", slug: "beauty" },
  { icon: "🛒", name: "Supermarket", slug: "supermarket" },
  { icon: "⚽", name: "Sports & Fitness", slug: "sports" },
  { icon: "🎮", name: "Gaming", slug: "gaming" },
  { icon: "🚗", name: "Automotive", slug: "automotive" },
  { icon: "👶", name: "Baby Products", slug: "baby" },
  { icon: "🐾", name: "Pet Supplies", slug: "pets" },
];

export const products: Product[] = [
  { id: 1, name: "Smartphone 128GB Dual SIM, 6.6\" HD Display", price: 18999, oldPrice: 22999, rating: 4.5, reviews: 1284, discount: 17, category: "phones-tablets", brand: "Vion", express: true, image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600", description: "A reliable everyday smartphone with a large HD display, dual SIM support and all-day battery life." },
  { id: 2, name: "Wireless Bluetooth Over-Ear Headphones", price: 2499, oldPrice: 3999, rating: 4.3, reviews: 942, discount: 38, category: "electronics", brand: "SoundMax", express: true, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600", description: "Comfortable over-ear headphones with deep bass and up to 20 hours of playback." },
  { id: 3, name: "14\" Modern Laptop, 8GB RAM/256GB SSD", price: 54999, oldPrice: 64999, rating: 4.7, reviews: 531, discount: 15, category: "computing", brand: "NovaTech", express: true, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600", description: "A slim, fast laptop built for work and study, with a crisp full-HD screen." },
  { id: 4, name: "Smart Watch Series with Heart Rate Monitor", price: 3999, oldPrice: 5999, rating: 4.2, reviews: 765, discount: 33, category: "electronics", brand: "PulseFit", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600", description: "Track your steps, heart rate and sleep with this everyday smartwatch." },
  { id: 5, name: "Premium Men's Running Shoes", price: 3499, oldPrice: 4999, rating: 4.4, reviews: 421, discount: 30, category: "fashion", brand: "Stridewell", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600", description: "Lightweight running shoes with cushioned soles for everyday training." },
  { id: 6, name: "Modern Laptop Backpack, Water Resistant", price: 1899, oldPrice: 2799, rating: 4.1, reviews: 298, discount: 32, category: "fashion", brand: "UrbanPack", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600", description: "A spacious, water-resistant backpack with a padded laptop compartment." },
  { id: 7, name: "Digital Camera with 32GB Memory Card", price: 32999, oldPrice: 39999, rating: 4.6, reviews: 187, discount: 18, category: "electronics", brand: "PixelPro", express: true, image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600", description: "Capture sharp photos and videos with this beginner-friendly digital camera." },
  { id: 8, name: "Automatic Home Coffee Maker", price: 5999, oldPrice: 7999, rating: 4.3, reviews: 356, discount: 25, category: "home-office", brand: "BrewKing", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600", description: "Brew a full pot of rich coffee in minutes with this compact coffee maker." },
  { id: 9, name: "10.4\" Tablet, 64GB Storage, WiFi", price: 15999, oldPrice: 19999, rating: 4.4, reviews: 502, discount: 20, category: "phones-tablets", brand: "Vion", image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600", description: "A large-screen tablet great for streaming, reading and browsing." },
  { id: 10, name: "Men's Slim Fit Cotton T-Shirt (3-Pack)", price: 1299, oldPrice: 1899, rating: 4.0, reviews: 210, discount: 31, category: "fashion", brand: "Basicwear", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600", description: "Soft, breathable cotton t-shirts, perfect for everyday wear." },
  { id: 11, name: "Non-Stick Cookware Set, 10 Pieces", price: 6499, oldPrice: 8999, rating: 4.5, reviews: 312, discount: 27, category: "home-office", brand: "HomeChef", image: "https://images.unsplash.com/photo-1584990347449-a5d9f800a783?w=600", description: "A complete non-stick cookware set for every kitchen." },
  { id: 12, name: "Wireless Gaming Controller", price: 3299, oldPrice: 4499, rating: 4.6, reviews: 448, discount: 27, category: "gaming", brand: "PlayEdge", express: true, image: "https://images.unsplash.com/photo-1580327344181-c1163234e5a0?w=600", description: "Responsive wireless controller compatible with most gaming platforms." },
  { id: 13, name: "Moisturizing Face Cream Set", price: 1899, oldPrice: 2599, rating: 4.2, reviews: 654, discount: 27, category: "beauty", brand: "GlowLab", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600", description: "A hydrating skincare set for daily use, suitable for all skin types." },
  { id: 14, name: "Yoga Mat with Carry Strap", price: 1499, oldPrice: 2199, rating: 4.3, reviews: 289, discount: 32, category: "sports", brand: "FlexFit", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600", description: "Non-slip yoga mat, lightweight and easy to carry to any workout." },
  { id: 15, name: "Car Phone Mount & Wireless Charger", price: 1999, oldPrice: 2999, rating: 4.1, reviews: 176, discount: 33, category: "automotive", brand: "DriveTech", image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=600", description: "Keep your phone charged and in view while you drive." },
  { id: 16, name: "Baby Stroller, Lightweight Foldable", price: 12999, oldPrice: 16999, rating: 4.5, reviews: 143, discount: 24, category: "baby", brand: "TinyTrek", image: "https://images.unsplash.com/photo-1591792559206-13a9db0abd11?w=600", description: "An easy-to-fold stroller built for comfort and convenience." },
  { id: 17, name: "Pet Bed, Soft Plush Cushion (Medium)", price: 2199, oldPrice: 2999, rating: 4.4, reviews: 98, discount: 27, category: "pets", brand: "PawRest", image: "https://images.unsplash.com/photo-1601758064135-2f8a3ca8e2a6?w=600", description: "A cozy plush bed to keep your pet comfortable all day." },
  { id: 18, name: "Assorted Grocery Essentials Pack", price: 2899, rating: 4.0, reviews: 67, category: "supermarket", brand: "DailyBasket", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600", description: "A bundle of everyday grocery essentials delivered to your door." },
  { id: 19, name: "Bluetooth Portable Speaker", price: 2799, oldPrice: 3999, rating: 4.5, reviews: 812, discount: 30, category: "electronics", brand: "SoundMax", express: true, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600", description: "A compact speaker with rich sound, ideal for outdoor and indoor use." },
  { id: 20, name: "Office Chair, Ergonomic Mesh Back", price: 8999, oldPrice: 12999, rating: 4.3, reviews: 221, discount: 31, category: "home-office", brand: "SitRight", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600", description: "An ergonomic office chair designed for all-day comfort." },
];

export function getProductsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}

export function getProductById(id: number) {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(product: Product, limit = 5) {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
}
