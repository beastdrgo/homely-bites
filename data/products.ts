export type Category =
  | 'Savory Snacks'
  | 'Traditional Sweets'
  | 'Fried & Dried Items'
  | 'Ready To Eat'

export interface Product {
  id: number
  name: string
  slug: string
  category: Category
  price: number
  description: string
  image: string
  featured: boolean
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Unniyappam',
    slug: 'unniyappam',
    category: 'Savory Snacks',
    price: 300,
    description: 'Our signature product. Traditional Kerala-style sweet rice fritters made with ripe bananas, jaggery, and coconut — fried to golden perfection in pure coconut oil.',
    image: '/images/products/unniyappam.jpg',
    featured: true,
  },
  {
    id: 2,
    name: 'Chakkuli',
    slug: 'chakkuli',
    category: 'Savory Snacks',
    price: 475,
    description: 'Crispy, spiral-shaped snacks made from rice flour pressed through a traditional chakli maker. Fried in pure coconut oil. Perfect with evening chai.',
    image: '/images/products/chakkuli.jpg',
    featured: true,
  },
  {
    id: 3,
    name: 'Chakkuli Murukku',
    slug: 'chakkuli-murukku',
    category: 'Savory Snacks',
    price: 450,
    description: 'A handcrafted variant of the classic murukku — slightly thinner, extra crispy, made using a time-honoured recipe passed down through the family.',
    image: '/images/products/chakkuli-murukku.jpg',
    featured: false,
  },
  {
    id: 4,
    name: 'Nendhra Banana Chips',
    slug: 'nendhra-banana-chips',
    category: 'Savory Snacks',
    price: 550,
    description: 'Thin, golden slices of raw Nendran banana lightly salted and fried in fresh coconut oil. Crispy, clean, and naturally flavourful.',
    image: '/images/products/banana-chips.jpg',
    featured: true,
  },
  {
    id: 5,
    name: 'Kharadhakaddi',
    slug: 'kharadhakaddi',
    category: 'Savory Snacks',
    price: 450,
    description: 'ಖಾರಕಡ್ಡಿ — Spicy, crunchy sev-style sticks made from chickpea flour and bold spices. A beloved Karnataka teatime snack.',
    image: '/images/products/kharadhakaddi.jpg',
    featured: false,
  },
  {
    id: 6,
    name: 'Ghodhi Thukkudi',
    slug: 'ghodhi-thukkudi',
    category: 'Savory Snacks',
    price: 400,
    description: 'Wheat-based crispy bite-size snacks with a satisfying crunch. Made from whole wheat and spices — a healthier teatime option.',
    image: '/images/products/ghodhi-thukkudi.jpg',
    featured: false,
  },
  {
    id: 7,
    name: 'Mixture',
    slug: 'mixture',
    category: 'Savory Snacks',
    price: 450,
    description: 'A bold and flavourful blend of fried lentils, nuts, curry leaves, and spices. Every handful is a different crunch.',
    image: '/images/products/mixture.jpg',
    featured: true,
  },
  {
    id: 8,
    name: 'Ribbon Pakkoda',
    slug: 'ribbon-pakkoda',
    category: 'Savory Snacks',
    price: 450,
    description: 'Ribbon-shaped, crispy, and spiced to perfection. Made from rice and chickpea flour pressed into flat ribbons and fried golden.',
    image: '/images/products/ribbon-pakkoda.jpg',
    featured: false,
  },
  {
    id: 9,
    name: 'Masala Mandakki',
    slug: 'masala-mandakki',
    category: 'Savory Snacks',
    price: 400,
    description: 'Spiced puffed rice tossed with onions, green chilli, lemon, and fresh herbs. A popular Karnataka street snack made fresh to order.',
    image: '/images/products/masala-mandakki.jpg',
    featured: false,
  },
  {
    id: 10,
    name: 'Seven Cup Sweet (250g)',
    slug: 'seven-cup-sweet-250g',
    category: 'Traditional Sweets',
    price: 150,
    description: 'A rich, melt-in-your-mouth sweet made with seven key traditional ingredients — gram flour, coconut, ghee, milk, cardamom, and more.',
    image: '/images/products/seven-cup-sweet.jpg',
    featured: false,
  },
  {
    id: 11,
    name: 'Seven Cup Sweet',
    slug: 'seven-cup-sweet',
    category: 'Ready To Eat',
    price: 600,
    description: 'Full-size portion of the classic seven-cup sweet. Made fresh in small batches. A festive favourite and gifting staple.',
    image: '/images/products/seven-cup-sweet-full.jpg',
    featured: true,
  },
  {
    id: 12,
    name: 'Tender Mango Pickle',
    slug: 'tender-mango-pickle',
    category: 'Ready To Eat',
    price: 500,
    description: 'Seasonal homemade raw mango pickle made with mustard, chilli, and traditional spices. Tangy, bold, and deeply authentic.',
    image: '/images/products/mango-pickle.jpg',
    featured: false,
  },
  {
    id: 13,
    name: 'Majjige Menassu',
    slug: 'majjige-menassu',
    category: 'Fried & Dried Items',
    price: 750,
    description: 'Dried curd-coated chillies — spicy, tangy, and intensely flavourful. Soak in buttermilk, dry in the sun, and fry before eating. A bold South Indian classic.',
    image: '/images/products/majjige-menassu.jpg',
    featured: true,
  },
  {
    id: 14,
    name: 'Menassu Udhina Sendige',
    slug: 'menassu-udhina-sendige',
    category: 'Fried & Dried Items',
    price: 800,
    description: 'Sun-dried black gram and chilli crisps — fiery, crunchy, and made entirely by hand. One of our most sought-after products.',
    image: '/images/products/menassu-udhina-sendige.jpg',
    featured: false,
  },
  {
    id: 15,
    name: 'Saabakki Sendige',
    slug: 'saabakki-sendige',
    category: 'Fried & Dried Items',
    price: 450,
    description: 'Sago-based sun-dried fryums made by hand and dried in natural sunlight. Light, crispy when fried, and completely addictive.',
    image: '/images/products/saabakki-sendige.jpg',
    featured: false,
  },
  {
    id: 16,
    name: 'Akki Sendige',
    slug: 'akki-sendige',
    category: 'Fried & Dried Items',
    price: 550,
    description: 'Rice-based sun-dried sandige crafted with care and dried slowly under natural sun. Puff up beautifully when fried.',
    image: '/images/products/akki-sendige.jpg',
    featured: false,
  },
  {
    id: 17,
    name: 'Saagu Neerulli Sendige',
    slug: 'saagu-neerulli-sendige',
    category: 'Fried & Dried Items',
    price: 550,
    description: 'Onion-flavoured sun-dried sandige with a distinct aromatic punch. A favourite with rice and sambar.',
    image: '/images/products/saagu-neerulli-sendige.jpg',
    featured: false,
  },
  {
    id: 18,
    name: 'Maragenassu Happala',
    slug: 'maragenassu-happala',
    category: 'Fried & Dried Items',
    price: 80,
    description: 'Thin pappad-style crisps made from raw banana flour — light, delicate, and the perfect side with a South Indian meal.',
    image: '/images/products/maragenassu-happala.jpg',
    featured: false,
  },
  {
    id: 19,
    name: 'Haagalakkai Balakka',
    slug: 'haagalakkai-balakka',
    category: 'Fried & Dried Items',
    price: 80,
    description: 'Sun-dried bitter gourd crisps — a unique and nutritious snack that balances the bitterness of karela with traditional seasoning.',
    image: '/images/products/haagalakkai-balakka.jpg',
    featured: false,
  },
]

export const categories: Category[] = [
  'Savory Snacks',
  'Traditional Sweets',
  'Fried & Dried Items',
  'Ready To Eat',
]

export const featuredProducts = products.filter(p => p.featured)
