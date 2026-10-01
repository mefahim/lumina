import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ButtonLink } from '@/components/site/button'
import { Breadcrumbs, FinalCta, PageHero } from '@/components/site/sections'
import { ProcessSteps, ProductCard } from '@/components/site/cards'
import { Divider, PlaceholderTag, SectionHeading } from '@/components/site/primitives'
import { getProduct } from '@/lib/products'
import { getService, services } from '@/lib/services'

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  return service ? { title: service.name, description: service.positioning } : {}
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const relatedProducts = service.related.map(getProduct).filter((product): product is NonNullable<ReturnType<typeof getProduct>> => Boolean(product))

  return (
    <>
      <section className="container-site pb-20 pt-8 md:pb-32 md:pt-12">
        <Breadcrumbs items={[{ href: '/', label: 'Home' }, { href: '/services', label: 'Services' }, { label: service.name }]} />
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-20">
          <div className="flex flex-col gap-7 lg:col-span-7">
            <p className="eyebrow text-muted-foreground">{service.number} / {service.name}</p>
            <h1 className="display text-5xl md:text-7xl lg:text-[6rem]">{service.positioning}</h1>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">{service.short}</p>
            <div><ButtonLink href="/booking" size="lg" arrow="right">Book this service</ButtonLink></div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary lg:col-span-5">
            <Image src={service.image} alt={service.imageAlt} fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-3 lg:gap-12">
          {([['What it is', service.overview.what], ['Who it is for', service.overview.who], ['What to expect', service.overview.experience]] as const).map(([title, body]) => <div key={title} className="flex flex-col gap-4"><h2 className="font-serif text-3xl">{title}</h2><p className="leading-relaxed text-muted-foreground">{body}</p></div>)}
        </div>
      </section>

      <section className="container-site py-24 md:py-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <SectionHeading eyebrow="A place to begin" title="You might be here because…" className="lg:col-span-4" />
          <ul className="divide-y divide-border border-y border-border lg:col-span-7 lg:col-start-6">{service.forWho.map((item) => <li key={item} className="py-5 text-lg leading-relaxed">{item}</li>)}</ul>
        </div>
      </section>

      <section className="border-y border-border bg-secondary"><div className="container-site py-24 md:py-32"><SectionHeading eyebrow="What to expect" title="A process shaped around you." className="mb-12 max-w-2xl md:mb-16" /><ProcessSteps steps={service.steps} /></div></section>

      <section className="container-site py-24 md:py-36"><div className="grid gap-12 lg:grid-cols-12 lg:gap-20"><SectionHeading eyebrow="Practical details" title="The details, clearly." className="lg:col-span-5" /><div className="lg:col-span-6 lg:col-start-7"><dl className="divide-y divide-border border-y border-border">{service.details.map((detail) => <div key={detail.label} className="flex items-center justify-between gap-6 py-5"><dt className="text-muted-foreground">{detail.label}</dt><dd className="text-right">{detail.value} {detail.placeholder && <PlaceholderTag />}</dd></div>)}</dl></div></div></section>

      {relatedProducts.length > 0 && <section className="border-t border-border"><div className="container-site py-24 md:py-32"><SectionHeading eyebrow="Related resources" title="Continue exploring." className="mb-12 md:mb-16" /><div className="grid gap-8 sm:grid-cols-2">{relatedProducts.slice(0, 2).map((product) => <ProductCard key={product.slug} product={product} />)}</div></div></section>}
      <FinalCta title={<>Ready to <em className="text-primary">begin?</em></>} primary={{ href: '/booking', label: 'Book a Session' }} secondary={{ href: '/contact', label: 'Ask a Question' }} />
    </>
  )
}
