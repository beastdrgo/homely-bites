'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Product } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-square bg-cream overflow-hidden">
          {!imgError ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted/50 text-sm font-medium text-center px-4">
              {product.name}
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <p className="text-[10px] text-gold tracking-[0.1em] uppercase mb-1">{product.category}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-playfair text-charcoal text-base hover:text-sienna transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-muted text-[12px] mt-1 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-charcoal font-semibold text-[15px]">₹{product.price}</span>
          <button
            onClick={() => addItem(product)}
            className="bg-charcoal text-cream text-[11px] font-semibold px-4 py-2 rounded hover:bg-charcoal/90 transition-colors"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
