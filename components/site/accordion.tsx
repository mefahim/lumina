'use client'

import { useId, useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Accordion({
  items,
  defaultOpen = null,
  className,
}: {
  items: { q: string; a: string }[]
  defaultOpen?: number | null
  className?: string
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen)
  const baseId = useId()

  return (
    <div className={cn('border-t border-border', className)}>
      {items.map((item, i) => {
        const isOpen = open === i
        const buttonId = `${baseId}-btn-${i}`
        const panelId = `${baseId}-panel-${i}`
        return (
          <div key={item.q} className="border-b border-border">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
              >
                <span className="font-serif text-xl leading-snug transition-colors duration-300 group-hover:text-primary md:text-2xl">
                  {item.q}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-500 ease-calm group-hover:border-foreground',
                    isOpen && 'rotate-45 border-foreground bg-foreground text-background',
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                'grid transition-[grid-template-rows,opacity] duration-500 ease-calm',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pr-12 leading-relaxed text-muted-foreground">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
