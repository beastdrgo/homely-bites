import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/60 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="font-playfair text-xl">
            <span className="text-white">Homely</span>
            <span className="text-gold">Bites</span>
          </Link>
          <p className="text-[12px] mt-3 leading-relaxed">
            Authentic homemade snacks from Puttur, Karnataka. Made with love, coconut oil, and tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-[12px] font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'Shop', 'About', 'Contact'].map(item => (
              <li key={item}>
                <Link
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-[12px] hover:text-white transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white text-[12px] font-semibold uppercase tracking-wider mb-4">Categories</h4>
          <ul className="space-y-2">
            {['Savory Snacks', 'Traditional Sweets', 'Fried & Dried Items', 'Ready To Eat'].map(cat => (
              <li key={cat}>
                <Link
                  href={`/shop?category=${encodeURIComponent(cat)}`}
                  className="text-[12px] hover:text-white transition-colors"
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-[12px] font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <ul className="space-y-2 text-[12px]">
            <li>
              <a href="tel:+919740781054" className="hover:text-white transition-colors">
                +91 97407 81054
              </a>
            </li>
            <li>
              <a href="mailto:homelybitesptr@gmail.com" className="hover:text-white transition-colors">
                homelybitesptr@gmail.com
              </a>
            </li>
            <li className="leading-relaxed">
              Threyi, Pruthwi Layout 1st Left,<br />
              Bypass Road, Puttur, Karnataka 574201
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[11px]">&copy; {new Date().getFullYear()} Homely Bites. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://wa.me/919740781054"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <a
            href="mailto:homelybitesptr@gmail.com"
            className="text-white/40 hover:text-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
