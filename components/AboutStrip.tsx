import Image from 'next/image'

export default function AboutStrip() {
  return (
    <section className="bg-charcoal py-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Founder photo */}
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
          <Image
            src="/images/founder.png"
            alt="Geetha Bhat — Founder of Homely Bites"
            fill
            className="object-cover"
          />
        </div>

        {/* Quote */}
        <div>
          <p className="text-gold text-[10px] tracking-[0.14em] uppercase mb-4">THE FOUNDER</p>
          <blockquote className="font-playfair text-white text-xl md:text-2xl leading-relaxed mb-6">
            &ldquo;Every snack we make carries the warmth of a home kitchen, the precision of
            generations, and the honest flavours of Puttur. We don&apos;t just sell snacks — we
            share a piece of our family&apos;s heritage.&rdquo;
          </blockquote>
          <div>
            <p className="text-white text-[14px] font-medium">Geetha Bhat</p>
            <p className="text-white/40 text-[12px]">Founder, Homely Bites</p>
          </div>
        </div>
      </div>
    </section>
  )
}
