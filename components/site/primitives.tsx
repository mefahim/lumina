import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('eyebrow flex items-center gap-3 text-muted-foreground', className)}>
      <span aria-hidden="true" className="h-px w-6 bg-current opacity-60" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: Tag = 'h2',
  className,
}: {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  align?: 'left' | 'center'
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-5', align === 'center' && 'items-center text-center', className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <Tag className="display max-w-3xl text-4xl md:text-5xl lg:text-[3.5rem]">{title}</Tag>
      {intro ? (
        <p className={cn('max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg', align === 'center' && 'mx-auto')}>
          {intro}
        </p>
      ) : null}
    </div>
  )
}

export function PlaceholderTag({ children = 'TBC', className }: { children?: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border border-dashed border-primary/40 bg-accent/50 px-1.5 py-0.5 align-middle text-[10px] font-medium uppercase tracking-[0.14em] text-accent-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function PlaceholderBlock({
  label = 'Client content required',
  children,
  className,
}: {
  label?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('rounded-sm border border-dashed border-primary/35 bg-accent/25 p-5 md:p-6', className)}>
      <p className="eyebrow mb-2 text-primary">{label}</p>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

export function Divider({ className }: { className?: string }) {
  return <hr className={cn('border-0 border-t border-border', className)} />
}
