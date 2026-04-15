import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import CartDrawer from '@/components/CartDrawer'
import WhatsAppButton from '@/components/WhatsAppButton'
import SplashScreen from '@/components/SplashScreen'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Homely Bites — Authentic Homemade Indian Snacks from Puttur',
  description:
    'Authentic homemade snacks made with coconut oil, no preservatives, and generations of South Karnataka craft. Straight to your doorstep.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-inter antialiased">
        <CartProvider>
          <SplashScreen />
          <Navbar />
          <CartDrawer />
          <main>{children}</main>
          <WhatsAppButton />
        </CartProvider>
      </body>
    </html>
  )
}
