'use client'

import Link from 'next/link'
import { featuredProducts } from '@/data/products'
import ProductGrid from './ProductGrid'

export default function FeaturedProducts() {
  return (
    <section className="bg-parchment py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-[10px] tracking-[0.14em] uppercase mb-3">HANDPICKED FOR YOU</p>
          <h2 className="font-playfair text-charcoal text-2xl md:text-3xl">
            Our most loved <span className="text-gold italic">snacks</span>
          </h2>
        </div>
        <ProductGrid products={featuredProducts} />
        <div className="text-center mt-12">
          <Link
            href="/shop"
            className="inline-block border border-charcoal text-charcoal text-[13px] font-semibold px-8 py-3 rounded hover:bg-charcoal hover:text-cream transition-colors"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  )
}
