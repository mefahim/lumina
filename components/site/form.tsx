import type { ComponentProps, ReactNode } from 'react'
import { AlertCircle, CheckCircle2, Info, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const fieldBase =
  'w-full rounded-sm border border-input bg-card px-4 text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-[border-color,box-shadow] duration-300 hover:border-foreground/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15 aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/10'

export function Field({
  id,
  label,
  hint,
  error,
  optional,
  children,
  className,
}: {
  id: string
  label: string
  hint?: string
  error?: string
  optional?: boolean
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium">
        {label}
        {optional ? <span className="text-xs font-normal text-muted-foreground">Optional</span> : null}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-[13px] text-destructive animate-in fade-in slide-in-from-top-1">
          <AlertCircle aria-hidden="true" className="size-3.5" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-[13px] text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  )
}

export function Input({ className, ...props }: ComponentProps<'input'>) {
  return <input className={cn(fieldBase, 'h-12', className)} {...props} />
}

export function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return <textarea className={cn(fieldBase, 'min-h-36 resize-y py-3 leading-relaxed', className)} {...props} />
}

export function Select({ className, children, ...props }: ComponentProps<'select'>) {
  return (
    <div className="relative">
      <select className={cn(fieldBase, 'h-12 appearance-none pr-10', className)} {...props}>
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        className="pointer-events-none absolute right-4 top-1/2 size-3 -translate-y-1/2 text-muted-foreground"
      >
        <path d="M2 4.5 6 8l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    </div>
  )
}

export function Checkbox({
  id,
  label,
  error,
  ...props
}: ComponentProps<'input'> & { id: string; label: ReactNode; error?: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          className="mt-0.5 size-[18px] shrink-0 cursor-pointer rounded-sm border-input accent-[var(--primary)]"
          {...props}
        />
        <span>{label}</span>
      </label>
      {error ? (
        <p className="flex items-center gap-1.5 pl-8 text-[13px] text-destructive">
          <AlertCircle aria-hidden="true" className="size-3.5" />
          {error}
        </p>
      ) : null}
    </div>
  )
}

export function RadioCard({
  name,
  value,
  checked,
  onChange,
  title,
  description,
  aside,
}: {
  name: string
  value: string
  checked: boolean
  onChange: (value: string) => void
  title: string
  description?: string
  aside?: ReactNode
}) {
  return (
    <label
      className={cn(
        'flex cursor-pointer items-start gap-4 rounded-sm border p-5 transition-all duration-300',
        checked ? 'border-primary bg-accent/30' : 'border-border bg-card hover:border-foreground/40',
      )}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="mt-1 size-4 shrink-0 accent-[var(--primary)]"
      />
      <span className="flex-1">
        <span className="block font-medium">{title}</span>
        {description ? <span className="mt-1 block text-sm text-muted-foreground">{description}</span> : null}
      </span>
      {aside ? <span className="text-sm text-muted-foreground">{aside}</span> : null}
    </label>
  )
}

const alertStyles = {
  info: { icon: Info, className: 'border-border bg-secondary/60 text-foreground' },
  success: { icon: CheckCircle2, className: 'border-success/30 bg-success/10 text-foreground' },
  error: { icon: AlertCircle, className: 'border-destructive/30 bg-destructive/5 text-foreground' },
}

export function Alert({
  variant = 'info',
  title,
  children,
  className,
}: {
  variant?: keyof typeof alertStyles
  title?: string
  children?: ReactNode
  className?: string
}) {
  const { icon: Icon, className: tone } = alertStyles[variant]
  return (
    <div role={variant === 'error' ? 'alert' : 'status'} className={cn('flex gap-3 rounded-sm border p-4 text-sm', tone, className)}>
      <Icon
        aria-hidden="true"
        className={cn(
          'mt-0.5 size-4 shrink-0',
          variant === 'success' && 'text-success',
          variant === 'error' && 'text-destructive',
          variant === 'info' && 'text-primary',
        )}
      />
      <div className="flex flex-col gap-1 leading-relaxed">
        {title ? <p className="font-medium">{title}</p> : null}
        {children ? <div className="text-muted-foreground">{children}</div> : null}
      </div>
    </div>
  )
}

export function Spinner({ className }: { className?: string }) {
  return <Loader2 aria-hidden="true" className={cn('size-4 animate-spin', className)} />
}

export const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
