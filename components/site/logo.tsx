import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ className, tone = 'dark', onClick }: { className?: string; tone?: 'dark' | 'light'; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Nicola — Counselling & Life Coaching, home"
      className={cn('group flex flex-col leading-none', tone === 'light' ? 'text-ink-foreground' : 'text-foreground', className)}
    >
      <span className="font-serif text-[1.75rem] italic tracking-tight md:text-[2rem]">Nicola</span>
      <span className="eyebrow mt-1 text-[9px] tracking-[0.28em] opacity-70">Counselling & Life Coaching</span>
    </Link>
  )
}
