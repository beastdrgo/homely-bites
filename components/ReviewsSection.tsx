const reviews = [
  {
    name: 'Priya S.',
    location: 'Bangalore',
    text: 'The banana chips are absolutely incredible — crispy, lightly salted, and you can taste the freshness of the coconut oil. Nothing like what you get in stores.',
  },
  {
    name: 'Raghav M.',
    location: 'Mumbai',
    text: 'Ordered the Chakkuli and Seven Cup Sweet for Diwali. My family couldn\'t stop eating them. It felt like we were back in our grandmother\'s kitchen.',
  },
  {
    name: 'Anitha K.',
    location: 'Mangalore',
    text: 'Homely Bites is the real deal. The Majjige Menassu is exactly how my mother used to make it. I\'ve been ordering every month since I discovered them.',
  },
]

export default function ReviewsSection() {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold text-[10px] tracking-[0.14em] uppercase mb-3">WHAT PEOPLE SAY</p>
          <h2 className="font-playfair text-charcoal text-2xl md:text-3xl">
            Loved across <span className="text-gold italic">India</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-1 text-gold text-sm mb-4">
                {'★★★★★'.split('').map((star, j) => (
                  <span key={j}>{star}</span>
                ))}
              </div>
              <p className="text-charcoal text-[13px] leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="text-charcoal text-[13px] font-semibold">{review.name}</p>
                <p className="text-muted text-[11px]">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
