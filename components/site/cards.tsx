import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { Product } from '@/lib/products'
import { formatPrice } from '@/lib/products'
import type { Service } from '@/lib/services'
import { AddToCartButton } from './add-to-cart-button'

export function ServiceCard({ service, priority }: { service: Service; priority?: boolean }) {
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-calm group-hover:scale-[1.04]"
        />
        <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 text-xs tracking-[0.1em] backdrop-blur">
          {service.number}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 pt-6">
        <h3 className="font-serif text-3xl">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
            {service.name}
          </Link>
        </h3>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">{service.short}</p>
        <span className="mt-auto flex items-center gap-2 pt-3 text-sm font-medium text-primary">
          Learn more
          <ArrowRight aria-hidden="true" className="size-4 transition-transform duration-500 ease-calm group-hover:translate-x-1" />
        </span>
      </div>
    </article>
  )
}

export function ProductCard({ product, priority }: { product: Product; priority?: boolean }) {
  return (
    <article className="group flex flex-col">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-secondary" tabIndex={-1} aria-hidden="true">
        <Image
          src={product.image}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1400ms] ease-calm group-hover:scale-[1.05]"
        />
        <span className="absolute bottom-4 right-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-background opacity-0 transition-all duration-500 ease-calm group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col pt-5">
        <p className="eyebrow text-muted-foreground">{product.category}</p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl leading-tight">
            <Link href={`/shop/${product.slug}`} className="link-underline">
              {product.name}
            </Link>
          </h3>
          <p className="shrink-0 pt-1 text-sm tabular-nums">{formatPrice(product.price)}</p>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{product.short}</p>
        <div className="mt-auto pt-5">
          <AddToCartButton slug={product.slug} size="sm" variant="secondary" className="w-full" />
        </div>
      </div>
    </article>
  )
}

export function ProcessSteps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-flow-col lg:auto-cols-fr lg:grid-cols-none">
      {steps.map((step, i) => (
        <li key={step.title} className="flex flex-col gap-4 bg-background p-6 md:p-8">
          <span className="font-serif text-5xl italic text-primary/80">{String(i + 1).padStart(2, '0')}</span>
          <h3 className="mt-6 font-serif text-2xl leading-tight">{step.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}

export function Testimonial({ quote, attribution, placeholder }: { quote: string; attribution: string; placeholder?: boolean }) {
  return (
    <figure className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
      <span aria-hidden="true" className="font-serif text-7xl leading-none text-primary/60">
        {'\u201C'}
      </span>
      <blockquote className="display -mt-6 text-3xl italic md:text-[2.75rem] md:leading-[1.15]">{quote}</blockquote>
      <figcaption className="flex flex-col items-center gap-3">
        <span className="eyebrow text-muted-foreground">{attribution}</span>
        {placeholder ? (
          <span className="rounded-sm border border-dashed border-primary/40 px-2 py-1 text-[11px] text-muted-foreground">
            Layout placeholder — only genuine, permitted client words will be published
          </span>
        ) : null}
      </figcaption>
    </figure>
  )
}
