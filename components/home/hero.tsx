import Image from 'next/image'
import { ButtonLink } from '@/components/site/button'
import { Eyebrow, PlaceholderTag } from '@/components/site/primitives'

export function HomeHero() {
  return (
    <section className="container-site pb-20 pt-6 md:pb-28 md:pt-10">
      <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-8 lg:col-span-7 lg:pb-10">
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-1000">
            <Eyebrow>Counselling & Life Coaching</Eyebrow>
          </div>
          <h1 className="display text-[3.25rem] animate-in fade-in slide-in-from-bottom-4 duration-1000 sm:text-7xl lg:text-[6.25rem]">
            A calm space to <em className="text-primary">pause</em>, reflect and move forward.
          </h1>
          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 delay-150 duration-1000 fill-mode-both md:text-lg">
            Confidential counselling and thoughtful life coaching with Nicola — gentle, professional support for
            whatever you are carrying, and wherever you are heading.
          </p>
          <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 delay-300 duration-1000 fill-mode-both sm:flex-row">
            <ButtonLink href="/booking" size="lg" arrow="right">
              Book a Session
            </ButtonLink>
            <ButtonLink href="/services" size="lg" variant="secondary">
              Explore Services
            </ButtonLink>
          </div>
          <p className="flex flex-wrap items-center gap-2 pt-2 text-xs text-muted-foreground">
            <PlaceholderTag>TBC</PlaceholderTag>
            Professional memberships & qualifications to be confirmed by Nicola
          </p>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary animate-in fade-in zoom-in-[0.98] duration-[1400ms]">
            <Image
              src="/images/hero-portrait.png"
              alt="Placeholder portrait representing Nicola, seated by a window in soft natural light"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 left-4 right-4 flex items-center justify-between gap-4 border border-border bg-card/95 p-5 backdrop-blur sm:left-auto sm:right-6 sm:w-72 lg:-left-16 lg:right-auto">
            <div>
              <p className="eyebrow text-muted-foreground">Sessions</p>
              <p className="mt-1 font-serif text-xl">In person & online</p>
            </div>
            <PlaceholderTag />
          </div>
        </div>
      </div>
    </section>
  )
}
