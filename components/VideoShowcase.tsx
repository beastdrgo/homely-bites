'use client'

const videos = [
  { src: '/videos/product-1.mp4', label: 'Making Chakkuli' },
  { src: '/videos/product-2.mp4', label: 'Sun-Drying Sendige' },
  { src: '/videos/product-3.mp4', label: 'Frying in Coconut Oil' },
]

export default function VideoShowcase() {
  return (
    <section className="bg-charcoal py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair text-2xl md:text-3xl text-white text-center mb-3">
          From our <span className="text-gold italic">kitchen</span> to yours
        </h2>
        <p className="text-white/40 text-[13px] text-center mb-12 max-w-md mx-auto">
          Watch how every snack is handcrafted with care, tradition, and the finest ingredients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {videos.map((video, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden bg-charcoal border border-white/10 ${
                i === 1 ? 'md:scale-105 md:z-10 ring-2 ring-gold/30' : ''
              }`}
              style={{ aspectRatio: '9/16' }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
              {/* Fallback placeholder when video is missing */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-charcoal">
                <div className="w-16 h-16 rounded-full border-2 border-gold/40 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gold/60 text-[12px] tracking-wide">{video.label}</p>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-[12px] font-medium">{video.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
