'use client'

import { Suspense, useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { products, categories, Category } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import Footer from '@/components/Footer'

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name'

const categoryIcons: Record<string, JSX.Element> = {
  All: (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  'Savory Snacks': (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
    </svg>
  ),
  'Traditional Sweets': (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  ),
  'Fried & Dried Items': (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  'Ready To Eat': (
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low → High' },
  { value: 'price-desc', label: 'Price: High → Low' },
  { value: 'name', label: 'Name: A → Z' },
]

function getCategoryCount(cat: string) {
  if (cat === 'All') return products.length
  return products.filter(p => p.category === cat).length
}

export default function ShopPage() {
  return (
    <Suspense>
      <ShopContent />
    </Suspense>
  )
}

function ShopContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category') as Category | null

  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>(
    categoryParam && categories.includes(categoryParam) ? categoryParam : 'All'
  )
  const [sort, setSort] = useState<SortOption>('default')

  const filtered = useMemo(() => {
    const result = selectedCategory === 'All'
      ? [...products]
      : products.filter(p => p.category === selectedCategory)

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
    }
    return result
  }, [selectedCategory, sort])

  return (
    <>
      <div className="pt-20 sm:pt-24 pb-20 px-4 min-h-screen bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-gold text-[10px] tracking-[0.14em] uppercase mb-3">BROWSE</p>
            <h1 className="font-playfair text-charcoal text-2xl sm:text-3xl md:text-4xl">
              Our <span className="text-gold italic">Products</span>
            </h1>
          </div>

          {/* Mobile: Horizontal filter bar */}
          <div className="lg:hidden mb-6 space-y-3">
            {/* Category pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {['All', ...categories].map(cat => {
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as Category | 'All')}
                    className={`flex items-center gap-1.5 whitespace-nowrap text-[12px] px-3 py-2 rounded-full transition-all ${
                      isActive
                        ? 'bg-charcoal text-cream'
                        : 'bg-white text-muted border border-black/[0.06] hover:text-charcoal'
                    }`}
                  >
                    <span className={isActive ? 'text-gold' : 'text-muted/50'}>{categoryIcons[cat]}</span>
                    {cat}
                    <span className={`text-[10px] ml-0.5 ${isActive ? 'text-cream/60' : 'text-muted/40'}`}>
                      {getCategoryCount(cat)}
                    </span>
                  </button>
                )
              })}
            </div>
            {/* Sort dropdown */}
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
              className="w-full text-[12px] text-charcoal bg-white border border-black/[0.06] rounded-xl px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-gold"
            >
              {sortOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-60 flex-shrink-0">
              <div className="sticky top-24 space-y-3">
                {/* Category Filter */}
                <div className="bg-white rounded-xl shadow-sm border border-black/[0.04] overflow-hidden">
                  <div className="px-4 py-3 border-b border-black/[0.04]">
                    <h3 className="text-charcoal text-[12px] font-semibold flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                      </svg>
                      Categories
                    </h3>
                  </div>
                  <div className="p-1.5">
                    {['All', ...categories].map(cat => {
                      const isActive = selectedCategory === cat
                      const count = getCategoryCount(cat)
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat as Category | 'All')}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] transition-all group ${
                            isActive
                              ? 'bg-charcoal text-cream'
                              : 'text-muted hover:bg-black/[0.03] hover:text-charcoal'
                          }`}
                        >
                          <span className={`flex-shrink-0 ${isActive ? 'text-gold' : 'text-muted/40 group-hover:text-muted'}`}>
                            {categoryIcons[cat]}
                          </span>
                          <span className="flex-1 text-left">{cat}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-medium ${
                            isActive ? 'bg-white/15 text-cream' : 'bg-black/[0.04] text-muted/60'
                          }`}>
                            {count}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Sort */}
                <div className="bg-white rounded-xl shadow-sm border border-black/[0.04] overflow-hidden">
                  <div className="px-4 py-3 border-b border-black/[0.04]">
                    <h3 className="text-charcoal text-[12px] font-semibold flex items-center gap-1.5">
                      <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                      </svg>
                      Sort by
                    </h3>
                  </div>
                  <div className="p-1.5">
                    {sortOptions.map(opt => {
                      const isActive = sort === opt.value
                      return (
                        <button
                          key={opt.value}
                          onClick={() => setSort(opt.value)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12px] transition-all ${
                            isActive
                              ? 'bg-gold/10 text-gold font-medium'
                              : 'text-muted hover:bg-black/[0.03] hover:text-charcoal'
                          }`}
                        >
                          <span className="text-left flex-1">{opt.label}</span>
                          {isActive && (
                            <svg className="w-3 h-3 text-gold" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Count */}
                <div className="bg-charcoal rounded-xl p-4 text-center">
                  <p className="text-gold text-[18px] font-playfair font-semibold">{filtered.length}</p>
                  <p className="text-white/50 text-[10px]">product{filtered.length !== 1 ? 's' : ''} found</p>
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1 min-w-0">
              {/* Active filters */}
              <div className="hidden lg:flex items-center gap-2 mb-5 min-h-[28px]">
                {selectedCategory !== 'All' && (
                  <div className="flex items-center gap-1.5 bg-charcoal text-cream text-[11px] font-medium pl-2.5 pr-1.5 py-1 rounded-full">
                    <span>{selectedCategory}</span>
                    <button
                      onClick={() => setSelectedCategory('All')}
                      className="w-4 h-4 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
                    >
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
                {sort !== 'default' && (
                  <div className="flex items-center gap-1.5 bg-gold/10 text-gold text-[11px] font-medium pl-2.5 pr-1.5 py-1 rounded-full">
                    <span>{sortOptions.find(s => s.value === sort)?.label}</span>
                    <button
                      onClick={() => setSort('default')}
                      className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center hover:bg-gold/30 transition-colors"
                    >
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {filtered.length === 0 && (
                <div className="text-center py-20 text-muted">
                  <svg className="w-12 h-12 mx-auto mb-4 text-muted/20" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  <p className="font-playfair text-lg text-charcoal">No products found</p>
                  <p className="text-[13px] mt-2">Try selecting a different category.</p>
                  <button
                    onClick={() => { setSelectedCategory('All'); setSort('default') }}
                    className="mt-4 text-[12px] text-gold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
