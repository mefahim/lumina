import Image from 'next/image'
import { Accordion } from '@/components/site/accordion'
import { ButtonLink } from '@/components/site/button'
import { ProductCard, ServiceCard, Testimonial } from '@/components/site/cards'
import { Eyebrow, PlaceholderBlock, SectionHeading } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'
import { faqGroups } from '@/lib/faqs'
import { products } from '@/lib/products'
import { services } from '@/lib/services'

export function Positioning() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container-site grid gap-10 py-20 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-3">
          <Eyebrow>Welcome</Eyebrow>
        </Reveal>
        <Reveal className="lg:col-span-9" delay={100}>
          <p className="display text-3xl leading-[1.2] md:text-5xl md:leading-[1.15]">
            Whether you are carrying something heavy or standing at a crossroads, this is a place to slow down, be
            heard, and <em className="text-primary">find your footing again</em> — at a pace that feels right for you.
          </p>
          <div className="mt-12 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            {[
              ['Confidential', 'A private, non-judgemental space for honest conversation.'],
              ['Unhurried', 'Sessions paced around you, never rushed or pressured.'],
              ['Considered', 'Thoughtful support shaped by what you actually need.'],
            ].map(([title, body]) => (
              <div key={title} className="flex flex-col gap-2">
                <p className="font-serif text-2xl">{title}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ServicesOverview() {
  return (
    <section className="container-site py-24 md:py-36">
      <Reveal className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Support for where you are, <em className="text-primary">and</em> where you are going.
            </>
          }
        />
        <ButtonLink href="/services" variant="text" arrow="right" className="self-start md:self-end">
          View all services
        </ButtonLink>
      </Reveal>
      <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 120}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function AboutPreview() {
  return (
    <section className="bg-secondary">
      <div className="container-site grid items-center gap-12 py-24 md:py-36 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/about-portrait.png"
              alt="Placeholder portrait representing Nicola standing by an open window holding a mug"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal className="flex flex-col gap-8 lg:col-span-6 lg:col-start-7" delay={120}>
          <Eyebrow>Meet Nicola</Eyebrow>
          <h2 className="display text-4xl md:text-6xl">
            Warm, steady, and <em className="text-primary">genuinely</em> on your side.
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Nicola offers a calm, compassionate space where you can be honest about how things really are — and
            begin, gently, to make sense of them.
          </p>
          <PlaceholderBlock label="Credentials — client content required">
            Qualifications, training, professional memberships and years of experience to be supplied and approved by
            Nicola. Nothing will be published here without verification.
          </PlaceholderBlock>
          <ButtonLink href="/about" variant="secondary" arrow="right" className="self-start">
            Read Nicola&apos;s story
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  )
}

const homeSteps = [
  { title: 'Get in touch', body: 'Book online or send a message with any questions — whichever feels easier.' },
  { title: 'An initial conversation', body: 'A relaxed first contact to see whether working together feels right.' },
  { title: 'Regular sessions', body: 'A consistent, confidential space shaped around what you bring.' },
  { title: 'Reflection & next steps', body: 'Pausing to notice what has shifted and deciding what comes next.' },
]

export function ProcessBand() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="container-site py-24 md:py-36">
        <Reveal className="mb-16 grid gap-8 md:mb-24 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow flex items-center gap-3 text-ink-foreground/60">
              <span aria-hidden="true" className="h-px w-6 bg-current" />
              How it works
            </p>
            <h2 className="display mt-6 text-4xl md:text-6xl">
              A simple, <em className="text-[#d9a88f]">gentle</em> beginning.
            </h2>
          </div>
          <p className="self-end text-pretty leading-relaxed text-ink-foreground/70 lg:col-span-4 lg:col-start-9">
            There is no right way to start. Each step is taken together, at a pace that feels comfortable.
          </p>
        </Reveal>
        <ol className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {homeSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120}>
              <li className="flex flex-col gap-4 border-t border-ink-foreground/20 pt-6">
                <span className="font-serif text-6xl italic text-[#d9a88f]">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-foreground/65">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function ResourcesPreview() {
  return (
    <section className="container-site py-24 md:py-36">
      <Reveal className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Resources"
          title={
            <>
              Gentle tools for <em className="text-primary">in-between</em> moments.
            </>
          }
          intro="Workbooks, guides and worksheets designed to support reflection alongside — or between — sessions."
        />
        <ButtonLink href="/shop" variant="text" arrow="right" className="self-start md:self-end">
          Browse all resources
        </ButtonLink>
      </Reveal>
      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product, i) => (
          <Reveal key={product.slug} delay={i * 120}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function TestimonialSection() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container-site py-24 md:py-32">
        <Reveal>
          <Testimonial
            quote="[Client words to be supplied — a short, genuine reflection on what working with Nicola felt like.]"
            attribution="[Client initials — with permission]"
            placeholder
          />
        </Reveal>
      </div>
    </section>
  )
}

export function FaqPreview() {
  const items = faqGroups.flatMap((g) => g.items).slice(0, 4)
  return (
    <section className="container-site grid gap-12 py-24 md:py-36 lg:grid-cols-12">
      <Reveal className="flex flex-col gap-8 lg:col-span-4">
        <SectionHeading eyebrow="Questions" title="Things people often ask." />
        <ButtonLink href="/faq" variant="secondary" arrow="right" className="self-start">
          See all FAQs
        </ButtonLink>
      </Reveal>
      <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
        <Accordion items={items} defaultOpen={0} />
      </Reveal>
    </section>
  )
}
