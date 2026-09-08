"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Shop smarter",
    title: "Everything you need. All in one place.",
    body: "Discover great products, amazing deals and convenient shopping from your phone or computer.",
    cta: "SHOP NOW",
    from: "#1a1a1a",
    to: "#4a4a4a",
  },
  {
    eyebrow: "Mega Deals Week",
    title: "Up to 40% off electronics.",
    body: "Phones, laptops, headphones and more — while stocks last.",
    cta: "GRAB THE DEALS",
    from: "#7a3b00",
    to: "#c2660a",
  },
  {
    eyebrow: "Free Delivery",
    title: "Fashion finds for every season.",
    body: "New arrivals in men's, women's and kids' fashion, added weekly.",
    cta: "EXPLORE FASHION",
    from: "#1e1e1e",
    to: "#3a3a3a",
  },
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const slide = slides[index];

  return (
    <section
      className="relative min-h-[330px] overflow-hidden rounded-md transition-colors duration-700"
      style={{ background: `linear-gradient(to right, ${slide.from}, ${slide.to})` }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div key={index} className="relative z-10 flex min-h-[330px] flex-col justify-center px-7 text-white animate-fade sm:px-12">
        <span className="mb-3 text-sm font-bold uppercase tracking-[3px] text-brand">{slide.eyebrow}</span>
        <h1 className="max-w-[550px] text-4xl font-black leading-tight sm:text-5xl">{slide.title}</h1>
        <p className="mt-4 max-w-[500px] text-gray-200">{slide.body}</p>
        <button className="mt-6 w-fit rounded-md bg-brand px-7 py-3 font-bold text-white hover:bg-brand-dark">
          {slide.cta}
        </button>
      </div>
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-brand" : "w-2 bg-white/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
