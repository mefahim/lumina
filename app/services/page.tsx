import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { FinalCta, PageHero } from '@/components/site/sections'
import { ServiceCard, ProcessSteps } from '@/components/site/cards'
import { SectionHeading } from '@/components/site/primitives'
import { services } from '@/lib/services'

export const metadata = {
  title: 'Services',
  description: 'Explore counselling, life coaching and introductory conversations with Nicola.',
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Support designed <em className="text-primary">around you.</em></>}
        intro="Different seasons call for different kinds of support. Explore the ways we might work together, at a pace that feels right for you."
      />

      <section className="container-site pb-24 md:pb-36" aria-labelledby="service-list-heading">
        <SectionHeading
          eyebrow="Ways of working"
          title="A place to begin, wherever you are."
          intro="There is no right way to arrive. Each service offers a thoughtful, confidential space to pause and consider what might help."
          className="mb-12 max-w-2xl md:mb-16"
        />
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-20">
          {services.map((service, index) => <ServiceCard key={service.slug} service={service} priority={index < 2} />)}
        </div>
      </section>

      <section className="border-y border-border bg-secondary" aria-labelledby="guidance-heading">
        <div className="container-site grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Not sure where to start?" title="You do not have to decide alone." />
          </div>
          <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-muted-foreground">If you are unsure whether counselling or coaching is the better fit, an introductory conversation can be a gentle first step. We can talk through what you are looking for and answer any practical questions.</p>
            <Link href="/services/introductory-conversation" className="flex w-fit items-center gap-2 text-sm font-medium text-primary link-underline">
              Explore an introductory conversation <ArrowRight aria-hidden="true" className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-site py-24 md:py-36" aria-labelledby="process-heading">
        <SectionHeading eyebrow="The process" title="A steady way forward." intro="The first step is simply making contact. From there, we take the work one conversation at a time." className="mb-12 max-w-2xl md:mb-16" />
        <ProcessSteps steps={[{ title: 'Connect', body: 'Reach out or book an introductory conversation when you feel ready.' }, { title: 'Explore', body: 'Make space for what is happening, what matters and what you would like to change.' }, { title: 'Move forward', body: 'Find clarity and next steps that feel considered, realistic and yours.' }]} />
      </section>

      <FinalCta title={<>Not sure where <em className="text-primary">to start?</em></>} body="Send a message and share a little about what you are looking for. There is no pressure to have it all figured out." primary={{ href: '/contact', label: 'Contact Nicola' }} secondary={{ href: '/booking', label: 'Book a Session' }} />
    </>
  )
}
