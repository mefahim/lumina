'use client'

import Link from 'next/link'
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { Check, X } from 'lucide-react'
import { getProduct, type Product } from '@/lib/products'
import { cn } from '@/lib/utils'

type CartLine = { slug: string; qty: number }
type CartItem = CartLine & { product: Product; lineTotal: number }

type CartContextValue = {
  items: CartItem[]
  count: number
  subtotal: number
  add: (slug: string, qty?: number) => void
  setQty: (slug: string, qty: number) => void
  remove: (slug: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

const MAX_QTY = 5

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [toast, setToast] = useState<Product | null>(null)

  const add = useCallback((slug: string, qty = 1) => {
    const product = getProduct(slug)
    if (!product) return
    setLines((prev) => {
      const existing = prev.find((l) => l.slug === slug)
      if (existing) {
        return prev.map((l) => (l.slug === slug ? { ...l, qty: Math.min(MAX_QTY, l.qty + qty) } : l))
      }
      return [...prev, { slug, qty: Math.min(MAX_QTY, qty) }]
    })
    setToast(product)
  }, [])

  const setQty = useCallback((slug: string, qty: number) => {
    setLines((prev) =>
      qty <= 0 ? prev.filter((l) => l.slug !== slug) : prev.map((l) => (l.slug === slug ? { ...l, qty: Math.min(MAX_QTY, qty) } : l)),
    )
  }, [])

  const remove = useCallback((slug: string) => setLines((prev) => prev.filter((l) => l.slug !== slug)), [])
  const clear = useCallback(() => setLines([]), [])

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 4200)
    return () => clearTimeout(t)
  }, [toast])

  const value = useMemo<CartContextValue>(() => {
    const items = lines.flatMap((l) => {
      const product = getProduct(l.slug)
      return product ? [{ ...l, product, lineTotal: product.price * l.qty }] : []
    })
    return {
      items,
      count: items.reduce((n, i) => n + i.qty, 0),
      subtotal: items.reduce((n, i) => n + i.lineTotal, 0),
      add,
      setQty,
      remove,
      clear,
    }
  }, [lines, add, setQty, remove, clear])

  return (
    <CartContext.Provider value={value}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center p-4 md:justify-end md:p-6">
        <div
          className={cn(
            'pointer-events-auto flex w-full max-w-sm items-center gap-4 rounded-sm border border-border bg-card p-4 shadow-[0_20px_50px_-20px_rgba(38,33,29,0.35)] transition-all duration-500 ease-calm',
            toast ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
          )}
        >
          {toast ? (
            <>
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check aria-hidden="true" className="size-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">Added to your cart</p>
                <p className="truncate text-sm text-muted-foreground">{toast.name}</p>
              </div>
              <Link href="/cart" onClick={() => setToast(null)} className="link-underline text-sm font-medium text-primary">
                View cart
              </Link>
              <button type="button" onClick={() => setToast(null)} className="text-muted-foreground hover:text-foreground" aria-label="Dismiss">
                <X className="size-4" />
              </button>
            </>
          ) : null}
        </div>
      </div>
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
