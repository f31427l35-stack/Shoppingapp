import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-12 bg-ink text-white">
      <div className="container grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-5">
        <div>
          <h3 className="mb-3 text-lg font-bold">
            SHOP<span className="text-brand">ZONE</span>
          </h3>
          <p className="text-sm text-gray-400">
            Your online marketplace for everyday products — electronics, fashion, home &amp; more.
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-bold">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/help" className="hover:text-brand">Help Center</Link></li>
            <li><Link href="/returns" className="hover:text-brand">Returns &amp; Refunds</Link></li>
            <li><Link href="/orders" className="hover:text-brand">Track Order</Link></li>
            <li><Link href="/contact" className="hover:text-brand">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-bold">About</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/about" className="hover:text-brand">About Us</Link></li>
            <li><Link href="/sell" className="hover:text-brand">Sell With Us</Link></li>
            <li><Link href="/careers" className="hover:text-brand">Careers</Link></li>
            <li><Link href="/terms" className="hover:text-brand">Terms &amp; Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-bold">Payment Methods</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {["M-Pesa", "Visa", "Mastercard", "Cash on Delivery"].map((m) => (
              <span key={m} className="rounded bg-white/10 px-2 py-1">{m}</span>
            ))}
          </div>
          <h3 className="mb-3 mt-5 font-bold">Follow Us</h3>
          <div className="flex gap-3 text-sm text-gray-400">
            <span className="hover:text-brand">Facebook</span>
            <span className="hover:text-brand">Instagram</span>
            <span className="hover:text-brand">TikTok</span>
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-bold">Get the App</h3>
          <div className="flex flex-col gap-2">
            <span className="rounded border border-white/20 px-3 py-2 text-center text-xs text-gray-300">
              📱 Download on App Store
            </span>
            <span className="rounded border border-white/20 px-3 py-2 text-center text-xs text-gray-300">
              ▶ Get it on Google Play
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} ShopZone. All rights reserved.
      </div>
    </footer>
  );
}
