import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/site/sections'
import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'

export const metadata = {
  title: 'Resources | Nicola Counselling & Life Coaching',
  description: 'Gentle resources for reflection, boundaries, clarity and moving forward.',
}

const resources = [
  { type: 'Guide', title: 'A gentle guide to boundaries', body: 'A place to start when saying no feels difficult, or when your own needs have become hard to hear.', href: '/resources/a-gentle-guide-to-boundaries' },
  { type: 'Reflection', title: 'Finding your direction', body: 'Questions to help you pause, notice what matters, and make a little more sense of what comes next.', href: '/resources/finding-your-direction' },
  { type: 'Worksheets', title: 'Weekly reflection worksheets', body: 'Simple prompts for checking in with yourself at the end of a busy week.', href: '/resources/weekly-reflection-worksheets' },
]

export default function ResourcesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title={<>A little space to <em className="text-primary">reflect.</em></>}
        intro="Thoughts, prompts and practical guides to return to when you need a quieter moment with yourself."
        breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Resources' }]}
      />
      <section className="container-site pb-24 md:pb-36">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal key={resource.title} delay={index * 0.08}>
              <Link href={resource.href} className="group flex h-full flex-col border-t border-border pt-5">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-primary"><span>{resource.type}</span><ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                <h2 className="display mt-12 text-3xl leading-tight md:text-4xl">{resource.title}</h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">{resource.body}</p>
                <span className="link-underline mt-auto pt-8 text-sm">Read resource</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-secondary"><div className="container-site grid gap-8 py-20 md:grid-cols-12 md:py-28"><div className="md:col-span-5"><Eyebrow>Not sure where to begin?</Eyebrow></div><div className="md:col-span-6 md:col-start-7"><h2 className="display text-4xl md:text-5xl">You do not have to find the right words first.</h2><p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">An introductory conversation is a chance to ask questions and see what kind of support might be useful.</p><Link href="/services/introductory-conversation" className="link-underline mt-8 inline-block">Explore introductory conversations</Link></div></div></section>
    </main>
  )
}
