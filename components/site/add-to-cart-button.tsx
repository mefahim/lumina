'use client'

import { useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonStyles } from './button'
import { useCart } from './cart-provider'

export function AddToCartButton({
  slug,
  qty = 1,
  size = 'md',
  variant = 'primary',
  className,
  label = 'Add to Cart',
}: {
  slug: string
  qty?: number
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary'
  className?: string
  label?: string
}) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)

  return (
    <button
      type="button"
      onClick={() => {
        add(slug, qty)
        setAdded(true)
        setTimeout(() => setAdded(false), 1800)
      }}
      className={cn(buttonStyles({ variant, size }), className)}
    >
      {added ? (
        <>
          <Check aria-hidden="true" className="size-4 animate-in zoom-in-50" /> Added
        </>
      ) : (
        <>
          <Plus aria-hidden="true" className="size-4" /> {label}
        </>
      )}
    </button>
  )
}
