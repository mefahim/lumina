import Link from 'next/link'
import { footerNav, legalNav, site } from '@/lib/site'
import { ButtonLink } from './button'
import { Logo } from './logo'

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-site pb-10 pt-20 md:pt-28">
        <div className="grid gap-12 border-b border-ink-foreground/15 pb-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="display max-w-lg text-4xl text-ink-foreground md:text-5xl">
              Take the next step <em className="text-[#d9a88f]">gently</em>, and in your own time.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/booking" variant="light" arrow="right">
                Book a Session
              </ButtonLink>
              <ButtonLink href="/contact" variant="outlineLight">
                Get in Touch
              </ButtonLink>
            </div>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-8">
            <p className="eyebrow mb-5 text-ink-foreground/55">Explore</p>
            <ul className="flex flex-col gap-3 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-ink-foreground/85 hover:text-ink-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5 text-ink-foreground/55">Contact</p>
            <ul className="flex flex-col gap-3 text-sm text-ink-foreground/85">
              <li>{site.email}</li>
              <li>{site.phone}</li>
              <li>{site.location}</li>
              <li className="pt-2 text-ink-foreground/55">[Social links — if supplied]</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-8 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <Logo tone="light" />
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-foreground/60">
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline hover:text-ink-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-xs text-ink-foreground/45">
          {'© '}
          {new Date().getFullYear()} {site.name} — {site.descriptor}. Design prototype: bracketed text marks content awaiting
          client approval.
        </p>
      </div>
    </footer>
  )
}
