'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ShoppingBag, X } from 'lucide-react'
import { mainNav, site } from '@/lib/site'
import { cn } from '@/lib/utils'
import { ButtonLink } from './button'
import { useCart } from './cart-provider'
import { Logo } from './logo'

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === '/' : pathname.startsWith(href)
}

export function Header() {
  const pathname = usePathname()
  const { count } = useCart()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[80] rounded-full bg-foreground px-4 py-2 text-sm text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-[background-color,border-color,box-shadow] duration-500 ease-calm',
          scrolled ? 'border-b border-border bg-background/92 backdrop-blur-md' : 'border-b border-transparent bg-background',
        )}
      >
        <div
          className={cn(
            'container-site flex items-center justify-between gap-6 transition-[height] duration-500 ease-calm',
            scrolled ? 'h-[72px]' : 'h-20 md:h-24',
          )}
        >
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                    className={cn(
                      'link-underline py-1 text-[13px] tracking-[0.04em] transition-colors',
                      isActive(pathname, item.href) ? 'text-foreground [background-size:100%_1px]' : 'text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="/cart"
              className="relative flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
              aria-label={`Cart, ${count} ${count === 1 ? 'item' : 'items'}`}
            >
              <ShoppingBag aria-hidden="true" className="size-[18px]" strokeWidth={1.5} />
              {count > 0 ? (
                <span className="absolute right-1.5 top-1.5 flex size-[18px] items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground animate-in zoom-in-50">
                  {count}
                </span>
              ) : null}
            </Link>
            <ButtonLink href="/booking" size="sm" className="hidden sm:inline-flex">
              Book a Session
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-11 items-center gap-3 rounded-full pl-3 pr-1 text-[13px] tracking-[0.04em] lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span>Menu</span>
              <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
                <span className="h-px w-full bg-foreground" />
                <span className="h-px w-2/3 self-end bg-foreground" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={cn(
          'fixed inset-0 z-[70] flex flex-col bg-background transition-[opacity,visibility] duration-500 ease-calm lg:hidden',
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <div className="container-site flex h-20 items-center justify-between">
          <Logo onClick={close} />
          <button
            type="button"
            onClick={close}
            className="flex size-11 items-center justify-center rounded-full border border-border"
            aria-label="Close menu"
          >
            <X className="size-5" strokeWidth={1.5} />
          </button>
        </div>
        <nav aria-label="Mobile" className="container-site flex-1 overflow-y-auto pt-8">
          <ul className="flex flex-col">
            {mainNav.map((item, i) => (
              <li
                key={item.href}
                className={cn(
                  'border-b border-border transition-all duration-700 ease-calm',
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
                )}
                style={{ transitionDelay: menuOpen ? `${120 + i * 50}ms` : '0ms' }}
              >
                <Link
                  href={item.href}
                  onClick={close}
                  aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                  className="flex items-baseline justify-between py-4"
                >
                  <span className={cn('font-serif text-4xl', isActive(pathname, item.href) && 'italic text-primary')}>{item.label}</span>
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container-site flex flex-col gap-4 pb-8 pt-6">
          <ButtonLink href="/booking" onClick={close} size="lg" arrow="right" className="w-full">
            Book a Session
          </ButtonLink>
          <p className="text-center text-xs text-muted-foreground">{site.email}</p>
        </div>
      </div>
    </>
  )
}
