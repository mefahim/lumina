import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getProduct, products, formatPrice } from '@/lib/products'
import { Eyebrow } from '@/components/site/primitives'

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug)
  return product ? { title: `${product.name} | Nicola Counselling & Life Coaching`, description: product.short } : {}
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = getProduct((await params).slug)
  if (!product) notFound()

  return (
    <main>
      <section className="container-site grid gap-10 py-16 md:grid-cols-12 md:gap-16 md:py-24">
        <div className="flex aspect-[4/5] items-center justify-center bg-secondary md:col-span-5">
          <div className="px-10 text-center"><Eyebrow>{product.category}</Eyebrow><h1 className="display mt-5 text-4xl md:text-5xl">{product.name}</h1></div>
        </div>
        <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
          <Link href="/shop" className="link-underline mb-12 inline-flex items-center gap-2 self-start text-sm"><ArrowLeft className="size-4" aria-hidden="true" /> Back to shop</Link>
          <p className="text-lg leading-relaxed text-muted-foreground">{product.short}</p>
          <p className="mt-8 text-2xl">{formatPrice(product.price)}</p>
          <button type="button" className="mt-8 w-full bg-primary px-6 py-4 text-sm uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-85 md:w-auto">Add to basket</button>
          <div className="mt-12 border-t border-border pt-8"><h2 className="font-serif text-2xl">What&apos;s inside</h2><ul className="mt-5 space-y-3 text-muted-foreground">{product.includes.map((item) => <li key={item}>— {item}</li>)}</ul></div>
        </div>
      </section>
    </main>
  )
}
