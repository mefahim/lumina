import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ButtonLink } from './button'
import { Eyebrow } from './primitives'
import { Reveal } from './reveal'

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-1.5">
            {item.href ? (
              <Link href={item.href} className="link-underline hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-foreground">
                {item.label}
              </span>
            )}
            {i < items.length - 1 ? <ChevronRight aria-hidden="true" className="size-3" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
  breadcrumbs,
  className,
}: {
  eyebrow: string
  title: ReactNode
  intro?: ReactNode
  children?: ReactNode
  breadcrumbs?: { href?: string; label: string }[]
  className?: string
}) {
  return (
    <section className={cn('container-site pb-16 pt-10 md:pb-24 md:pt-16', className)}>
      {breadcrumbs ? (
        <div className="mb-10 md:mb-14">
          <Breadcrumbs items={breadcrumbs} />
        </div>
      ) : null}
      <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
        <div className="flex flex-col gap-6 lg:col-span-8">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem]">{title}</h1>
        </div>
        {intro || children ? (
          <div className="flex flex-col gap-6 lg:col-span-4 lg:pb-3">
            {intro ? <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p> : null}
            {children}
          </div>
        ) : null}
      </Reveal>
    </section>
  )
}

export function FinalCta({
  title = (
    <>
      Ready to take the <em className="text-primary">next step</em>?
    </>
  ),
  body = 'Book a session when it feels right for you, or send a message if you would like to ask a question first.',
  primary = { href: '/booking', label: 'Book a Session' },
  secondary = { href: '/contact', label: 'Get in Touch' },
}: {
  title?: ReactNode
  body?: string
  primary?: { href: string; label: string }
  secondary?: { href: string; label: string }
}) {
  return (
    <section className="relative isolate overflow-hidden bg-secondary">
      <Image src="/images/light.png" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-60 mix-blend-multiply" />
      <div className="container-site py-24 md:py-36">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <Eyebrow>Begin when you are ready</Eyebrow>
          <h2 className="display text-5xl md:text-7xl">{title}</h2>
          <p className="max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">{body}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primary.href} size="lg" arrow="right">
              {primary.label}
            </ButtonLink>
            <ButtonLink href={secondary.href} size="lg" variant="secondary">
              {secondary.label}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
