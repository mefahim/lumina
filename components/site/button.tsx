import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export const buttonStyles = cva(
  'group/btn inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-medium tracking-[0.01em] transition-[background-color,color,border-color,transform] duration-500 ease-calm disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-clay-deep',
        secondary:
          'border border-foreground/25 bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background',
        light: 'bg-background text-foreground hover:bg-accent',
        outlineLight:
          'border border-ink-foreground/30 text-ink-foreground hover:border-ink-foreground hover:bg-ink-foreground hover:text-ink',
        text: 'h-auto rounded-none px-0 text-foreground link-underline',
      },
      size: {
        sm: 'h-10 px-5 text-[13px]',
        md: 'h-12 px-7 text-sm',
        lg: 'h-14 px-8 text-[15px]',
      },
    },
    compoundVariants: [{ variant: 'text', className: 'h-auto px-0' }],
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

type ArrowKind = 'right' | 'up' | false

function Arrow({ kind }: { kind: ArrowKind }) {
  if (!kind) return null
  const Icon = kind === 'up' ? ArrowUpRight : ArrowRight
  return (
    <Icon
      aria-hidden="true"
      className="size-4 transition-transform duration-500 ease-calm group-hover/btn:translate-x-1"
    />
  )
}

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonStyles> & { arrow?: ArrowKind; children: ReactNode }

export function ButtonLink({ variant, size, arrow = false, className, children, ...props }: ButtonLinkProps) {
  return (
    <Link className={cn(buttonStyles({ variant, size }), className)} {...props}>
      {children}
      <Arrow kind={arrow} />
    </Link>
  )
}

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonStyles> & { arrow?: ArrowKind }

export function Button({ variant, size, arrow = false, className, children, type = 'button', ...props }: ButtonProps) {
  return (
    <button type={type} className={cn(buttonStyles({ variant, size }), className)} {...props}>
      {children}
      <Arrow kind={arrow} />
    </button>
  )
}
