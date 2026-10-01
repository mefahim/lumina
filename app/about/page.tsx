import Image from 'next/image'
import { ButtonLink } from '@/components/site/button'
import { FinalCta, PageHero } from '@/components/site/sections'
import { Eyebrow } from '@/components/site/primitives'
import { Reveal } from '@/components/site/reveal'

export const metadata = {
  title: 'About Nicola | Counselling & Life Coaching',
  description: 'Learn about Nicola’s calm, thoughtful approach to counselling and life coaching.',
}

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Nicola"
        title={<>A thoughtful space to <em className="text-primary">begin again.</em></>}
        intro="Support that is warm, grounded and shaped around the person in front of me. You do not need to have everything figured out before you arrive."
        breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'About' }]}
      >
        <ButtonLink href="/contact" arrow="right">Get in touch</ButtonLink>
      </PageHero>

      <section className="container-site grid gap-12 pb-24 md:grid-cols-12 md:gap-16 md:pb-36">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image src="/images/conversation.png" alt="A calm, welcoming counselling space" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <Reveal className="flex flex-col justify-center gap-8 md:col-span-6 md:col-start-7" delay={0.1}>
          <Eyebrow>A little about the work</Eyebrow>
          <h2 className="display text-4xl md:text-6xl">You are welcome exactly as you are.</h2>
          <div className="space-y-5 leading-relaxed text-muted-foreground">
            <p>I’m Nicola, and I offer counselling and life coaching from a place of curiosity, compassion and respect. My role is not to tell you who to be. It is to listen carefully, ask thoughtful questions, and help you hear yourself more clearly.</p>
            <p>Some people arrive feeling overwhelmed. Others are standing at a crossroads or know that something needs to change. Wherever you are starting from, our work begins with making a little room to pause.</p>
            <p>Our sessions are collaborative and unhurried. We will work at a pace that feels manageable, with space for both honest reflection and practical next steps.</p>
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary">
        <div className="container-site grid gap-12 py-24 md:grid-cols-3 md:gap-10 md:py-32">
          {[
            ['01', 'Warmth', 'A human, non-judgemental space where you can speak freely and feel met with care.'],
            ['02', 'Curiosity', 'Gentle questions that help you notice what is happening beneath the surface.'],
            ['03', 'Clarity', 'A clearer sense of what matters, what is possible, and what your next step might be.'],
          ].map(([number, title, body]) => (
            <Reveal key={number} className="flex flex-col gap-5">
              <span className="text-sm text-primary">{number}</span>
              <h2 className="display text-3xl md:text-4xl">{title}</h2>
              <p className="leading-relaxed text-muted-foreground">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <FinalCta />
    </main>
  )
}

