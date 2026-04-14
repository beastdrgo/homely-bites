import Image from 'next/image'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <div className="pt-24 pb-20 bg-cream min-h-screen">
        {/* Hero */}
        <section className="px-4 py-16 text-center">
          <div className="animate-fade-up">
            <p className="text-gold text-[10px] tracking-[0.14em] uppercase mb-3">OUR STORY</p>
            <h1 className="font-playfair text-charcoal text-3xl md:text-5xl max-w-2xl mx-auto leading-tight">
              Born in a home kitchen in{' '}
              <span className="text-gold italic">Puttur</span>
            </h1>
            <p className="text-muted text-[14px] max-w-xl mx-auto mt-6 leading-relaxed">
              What started as a mother&apos;s passion for preserving traditional recipes has
              grown into a beloved brand that brings the authentic taste of South Karnataka
              to homes across India.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="px-4 py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-parchment border border-muted/20">
              <Image
                src="/images/founder.png"
                alt="Geetha Bhat — Founder of Homely Bites"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-playfair text-charcoal text-2xl md:text-3xl mb-6">
                Meet <span className="text-gold italic">Geetha Bhat</span>
              </h2>
              <p className="text-muted text-[14px] leading-relaxed mb-4">
                Geetha Bhat grew up watching her mother and grandmother transform simple ingredients
                — rice, coconut, jaggery, and spices — into unforgettable snacks. In 2015, she
                decided to share these flavours beyond her kitchen.
              </p>
              <p className="text-muted text-[14px] leading-relaxed mb-6">
                Today, Homely Bites operates from Puttur, Karnataka, producing over 19 traditional
                snacks — each one handmade, preservative-free, and fried exclusively in pure coconut oil.
              </p>
              <blockquote className="border-l-2 border-gold pl-4">
                <p className="font-playfair text-charcoal text-lg italic leading-relaxed">
                  &ldquo;Every snack we make carries the warmth of a home kitchen, the precision
                  of generations, and the honest flavours of Puttur.&rdquo;
                </p>
                <cite className="text-muted text-[12px] mt-2 block not-italic">— Geetha Bhat, Founder</cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Vision / Mission / Values */}
        <section className="px-4 py-16 bg-charcoal mt-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'Our Vision',
                desc: 'To be India\'s most trusted homemade snack brand — one that stands for purity, authenticity, and the irreplaceable taste of tradition.',
              },
              {
                title: 'Our Mission',
                desc: 'To preserve and share the culinary heritage of South Karnataka by crafting snacks with the highest quality ingredients, no shortcuts, and no preservatives.',
              },
              {
                title: 'Our Values',
                desc: 'Authenticity in every recipe. Transparency in every ingredient. Love in every bite. We believe food made with intention nourishes more than just the body.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="font-playfair text-gold text-xl mb-4">{item.title}</h3>
                <p className="text-white/60 text-[13px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gold text-[10px] tracking-[0.14em] uppercase mb-3">HOW WE WORK</p>
            <h2 className="font-playfair text-charcoal text-2xl md:text-3xl mb-12">
              From <span className="text-gold italic">kitchen</span> to doorstep
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Source', desc: 'Fresh local ingredients from trusted farms in Karnataka' },
                { step: '02', title: 'Prepare', desc: 'Handcrafted in small batches using family recipes' },
                { step: '03', title: 'Fry & Dry', desc: 'Cooked in pure coconut oil, sun-dried naturally' },
                { step: '04', title: 'Pack & Ship', desc: 'Sealed fresh and delivered across India' },
              ].map((item, i) => (
                <div key={i}>
                  <span className="text-gold/30 font-playfair text-4xl">{item.step}</span>
                  <h4 className="text-charcoal font-semibold text-[14px] mt-2 mb-1">{item.title}</h4>
                  <p className="text-muted text-[12px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
