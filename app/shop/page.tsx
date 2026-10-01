import { PageHero } from '@/components/site/sections'
import { ProductCard } from '@/components/site/cards'
import { products, productCategories } from '@/lib/products'

export const metadata = {
  title: 'Shop | Nicola Counselling & Life Coaching',
  description: 'Workbooks, guides and worksheets to support reflection between sessions.',
}

export default function ShopPage() {
  return (
    <main>
      <PageHero
        eyebrow="Shop"
        title={<>Resources for your <em className="text-primary">next step.</em></>}
        intro="Thoughtful workbooks, guides and worksheets to support reflection alongside — or between — sessions."
        breadcrumbs={[{ href: '/', label: 'Home' }, { label: 'Shop' }]}
      />
      <section className="container-site pb-24 md:pb-36">
        <div className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {productCategories.map((category) => <span key={category} className={category === 'All' ? 'text-primary' : ''}>{category}</span>)}
        </div>
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>
    </main>
  )
}
