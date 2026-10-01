export type Product = {
  slug: string
  name: string
  category: 'Workbooks' | 'Guides' | 'Worksheets'
  short: string
  description: string[]
  // Sample prices only — to be replaced with Nicola's confirmed pricing.
  price: number
  format: string
  pages: string
  includes: string[]
  forWho: string[]
  image: string
  imageAlt: string
  featured?: boolean
  faqs: { q: string; a: string }[]
}

export const productCategories = ['All', 'Workbooks', 'Guides', 'Worksheets'] as const

export const products: Product[] = [
  {
    slug: 'the-reflective-workbook',
    name: 'The Reflective Workbook',
    category: 'Workbooks',
    short: 'A gentle, guided space to slow down, notice your patterns and reconnect with what you need.',
    description: [
      'The Reflective Workbook is designed to be returned to, again and again. Each section offers prompts and exercises that invite you to pause, notice and write — without pressure to get it right.',
      'Work through it from beginning to end, or open it wherever you are drawn on a given day. It is designed to complement, not replace, one-to-one support.',
    ],
    price: 24,
    format: '[Format TBC — e.g. printable PDF]',
    pages: '[Page count TBC]',
    includes: ['Guided reflection prompts', 'Exercises to notice patterns', 'Space for journaling', 'A gentle weekly check-in'],
    forWho: [
      'Anyone wanting a structured way to reflect',
      'People between sessions who want to continue the work',
      'Those who find writing helps them think',
    ],
    image: '/images/product-workbook.png',
    imageAlt: 'A terracotta workbook resting on a linen cloth beside dried grasses',
    featured: true,
    faqs: [
      { q: 'Is this a digital or printed product?', a: '[Answer to be supplied by Nicola] — format and delivery to be confirmed.' },
      { q: 'How will I receive it?', a: '[Answer to be supplied by Nicola] — access and delivery method to be confirmed.' },
    ],
  },
  {
    slug: 'a-gentle-guide-to-boundaries',
    name: 'A Gentle Guide to Boundaries',
    category: 'Guides',
    short: 'Practical, compassionate reflections on noticing your limits and communicating them with care.',
    description: [
      'A short, considered guide exploring what boundaries are, why they can feel difficult, and how to begin practising them in everyday life.',
      'Written in a warm, accessible style with reflective questions at the end of each section.',
    ],
    price: 12,
    format: '[Format TBC — e.g. PDF guide]',
    pages: '[Page count TBC]',
    includes: ['Short reflective chapters', 'Questions to explore', 'Everyday examples', 'A personal boundaries map'],
    forWho: ['People who find it hard to say no', 'Anyone feeling stretched thin', 'Those rebuilding their sense of self'],
    image: '/images/product-guide.png',
    imageAlt: 'A slim sand-coloured guide booklet standing on an oak shelf',
    faqs: [
      { q: 'Is this suitable if I am new to this topic?', a: '[Answer to be supplied by Nicola].' },
    ],
  },
  {
    slug: 'weekly-reflection-worksheets',
    name: 'Weekly Reflection Worksheets',
    category: 'Worksheets',
    short: 'A small set of printable worksheets for a calm, consistent weekly check-in with yourself.',
    description: [
      'A simple collection of worksheets designed for a ten-minute weekly pause — to notice what went well, what felt hard, and what you need next.',
    ],
    price: 8,
    format: '[Format TBC — e.g. printable PDF]',
    pages: '[Sheet count TBC]',
    includes: ['Weekly check-in sheet', 'Gratitude & noticing page', 'Intentions for the week ahead'],
    forWho: ['Anyone building a reflective habit', 'Coaching clients tracking progress'],
    image: '/images/product-worksheets.png',
    imageAlt: 'A fanned stack of printed worksheets with a pencil and brass paperclip',
    faqs: [{ q: 'Can I print these more than once?', a: '[Answer to be supplied by Nicola].' }],
  },
  {
    slug: 'finding-your-direction',
    name: 'Finding Your Direction',
    category: 'Workbooks',
    short: 'A coaching-led workbook to clarify your values, untangle decisions and plan meaningful next steps.',
    description: [
      'Drawing on a coaching approach, this workbook guides you through clarifying what matters, exploring your options and committing to realistic next steps.',
    ],
    price: 28,
    format: '[Format TBC — e.g. digital workbook]',
    pages: '[Page count TBC]',
    includes: ['Values exploration', 'Decision-making exercises', 'A simple planning framework', 'Reflection prompts'],
    forWho: ['People at a crossroads', 'Anyone feeling stuck', 'Those preparing for a change'],
    image: '/images/product-direction.png',
    imageAlt: 'A tablet displaying a minimal digital workbook page beside a ceramic cup',
    faqs: [{ q: 'Do I need to be a coaching client to use this?', a: '[Answer to be supplied by Nicola].' }],
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(value)
}
