'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#140c06]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/products/unniyappam.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ willChange: 'transform' }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'rgba(20,12,6,0.65)' }} />

      {/* Content */}
      <div className="relative z-[2] flex flex-col items-center justify-center h-full text-center px-6 sm:px-8 max-w-4xl mx-auto w-full">
        <p className="text-gold text-[10px] tracking-[0.14em] uppercase mb-6 animate-fade-up delay-200">
          PUTTUR, KARNATAKA &middot; SINCE 2015
        </p>

        <h1 className="font-playfair text-white leading-tight animate-fade-up delay-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Crafted from{' '}
          <span className="text-gold italic">tradition.</span>
          <br />
          Delivered with intention.
        </h1>

        <p className="text-[13px] text-white/55 max-w-[520px] mt-6 leading-relaxed animate-fade-up delay-600 px-4">
          Authentic homemade snacks made with coconut oil, no preservatives, and
          generations of South Karnataka craft. Straight to your doorstep.
        </p>

        <div className="flex items-center gap-3 sm:gap-4 mt-8 animate-fade-up delay-800">
          <Link
            href="/shop"
            className="bg-gold text-charcoal text-[12px] sm:text-[13px] font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded hover:bg-gold/90 transition-colors"
          >
            Shop now
          </Link>
          <Link
            href="/about"
            className="border border-white text-white text-[12px] sm:text-[13px] px-5 sm:px-7 py-2.5 sm:py-3 rounded hover:bg-white/10 transition-colors"
          >
            Our story
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-center gap-1 animate-fade-in delay-1000">
          <div className="flex gap-1 text-gold text-lg">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i}>{star}</span>
            ))}
          </div>
          <p className="text-white/45 text-[11px] tracking-wide">
            Puttur&apos;s most loved homemade snacks
          </p>
        </div>
      </div>
    </section>
  )
}
