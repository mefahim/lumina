import Link from 'next/link'
import { PageHero } from '@/components/site/sections'
import { faqGroups } from '@/lib/faqs'

export const metadata = {
  title: 'FAQs | Nicola Counselling & Life Coaching',
  description: 'Answers to common questions about sessions, booking and resources.',
}

export default function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="FAQs"
        title={<>A few things you may be <em className="text-primary">wondering.</em></>}
        intro="Some helpful answers about working together, booking sessions and using the resources here."
        breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'FAQs' }]}
      />
      <section className="container-site grid gap-14 pb-24 md:grid-cols-12 md:gap-20 md:pb-36">
        <div className="md:col-span-3"><p className="text-sm leading-relaxed text-muted-foreground">Still have a question? <Link href="/contact" className="link-underline text-foreground">Get in touch</Link> and Nicola will be happy to help.</p></div>
        <div className="space-y-14 md:col-span-8 md:col-start-5">
          {faqGroups.map((group) => <section key={group.id}><h2 className="font-serif text-3xl">{group.title}</h2><div className="mt-6 divide-y divide-border border-y border-border">{group.items.map((item) => <details key={item.q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-medium [&::-webkit-details-marker]:hidden"><span>{item.q}</span><span className="text-2xl font-light text-primary transition-transform group-open:rotate-45">+</span></summary><p className="max-w-2xl pt-4 leading-relaxed text-muted-foreground">{item.a}</p></details>)}</div></section>)}
        </div>
      </section>
    </main>
  )
}
